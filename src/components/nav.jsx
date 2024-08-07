import React from 'react'

function Nav() {
  return (
    <>
    <nav className='bg-[#674ea7] w-screen h-14 p-1 md:px-11 lg:px-8 px-3 flex justify-between items-center'>
        <div className=' h-4/5 flex gap-3 items-center'>
            <div className='lg:hidden flex items-center justify-center'>
            <ion-icon name="menu-outline"></ion-icon>
            </div>
            <img className='h-full' src="https://lh4.googleusercontent.com/IOz4sNO47xEBWIPKswjy-Bx2y0t99mOyaJ1UZcAfCHyfwWvlyEljoEncLMigo01Zmt4K3tivKDZ4sbHVa4OY2hw=w16383" alt="logo" />
            <p className='text-white text-lg hidden lg:block'>Dr. Hirak Mazumdar</p>
        </div>
        <div className='flex items-center text-base gap-4'>
            <div className=' sm:flex hidden gap-5'>
            <a href="#" className='text-white'>Home</a>
            <a href="#" className='text-white'>Research</a>
            <a href="#" className='text-white'>Publications</a>
            <a href="#" className='text-white'>Funding Projects</a>
            <a href="#" className='text-white'>Members</a>
            <a href="#" className='text-white'>Talks and Events</a>
            <a href="#" className='text-white'>Gallery</a>
            <a href="#" className='text-white'>Contact</a>

            </div>
            <div className='lg:hidden flex items-center justify-center'>
            <ion-icon name="search-outline"></ion-icon>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav