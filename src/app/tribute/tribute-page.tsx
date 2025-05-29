"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Code, Globe, Heart, Github, MessageCircle, Star } from "lucide-react"

const contributors = [
  {
    id: 1,
    name: "Meap",
    photo: "/tribute/meap.jpg",
    server: "Sóng Gió Hú",
    department: "Designer",
    role: "UI/UX Designer",
    contributions: ["Designer", "UI/UX", "Theorycrafter", "Translation"],
    joinDate: "2025-04",
  },
  {
    id: 2,
    name: "Squid~",
    photo: "/tribute/muc.jpg",
    server: "GitHub",
    department: "Theorycrafter",
    role: "Theorycrafter",
    contributions: ["Translation", "Theorycrafter"],
    joinDate: "2025-05",
  },
  {
    id: 3,
    name: "Trọng Kim",
    photo: "/tribute/kim.jpg",
    server: "Sóng Gió Hú",
    department: "Development",
    role: "Frontend / Deployment",
    contributions: ["Development", "Frontend Developer", "Maintain"],
    joinDate: "2025-02",
  },
  {
    id: 4,
    name: "Twisna",
    photo: "/placeholder.svg?height=120&width=120",
    server: "Sóng Gió Hú",
    department: "Development",
    role: "Technical Lead",
    contributions: ["Translation", "Database", "Data Mining"],
    joinDate: "2025-04",
  },
  {
    id: 6,
    name: "Thuwthuw",
    photo: "/tribute/thu.png",
    server: "Sóng Gió Hú",
    department: "Designer",
    role: "Inforgraphic",
    contributions: ["Designer", "Inforgraphic", "Translation", "Quản Ngục"],
    joinDate: "2025-05",
  },
  {
    id: 5,
    name: "Kabe",
    photo: "/tribute/kabe.jpg",
    server: "Sóng Gió Hú",
    department: "Designer",
    role: "UI/UX Designer",
    contributions: ["Designer", "UI/UX", "Figma"],
    joinDate: "2025-04",
  },
    {
    id: 8,
    name: "Maiyon",
    photo: "/tribute/maiyon.jpg",
    server: "WW VN Fandom",
    department: "Translation",
    role: "Translation",
    contributions: ["Development Newbie", "Translation"],
    joinDate: "2025-05",
  },
  {
    id: 7,
    name: "Clown",
    photo: "/tribute/clown.png",
    server: "Sóng Gió Hú",
    department: "Translation",
    role: "Translation",
    contributions: ["Translation"],
    joinDate: "2025-05",
  },
  {
    id: 9,
    name: "Phan",
    photo: "/tribute/phan.jpg",
    server: "Sóng Gió Hú",
    department: "Translation",
    role: "Translation",
    contributions: ["Translation"],
    joinDate: "2025-05",
  },
    {
    id: 10,
    name: "AAA-Battery",
    photo: "/tribute/battery.png",
    server: "Sóng Gió Hú",
    department: "Translation",
    role: "Translation",
    contributions: ["Translation"],
    joinDate: "2025-05",
  },
    {
    id: 11,
    name: "Shu",
    photo: "/tribute/shu.png",
    server: "Sóng Gió Hú",
    department: "Translation",
    role: "Translation",
    contributions: ["Translation"],
    joinDate: "2025-05",
  },
]

const departments = [
  {
    name: "Development",
    icon: Code,
    color: "from-[#60a5fa] to-[#38bdf8]",
    description: "Building and maintaining the technical foundation",
  },
  {
    name: "Translation",
    icon: Globe,
    color: "from-[#38bdf8] to-[#0ea5e9]",
    description: "Making content accessible across languages",
  },
  {
    name: "Designer",
    icon: Users,
    color: "from-[#8b5cf6] to-[#7c3aed]",
    description: "Fostering engagement and providing support",
  },
  {
    name: "Donations",
    icon: Heart,
    color: "from-[#f59e0b] to-[#d97706]",
    description: "Managing financial support and sustainability",
  },
]

export default function TributePage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  const [hoveredContributor, setHoveredContributor] = useState<number | null>(null)

  const filteredContributors = selectedDepartment
    ? contributors.filter((contributor) => contributor.department === selectedDepartment)
    : contributors

  const getDepartmentColor = (department: string) => {
    const dept = departments.find((d) => d.name === department)
    return dept?.color || "from-[#374151] to-[#4b5563]"
  }

  const getDepartmentIcon = (department: string) => {
    const dept = departments.find((d) => d.name === department)
    return dept?.icon || Users
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f293780] to-[#0d0d0d]" />
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#38bdf8] transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guide
          </Link>

          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-[#38bdf8] mb-6">Tribute</h1>
            <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto leading-relaxed">
              Honoring the dedicated contributors who made this Roccia character guide possible through their passion,
              expertise, and unwavering commitment to the Wuthering Waves community.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center p-4 bg-[#1f293780] rounded-lg border border-[#374151]">
              <div className="text-2xl font-bold text-[#38bdf8]">{contributors.length}</div>
              <div className="text-[#94a3b8] text-sm">Contributors</div>
            </div>
            <div className="text-center p-4 bg-[#1f293780] rounded-lg border border-[#374151]">
              <div className="text-2xl font-bold text-[#60a5fa]">{departments.length}</div>
              <div className="text-[#94a3b8] text-sm">Departments</div>
            </div>
            <div className="text-center p-4 bg-[#1f293780] rounded-lg border border-[#374151]">
              <div className="text-2xl font-bold text-[#38bdf8]">6</div>
              <div className="text-[#94a3b8] text-sm">Months</div>
            </div>
            <div className="text-center p-4 bg-[#1f293780] rounded-lg border border-[#374151]">
              <div className="text-2xl font-bold text-[#60a5fa]">∞</div>
              <div className="text-[#94a3b8] text-sm">Dedication</div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Filter */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#38bdf8] mb-6">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((department) => {
              const Icon = department.icon
              const isSelected = selectedDepartment === department.name

              return (
                <button
                  key={department.name}
                  onClick={() => setSelectedDepartment(selectedDepartment === department.name ? null : department.name)}
                  className={`
                    p-4 rounded-lg border transition-all duration-300 text-left
                    ${isSelected
                      ? "border-[#60a5fa] bg-[#60a5fa]/10"
                      : "border-[#374151] bg-[#1f293780] hover:border-[#60a5fa]/50 hover:bg-[#60a5fa]/5"
                    }
                  `}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${department.color} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white">{department.name}</h3>
                  </div>
                  <p className="text-[#94a3b8] text-sm">{department.description}</p>
                  <div className="mt-2">
                    <Badge className="bg-[#374151] text-[#94a3b8]">
                      {contributors.filter((c) => c.department === department.name).length} members
                    </Badge>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Contributors Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#38bdf8]">
              {selectedDepartment ? `${selectedDepartment} Team` : "All Contributors"}
            </h2>
            {selectedDepartment && (
              <button
                onClick={() => setSelectedDepartment(null)}
                className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors duration-200"
              >
                Show All
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredContributors.map((contributor, index) => {
              const Icon = getDepartmentIcon(contributor.department)
              const isHovered = hoveredContributor === contributor.id

              return (
                <Card
                  key={contributor.id}
                  className={`
                    bg-[#1f293780] border-[#374151] overflow-hidden transition-all duration-300 hover:border-[#60a5fa]/50 hover:shadow-lg hover:shadow-[#60a5fa]/10
                    ${isHovered ? "transform scale-105" : ""}
                  `}
                  onMouseEnter={() => setHoveredContributor(contributor.id)}
                  onMouseLeave={() => setHoveredContributor(null)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CardContent className="p-6">
                    {/* Photo and Basic Info */}
                    <div className="text-center mb-4">
                      <div className="relative w-20 h-20 mx-auto mb-3">
                        <Image
                          src={contributor.photo || "/placeholder.svg"}
                          alt={contributor.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover border-2 border-[#374151] w-[80px] h-[80px] min-w-[80px] min-h-[80px]"
                        />
                        <div
                          className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${getDepartmentColor(contributor.department)} flex items-center justify-center`}
                        >
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-white text-lg">{contributor.name}</h3>
                      <p className="text-[#60a5fa] text-sm font-medium">{contributor.role}</p>
                    </div>

                    {/* Department and Server */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[#94a3b8] text-xs">Department</span>
                        <Badge
                          className={`bg-gradient-to-r ${getDepartmentColor(contributor.department)} text-white text-xs`}
                        >
                          {contributor.department}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#94a3b8] text-xs">Server</span>
                        <span className="text-white text-xs">{contributor.server}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#94a3b8] text-xs">Joined</span>
                        <span className="text-white text-xs">{contributor.joinDate}</span>
                      </div>
                    </div>

                    {/* Contributions */}
                    <div className="space-y-2">
                      <span className="text-[#94a3b8] text-xs">Key Contributions</span>
                      <div className="flex flex-wrap gap-1">
                        {contributor.contributions.map((contribution, idx) => (
                          <Badge key={idx} className="bg-[#374151] text-[#94a3b8] text-xs">
                            {contribution}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Thank You Section */}
        <div className="text-center py-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Star className="w-16 h-16 text-[#38bdf8] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-[#38bdf8] mb-4">Thank You</h2>
              <p className="text-[#94a3b8] text-lg leading-relaxed text-justify">
                Dự án này tồn tại nhờ vào sự cống hiến tuyệt vời và niềm đam mê mãnh liệt của những người đã chung tay xây dựng nên nó. Mỗi cá nhân được vinh danh tại đây đều đã dành thời gian, kỹ năng và tâm huyết để tạo nên một sản phẩm ý nghĩa dành cho cộng đồng Wuthering Waves.

                Sự hợp tác gắn bó giữa các bộ phận như Cộng đồng, Phát triển, Dịch thuật và Ủng hộ (Donate) — đặc biệt là từ cộng đồng <span className="text-[#60a5fa]">Sóng Gió Hú</span> và sự góp ý tưởng của <span className="text-[#60a5fa]">Wuthering Waves Vietnam Fandom</span> — chính là nền móng tạo nên hướng dẫn này.

                Chúng tôi xin được tri ân sâu sắc tới tất cả những ai đã góp phần làm nên thành công của dự án. Chính tinh thần đồng đội và khát khao mang lại trải nghiệm tốt nhất cho cộng đồng đã biến ý tưởng này thành hiện thực.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#1f293780] rounded-lg border border-[#374151]">
                <Github className="w-8 h-8 text-[#60a5fa] mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Mã nguồn</h3>
                <p className="text-[#94a3b8] text-sm">
                  Xây dựng bởi đội phát triển của dự án
                </p>
              </div>
              <div className="p-6 bg-[#1f293780] rounded-lg border border-[#374151]">
                <MessageCircle className="w-8 h-8 text-[#38bdf8] mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Cộng Đồng</h3>
                <p className="text-[#94a3b8] text-sm">Sự hỗ trợ từ cộng đồng góp phần xây dựng website này</p>
              </div>
              <div className="p-6 bg-[#1f293780] rounded-lg border border-[#374151]">
                <Heart className="w-8 h-8 text-[#f59e0b] mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Made with Love</h3>
                <p className="text-[#94a3b8] text-sm">
                  Xây dựng với mục tiêu giúp cộng đồng tranh luận có não hơn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
