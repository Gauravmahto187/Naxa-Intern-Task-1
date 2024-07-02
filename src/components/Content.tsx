import React from 'react'
import cont1 from '../assets/images/cont1.png'
import obj1 from '../assets/images/freelancer.png'
import obj2 from '../assets/images/data-collection-2 1.png'
import obj3 from '../assets/images/workshop.png'

function Content() {
  return (
    <>
      <div className='naxatw-min-w-fit naxatw-mt-10 naxatw-h-auto naxatw-bg-red-100 naxatw-mx-10 naxatw-rounded-2xl naxatw-pt-14 naxatw-pb-20'>
        <div className=' naxatw-flex max-lg:naxatw-flex-col max-lg:naxatw-items-center'>
          <div className='naxatw-flex md:naxatw-flex-row  max-md:naxatw-flex-col md:naxatw-items-center lg:naxatw-pl-20 sm:naxatw-px-10 max-sm:naxatw-px-5 lg:naxatw-w-1/2'>
            <div className="=  naxatw-text-neutral-800">
              <h4 className=' lg:naxatw-text-[2.125rem] naxatw-text-[1.5rem] naxatw-font-normal lg:naxatw-leading-[2.625rem] naxatw-leading-8 max-sm:naxatw-text-lg max-sm:naxatw-leading-6'>This portal is developed to identify the enabling factors of the development supported by development partners in Karnali Province of Nepal.</h4>
              <p className='naxatw-pt-7 naxatw-text-lg max-sm:naxatw-text-sm'>In the last few years, there has been a huge concern among the civil societies, government and international development partners about improving the quality of the life of people in Karnali. Nepal government along with the support of donor countries and multilateral funding agencies has invested huge resources to the implementing development project through NGO/INGO and others. Many organizations including NGO/INGOs have spent a significant amount of resources towards assessing development initiatives through project intervention at provincial and municipal level. The focus of all these investments and efforts is to create the equitable prosperous society but such investment is not always based on the proper assessment of the local needs and expectations.</p>
            </div>
          </div>
          <div className='naxatw-flex md:naxatw-flex-row-reverse max-md:naxatw-flex-col naxatw-w-1/2 max-lg:naxatw-pt-5 lg:naxatw-pr-5 xl:naxatw-pr-20  max-lg:naxatw-pr-0'>
            <img className=' naxatw-rounded-3xl naxatw-object-cover' src={cont1} alt="" width={488} height={540} />
          </div>
        </div>
        <div>
          <h5 className='naxatw-text-black naxatw-text-2xl naxatw-font-bold naxatw-pl-20 lg:naxatw-pb-10 max-lg:naxatw-text-center max-lg:naxatw-pl-0 max-lg:naxatw-pt-4 lg:naxatw-pt-4'>Objective</h5>
        </div>
        <div className='naxatw-w-full lg:naxatw-flex max-lg:naxatw-flex-col max-lg:naxatw-items-center naxatw-gap-10 max:lg lg:naxatw-px-20 md:naxatw-px-10 max-md:naxatw-px-5'>
          <div className='lg:naxatw-w-1/3 max-lg:naxatw-w-full max-lg:naxatw-flex max-lg:naxatw-flex-col max-lg:naxatw-items-center'>
            <img src={obj1} alt="Freelancer logo" className='naxatw-w-14 max-sm:naxatw-w-10' />
            <h6 className='naxatw-text-lg max-md:naxatw-text-sm max-lg:naxatw-text-center'>Identifying the key actors to operate Project Database Portal</h6>
          </div>
          <div className='lg:naxatw-w-1/3 max-lg:naxatw-w-full max-lg:naxatw-flex max-lg:naxatw-pt-6 max-lg:naxatw-flex-col max-lg:naxatw-items-center'>
            <img src={obj2} alt="data collection logo" className='naxatw-w-14 max-sm:naxatw-w-10' />
            <h6 className='naxatw-text-lg max-md:naxatw-text-sm  max-lg:naxatw-text-center'>Collection of project related data from federal, provincial, & municipal levels & validate into Project Database Portal</h6>
          </div>
          <div className='lg:naxatw-w-1/3 max-lg:naxatw-w-full max-lg:naxatw-flex max-lg:naxatw-pt-6  max-lg:naxatw-flex-col max-lg:naxatw-items-center'>
            <img src={obj3} alt="Workshop logo" className='naxatw-w-14 max-sm:naxatw-w-10' />
            <h6 className='naxatw-text-lg max-md:naxatw-text-sm  max-lg:naxatw-text-center'>Capacitate provincial & municipal officials to handle Project Database Portal</h6>
          </div>
        </div>


      </div>
    </>
  )
}

export default Content
