"use client"
import type { Editor } from "@tiptap/react"
import { Plus } from "lucide-react"

interface SectionTemplateProps {
  editor: Editor
}

export default function SectionTemplate({ editor }: SectionTemplateProps) {
  const templates = [
    {
      title: "Stats Section",
      content: `
        <h2>Basic Stats</h2>
        <p>Describe the important stats for this resonator...</p>
        <table>
          <tr>
            <th>Stat</th>
            <th>Value</th>
            <th>Notes</th>
          </tr>
          <tr>
            <td>ATK</td>
            <td>0</td>
            <td>Base value</td>
          </tr>
          <tr>
            <td>DEF</td>
            <td>0</td>
            <td>Base value</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>0</td>
            <td>Base value</td>
          </tr>
        </table>
      `,
    },
    {
      title: "Abilities Section",
      content: `
        <h2>Abilities</h2>
        <p>Describe the abilities of this resonator...</p>
        <ul>
          <li><strong>Ability 1:</strong> Description of the first ability</li>
          <li><strong>Ability 2:</strong> Description of the second ability</li>
          <li><strong>Ability 3:</strong> Description of the third ability</li>
        </ul>
      `,
    },
    {
      title: "Team Composition",
      content: `
        <h2>Team Compositions</h2>
        <p>Suggest team compositions that work well with this resonator...</p>
        <h3>Offensive Team</h3>
        <p>Description of an offensive team setup...</p>
        <h3>Defensive Team</h3>
        <p>Description of a defensive team setup...</p>
      `,
    },
  ]

  const insertTemplate = (content: string) => {
    if (editor) {
      editor.chain().focus().insertContent(content).run()
    }
  }

  return (
    <div className="bg-gray-800 rounded-md p-3 shadow-lg">
      <div className="flex items-center mb-2">
        <Plus className="h-4 w-4 mr-2" />
        <h3 className="text-sm font-medium">Insert Template</h3>
      </div>
      <div className="space-y-2">
        {templates.map((template, index) => (
          <button
            key={index}
            onClick={() => insertTemplate(template.content)}
            className="w-full text-left p-2 rounded hover:bg-gray-700 text-sm"
          >
            {template.title}
          </button>
        ))}
      </div>
    </div>
  )
}
