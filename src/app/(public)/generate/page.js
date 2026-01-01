"use client"
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';


const GeneratePage = () => {
  const searchParams = useSearchParams();
  const [handleText, setHandleText] = useState(searchParams.get("handle") || "")
  const [links, setLinks] = useState([{ link: "", linkText: "" }])
  const [pic, setPic] = useState("")
  const [desc, setDesc] = useState("")

  const addLink = () => {
    setLinks([...links, { link: "", linkText: "" }]);
  }

  const updateLink = (index, field, value) => {
    const updatedLinks = [...links];
    updatedLinks[index][field] = value;
    setLinks(updatedLinks);
    console.log(links);
  }

  const submitRootLinks = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "links": links,
        "handle": handleText,
        "pic": pic,
        "desc": desc
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      const res = await fetch("http://localhost:3000/api/add", requestOptions)
      const data = await res.json();

      if (!res.ok || data.status==400) {
        toast.error(data.message || "Somehthing went wrong");
        return;
      } 

      toast.success(data.message || "Profile created successfully!");
    } catch(error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
    setHandleText("")
    setLinks([{link: "",linkText: ""}])
    setPic("")
    setDesc("")
  }

  return (
    <main>
      <section className="bg-[#254F1A] min-h-screen flex md:flex-row flex-col justify-center gap-5 items-center">
        <div className="flex flex-col justify-start md:items-start items-center gap-5 md:pl-10 pt-35">
          <h1 className='font-bold text-white italic px-2 rounded-md my-4 md:text-4xl text-3xl self-center text-center py-1'>Create your RootTree</h1>

          <div className='w-full'>
            <h2 className='md:text-2xl text-xl text-white w-full'>Step 1: Claim your Handle</h2>
            <div className='px-2 py-2 w-full'>
              <input value={handleText} onChange={(e) => setHandleText(e.target.value)} type="text" className='focus:outline-green-200 bg-white rounded-full py-2 px-7 w-full' placeholder='Enter a Handle' />
            </div>
          </div>

          <div className='flex flex-col gap-3 py-2 w-full'>
            <h2 className='md:text-2xl text-xl text-white w-full'>Step 2: Add Links</h2>
            {links.map((link, index) => (<div key={index} className='px-2 flex md:flex-row flex-col gap-5'>
              <input value={link.linkText} onChange={(e) => updateLink(index, "linkText", e.target.value)} type="text" className='w-full focus:outline-green-200 bg-white rounded-full py-2 px-7' placeholder='Enter link text' />
              <input value={link.link} onChange={(e) => updateLink(index, "link", e.target.value)} type="text" className='focus:outline-green-200 w-full bg-white rounded-full py-2 px-7' placeholder='Enter link' />
              <hr className='text-white' />
            </div>))}
            <button onClick={() => addLink()} className='bg-black w-fit px-3 py-2 rounded-full text-white font-bold'>Add Link</button>
          </div>

          <div className='flex flex-col gap-3 py-2 w-full'>
            <h2 className='md:text-2xl text-xl text-white w-full'>Step 3: Add Picture and Description</h2>
            <div className='px-2 flex flex-col gap-5 w-full'>
              <input value={pic} onChange={(e) => setPic(e.target.value)} type="text" className='focus:outline-green-200 bg-white w-full rounded-full py-2 px-7' placeholder='Enter link to your Picture' />
              <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className='w-full focus:outline-green-200 bg-white rounded-full py-2 px-7' placeholder='Enter description' />
            </div>
            <ToastContainer />
            <button onClick={() => submitRootLinks()} disabled={handleText == "" || pic == "" || links[0].linkText == ""} className='disabled:bg-gray-500 bg-black w-fit px-3 py-2 rounded-full text-white font-bold'>Create your RootTree</button>
          </div>
        </div>

        <div className="md:px-20 pb-10">
          <img width={500} height={500} src="/generate2.png" alt="" />
        </div>
      </section>
    </main>
  )
}


export default GeneratePage



