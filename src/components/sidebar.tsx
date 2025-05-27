'use client'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"
import './../styles/sidebar.css'
import { ScrollTopIcon } from "./scroll-top-icon"
import { usePathname } from "next/navigation"
import Image from 'next/image'

export function Sidebar({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const [activeRouteIndex, setActiveRouteIndex] = useState<number>(-1)
  const refParentElement = useRef<HTMLDivElement>(null)
  const [stateShowIcon, setStateShowIcon] = useState<boolean>(false)
  const [showSidebar, setShowSidebar] = useState<boolean>(false)

  useEffect(() => {
    if (!refParentElement) return
    const reference = refParentElement.current
    if (!reference) return
    const toggleVisibility = () => {
      setStateShowIcon(reference.scrollTop > 300)
    }

    reference.addEventListener('scroll', toggleVisibility)
    return () => reference.removeEventListener('scroll', toggleVisibility)
  }, [])

  useEffect(() => {
    switch (pathname) {
      case '/':
        setActiveRouteIndex(0)
        setShowSidebar(false)
        break
      case '/characters':
        setShowSidebar(false)
        setActiveRouteIndex(1)
        break
      case '/weapons':
        setShowSidebar(false)
        setActiveRouteIndex(2)
        break
      case '/echos':
        setShowSidebar(false)
        setActiveRouteIndex(3)
        break
      default:
        setShowSidebar(false)
        setActiveRouteIndex(-1)
    }
  }, [pathname])

  const onClickScrollToTop = () => {
    if (!refParentElement) return
    const reference = refParentElement.current
    if (!reference) return
    reference.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onClickChangeStateSidebar = () => {
    setShowSidebar(!showSidebar)
  }


  return (
    <div className="flex items-start w-full h-full nav-side-bar-container fixed top-0 left-0 z-1000">
      <aside className={`h-full bg-[#1f293780] border-[#374151] border-r flex flex-col transition-all origin-left max-[600px]:scale-x-0 duration-300 group top-0 left-0 z-1000 ${showSidebar ? 'w-64 max-[600px]:fixed max-[600px]:scale-x-100' : 'w-13 max-[600px]:invisible max-[600px]:absolute'}`}>
        <div className="p-4 flex items-center h-fit pt-[10px]">
          <div className={`font-bold transition-opacity duration-300 absolute flex items-center ${showSidebar ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792" width={32} height={32} className="scale-[1.3]">
              <defs>
              </defs>
              <path fill="#fff" strokeWidth="0" d="m498.71,155.16l28.74-33.1v-3.48l-1.32-.77-143.86,99.46-19.26-11.25s7.38-27.44,7.38-30.44.44-33.44.44-33.44c0,0-29.27,13.21-52.69,49.02,0,0-84.39-5.42-141.68,56.13-57.29,61.55-53.23,127.74-53.23,127.74,0,0-.39,61.94,24.19,90l1.35-.87s-22.65-77.71,23.42-137.71c0,0-20.71,70.45,25.74,120.77,46.45,50.32,100.65,49.55,132.77,64.45,32.13,14.9,62.9,40.45,78.29,92.03l2.1-.16s8.65-47.35-5.87-82.97c-14.52-35.61-29.42-50.71-65.81-72.39l-46.58-22.77s-59.1-24.26-61.61-89.87c0,0-2.13-35.03,29.81-67.26,0,0-18.19,49.65,15.29,81.39s68.13,21.16,68.13,21.16l6.84.13,73.42,32.39,6.26,4.87,5.81,6.48,6.48,7.16,4.74,4.06,5.52,2.03,12.48-.1,4-.42,5.52-.81,7.87-1.16,4.74-1.74,5.19-4.74,15.74-28.63,1.03-3.11.13-10.58s-22.84-33.77-41.71-55.74c-18.87-21.97-40.84-55.74-40.84-55.74l-10.94-16.65,38.52-43.45,43.45-49.94Zm-16.9,220.19c5.42,1.74,8.58,9.03,8.58,9.03,0,0,0,5.16-.45,6.84-.45,1.68-3.29,1.42-3.29,1.42,0,0-5.55-4.84-8-8.26-2.45-3.42,3.16-9.03,3.16-9.03Zm-101.74-81.81c0-.39-21.77-21.97-21.77-21.97l34.94,4.26c7.84,6.97,14.61,24.39,14.61,24.39-3-2.61-27.77-6.29-27.77-6.68Z" />
              <path fill="#fff" strokeWidth="0" d="m171.61,500.84s8.71,36.19,38.13,55.35,25.55,19.55,80.71,30,86.13,52.65,86.13,52.65l1.35,2.13h1.55s.39-30.77-21.1-54.97-42.58-37.74-96.77-46.26-90-38.9-90-38.9Z" />
            </svg>
            WuwaBeacon
          </div>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792" width={32} height={32} className={`scale-[1.3] ${showSidebar ? 'opacity-0' : 'opacity-100'}`}>
            <defs>
            </defs>
            <path fill="#fff" strokeWidth="0" d="m498.71,155.16l28.74-33.1v-3.48l-1.32-.77-143.86,99.46-19.26-11.25s7.38-27.44,7.38-30.44.44-33.44.44-33.44c0,0-29.27,13.21-52.69,49.02,0,0-84.39-5.42-141.68,56.13-57.29,61.55-53.23,127.74-53.23,127.74,0,0-.39,61.94,24.19,90l1.35-.87s-22.65-77.71,23.42-137.71c0,0-20.71,70.45,25.74,120.77,46.45,50.32,100.65,49.55,132.77,64.45,32.13,14.9,62.9,40.45,78.29,92.03l2.1-.16s8.65-47.35-5.87-82.97c-14.52-35.61-29.42-50.71-65.81-72.39l-46.58-22.77s-59.1-24.26-61.61-89.87c0,0-2.13-35.03,29.81-67.26,0,0-18.19,49.65,15.29,81.39s68.13,21.16,68.13,21.16l6.84.13,73.42,32.39,6.26,4.87,5.81,6.48,6.48,7.16,4.74,4.06,5.52,2.03,12.48-.1,4-.42,5.52-.81,7.87-1.16,4.74-1.74,5.19-4.74,15.74-28.63,1.03-3.11.13-10.58s-22.84-33.77-41.71-55.74c-18.87-21.97-40.84-55.74-40.84-55.74l-10.94-16.65,38.52-43.45,43.45-49.94Zm-16.9,220.19c5.42,1.74,8.58,9.03,8.58,9.03,0,0,0,5.16-.45,6.84-.45,1.68-3.29,1.42-3.29,1.42,0,0-5.55-4.84-8-8.26-2.45-3.42,3.16-9.03,3.16-9.03Zm-101.74-81.81c0-.39-21.77-21.97-21.77-21.97l34.94,4.26c7.84,6.97,14.61,24.39,14.61,24.39-3-2.61-27.77-6.29-27.77-6.68Z" />
            <path fill="#fff" strokeWidth="0" d="m171.61,500.84s8.71,36.19,38.13,55.35,25.55,19.55,80.71,30,86.13,52.65,86.13,52.65l1.35,2.13h1.55s.39-30.77-21.1-54.97-42.58-37.74-96.77-46.26-90-38.9-90-38.9Z" />
          </svg>
          {/* <span className={`text-xl font-bold transition-opacity duration-300 }>R</span> */}
        </div>
        <nav className="flex-1 p-2">
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className={cn(
                  `flex items-center p-2 rounded-md ${showSidebar ? 'bg-slate-700 text-white' : ''} text-slate-300 transition-colors`,
                  activeRouteIndex === 0 && "bg-slate-700 text-white",
                )}
              >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 16" fill="none" className="w-[18px] h-[18px]">
                    <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#fff" />
                  </svg>
                </div>
                <span className={`ml-3 ${showSidebar ? 'opacity-100' : 'opacity-0'} transition-opacity duration-250 whitespace-nowrap overflow-hidden`}>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/characters"
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
                <span className={`ml-3 ${showSidebar ? 'opacity-100' : 'opacity-0'} transition-opacity duration-250 whitespace-nowrap overflow-hidden`}>
                  Characters
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/weapons"
                className={cn(
                  "flex items-center p-2 rounded-md hover:bg-slate-700 text-slate-300 hover:text-white transition-colors",
                  activeRouteIndex === 2 && "bg-slate-700 text-white",
                )}
              >
                <Image src="/weapons_icon/broadblade.png" width={18} height={18} className="min-w-[20px] min-h-[20px] object-cover" alt="icon" />
                <span className={`ml-3 ${showSidebar ? 'opacity-100' : 'opacity-0'} transition-opacity duration-250 whitespace-nowrap overflow-hidden`}>
                  Weapons
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/echos"
                className={cn(
                  "flex items-center p-2 rounded-md hover:bg-slate-700 text-slate-300 hover:text-white transition-colors",
                  activeRouteIndex === 3 && "bg-slate-700 text-white",
                )}
              >
                <Image src="/echo.png" width={18} height={18} className="min-w-[20px] min-h-[20px] object-cover" alt="icon" />
                <span className={`ml-3 ${showSidebar ? 'opacity-100' : 'opacity-0'} transition-opacity duration-250 whitespace-nowrap overflow-hidden`}>
                  Echos
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
          <span className={`whitespace-nowrap ${showSidebar ? 'opacity-100' : 'opacity-0'} duration-250 delay-75 capitalize text-slate-300`}>Vào discord đi</span>
        </div>
      </aside>
      <div className="w-full h-full flex flex-col">
        <div className="flex items-center justify-between px-[17px] py-[10px] bg-[#1f293780] border-[#374151] border-b w-full">
          <div className="hidden max-[600px]:flex items-center font-bold">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 792" width={32} height={32}>
              <defs>
              </defs>
              <path fill="#fff" strokeWidth="0" d="m498.71,155.16l28.74-33.1v-3.48l-1.32-.77-143.86,99.46-19.26-11.25s7.38-27.44,7.38-30.44.44-33.44.44-33.44c0,0-29.27,13.21-52.69,49.02,0,0-84.39-5.42-141.68,56.13-57.29,61.55-53.23,127.74-53.23,127.74,0,0-.39,61.94,24.19,90l1.35-.87s-22.65-77.71,23.42-137.71c0,0-20.71,70.45,25.74,120.77,46.45,50.32,100.65,49.55,132.77,64.45,32.13,14.9,62.9,40.45,78.29,92.03l2.1-.16s8.65-47.35-5.87-82.97c-14.52-35.61-29.42-50.71-65.81-72.39l-46.58-22.77s-59.1-24.26-61.61-89.87c0,0-2.13-35.03,29.81-67.26,0,0-18.19,49.65,15.29,81.39s68.13,21.16,68.13,21.16l6.84.13,73.42,32.39,6.26,4.87,5.81,6.48,6.48,7.16,4.74,4.06,5.52,2.03,12.48-.1,4-.42,5.52-.81,7.87-1.16,4.74-1.74,5.19-4.74,15.74-28.63,1.03-3.11.13-10.58s-22.84-33.77-41.71-55.74c-18.87-21.97-40.84-55.74-40.84-55.74l-10.94-16.65,38.52-43.45,43.45-49.94Zm-16.9,220.19c5.42,1.74,8.58,9.03,8.58,9.03,0,0,0,5.16-.45,6.84-.45,1.68-3.29,1.42-3.29,1.42,0,0-5.55-4.84-8-8.26-2.45-3.42,3.16-9.03,3.16-9.03Zm-101.74-81.81c0-.39-21.77-21.97-21.77-21.97l34.94,4.26c7.84,6.97,14.61,24.39,14.61,24.39-3-2.61-27.77-6.29-27.77-6.68Z" />
              <path fill="#fff" strokeWidth="0" d="m171.61,500.84s8.71,36.19,38.13,55.35,25.55,19.55,80.71,30,86.13,52.65,86.13,52.65l1.35,2.13h1.55s.39-30.77-21.1-54.97-42.58-37.74-96.77-46.26-90-38.9-90-38.9Z" />
            </svg>
            WuwaBeacon
          </div>
          <button onClick={onClickChangeStateSidebar} className="cursor-pointer pointer-events-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div ref={refParentElement} className="flex-1 overflow-auto flex justify-center items-start">
          {children}
          {refParentElement && <ScrollTopIcon key={'reference-state' + stateShowIcon} onClick={onClickScrollToTop} stateShowIcon={stateShowIcon} />}
        </div>
      </div>
      <button onClick={() => setShowSidebar(false)} className={`fixed top-0 left-0 w-full h-[100vh] z-999 bg-[#0000005c] transition-all duration-250 opacity-0 invisible ${showSidebar ? 'max-[600px]:opacity-100 max-[600px]:visible' : ''}`}></button>
    </div>
  )
}

