"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Heading from "@tiptap/extension-heading"
import Image from "@tiptap/extension-image"
import Table from "@tiptap/extension-table"
import TableRow from "@tiptap/extension-table-row"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import TextAlign from "@tiptap/extension-text-align"
import Color from "@tiptap/extension-color"
import TextStyle from "@tiptap/extension-text-style"
import Placeholder from "@tiptap/extension-placeholder"
import { Bold, Italic, List, Heading2, ImageIcon, Save, ArrowLeft } from "lucide-react"
import EditorToolbar from "@/components/editor/editor-toolbar"
// import "./editor.css"
import Highlight from "@tiptap/extension-highlight"

export default function EditorPage() {
    const [title, setTitle] = useState("My Resonator Guide")
    const [saved, setSaved] = useState(false)
    const [showTagSelector, setShowTagSelector] = useState(false)

    const editor = useEditor({
        extensions: [
            StarterKit,
            Heading.configure({
                levels: [1, 2, 3],
            }),
            Image,
            TableRow,
            TableCell,
            TableHeader,
            Table.configure({
                resizable: true
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            TextStyle,
            Color,
            Highlight.configure({
                multicolor: true,
            }),
            Placeholder.configure({
                placeholder: "Start writing your guide here...",
            }),
        ],
        content: `
      <h2>Resonator Overview</h2>
      <p>Start by providing a general overview of your resonator guide here...</p>
      
      <h2>Basic Stats</h2>
      <p>Describe the important stats for this resonator...</p>
      
      <h2>Recommended Builds</h2>
      <p>Share your recommended builds and configurations...</p>
      
      <h2>Team Compositions</h2>
      <p>Suggest team compositions that work well with this resonator...</p>
    `,
    })

    const handleSave = () => {
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
        // Here you would typically save the content to your backend
        console.log(editor?.getHTML())
    }

    const addImage = useCallback(() => {
        const url = window.prompt("Enter the URL of the image:")
        if (url && editor) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

    const addTable = useCallback(() => {
        if (editor) {
            editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
        }
    }, [editor])

    const addTag = useCallback(
        (tagName: string, tagColor: string) => {
            if (editor) {
                editor.chain().focus().insertContent(`<span class="tag tag-${tagColor}">${tagName}</span>`).run()
                setShowTagSelector(false)
            }
        },
        [editor],
    )

    if (!editor) {
        return <div className="p-8 text-center">Loading editor...</div>
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <div className="flex items-center justify-between mb-6">
                <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                    <ArrowLeft className="h-4 w-4 mr-1" /> Back to Guide
                </Link>
                <button
                    onClick={handleSave}
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                    <Save className="h-4 w-4 mr-2" /> {saved ? "Saved!" : "Save Guide"}
                </button>
            </div>

            <div className="mb-6">
                <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-1">
                    Guide Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden mb-8">
                <EditorToolbar
                    editor={editor}
                    onAddImage={addImage}
                    onAddTable={addTable}
                    onAddTag={() => setShowTagSelector(true)}
                />

                <EditorContent editor={editor} className="p-4 min-h-[500px] prose prose-invert max-w-none" />
            </div>

            {editor && (
                <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                    <div className="bg-gray-800 rounded-md shadow-lg border border-gray-700 flex">
                        <button
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            className={`p-2 hover:bg-gray-700 ${editor.isActive("bold") ? "bg-gray-700" : ""}`}
                        >
                            <Bold className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            className={`p-2 hover:bg-gray-700 ${editor.isActive("italic") ? "bg-gray-700" : ""}`}
                        >
                            <Italic className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                            className={`p-2 hover:bg-gray-700 ${editor.isActive("heading", { level: 2 }) ? "bg-gray-700" : ""}`}
                        >
                            <Heading2 className="h-4 w-4" />
                        </button>
                        <div className="p-2 flex gap-1">
                            <button
                                onClick={() => editor.chain().focus().setColor("#3b82f6").run()}
                                className="w-4 h-4 bg-blue-500 rounded-full hover:scale-110 transition-transform"
                                title="Blue"
                            />
                            <button
                                onClick={() => editor.chain().focus().setColor("#ef4444").run()}
                                className="w-4 h-4 bg-red-500 rounded-full hover:scale-110 transition-transform"
                                title="Red"
                            />
                            <button
                                onClick={() => editor.chain().focus().setColor("#22c55e").run()}
                                className="w-4 h-4 bg-green-500 rounded-full hover:scale-110 transition-transform"
                                title="Green"
                            />
                            <button
                                onClick={() => editor.chain().focus().unsetColor().run()}
                                className="text-xs text-gray-400 hover:text-gray-300 ml-1"
                                title="Clear color"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </BubbleMenu>
            )}

            {editor && (
                <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
                    <div className="bg-gray-800 rounded-md shadow-lg border border-gray-700 p-1">
                        <button
                            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                            className="p-1 hover:bg-gray-700 rounded flex items-center text-sm"
                        >
                            <Heading2 className="h-4 w-4 mr-1" /> Heading
                        </button>
                        <button
                            onClick={() => editor.chain().focus().toggleBulletList().run()}
                            className="p-1 hover:bg-gray-700 rounded flex items-center text-sm"
                        >
                            <List className="h-4 w-4 mr-1" /> List
                        </button>
                        <button onClick={addImage} className="p-1 hover:bg-gray-700 rounded flex items-center text-sm">
                            <ImageIcon className="h-4 w-4 mr-1" /> Image
                        </button>
                    </div>
                </FloatingMenu>
            )}

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-white mb-4">Guide Preview</h2>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                    <h1 className="text-2xl font-bold mb-4">{title}</h1>
                    <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: editor.getHTML() }} />
                </div>
            </div>

            <div className="flex justify-end">
                <button
                    onClick={handleSave}
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                    <Save className="h-4 w-4 mr-2" /> {saved ? "Saved!" : "Save Guide"}
                </button>
            </div>
        </div>
    )
}
