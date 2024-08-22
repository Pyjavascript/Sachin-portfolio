import React from 'react'

function Publication() {
  return (
    <div className='w-screen flex justify-center items-center'>
        <div className='bg-cover md:bg-[url(https://iaam.se/img/pexels-tatiana-fet-1105766.jpg)] w-full md:w-3/4 h-[95vh]'>
        <div className='bg-white md:w-1/2 p-4 py-2'>
            <h1 className='md:text-5xl text-2xl font-medium newfont'>Advancing Materials for Health, Energy, and Environment</h1>
            <p className=' md:text-lg mt-4'>Institute of Advanced Materials is a renowned international organization that works to promote translational research & innovations in the sectors of energy, environment, health, and many more. The institute provides high-quality consultancy in R&D, technology transfer, and infrastructure developments to ensure the transition of good quality of research into useful and significant products for the end-user. IAM has maintained its materials science and technology outreach by forming healthy partnerships and collaborations with the best of researchers, institutes, and scientists around the world.</p>
            <button className='border border-solid border-black px-10 py-3 mt-3'>Read More</button>
        </div>
        </div>
    </div>
  )
}

export default Publication