import React from 'react'
import CountUp from 'react-countup';


function Impact() {
  return (
    <div className='bg-black text-white'>
        <p className='w-full h-[4rem] flex items-center justify-center font-bold text-3xl'>OUR IMPACT</p>
        
        <div className='grid grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-4 px-4 py-8'>
            <div className=''>
            <CountUp enableScrollSpy end={6543} duration={3} delay={1} className='text-2xl font-[Anton]  ' />
            <p className=''>scholarship grants awarded</p>
        </div>
            <div className=''>
            <CountUp enableScrollSpy end={4321} duration={3} delay={1} className='text-2xl font-[Anton]  ' />
            <p className=''>scholar graduates</p>
        </div>
            <div className=''>
            <CountUp enableScrollSpy end={789} duration={3} delay={1} className='text-2xl font-[Anton]  ' />
            <p className=''>scholar graduates with
            Latin honors</p>
        </div>
            <div className=''>
            <CountUp enableScrollSpy end={1234} duration={3} delay={1} className='text-2xl font-[Anton]  ' />
            <p className=''>current scholars</p>
        </div>
            <div className=''>
            <CountUp enableScrollSpy end={432} duration={3} delay={1} className='text-2xl font-[Anton]  ' />
            <p className=''>new scholars</p>
        </div>
        </div>
        
    </div>
  )
}

export default Impact