import React from 'react'

function Nav() {
  return (
    <>
    <nav className='bg-[#201E43] w-screen h-14 p-9 md:px-11 lg:px-8 px-3 flex justify-between items-center'>
        <div className=' h-4/5 flex gap-3 items-center'>
            <p className='text-white text-xl block font-bold'>Dr. Sachin Mishra</p>
        </div>
        <div className='flex items-center text-lg font-semibold gap-4'>
            <div className=' sm:flex hidden gap-5'>
            <a href="#" className='text-white'>Home</a>
            <a href="#" className='text-white'>Research</a>
            <a href="#" className='text-white'>Publications</a>
            <a href="#" className='text-white'>Members</a>
            <a href="#" className='text-white'>Gallery</a>

            </div>
            <div className='side-menu md:hidden flex items-center justify-center'>
            <ion-icon name="menu-outline"></ion-icon>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav