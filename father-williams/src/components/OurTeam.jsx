import React from 'react'
import fatherPic from "../assets/fatherPic.jpg"
import { Element } from 'react-scroll'

function OurTeam() {
  return (
    <Element name="ourteam">
      <div className='w-full px-4'>
        <p  className='w-full h-[4rem] flex items-center font-[Anton] justify-center text-4xl md:text-5xl'>OUR TEAM</p>
        <div className='flex flex-col h-full md:grid grid-cols-2'>
            <div className='flex flex-col'>
                <p className='text-2xl font-bold mt-6'>TRUSTEES</p>
                <p className='text-[1.2rem]'> Kathryn A. Bradley</p>
                <p className='text-[1.2rem]'>Matthew Martinez</p>
                <p className='text-2xl font-bold mt-6'> Advisors</p>
                <p className='text-[1.2rem]'>Aleta Jares</p>
                <p className='text-[1.2rem]'>Frank Helstab</p>
                <p className='text-[1.2rem]'>Dorothy Plett</p>
                <p className='text-[1.2rem]'>Bill Gifford</p>
                <p className='text-[1.2rem]'>Kevin Fox</p>
                <p className='text-[1.2rem]'>Enza Seibert</p>
                <p className='text-3xl font-bold mt-6'>Technical Support</p>
                <p className='text-[1.2rem]'>Technically Creative Solutions, LLC</p>
            </div>
            <div className='w-full flex-col text-2xl font-[Anton] p-8 flex items-center justify-center '>
              <div className='h-fit w-full lg:h-[30rem]'>
                <img src={fatherPic} alt="" className='w-full object-contain h-full' />
              </div>
                <p>Visioneer</p>
                <p>Father Willams Abba</p>
            </div>
        </div>

    </div>
    </Element>
    
  )
}

export default OurTeam