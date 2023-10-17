import React from 'react'

import './styles.css'

import logo from '../assets/logo.png'
import pu_logo from '../assets/pu_logo.png'
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';

const Home = () => {
  return (
    <div className='w-full'>
        <div id="landing_hero" className='w-full h-screen flex flex-col items-center justify-between  p-10'>
            <div className='w-full flex flex-col justify-center'>
                <div className='flex flex-col items-center text-white'>
                    <img className='w-16' src={logo} />
                    <p className='font-monument mt-2 text-lg'>Vikasana</p>
                    <div className='flex items-center'>
                        <p className='font-Inter'>Student Research and Development team of</p>
                        <img className='w-32 ml-4' src={pu_logo} />
                    </div>
                </div>

                <div className='flex flex-col w-full justify-center items-center font-obra mt-32'>
                    <p className='text-9xl text-black'>WE ARE</p>

                    <div className='px-8 py-2 bg-black mt-1 -rotate-3'>
                        <p className='text-white text-9xl'>RECRUITING!</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center cursor-pointer'>
                <div className='bg-white px-5 py-2 rounded-lg flex items-center'>
                    <p className='text-black text-md font-sherika'>Scroll to view roles</p>
                    <MouseOutlinedIcon className="animate-bounce ml-2" sx={{width: '20px'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home