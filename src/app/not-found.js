import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main>
      <section className='h-screen flex flex-col items-center justify-center gap-5 pb-50 text-center'>
        <div className="logo">
          <img width={100} height={100} src="/favicon.svg" alt="logo_symbol" />
        </div>
        <p className='text-red-600 text-3xl font-semibold'>ERROR</p>
        <p className='text-red-600 text-6xl font-bold'>404</p>
        <p className='md:text-2xl text-xl font-bold'>The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className='flex md:flex-row flex-col justify-center items-center gap-3'>
          <span className=''>Want this to be your username?</span>
          <Link className='underline text-blue-500' href={"/generate"}>Create your Linktree now.</Link>
        </div>

        <div>
          <img src="/logo.svg" width={100} height={100} alt="logo" />
        </div>
      </section>
    </main>
  )
}

export default NotFound
