import React from 'react'

function Image() {
  return (
    <>
    <div className="relative left-[-8%] flex gap-10 items-start ">
     <div className='relative flex flex-col h-[55vh]'>
     <img src="/assets/name.svg" className=''/>
     <img src="/assets/exp.svg" className='absolute bottom-0 left-0'/>
     </div>
    <div className='relative'>
    <img src="/assets/style.svg" className='-translate-y-1/2 -translate-x-1/2 absolute z-0 top-[60%] left-0'/>
      <div className='w-96 h-96 linear-circle rounded-full flex justify-center items-center relative z-10'>
        <div className='overflow-hidden relative h-[97%] w-[97%] bg-white rounded-full '>
            <img src="/assets/men.png" className='absolute -top-12' />
        </div>
        <img src="/assets/head.png" className='w-[99%] absolute -top-12'/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Image