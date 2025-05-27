"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Menu, X } from "lucide-react"
type GuideProps = {
  guide: typeof import("@/data/guides").guides
}

const navigationItems = [
  { id: "overview", label: "Character Overview" },
  { id: "echo-sets", label: "Echo Sets" },
  { id: "main-stats", label: "Main Stats" },
  { id: "sub-stats", label: "Sub-Stat Priority" },
  { id: "target-stats", label: "Target Stats" },
  { id: "weapons", label: "Recommended Weapons" },
  { id: "team-comps", label: "Team Compositions" },
  { id: "skills", label: "Skill Priority" },
  { id: "rotation", label: "Combat Rotation" },
  { id: "advanced", label: "Advanced Techniques" },
  { id: "summary", label: "Summary" },
]

export default function RocciaSinglePageGuide({ guide }: GuideProps) {
  const [activeSection, setActiveSection] = useState("overview")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isShowMenuScrollTo, setIsShowMenuScrollTo] = useState(true)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i]?.id ?? 'overview')
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;

      if (documentHeight - scrollPosition <= 400) {
        setIsShowMenuScrollTo(false)
      } else setIsShowMenuScrollTo(true)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  const isValidIframeUrl = (url: string): boolean => {
    try {
      const parsed = new URL(url);
      // Chỉ cho phép một số domain nhất định
      return ['youtube.com'].includes(parsed.hostname);
    } catch {
      return false;
    }
  }

  const getYoutubeEmbedUrl = (url: string): string | null => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  }

  return (
    <div className="flex min-h-screen bg-[#0d0d0d] text-white ">
      {/* Main Content */}
      <main className="flex-1 mr-[225px] max-[1024px]:mr-0">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* Mobile Menu Button */}
          {
            !isMobileMenuOpen && <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="fixed top-14 right-4 z-50 lg:hidden bg-[#1f293780] p-2 rounded-lg border border-[#374151]"
            >
              <Menu className="w-6 h-6" />
            </button>
          }

          {/* Header Section */}
          <section id="overview" className="mb-0 pt-16">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-[#38bdf8] mb-4">{guide.name}</h1>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  <Badge className="bg-[#60a5fa] text-white">Havoc</Badge>
                  <Badge className="bg-[#374151] text-white">Sub-DPS</Badge>
                  <Badge className="bg-[#374151] text-white">Buffer</Badge>
                </div>
                <p className="text-[#94a3b8] leading-relaxed">{guide.introduction}</p>
              </div>
            </div>

            <div className="w-full h-auto mb-8">
              <Image
                width={300}
                height={300}
                alt="guide"
                src={guide.intro_image}
                className="w-full h-auto object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Character Overview</h2>
              <div>
                <p className="text-[#94a3b8] leading-relaxed">{guide.overview}</p>
              </div>
            </div>
          </section>

          <section id="echo-sets" className="mb-0 pt-16">
            <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Echo Sets</h2>
            <div className="grid gap-6">
              {guide.basicGuide.echoSets.map((set, index) => (
                <Card key={index} className="bg-[#1f293780] border-[#374151]">
                  <CardHeader>
                    <CardTitle className="text-[#60a5fa] text-xl">{set.name}</CardTitle>
                    <p className="text-[#94a3b8]">Condition: {set.condition}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-[#38bdf8] text-white whitespace-nowrap">2-Piece</Badge>
                        <span className="text-white">{set.effects.pc2}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Badge className="bg-[#60a5fa] text-white whitespace-nowrap">5-Piece</Badge>
                        <span className="text-white">{set.effects.pc5}</span>
                      </div>
                      <div>
                        <div className="mt-2">
                          <p><span className="text-[#60a5fa]">{set.recommend.name_main_cost}:</span></p>
                          <p className="text-[#94a3b8] mt-2">
                            {
                              set.recommend.description
                            }
                          </p>
                        </div>

                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Main Stats Section */}
          <section id="main-stats" className="mb-0 pt-16">
            <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Main Stats</h2>
            <div className="grid gap-0 space-y-3 bg-[#1f293780] border border-[#374151] rounded-[20px] p-[24px]">
              {guide.basicGuide.mainStats.map((stat, index) => (
                <Card key={index} className="bg-transparent border-0">
                  <CardHeader className="p-0 py-1">
                    <CardTitle className="text-[#60a5fa] flex items-center gap-2">
                      <h3 className="text-[#60a5fa] text-xl font-extrabold">Cost {stat.cost}</h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    {stat.echo ? (
                      <div className="space-y-2">
                        {stat.echo.map((echo, echoIndex) => (
                          <p key={echoIndex} className="text-white rounded-lg">
                            {echo}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-white rounded-lg">{stat.stat}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Sub Stats Priority Section */}
          <section id="sub-stats" className="mb-0 pt-16">
            <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Sub-Stat Priority</h2>
            <Card className="bg-[#1f293780] border-[#374151]">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-2 max-[590px]:flex-wrap">
                  {guide.basicGuide.subStatsPriority.map((stat, index) => (
                    <div key={index} className="flex items-center gap-2 rounded-lg">
                      <span className="text-white font-medium">{stat}</span>
                      {
                        index < guide.basicGuide.subStatsPriority.length - 1 && <span>{'>'}</span>
                      }
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Target Stats Section */}
          <section id="target-stats" className="mb-0 pt-16">
            <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Target Stats</h2>
            <Card className="bg-[#1f293780] border-[#374151]">
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4 flex justify-center flex-col w-full">
                    <div className="flex justify-between items-center p-4 bg-[#374151] rounded-lg w-full">
                      <span className="text-[#94a3b8]">Crit Rate</span>
                      <span className="text-[#38bdf8] font-bold">{guide.basicGuide.targetStats.critRate}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-[#374151] rounded-lg w-full">
                      <span className="text-[#94a3b8]">Energy Recharge</span>
                      <span className="text-[#38bdf8] font-bold">{guide.basicGuide.targetStats.er}</span>
                    </div>
                  </div>
                  <div className="bg-[#60a5fa]/10 border border-[#60a5fa]/30 rounded-lg p-4">
                    <h3 className="text-[#60a5fa] font-semibold mb-2">Note</h3>
                    <p className="text-[#94a3b8] text-sm">{guide.basicGuide.targetStats.note}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Weapons Section */}
          <section id="weapons" className="mb-0 pt-16">
            <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Recommended Weapons</h2>

            <div className="bg-[#1f293780] border border-[#374151] rounded-lg overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-[#374151] bg-[#0d0d0d]">
                <div className="col-span-4 max-[850px]:col-span-5 max-[710px]:col-span-9 text-[#94a3b8] font-semibold">Weapon</div>
                <div className="col-span-2 max-[850px]:col-span-3 text-[#94a3b8] font-semibold text-center">Effective</div>
                <div className="col-span-6 max-[850px]:col-span-4 max-[710px]:hidden text-[#94a3b8] font-semibold">Notes</div>
              </div>

              <div className="divide-y divide-[#374151]">
                {guide.basicGuide.recommendedWeapons.map((weapon, index) => {
                  return (
                    <div
                      key={index}
                      className={`grid grid-cols-12 gap-4 p-4 hover:bg-[#374151]/30 transition-colors duration-200 ${weapon.useless ? "opacity-60" : ""}`}
                    >
                      <div className="col-span-4 max-[850px]:col-span-5 max-[710px]:col-span-9 flex items-center gap-3">
                        <div
                          className={`w-16 h-16 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0 shadow-lg`}
                        >
                          <div className="w-16 h-16 bg-white/20 rounded-md flex items-center justify-center">
                            <Image src={weapon.icon} width={46} height={46} alt={weapon.name} className="w-16 h-16 object-contain" />
                          </div>
                        </div>
                        <div>
                          <div
                            className={`font-semibold ${weapon.useless ? "text-[#94a3b8] line-through" : "text-white"}`}
                          >
                            {weapon.name}
                          </div>
                          <div className="text-xs text-[#94a3b8]">
                            Rarity:{" "}
                            <span
                              className={`font-medium ${weapon.rank === 5
                                ? "text-[#38bdf8]"
                                : weapon.rank === 4
                                  ? "text-[#60a5fa]"
                                  : weapon.rank === 3
                                    ? "text-[#94a3b8]"
                                    : "text-[#6b7280]"
                                }`}
                            >
                              {weapon.rank}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-2 max-[850px]:col-span-3 flex items-center justify-center">
                        <div className="text-center">
                          <div
                            className={`text-lg font-bold ${weapon.useless ? "text-[#94a3b8]" : "text-[#38bdf8]"}`}
                          >
                            {weapon.percent}
                          </div>
                          <div className="text-xs text-[#94a3b8]">Effectiveness</div>
                        </div>
                      </div>
                      <div className="col-span-6 max-[850px]:col-span-4 max-[710px]:hidden flex items-center">
                        <p className="text-[#94a3b8] text-sm leading-relaxed">{weapon.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="p-4 bg-[#60a5fa]/10 border-t border-[#60a5fa]/30">
                <p className="text-[#94a3b8] text-sm">
                  <span className="text-[#60a5fa] font-semibold">Note:</span> Hiệu xuất vũ khí tính toán dựa trên rotation của từng đội hình và đây là đánh giá chung.
                </p>
              </div>
            </div>
          </section>

          {/* Team Compositions Section */}
          <section id="team-comps" className="mb-0 pt-16">
            <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Team Compositions</h2>
            <Card className="bg-[#1f293780] border-[#374151] mb-6">
              <CardContent className="pt-6">
                <pre className="text-[#94a3b8] leading-relaxed whitespace-pre-wrap font-sans not-italic">{guide.teamComp.notes}</pre>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-2 gap-4">
              {guide.teamComp.teams.map((team, index) => (
                <Card key={index} className="bg-[#1f293780] border-[#374151]">
                  <CardHeader>
                    <CardTitle className="text-[#60a5fa] text-lg">Team {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 justify-between w-fit mx-auto">
                      {team.map((character, charIndex) => (
                        <Image
                          width={64}
                          height={64}
                          src={character}
                          alt="character"
                          key={charIndex}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-0 pt-16">
            <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Skill Priority</h2>
            <Card className="bg-[#1f293780] border-[#374151]">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-2 max-[590px]:flex-wrap">
                  {guide.skillPriority.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 rounded-lg">
                      <span className="text-white font-medium">{skill.skill}</span>
                      {
                        index < guide.skillPriority.length - 1 && <span>{'>'}</span>
                      }
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Rotation Section */}
          <section id="rotation" className="mb-0 pt-16">
            <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Combat Rotation</h2>
            <div className="space-y-6">
              <Card className="bg-[#1f293780] border-[#374151]">
                <CardHeader>
                  <CardTitle className="text-[#60a5fa]">Basic Rotation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {guide.rotation.simple.map((step, index) => (
                      <div key={index} className="p-4 bg-[#374151] rounded-lg">
                        <div className="flex items-start gap-3 mb-4">
                          <Badge className="bg-[#60a5fa] text-white min-w-[2rem] text-center">{index + 1}</Badge>
                          <span className="text-white">{step.description}</span>
                        </div>
                        <div className="flex justify-center">
                          {
                            step.link && getYoutubeEmbedUrl(step.link) && <iframe
                              src={getYoutubeEmbedUrl(step.link) ?? ''}
                              width="70%"
                              height="300"
                              style={{ border: 'none' }}
                              allowFullScreen
                              className="rounded-[20px] max-[800px]:w-full max-[590px]:h-[200px]"
                            ></iframe>
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#60a5fa]/10 border-[#60a5fa]/30">
                <CardHeader>
                  <CardTitle className="text-[#60a5fa]">Important Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="text-[#94a3b8] whitespace-pre-wrap font-sans not-italic">{guide.rotation.notes}</pre>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Advanced Techniques Section */}
          <p className="text-[#38bdf8] rounded-xl box-border p-4 max-[430px]:p-2 bg-[#1f293780] border-[#374151] w-fit mx-auto mt-16 font-bold px-20">ADVANCED</p>
          <section id="advanced" className="mb-0 pt-16">
            <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Advanced Techniques</h2>
            <div className="">
              {guide.advancedTechniques.map((technique, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-[#60a5fa] text-lg">{technique.name}</h3>
                  <div>
                    <p className="text-[#94a3b8]">{technique.description}</p>
                  </div>
                  <div className="flex flex-col gap-4 items-center mt-4">
                    {
                      technique.link.map((mini_link, index) => {
                        return (
                          getYoutubeEmbedUrl(mini_link) && <iframe
                            src={getYoutubeEmbedUrl(mini_link) ?? ''}
                            width="70%"
                            key={index + 'link'}
                            height="300"
                            style={{ border: 'none' }}
                            allowFullScreen
                            className="rounded-[20px] max-[800px]:w-full max-[590px]:h-[200px]"
                          ></iframe>
                        )
                      })
                    }
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Summary Section */}
          <section id="summary" className="mb-0 pt-16">
            <h2 className="text-3xl font-bold text-[#38bdf8] mb-6">Summary</h2>

            <Card className="bg-[#60a5fa]/10 border-[#60a5fa]/30 mb-6">
              <CardContent className="pt-6">
                <p className="text-[#94a3b8] leading-relaxed">{guide.summary.notes}</p>
                <div className="flex justify-center">
                  {
                    guide.summary.link && getYoutubeEmbedUrl(guide.summary.link) && <iframe
                      src={getYoutubeEmbedUrl(guide.summary.link) ?? ''}
                      width="70%"
                      height="300"
                      style={{ border: 'none' }}
                      allowFullScreen
                      className="rounded-[20px] max-[800px]:w-full max-[590px]:h-[200px]"
                    ></iframe>
                  }
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="bg-[#1f293780] border-[#374151]">
                <CardHeader>
                  <CardTitle className="text-[#38bdf8]">Pros</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guide.summary.pros.map((pro, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#38bdf8] text-xl">+</span>
                        <span className="text-white">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#1f293780] border-[#374151]">
                <CardHeader>
                  <CardTitle className="text-[#94a3b8]">Cons</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guide.summary.cons.map((con, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-[#94a3b8] text-xl">-</span>
                        <span className="text-white">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-[#38bdf8]/10 border-[#38bdf8]/30">
              <CardHeader>
                <CardTitle className="text-[#38bdf8]">Conclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white text-lg leading-relaxed">{guide.summary.conclusion}</p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Navigation Sidebar - Right Side */}
      {
        isShowMenuScrollTo && <nav
          className={`
        fixed right-[7%] top-[115px] max-[1025px]:bg-[#0d0d0d] max-[1025px]:h-full max-[1024px]:right-0 max-[1024px]:top-[0] max-[1024px]:pt-10 w-[225px] border-l border-[#374151] z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "max-[1025px]:translate-x-0" : "max-[1025px]:translate-x-[400px]"}
      `}
        >
          <div className="p-1 space-y-1 overflow-y-auto h-fit">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                  w-full text-left px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive ? "text-[#38bdf8]" : "text-[#94a3b8] hover:text-white"}
                `}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </nav>
      }

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </div>
  )
}
