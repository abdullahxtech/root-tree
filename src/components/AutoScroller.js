import React from 'react'

const AutoScroller = () => {
    const images = [
        "/scroll_image1.png",
        "scroll_image2.png",
        "scroll_image3.png",
        "scroll_image4.png",
        "scroll_image5.png",
    ];

    return (
        <div className='overflow-hidden w-full md:h-130'>

            {/* Mobile -> horizonatal scroll */}
            <div className='flex md:hidden animate-scroll-x w-max'>
                {[...images, ...images].map((src, i) => (
                    <img src={src} alt="" key={i} className='w-64 mx-4 rounded-2xl shadow-xl pointer-events-none'/>
                ))}
            </div>

            {/* Desktop -> vertical */}
            <div className='hidden md:flex flex-col animate-scroll-y'>
                {[...images,...images].map((src,i)=>(
                    <img src={src} key={i} alt="" className='h-64 my-4 rounded-2xl shadow-xl pointer-events-none'/>
                ))}
            </div>
        </div>
    )
}

export default AutoScroller
