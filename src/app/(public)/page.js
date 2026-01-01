"use client"
import AutoScroller from "@/components/AutoScroller";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Home() {
  const [handleText, sethandleText] = useState("")
  const router = useRouter();
  const [selected, setSelected] = useState("Claim your RootTree")

  const handleSubmit = () => {
    if (handleText == "") {
      router.push(`/generate`)
      return
    }
    const trimmedHandle = handleText.trim()
    router.push(`/generate?handle=${trimmedHandle}`)
  }

  const moveToFindPage = () => {
    if (handleText == "") {
      toast.warning("Please Enter Handle First!")
    }
    router.push(`/${handleText}`)
  }

  return (
    <main>
      <ToastContainer />
      <section className="bg-[#d2e823] min-h-screen flex md:flex-row flex-col items-center md:px-20 justify-between">
        <div className="mx-auto md:w-150 flex flex-col gap-5 text-sm pt-30 md:pb-0 pb-8 px-5">
          <p className="text-[#254F1A] text-3xl md:text-5xl font-extrabold">One root. Every link you share.</p>
          <p className="text-[#254F1A] font-medium text-xl">RootTree gives you one powerful link to showcase your content, projects, and socials — beautifully and effortlessly.</p>
          <div className="md:w-full w-[90vw] flex flex-col md:flex-col gap-5 justify-center items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-white md:w-full w-[90vw] focus:cursor-pointer bg-black font-semibold rounded-md px-5 md:py-2 py-4 md:text-[18px] text-sm flex justify-center items-center gap-3">
                  <span>{selected}</span>
                  <img className="invert-100" src="/down_arrow.png" alt="" width={20} height={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSelected("Claim your RootTree")}>Claim your RootTree</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelected("See your RootTree")}>See your RootTree</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex md:flex-row flex-col md:w-full justify-center items-center gap-3">
              {selected == "Claim your RootTree"
                ? <>
                  <input value={handleText} onChange={(e) => sethandleText(e.target.value)} className=" bg-white md:text-[18px] text-sm md:py-2 md:w-full w-[90vw] px-7 py-4 flex-1 rounded-md focus:outline-green-100" type="text" placeholder="Enter your Handle" />
                  <button onClick={() => handleSubmit()} className="text-white focus:cursor-pointer bg-[#254F1A] font-bold rounded-md md:w-full w-[90vw] px-3 md:py-2 py-4 md:text-[18px] text-sm flex-1">{selected}</button>
                </>
                : <>
                  <input value={handleText} onChange={(e) => sethandleText(e.target.value)} className=" bg-white md:text-[18px] text-sm md:w-full w-[90vw] md:py-2 px-7 py-4 flex-1 rounded-md focus:outline-green-100" type="text" placeholder="Enter your Handle" />
                  <button onClick={() => moveToFindPage()} className="text-white focus:cursor-pointer bg-blue-900 font-bold rounded-md px-3 md:w-full w-[90vw] md:py-2 py-4 md:text-[18px] text-sm flex-1">{selected}</button>
                </>}
            </div>
          </div>
        </div>
        <div className="md:pb-0 pb-5 w-90 md:w-140 h-150">
          <AutoScroller />
        </div>
      </section>

      <section className="bg-[#2665d6] min-h-screen flex md:flex-row flex-col items-center md:px-20 justify-between">
        <div className="md:pb-0 pb-10 order-2 md:order-1">
          <video
            src="/section2.webm"
            width={500}
            height={500}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="rounded-2xl shadow-2xl">
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mx-auto md:w-150 flex flex-col gap-5 text-sm pt-40 md:pb-0 pb-8 px-5 order-1 md:order-2">
          <p className="text-[#D2E823] text-3xl md:text-5xl font-extrabold">Create and personalize your RootTree in minutes</p>
          <p className="text-white font-medium text-xl">Bring all your content together in one powerful link. RootTree lets you connect your social profiles, websites, stores, and more — all from a single place. Customize every detail to reflect your style, or let RootTree optimize your layout to help you reach more people and grow faster.</p>
          <div className="flex md:flex-row flex-col gap-5">
            <button onClick={() => handleSubmit()} className="bg-[#D2E823] font-bold rounded-full px-5 md:py-3 py-4 md:text-[18px] text-sm">Get started for free</button>
          </div>
        </div>
      </section>

      <section className="bg-[#780016] min-h-screen flex md:flex-row flex-col items-center md:px-50 justify-between">
        <div className="mx-auto md:w-150 flex flex-col gap-5 text-sm pt-40 md:pb-0 pb-8 px-5">
          <p className="text-[#e9c0e9] text-3xl md:text-6xl font-extrabold">Share your RootTree anywhere</p>
          <p className="text-[#e9c0e9] font-medium text-xl">Add your unique RootTree link to all your social profiles, bios, and websites. Share it anywhere your audience is — and use your QR code to seamlessly connect offline moments to your online world.</p>
          <div className="flex md:flex-row flex-col gap-5">
            <button onClick={() => moveToFindPage()} className="bg-[#e9c0e9] font-bold rounded-full px-5 md:py-3 py-4 md:text-[18px] text-sm">Get started for free</button>
          </div>
        </div>
        <div className="md:pb-0 pb-5 w-90 md:w-140">
          <img src="/section3.png" alt="" />
        </div>
      </section>
    </main>
  )
}
