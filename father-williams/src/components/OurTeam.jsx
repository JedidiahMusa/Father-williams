import React from 'react'
import fatherPic from "../assets/fatherPic.jpg"

function OurTeam() {
  return (
    <div className='w-full px-4 bg-black text-white'>
        <p  className='w-full h-[4rem] flex items-center justify-center font-bold text-3xl'>OUR TEAM</p>
        <div className='flex flex-col h-full md:grid grid-cols-2'>
            <div className='flex flex-col'>
                <p className='text-3xl font-bold mt-6'>TRUSTEES</p>
                <p className='text-2xl'> Kathryn A. Bradley</p>
                <p className='text-2xl'>Matthew Martinez</p>
                <p className='text-3xl font-bold mt-6'> Advisors</p>
                <p className='text-2xl'>Aleta Jares</p>
                <p className='text-2xl'>Frank Helstab</p>
                <p className='text-2xl'>Dorothy Plett</p>
                <p className='text-2xl'>Bill Gifford</p>
                <p className='text-2xl'>Kevin Fox</p>
                <p className='text-2xl'>Enza Seibert</p>
                <p className='text-3xl font-bold mt-6'>Technical Support</p>
                <p className='text-2xl'>Technically Creative Solutions, LLC</p>
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
  )
}

export default OurTeam