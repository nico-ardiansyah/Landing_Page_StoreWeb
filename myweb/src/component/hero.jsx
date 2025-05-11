import React, { memo } from 'react'
import '../App.css'

import image1 from '../assets/image/clothing_store.jpg'

function Hero() {

    return (
        <>
            <div className="w-full h-[20rem] flex justify-center relative sm:h-[25rem]">
                <div className=" w-[90%] h-[90%] rounded-2xl border-8 mt-[1.5rem] border-gray-400 overflow-x-hidden lg:w-[80%] shadow-lg shadow-gray-500 relative flex justify-center">
                    <span className='absolute bottom-16 font-bold font-Big-Shoulders text-4xl text-black text-shadow-md text-shadow-white z-1'>NIC STORE</span>
                    <div className="w-full h-full relative flex">
                        <img src={image1} alt="" className='object-cover w-full h-full absolute'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Hero)