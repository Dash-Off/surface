import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import FollowUs from '../../components/FollowUs/FollowUs'

const Home = () => {
  return (
    <>
    <div className='bg-home-background h-screen bg-no-repeat w-full bg-cover'>
        <Navbar/>

        <div className='grid grid-cols-1 justify-items-center bg-cover bg-center text-white '>
            <div className='home-text mt-52 mb-0'>
                <h1 className='text-6xl font-bold ' style={{fontFamily: 'Helvetica'}}>Explore Your Creative Writing Skills With Focus</h1>
            </div>
            <div className='home-subtexgt mt-4 '>
                <h3 className='text-2xl '>Focus. Write. Check scores. Repeat</h3>
            </div>
        </div>

        <div className='flex justify-center mt-40 mb-52'>
            <div className='bg-slate-400 bg-opacity-10 w-40 text-white'>
                <p><strong>We help...</strong></p>
                <p>Focus on your creative moments and leave the vocabulary and corrections to us</p>
            </div>
            <div className='bg-slate-400 bg-opacity-30 w-40 text-white'>
                <p><strong>We help...</strong></p>
                <p>Ipso facto, the quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className='bg-slate-400 bg-opacity-10 w-40 text-white'>
                <p><strong>We help...</strong></p>
                <p>Focus on your creative moments and leave the vocabulary and corrections to us</p>
            </div>
            <div className='bg-slate-400 bg-opacity-30 w-40 text-white'>
                <p><strong>We help...</strong></p>
                <p>Focus on your creative moments and leave the vocabulary and corrections to us</p>
            </div>
        </div>
    </div>
    
        <Banner/>
        <FollowUs/>
    </>
  )
}

export default Home