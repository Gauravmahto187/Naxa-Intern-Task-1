import React from 'react'
import loc from '../assets/images/location 1.png'
import btnlogo from '../assets/images/home.png'

function Explore() {
    return (
        <>
            <div className='naxatw-min-w-fit naxatw-mt-10 naxatw-flex naxatw-flex-col md:naxatw-flex-row naxatw-items-center naxatw-h-auto naxatw-bg-blue-600 naxatw-mx-4 lg:naxatw-mx-32 naxatw-rounded-2xl naxatw-py-8 md:naxatw-py-16 naxatw-space-y-4 md:naxatw-space-y-0'>
                <div className='naxatw-flex naxatw-items-center naxatw-justify-center naxatw-w-full md:naxatw-w-2/3'>
                    <img src={loc} alt="Location logo" className='naxatw-mx-3 md:naxatw-mx-10 naxatw-w-8 md:naxatw-w-20' />
                    <h4 className='naxatw-text-white naxatw-font-normal naxatw-text-xl md:naxatw-text-2xl lg:naxatw-text-3xl naxatw-leading-tight md:naxatw-leading-[2.625rem] naxatw-text-center md:naxatw-text-left'>
                        Interactive digital portal of projects in Karnali Province of Nepal
                    </h4>
                </div>
                <div className='naxatw-flex naxatw-justify-center md:naxatw-justify-end naxatw-w-full md:naxatw-w-1/3 naxatw-pr-12 max-md:naxatw-pr-0'>
                    <button className='naxatw-flex naxatw-items-center naxatw-justify-center naxatw-font-bold naxatw-w-40 naxatw-h-10 naxatw-pl-5 naxatw-rounded-lg naxatw-gap-1 naxatw-text-blue-600 naxatw-text-base naxatw-bg-white'>
                        <img src={btnlogo} alt="Button logo" />Explore Map
                    </button>
                </div>
            </div>
        </>
    )
}

export default Explore
