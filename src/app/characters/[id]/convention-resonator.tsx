import { ChevronDown } from "lucide-react"

export default function ConventionResonator() {
  return (
    <div className="min-h-screen bg-[#002147] text-white font-sans p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">Constellation</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Constellation 1 */}
          <div className="bg-[#1a3759] rounded-lg overflow-hidden border border-[#4d647e]">
            <div className="p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-[#334d6c] rounded-full flex items-center justify-center border-2 border-[#667a91]">
                <div className="w-12 h-12 bg-[#4d647e] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">✧</span>
                </div>
              </div>
              <h2 className="text-xl font-bold">1. Starfire's Flowing Light</h2>
            </div>

            <div className="p-4 bg-[#334d6c]">
              <p>
                While <span className="text-yellow-300">Blazing Threshold</span> or{" "}
                <span className="text-yellow-300">Scorching Threshold</span> are active, the current active character
                deals 6% increased DMG. If said character is in the Nightsoul's Blessing state, they will deal an
                additional 9% DMG.
              </p>
            </div>
          </div>

          {/* Constellation 2 */}
          <div className="bg-[#1a3759] rounded-lg overflow-hidden border border-[#4d647e]">
            <div className="p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-[#334d6c] rounded-full flex items-center justify-center border-2 border-[#667a91]">
                <div className="w-12 h-12 bg-[#4d647e] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">🕯️</span>
                </div>
              </div>
              <h2 className="text-xl font-bold">2. Ever-Lit Candle</h2>
            </div>

            <div className="p-4 bg-[#334d6c]">
              <p>
                Within 12s of using the Elemental Skill <span className="text-yellow-300">Flowfire Blade</span>, after
                nearby party members trigger a <span className="text-orange-400">Pyro-related reaction</span> on an
                opponent, the Traveler will regain 14 Nightsoul points. Each use of{" "}
                <span className="text-yellow-300">Flowfire Blade</span> will restore at most 28 Nightsoul points in this
                way.
              </p>
            </div>
          </div>

          {/* Constellation 3 */}
          <div className="bg-[#1a3759] rounded-lg overflow-hidden border border-[#4d647e]">
            <div className="p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-[#334d6c] rounded-full flex items-center justify-center border-2 border-[#667a91]">
                <div className="w-12 h-12 bg-[#4d647e] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">✦</span>
                </div>
              </div>
              <h2 className="text-xl font-bold">3. Relayed Beacon</h2>
            </div>

            <div className="p-4 bg-[#334d6c]">
              <p>
                Increases the Level of <span className="text-yellow-300">Flowfire Blade</span> by 3.
              </p>
              <p className="mt-2">Maximum upgrade level is 15.</p>
            </div>
          </div>

          {/* Constellation 4 */}
          <div className="bg-[#1a3759] rounded-lg overflow-hidden border border-[#4d647e]">
            <div className="p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-[#334d6c] rounded-full flex items-center justify-center border-2 border-[#667a91]">
                <div className="w-12 h-12 bg-[#4d647e] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">🔥</span>
                </div>
              </div>
              <h2 className="text-xl font-bold">4. Ravaging Flame</h2>
            </div>

            <div className="p-4 bg-[#334d6c]">
              <p>
                After using the Elemental Burst <span className="text-yellow-300">Plains Scorcher</span>, the Traveler
                gains 20% <span className="text-orange-400">Pyro DMG Bonus</span> for 9s.
              </p>
            </div>
          </div>

          {/* Constellation 5 */}
          <div className="bg-[#1a3759] rounded-lg overflow-hidden border border-[#4d647e]">
            <div className="p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-[#334d6c] rounded-full flex items-center justify-center border-2 border-[#667a91]">
                <div className="w-12 h-12 bg-[#4d647e] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">🔆</span>
                </div>
              </div>
              <h2 className="text-xl font-bold">5. The Fire Inextinguishable</h2>
            </div>

            <div className="p-4 bg-[#334d6c]">
              <p>
                Increases the Level of <span className="text-yellow-300">Plains Scorcher</span> by 3.
              </p>
              <p className="mt-2">Maximum upgrade level is 15.</p>
            </div>
          </div>

          {/* Constellation 6 */}
          <div className="bg-[#1a3759] rounded-lg overflow-hidden border border-[#4d647e]">
            <div className="p-4 flex items-center gap-4">
              <div className="w-16 h-16 bg-[#334d6c] rounded-full flex items-center justify-center border-2 border-[#667a91]">
                <div className="w-12 h-12 bg-[#4d647e] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">⚔️</span>
                </div>
              </div>
              <h2 className="text-xl font-bold">6. The Sacred Flame Imperishable</h2>
            </div>

            <div className="p-4 bg-[#334d6c]">
              <p>
                While in the Nightsoul's Blessing state, the Traveler's Normal, Charged, and Plunging Attacks will be
                converted to Nightsoul-aligned <span className="text-orange-400">Pyro DMG</span> that cannot be
                overridden, and the CRIT DMG of these attacks is increased by 40%.
              </p>

              <div className="mt-4 flex items-center">
                <ChevronDown className="mr-2" />
                <span className="font-bold">Advanced Properties</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
