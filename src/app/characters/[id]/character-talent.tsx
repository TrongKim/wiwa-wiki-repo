"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

export default function CharacterTalent() {
  const [showForeignBlazeTable, setShowForeignBlazeTable] = useState(false)

  return (
    <div className="min-h-screen bg-[#002147] text-white font-sans p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">Combat</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`bg-[#1a3759] rounded-lg overflow-hidden border border-[#4d647e] col-span-2`}>
            {/* Talent Header */}
            <div className="p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-[#334d6c] rounded-full flex items-center justify-center border-2 border-[#667a91]">
                <div className="w-12 h-12 bg-[#4d647e] rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">⚔️</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold">Foreign Blaze</h2>
            </div>

            {/* Talent Content */}
            {!showForeignBlazeTable ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 bg-[#334d6c]">
                {/* Left Column - Talent Info */}
                <div>
                  <div className="bg-[#4d647e] rounded-full py-2 px-6 text-center mb-4">
                    <span className="font-bold">Talent Info</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-yellow-300 font-bold mb-1">Normal Attack</h3>
                      <p>Performs up to 5 rapid strikes.</p>
                    </div>

                    <div>
                      <h3 className="text-yellow-300 font-bold mb-1">Charged Attack</h3>
                      <p>Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.</p>
                    </div>

                    <div>
                      <h3 className="text-yellow-300 font-bold mb-1">Plunging Attack</h3>
                      <p>
                        Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing
                        AoE DMG upon impact.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Skill Attributes */}
                <div>
                  <div className="bg-[#4d647e] rounded-full py-2 px-6 text-center mb-4">
                    <span className="font-bold">Skill Attributes (Lv. 1)</span>
                  </div>

                  <div className="mb-4">
                    <Slider
                      max={100}
                      step={1}
                      className={cn("w-[100%]", "bg-white")}
                    />
                  </div>

                  <div className="space-y-2">
                    <AttributeRow label="1-Hit DMG" value="44.5%" />
                    <AttributeRow label="2-Hit DMG" value="43.4%" />
                    <AttributeRow label="3-Hit DMG" value="53%" />
                    <AttributeRow label="4-Hit DMG" value="58.3%" />
                    <AttributeRow label="5-Hit DMG" value="70.8%" />
                    <AttributeRow label="Charged Attack DMG" value="55.9%+60.7%" />
                    <AttributeRow label="Charged Attack Stamina Cost" value="20" />
                    <AttributeRow label="Plunge DMG" value="63.9%" />
                    <AttributeRow label="Low/High Plunge DMG" value="128%/160%" />
                  </div>

                  <div className="mt-6 bg-[#1a3759] rounded-lg p-3 text-center">
                    <span>No items needed to upgrade!</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-[#334d6c]">
                {/* Table View */}
                <div className="bg-[#4d647e] rounded-full py-2 px-6 text-center mb-4">
                  <span className="font-bold">Talent Info</span>
                </div>

                <div className="mb-4">
                  <div>
                    <h3 className="text-yellow-300 font-bold mb-1">Normal Attack</h3>
                    <p>Performs up to 5 rapid strikes.</p>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-yellow-300 font-bold mb-1">Charged Attack</h3>
                    <p>Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.</p>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-yellow-300 font-bold mb-1">Plunging Attack</h3>
                    <p>
                      Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE
                      DMG upon impact.
                    </p>
                  </div>
                </div>

                <div className="bg-[#4d647e] rounded-full py-2 px-6 text-center mb-4">
                  <span className="font-bold">Skill Attributes</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#1a3759]">
                        <th className="border border-[#667a91] p-2 text-left">LVL</th>
                        <th className="border border-[#667a91] p-2 text-center">1</th>
                        <th className="border border-[#667a91] p-2 text-center">2</th>
                        <th className="border border-[#667a91] p-2 text-center">3</th>
                        <th className="border border-[#667a91] p-2 text-center">4</th>
                        <th className="border border-[#667a91] p-2 text-center">5</th>
                        <th className="border border-[#667a91] p-2 text-center">6</th>
                        <th className="border border-[#667a91] p-2 text-center">7</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#334d6c]">
                        <td className="border border-[#667a91] p-2">1-Hit DMG</td>
                        <td className="border border-[#667a91] p-2 text-center">44.5%</td>
                        <td className="border border-[#667a91] p-2 text-center">48.1%</td>
                        <td className="border border-[#667a91] p-2 text-center">51.7%</td>
                        <td className="border border-[#667a91] p-2 text-center">56.9%</td>
                        <td className="border border-[#667a91] p-2 text-center">60.5%</td>
                        <td className="border border-[#667a91] p-2 text-center">64.8%</td>
                        <td className="border border-[#667a91] p-2 text-center">70.3%</td>
                      </tr>
                      <tr className="bg-[#1a3759]">
                        <td className="border border-[#667a91] p-2">2-Hit DMG</td>
                        <td className="border border-[#667a91] p-2 text-center">43.4%</td>
                        <td className="border border-[#667a91] p-2 text-center">47%</td>
                        <td className="border border-[#667a91] p-2 text-center">50.5%</td>
                        <td className="border border-[#667a91] p-2 text-center">55.6%</td>
                        <td className="border border-[#667a91] p-2 text-center">59.1%</td>
                        <td className="border border-[#667a91] p-2 text-center">63.1%</td>
                        <td className="border border-[#667a91] p-2 text-center">68.7%</td>
                      </tr>
                      <tr className="bg-[#334d6c]">
                        <td className="border border-[#667a91] p-2">3-Hit DMG</td>
                        <td className="border border-[#667a91] p-2 text-center">53%</td>
                        <td className="border border-[#667a91] p-2 text-center">57.3%</td>
                        <td className="border border-[#667a91] p-2 text-center">61.6%</td>
                        <td className="border border-[#667a91] p-2 text-center">67.8%</td>
                        <td className="border border-[#667a91] p-2 text-center">72.1%</td>
                        <td className="border border-[#667a91] p-2 text-center">77%</td>
                        <td className="border border-[#667a91] p-2 text-center">83.8%</td>
                      </tr>
                      <tr className="bg-[#1a3759]">
                        <td className="border border-[#667a91] p-2">4-Hit DMG</td>
                        <td className="border border-[#667a91] p-2 text-center">58.3%</td>
                        <td className="border border-[#667a91] p-2 text-center">63.1%</td>
                        <td className="border border-[#667a91] p-2 text-center">67.8%</td>
                        <td className="border border-[#667a91] p-2 text-center">74.6%</td>
                        <td className="border border-[#667a91] p-2 text-center">79.3%</td>
                        <td className="border border-[#667a91] p-2 text-center">84.8%</td>
                        <td className="border border-[#667a91] p-2 text-center">92.2%</td>
                      </tr>
                      <tr className="bg-[#334d6c]">
                        <td className="border border-[#667a91] p-2">5-Hit DMG</td>
                        <td className="border border-[#667a91] p-2 text-center">70.8%</td>
                        <td className="border border-[#667a91] p-2 text-center">76.5%</td>
                        <td className="border border-[#667a91] p-2 text-center">82.3%</td>
                        <td className="border border-[#667a91] p-2 text-center">90.5%</td>
                        <td className="border border-[#667a91] p-2 text-center">96.3%</td>
                        <td className="border border-[#667a91] p-2 text-center">103%</td>
                        <td className="border border-[#667a91] p-2 text-center">112%</td>
                      </tr>
                      <tr className="bg-[#1a3759]">
                        <td className="border border-[#667a91] p-2">Charged Attack DMG</td>
                        <td className="border border-[#667a91] p-2 text-center">55.9%+60.7%</td>
                        <td className="border border-[#667a91] p-2 text-center">60.5%+65.7%</td>
                        <td className="border border-[#667a91] p-2 text-center">65%+70.6%</td>
                        <td className="border border-[#667a91] p-2 text-center">71.5%+77.7%</td>
                        <td className="border border-[#667a91] p-2 text-center">76.1%+82.6%</td>
                        <td className="border border-[#667a91] p-2 text-center">81.3%+88.3%</td>
                        <td className="border border-[#667a91] p-2 text-center">88.4%+96%</td>
                      </tr>
                      <tr className="bg-[#334d6c]">
                        <td className="border border-[#667a91] p-2">Charged Attack Stamina Cost</td>
                        <td className="border border-[#667a91] p-2 text-center">20</td>
                        <td className="border border-[#667a91] p-2 text-center">20</td>
                        <td className="border border-[#667a91] p-2 text-center">20</td>
                        <td className="border border-[#667a91] p-2 text-center">20</td>
                        <td className="border border-[#667a91] p-2 text-center">20</td>
                        <td className="border border-[#667a91] p-2 text-center">20</td>
                        <td className="border border-[#667a91] p-2 text-center">20</td>
                      </tr>
                      <tr className="bg-[#1a3759]">
                        <td className="border border-[#667a91] p-2">Plunge DMG</td>
                        <td className="border border-[#667a91] p-2 text-center">63.9%</td>
                        <td className="border border-[#667a91] p-2 text-center">69.1%</td>
                        <td className="border border-[#667a91] p-2 text-center">74.3%</td>
                        <td className="border border-[#667a91] p-2 text-center">81.8%</td>
                        <td className="border border-[#667a91] p-2 text-center">87%</td>
                        <td className="border border-[#667a91] p-2 text-center">92.9%</td>
                        <td className="border border-[#667a91] p-2 text-center">101%</td>
                      </tr>
                      <tr className="bg-[#334d6c]">
                        <td className="border border-[#667a91] p-2">Low/High Plunge DMG</td>
                        <td className="border border-[#667a91] p-2 text-center">128%/160%</td>
                        <td className="border border-[#667a91] p-2 text-center">138%/173%</td>
                        <td className="border border-[#667a91] p-2 text-center">149%/186%</td>
                        <td className="border border-[#667a91] p-2 text-center">164%/204%</td>
                        <td className="border border-[#667a91] p-2 text-center">174%/217%</td>
                        <td className="border border-[#667a91] p-2 text-center">186%/232%</td>
                        <td className="border border-[#667a91] p-2 text-center">202%/253%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Materials Section */}
                <div className="mt-8 grid grid-cols-9 gap-2">
                  <MaterialItem icon="👑" count="1" />
                  <MaterialItem icon="📦" count="3" />
                  <MaterialItem icon="📘" count="6" />
                  <MaterialItem icon="📙" count="6" />
                  <MaterialItem icon="📗" count="11" />
                  <MaterialItem icon="📒" count="12" />
                  <MaterialItem icon="📓" count="4" />
                  <MaterialItem icon="📔" count="20" />
                  <MaterialItem icon="🗡️" count="6" />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 max-w-xs">
                  <MaterialItem icon="🔧" count="22" />
                  <MaterialItem icon="🔩" count="31" />
                  <MaterialItem icon="🔨" count="8" />
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span>Required:</span>
                  <span className="text-yellow-400">●</span>
                  <span className="text-yellow-400 font-bold">1652500</span>
                </div>
              </div>
            )}

            {/* Toggle Buttons */}
            <div className="p-4 bg-[#1a3759] flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={showForeignBlazeTable}
                  onChange={() => setShowForeignBlazeTable(!showForeignBlazeTable)}
                />
                <span>Table</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AttributeRow({ label, value }: { readonly label: string; readonly value: string }) {
  return (
    <div className="flex justify-between items-center py-1 px-2 bg-[#1a3759] rounded">
      <span className="text-yellow-200">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}

function MaterialItem({ icon, count }: { readonly icon: string; readonly count: string }) {
  return (
    <div className="bg-[#4d647e] rounded p-1 flex flex-col items-center">
      <div className="text-2xl">{icon}</div>
      <div className="text-sm font-bold">{count}</div>
    </div>
  )
}
