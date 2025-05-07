'use client';
import Link from "next/link"
import { Home, Book, Settings, Bell, Users, Search } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-13 hover:w-64 bg-[#1a3759] border-[#4d647e] border-r flex flex-col z-1000 transition-all duration-300 ease-in-out group">
      <div className="p-4 border-b border-slate-700 flex items-center h-16">
        <h1 className="text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute">
          Resonator
        </h1>
        <span className="text-xl font-bold group-hover:opacity-0 transition-opacity duration-300">R</span>
      </div>

      <nav className="flex-1 p-2">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.url}
                className={cn(
                  "flex items-center p-2 rounded-md hover:bg-slate-700 text-slate-300 hover:text-white transition-colors",
                  item.active && "bg-slate-700 text-white",
                )}
              >
                <item.icon className="h-5 w-5 min-w-5" />
                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          </Avatar>
          <div className="ml-3">
            <p className="text-sm font-medium">Player123</p>
            <p className="text-xs text-slate-400">Level 42</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

const navItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    active: false,
  },
  {
    title: "Guides",
    url: "#",
    icon: Book,
    active: false,
  },
  {
    title: "Characters",
    url: "/characters",
    icon: Search,
    active: false,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
    active: false,
  },
  {
    title: "Community",
    url: "#",
    icon: Users,
    active: false,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    active: false,
  },
]
