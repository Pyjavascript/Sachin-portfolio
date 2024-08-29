import React from 'react'

function Image() {
  return (
    <>
    <div className="lg:p-0 p-4 relative lg:items-start w-screen">
     <div className='flex lg:flex-row lg:gap-64'>
     <div className='relative flex flex-col h-[55vh]'>
     <div className='lg:w-80 lg:h-80 w-48 h-48'>
     <img src="./assets/name.svg" className=''/>
     </div>
     <div>
     <img src="./assets/exp.svg" className='absolute -bottom-20 lg:-botton-auto left-0 '/>
     </div>
     </div>
    <div className=' relative -translate-y-1/2 -translate-x-1/2 -bottom-72 right-[15%] lg:right-auto lg:-bottom-60'>
    <img src="./assets/style.svg" className='-translate-y-1/2 -translate-x-1/2 absolute z-0 top-[15%] lg:rotate-0 rotate-45 lg:top-60 left-7 lg:w-auto w-48'/>
      <div className=' lg:w-96 lg:h-96 w-52 h-52 linear-circle rounded-full flex justify-center items-center relative z-10'>
        <div className='overflow-hidden relative h-[97%] w-[97%] lg:h-[97%] lg:w-[97%] bg-white rounded-full '>
            {/* <img src="./assets/men.png" className='absolute -top-12' /> */}
        </div>
        {/* <img src="./assets/head.png" className='w-[99%] absolute -top-12'/> */}
      </div>
    </div>
     </div>
          <img src="./assets/sachin.png" className=' -rotate-90 absolute top-4 -left-8 lg:-top-5 lg:left-10 w-full h-full object-contain scale-150' />
    </div>
    </>
  )
}

export default Image

