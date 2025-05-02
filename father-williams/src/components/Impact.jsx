import React from 'react'
import CountUp from 'react-countup';


function Impact() {
  return (
    <div className='w-full flex justify-center'>
       <div className='w-[94%] lg:w-[97%] pt-4 rounded-t-4xl'>
        <p className='w-full font-[Anton] h-[4rem] flex items-center justify-center md:text-5xl text-4xl'>OUR IMPACT</p>
        
        <div className='grid grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-4 px-4 py-8'>
            <div className=''>
            <CountUp enableScrollSpy end={6543} suffix='+' duration={3} delay={1} className='text-2xl font-[Anton]  ' />
            <p className=''>scholarship grants awarded</p>
        </div>
            <div className=''>
            <CountUp enableScrollSpy end={4321} suffix='+' duration={3} delay={1} className='text-2xl font-[Anton]  ' />
            <p className=''>scholar graduates</p>
        </div>
            <div className=''>
            <CountUp enableScrollSpy end={789} suffix='+' duration={3} delay={1} className='text-2xl font-[Anton]  ' />
            <p className=''>scholar graduates with
            Latin honors</p>
        </div>
            <div className=''>
            <CountUp enableScrollSpy end={1234} suffix='+' duration={3} delay={1} className='text-2xl font-[Anton]  ' />
            <p className=''>current scholars</p>
        </div>
            <div className=''>
            <CountUp enableScrollSpy end={432} suffix='+' duration={3} delay={1} className='text-2xl font-[Anton]  ' />
            <p className=''>new scholars</p>
        </div>
        </div>
        
    </div> 
    </div>
    
  )
}

export default Impact