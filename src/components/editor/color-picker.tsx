"use client"
import { useState, useRef, useEffect } from "react"
import { Palette } from "lucide-react"
import type { Editor } from "@tiptap/react"

interface ColorPickerProps {
  editor: Editor
}

export default function ColorPicker({ editor }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const colors = [
    { name: "Default", value: "inherit" },
    { name: "White", value: "#ffffff" },
    { name: "Gray", value: "#9ca3af" },
    { name: "Red", value: "#ef4444" },
    { name: "Orange", value: "#f97316" },
    { name: "Yellow", value: "#eab308" },
    { name: "Green", value: "#22c55e" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Purple", value: "#a855f7" },
    { name: "Pink", value: "#ec4899" },
  ]

  const setColor = (color: string) => {
    if (color === "inherit") {
      editor.chain().focus().unsetColor().run()
    } else {
      editor.chain().focus().setColor(color).run()
    }
    setIsOpen(false)
  }

  // Close the color picker when clicking outside
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
        title="Text color"
      >
        <Palette className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-48 bg-gray-800 rounded-md shadow-lg border border-gray-700 p-2">
          <div className="grid grid-cols-5 gap-1">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setColor(color.value)}
                className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center"
                style={{
                  backgroundColor: color.value === "inherit" ? "transparent" : color.value,
                }}
                title={color.name}
              >
                {color.value === "inherit" && <span className="text-xs text-gray-400">ABC</span>}
              </button>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t border-gray-700 grid grid-cols-2 gap-1">
            {colors.slice(1).map((color) => (
              <button
                key={`text-${color.value}`}
                onClick={() => setColor(color.value)}
                className="text-xs py-1 px-2 rounded hover:bg-gray-700 text-left flex items-center"
              >
                <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: color.value }}></span>
                {color.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
