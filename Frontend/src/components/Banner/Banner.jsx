import React from 'react'

const Banner = () => {
  return (
    <div className='relative bg-banner-background h-[700px] bg-no-repeat w-full bg-cover'>
      <div className='absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center'>
        <div className='grid grid-cols-1 justify-items-center bg-cover bg-center text-white '>
            <div className='banner-text mb-0'>
                <h1 className='text-6xl font-bold' style={{fontFamily: 'Helvetica'}}>Join Waitlist</h1>
            </div>
            <div className='home-subtexgt mt-4 '>
                <h3 className='text-2xl '>Join Our Extensive Waitlist & Get Notified When We Launch</h3>
            </div>
            <div className='flex rounded-3xl mt-5 w-[450px] h-[50px] bg-white justify-between items-center'>
                <div className='ml-5'>
                    <input className='bg-transparent h-[40px] w-[350px] text-black placeholder-gray-600' type="text" placeholder='Email Address' />
                </div>
                <div>
                    <button className='bg-slate-400  text-black h-[50px] w-[100px] rounded-3xl hover:bg-cyan-600'>Join Waitlist</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner