'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const data=[
   {
      id:1,
      name:"Ritesh panchal",
      designation:"Drum Expert",
      image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
   },
   {
      id:2,
      name:"Mohit Sharma",
      designation:"Piano Expert",
      image:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
   },
   {
      id:3,
      name:"Jigar Kumar",
      designation:"Violan Expert",
      image:"https://images.unsplash.com/photo-1642364861013-2c33f2dcfbcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9mZmljZSUyMHBlcnNvbiUyMGZhY2UlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
   },
   {
      id:4,
      name:"Renuka Maheta",
      designation:"Clarinet Expert",
      image:"https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80"
   },
   {
      id:5,
      name:"Rohit Sing",
      designation:"Flute Expert",
      image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
   },
]
function Instructure() {
  return (
    <div className='relative h-[43rem] overflow-hidden flex items-center justify-center'>
      <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full '>
         <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>Meet Our Instructors</h2>
         <p className='text-base md:text-lg text-white text-center mb-7'>Discover the talented professionals who will guide your musical journy</p>
         <div className='flex flex-row items-center justify-center w-full my-10 '>
             <AnimatedTooltip items={data}/>
         </div>
      </WavyBackground>
    </div>
  )
}

export default Instructure