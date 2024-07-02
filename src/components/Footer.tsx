import React from 'react'
import logo from '../assets/images/footer-logo.png'
import Icon from '@Components/common/Icon'

const items = [
  'Map', 'Data', 'About'
]

function Footer() {
  return (
    <>
      <div className='naxatw-min-w-fit naxatw-mt-10 naxatw-flex naxatw-flex-col xl:naxatw-flex-row naxatw-justify-between naxatw-h-auto naxatw-bg-transparent naxatw-mx-4 xl:naxatw-mx-32 naxatw-gap-10 xl:naxatw-gap-0'>
  <div className='naxatw-flex naxatw-justify-center xl:naxatw-justify-start'>
    <img src={logo} alt="Logo" className='md:naxatw-w-[30rem] md:naxatw-h-10 lg:naxatw-w-[29.188rem] lg:naxatw-h-10' />
  </div>
  <div className='naxatw-flex naxatw-flex-col naxatw-gap-5 naxatw-font-bold naxatw-items-center xl:naxatw-items-start'>
    {/* <p>Map</p>
    <p>Data</p>
    <p>About</p> */}
    {
      items.map(item => (
        <p>{item}</p>
      ))
    }
  </div>
  <div className='naxatw-flex naxatw-flex-col naxatw-gap-3 naxatw-items-center xl:naxatw-items-start'>
    <div className="naxatw-flex naxatw-gap-2 naxatw-items-center">
      <Icon name='location_on' className='naxatw-text-gray-500' />
      <span className='naxatw-text-gray-700 naxatw-font-normal naxatw-text-base'>Search Projects</span>
    </div>
    <div className="naxatw-flex naxatw-gap-2 naxatw-items-center">
      <Icon name='phone' className='naxatw-text-gray-500' />
      <span className='naxatw-text-gray-700 naxatw-font-normal naxatw-text-base'>+977-01 4563 235, 01 4575 246</span>
    </div>
    <div className="naxatw-flex naxatw-gap-2 naxatw-items-center">
      <Icon name='mail' className='naxatw-text-gray-500' />
      <span className='naxatw-text-gray-700 naxatw-font-normal naxatw-text-base'>mail@mail.com</span>
    </div>
  </div>
</div>

    </>
  )
}

export default Footer
