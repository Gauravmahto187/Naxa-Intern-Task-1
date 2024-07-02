import React from 'react'

function Footer2() {
    return (
        <>
        <hr className="h-px my-8 bg-gray-600 border-0 dark:bg-stone-300 naxatw-mt-14 naxatw-mx-[7.5rem] max-sm:naxatw-mx-8"/>
            <div className='naxatw-flex naxatw-flex-col lg:naxatw-flex-row naxatw-mt-5 naxatw-h-auto naxatw-bg-transparent naxatw-mx-4 lg:naxatw-mx-32 naxatw-justify-between naxatw-items-center lg:naxatw-items-end naxatw-gap-4'>
            
                <div className='naxatw-flex naxatw-w-full lg:naxatw-w-auto naxatw-justify-center lg:naxatw-justify-start'>
                    <select name="Language">
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                    </select>
                </div>

                <div className='naxatw-flex naxatw-flex-col lg:naxatw-flex-row naxatw-items-center naxatw-text-center naxatw-gap-2 lg:naxatw-gap-4'>
                    <p className=' lg:naxatw-text-left'>Privacy policy</p>
                    <p className=' lg:naxatw-text-left'>Terms</p>
                    <p className=' lg:naxatw-text-left'>Copyright 2022 Project Database Portal</p>
                </div>
            </div>

        </>
    )
}

export default Footer2
