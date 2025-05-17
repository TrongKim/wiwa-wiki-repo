"use client"
import { useState, useRef, useEffect } from "react"
import { Highlighter } from "lucide-react"
import type { Editor } from "@tiptap/react"

interface HighlightPickerProps {
  editor: Editor
}

export default function HighlightPicker({ editor }: HighlightPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const highlights = [
    { name: "None", value: "transparent" },
    { name: "Red", value: "rgba(239, 68, 68, 0.2)" },
    { name: "Orange", value: "rgba(249, 115, 22, 0.2)" },
    { name: "Yellow", value: "rgba(234, 179, 8, 0.2)" },
    { name: "Green", value: "rgba(34, 197, 94, 0.2)" },
    { name: "Blue", value: "rgba(59, 130, 246, 0.2)" },
    { name: "Purple", value: "rgba(168, 85, 247, 0.2)" },
  ]

  const setHighlight = (color: string) => {
    if (color === "transparent") {
      editor.chain().focus().unsetHighlight().run()
    } else {
      editor.chain().focus().setHighlight({ color }).run()
    }
    setIsOpen(false)
  }

  // Close the highlight picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded hover:bg-gray-700 ${isOpen ? "bg-gray-700" : ""}`}
        title="Highlight text"
      >
        <Highlighter className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-48 bg-gray-800 rounded-md shadow-lg border border-gray-700 p-2">
          <div className="grid grid-cols-4 gap-1">
            {highlights.map((highlight) => (
              <button
                key={highlight.value}
                onClick={() => setHighlight(highlight.value)}
                className="w-8 h-8 rounded border border-gray-600 flex items-center justify-center"
                style={{
                  backgroundColor: highlight.value,
                }}
                title={highlight.name}
              >
                {highlight.value === "transparent" && <span className="text-xs text-gray-400">ABC</span>}
              </button>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-gray-700 grid grid-cols-2 gap-1">
            {highlights.slice(1).map((highlight) => (
              <button
                key={`text-${highlight.value}`}
                onClick={() => setHighlight(highlight.value)}
                className="text-xs py-1 px-2 rounded hover:bg-gray-700 text-left flex items-center"
              >
                <span className="w-3 h-3 rounded mr-2" style={{ backgroundColor: highlight.value }}></span>
                {highlight.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
