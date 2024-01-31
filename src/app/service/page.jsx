import React from 'react'
import Section1 from '../../components/pages/services/Section1'
import Section2 from '../../components/pages/services/Section2'
import Section3 from '../../components/pages/services/Section3'
import ServiceHero from '@/components/pages/services/ServiceHero'

const page = () => {
  return (
    <>
    {/* <ServiceHero/> */}
    <div className='mt-25 mb-20'>
    <Section1/>
    </div>
    <div className='mt-16 mb-5'>
    <Section2/>
    </div>
    <div className='mt-24 mb-5'>
    <Section3/>
    </div>
  
    </>
  )
}

export default page