"use client"
import type { Editor } from "@tiptap/react"
import {
  Bold,
  Italic,
  Strikethrough,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  ImageIcon,
  TableIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  Tag,
} from "lucide-react"
import ColorPicker from "./color-picker"
import HighlightPicker from "./highlight-picker"

interface EditorToolbarProps {
  editor: Editor
  onAddImage: () => void
  onAddTable: () => void
  onAddTag: () => void
}

export default function EditorToolbar({ editor, onAddImage, onAddTable, onAddTag }: EditorToolbarProps) {
  if (!editor) {
    return null
  }

  return (
    <div className="bg-gray-900 p-2 border-b border-gray-700 flex flex-wrap gap-1">
      <div className="flex gap-1 mr-2 border-r border-gray-700 pr-2">
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded hover:bg-gray-700 disabled:opacity-50"
        >
          <Undo className="h-5 w-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded hover:bg-gray-700 disabled:opacity-50"
        >
          <Redo className="h-5 w-5" />
        </button>
      </div>

      <div className="flex gap-1 mr-2 border-r border-gray-700 pr-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-700 ${editor.isActive("bold") ? "bg-gray-700" : ""}`}
        >
          <Bold className="h-5 w-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-700 ${editor.isActive("italic") ? "bg-gray-700" : ""}`}
        >
          <Italic className="h-5 w-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded hover:bg-gray-700 ${editor.isActive("strike") ? "bg-gray-700" : ""}`}
        >
          <Strikethrough className="h-5 w-5" />
        </button>
      </div>

      <div className="flex gap-1 mr-2 border-r border-gray-700 pr-2">
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded hover:bg-gray-700 ${editor.isActive("heading", { level: 1 }) ? "bg-gray-700" : ""}`}
        >
          <Heading1 className="h-5 w-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-gray-700 ${editor.isActive("heading", { level: 2 }) ? "bg-gray-700" : ""}`}
        >
          <Heading2 className="h-5 w-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded hover:bg-gray-700 ${editor.isActive("heading", { level: 3 }) ? "bg-gray-700" : ""}`}
        >
          <Heading3 className="h-5 w-5" />
        </button>
      </div>

      <div className="flex gap-1 mr-2 border-r border-gray-700 pr-2">
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-700 ${editor.isActive("bulletList") ? "bg-gray-700" : ""}`}
        >
          <List className="h-5 w-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-700 ${editor.isActive("orderedList") ? "bg-gray-700" : ""}`}
        >
          <ListOrdered className="h-5 w-5" />
        </button>
      </div>

      <div className="flex gap-1 mr-2 border-r border-gray-700 pr-2">
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`p-2 rounded hover:bg-gray-700 ${editor.isActive({ textAlign: "left" }) ? "bg-gray-700" : ""}`}
        >
          <AlignLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`p-2 rounded hover:bg-gray-700 ${editor.isActive({ textAlign: "center" }) ? "bg-gray-700" : ""}`}
        >
          <AlignCenter className="h-5 w-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`p-2 rounded hover:bg-gray-700 ${editor.isActive({ textAlign: "right" }) ? "bg-gray-700" : ""}`}
        >
          <AlignRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex gap-1">
        <button onClick={onAddImage} className="p-2 rounded hover:bg-gray-700">
          <ImageIcon className="h-5 w-5" />
        </button>
        <button onClick={onAddTable} className="p-2 rounded hover:bg-gray-700">
          <TableIcon className="h-5 w-5" />
        </button>
        <button onClick={onAddTag} className="p-2 rounded hover:bg-gray-700">
          <Tag className="h-5 w-5" />
        </button>
        <ColorPicker editor={editor} />
        <HighlightPicker editor={editor} />
      </div>
    </div>
  )
}
