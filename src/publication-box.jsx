import React from 'react'

function Publication() {
  return (
    <div className='w-screen flex justify-center items-center'>
        <div className='bg-cover bg-[url(https://iaam.se/img/pexels-tatiana-fet-1105766.jpg)] w-3/4 h-[90vh]'>
        <div className='bg-white w-1/2 p-4 py-6'>
            <h1 className='text-5xl font-bold'>Advancing Materials for Health, Energy, and Environment</h1>
            <p className='text-xl mt-4'>Institute of Advanced Materials is a renowned international organization that works to promote translational research & innovations in the sectors of energy, environment, health, and many more. The institute provides high-quality consultancy in R&D, technology transfer, and infrastructure developments to ensure the transition of good quality of research into useful and significant products for the end-user. IAM has maintained its materials science and technology outreach by forming healthy partnerships and collaborations with the best of researchers, institutes, and scientists around the world.</p>
            <button className='border border-solid border-black px-10 py-3 mt-3'>Read More</button>
        </div>
        </div>
    </div>
  )
}

export default Publication