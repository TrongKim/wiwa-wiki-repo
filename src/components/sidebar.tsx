'use client';
import Link from "next/link"
import { Home, Book, Settings, Bell, Users, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import './../styles/sidebar.css'

export function Sidebar() {
  const [activeRouteIndex, setActiveRouteIndex] = useState<number>(0);

  return (
    <div className="flex items-start w-full h-full nav-side-bar-container">
      <aside className="fixed z-[999] left-0 top-0 w-13 h-full hover:w-64 bg-[#1a3759] border-[#4d647e] border-r flex flex-col transition-all duration-300 group side-bar-client">
        <div className="p-4 border-b border-slate-700 flex items-center h-16">
          <h1 className="text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute">
            Resonator
          </h1>
          <span className="text-xl font-bold group-hover:opacity-0 transition-opacity duration-300">R</span>
        </div>

        <nav className="flex-1 p-2">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className={cn(
                  "flex items-center p-2 rounded-md hover:bg-slate-700 text-slate-300 hover:text-white transition-colors",
                  activeRouteIndex === 0 && "bg-slate-700 text-white",
                )}
              >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 16" fill="none" className="w-[18px] h-[18px]">
                    <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#fff" />
                  </svg>
                </div>
                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={cn(
                  "flex items-center p-2 rounded-md hover:bg-slate-700 text-slate-300 hover:text-white transition-colors",
                  activeRouteIndex === 1 && "bg-slate-700 text-white",
                )}
              >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="_x32_" width="18px" height="18px" viewBox="0 0 512 512" xmlSpace="preserve" className="fill-white">
                    <g>
                      <path className="st0" d="M147.57,320.188c-0.078-0.797-0.328-1.531-0.328-2.328v-6.828c0-3.25,0.531-6.453,1.594-9.5   c0,0,17.016-22.781,25.063-49.547c-8.813-18.594-16.813-41.734-16.813-64.672c0-5.328,0.391-10.484,0.938-15.563   c-11.484-12.031-27-18.844-44.141-18.844c-35.391,0-64.109,28.875-64.109,73.75c0,35.906,29.219,74.875,29.219,74.875   c1.031,3.047,1.563,6.25,1.563,9.5v6.828c0,8.516-4.969,16.266-12.719,19.813l-46.391,18.953   C10.664,361.594,2.992,371.5,0.852,383.156l-0.797,10.203c-0.406,5.313,1.406,10.547,5.031,14.438   c3.609,3.922,8.688,6.125,14.016,6.125H94.93l3.109-39.953l0.203-1.078c3.797-20.953,17.641-38.766,36.984-47.672L147.57,320.188z" />
                      <path className="st0" d="M511.148,383.156c-2.125-11.656-9.797-21.563-20.578-26.531l-46.422-18.953   c-7.75-3.547-12.688-11.297-12.688-19.813v-6.828c0-3.25,0.516-6.453,1.578-9.5c0,0,29.203-38.969,29.203-74.875   c0-44.875-28.703-73.75-64.156-73.75c-17.109,0-32.625,6.813-44.141,18.875c0.563,5.063,0.953,10.203,0.953,15.531   c0,22.922-7.984,46.063-16.781,64.656c8.031,26.766,25.078,49.563,25.078,49.563c1.031,3.047,1.578,6.25,1.578,9.5v6.828   c0,0.797-0.266,1.531-0.344,2.328l11.5,4.688c20.156,9.219,34,27.031,37.844,47.984l0.188,1.094l3.094,39.969h75.859   c5.328,0,10.406-2.203,14-6.125c3.625-3.891,5.438-9.125,5.031-14.438L511.148,383.156z" />
                      <path className="st0" d="M367.867,344.609l-56.156-22.953c-9.375-4.313-15.359-13.688-15.359-23.969v-8.281   c0-3.906,0.625-7.797,1.922-11.5c0,0,35.313-47.125,35.313-90.594c0-54.313-34.734-89.234-77.594-89.234   c-42.844,0-77.594,34.922-77.594,89.234c0,43.469,35.344,90.594,35.344,90.594c1.266,3.703,1.922,7.594,1.922,11.5v8.281   c0,10.281-6.031,19.656-15.391,23.969l-56.156,22.953c-13.047,5.984-22.344,17.984-24.906,32.109l-2.891,37.203h139.672h139.672   l-2.859-37.203C390.211,362.594,380.914,350.594,367.867,344.609z" />
                    </g>
                  </svg>
                </div>
                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
                  Characters
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={cn(
                  "flex items-center p-2 rounded-md hover:bg-slate-700 text-slate-300 hover:text-white transition-colors",
                  activeRouteIndex === 2 && "bg-slate-700 text-white",
                )}
              >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 16 16" fill="none">
                    <path d="M5 0C3.34315 0 2 1.34315 2 3V13C2 14.6569 3.34315 16 5 16H14V14H4V12H14V0H5Z" fill="#fff" />
                  </svg>
                </div>
                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
                  Guides
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 flex w-full overflow-hidden cursor-pointer pointer-events-auto">
          <div className="w-[20px] h-[20px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
              <path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z" fill="#fff" />
            </svg>
          </div>
          <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 duration-300 delay-75 capitalize text-slate-300">Vào discord đi</span>
        </div>
      </aside>
      <div className="fixed left-[52px] top-0 z-[1000] flex items-center flex-1 justify-between px-[17px] py-[10px] bg-[#1a3759] border-b border-[#4d647e] w-[calc(100%_-_52px)] top-nav-client">
        <div className="hidden max-[600px]:block">
          Wuthering88
        </div>
        <button className="cursor-pointer pointer-events-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
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
    title: "Characters",
    url: "/characters",
    icon: Users,
    active: false,
  },
  {
    title: "Guides",
    url: "#",
    icon: Book,
    active: false,
  },

  // {
  //   title: "Notifications",
  //   url: "#",
  //   icon: Bell,
  //   active: false,
  // },
  // {
  //   title: "Community",
  //   url: "#",
  //   icon: Users,
  //   active: false,
  // },
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: Settings,
  //   active: false,
  // },
]


