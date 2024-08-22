import React from 'react'

function Footer() {
  return (
    <div className='w-screen bg-slate-700 text-white p-5 md:h-[30vh] flex gap-10 mt-10'>
        <div>
            <h1 className='font-bold text-2xl'>Get To Know Us</h1>
            <div className='text-slate-300'>
                <p>About IAAM</p>
                <p>About Director</p>
                <p>Our Vision and Mission</p>
                <p>Innovation Sustainability</p>
                <p>Industrial Training and Education</p>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-2xl'>Quick Links</h1>
            <div className='text-slate-300'>
                <p>How We work</p>
                <p>Global Consultancy</p>
                <p>Translational Research</p>
                <p>Aims and Objectives</p>
                
            </div>
        </div>
    </div>
  )
}

export default Footer