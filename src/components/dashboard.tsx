import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockGuides, mockUpdates } from "@/lib/mock-data"
import { FilterGuideContainer } from "./filter-guide-container"

export function Dashboard() {
  return (
    <div className="space-y-8 pb-10">
      <div className="relative h-64 md:h-80 rounded-[20px] overflow-hidden mb-6">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Resonator Hero Banner" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 to-transparent flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Optimized Guide</h1>
          <p className="text-slate-300 max-w-md mb-4">Master the game with our comprehensive guides and strategies</p>
          <Button className="w-32">Get Started</Button>
        </div>
      </div>

      <div className="flex items-stretch gap-6 max-[768px]:flex-col mb-6">

        <div className="flex-4">
          <Card className="bg-[#1a3759] border-[#4d647e]">
            <CardContent className="p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-[25px]">What's New</h2>
              <div className="space-y-4 flex-[1] overflow-auto max-h-[368px] pr-2 max-[550px]:flex max-[550px]:flex-wrap">
                {mockGuides.map((guide) => (
                  <div key={guide.id} className="flex gap-4 p-2 rounded-lg hover:bg-[#334d6c] cursor-pointer pointer-events-auto transition-colors max-[550px]:flex-col max-[550px]:items-center max-[550px]:w-[calc(100%)]">
                    <div className="relative w-36 h-24 rounded-md overflow-hidden flex-shrink-0 max-[550px]:w-full max-[550px]:h-26">
                      <Image src={guide.image || "/placeholder.svg"} alt={guide.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-medium max-[550px]:text-center">{guide.title}</h2>
                      <div className="flex justify-between items-center mt-2 max-[550px]:justify-center">
                        <Badge variant="outline" className="text-xs">
                          {guide.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="mr-auto flex items-end max-[550px]:mx-auto">
                      <span className="text-xs text-slate-400 mb-[15px]">{guide.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex-2 h-auto">
          <Card className="bg-[#1a3759] border-[#4d647e] h-full">
            <CardContent className="p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-[25px]">Update</h2>
              <div className="space-y-4 flex-[1] overflow-auto max-h-[368px] pr-2">
                {mockUpdates.map((update) => (
                  <div key={update.id} className="relative space-y-2 cursor-pointer pointer-events-auto border-b mb-2 pb-2 border-[#4d647e] last:border-b-0">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold capitalize">{update.version}</span>
                    </div>
                    <p className="text-xs text-slate-400">{update.description}</p>
                    <div className="">
                      <p className="text-xs text-[#a6a5f8] hover:font-bold"><span className="">Rover Quick Guide</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <FilterGuideContainer />
    </div>
  )
}
