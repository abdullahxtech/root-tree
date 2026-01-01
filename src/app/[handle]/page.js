"use client"
import LoadingBar from '@/components/LoadingBar';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import NotFound from '../not-found';

const HandlePage = () => {
    const params = useParams();
    const handleParam = params.handle;
    const [handleData, setHandleData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`/api/find/${handleParam}`);
            const json = await res.json();
            setHandleData(json.data);
        }
        fetchData();
    }, [handleParam]);

    if (handleData==null) {
        return NotFound();
    }


    return (
        <main>
            <section className='min-h-screen pt-10 bg-[#C27AFF] flex flex-col items-center'>
                <Link href={"/"} className='absolute left-[10vw]'>
                    <img className='h-6' src="/logo.svg" alt="logo" />
                </Link>
                <img className='rounded-full' src={handleData.pic != "" ? handleData.pic : "/user.png"} alt="user pic" width={150} height={150} />
                <span className='mt-3 font-bold text-xl text-center'>@{handleData.handle}</span>
                <p className='text-[17px] w-150 mt-3 text-center'>{handleData.desc}</p>
                <div className='flex flex-col gap-2 mt-2'>
                    {handleData.links.map((link, index) => {
                        return (<Link key={index} target='_blank' className='text-blue-600 font-semibold hover:underline bg-white text-xl rounded-md min-w-100 py-2 text-center' href={link.link}><span>{link.linkText}</span></Link>)
                    })}
                </div>
            </section>
        </main>
    )
}

export default HandlePage
