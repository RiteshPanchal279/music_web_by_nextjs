'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/moving-border'
import { HoverEffect } from "./ui/card-hover-effect";


const webinarData=[
   {
      title:"UnderStanding Music Theory",
      description:"Dive into the fundamentals of music theory and enhance your musical skills.",
      slug:"undestanding-music-theory",
      isFeatured:true
   },
   {
      title: "Unlocking Music Theory",
      description: "A live session on the core principles of music theory and how to apply them.",
      slug: "unlocking-music-theory",
      isFeatured: true
   },
   {
      title: "Guitar Chords Masterclass",
      description: "Join expert guitarists to explore advanced chord progressions and techniques.",      slug: "guitar-chords-masterclass",
      isFeatured: true
   },
   {
      title: "Songwriting Secrets",
      description: "Learn how to craft engaging lyrics and melodies in this interactive webinar.",
      slug: "songwriting-secrets",
      isFeatured: false
   },
   {
      title: "Music Production for Beginners",
      description: "Discover the fundamentals of music production, from recording to mixing.",
      slug: "music-production-beginners",
      isFeatured: true
   },
   {
      title: "Piano Techniques Workshop",
      description: "Enhance your piano skills with expert guidance and live demonstrations.",
      slug: "piano-techniques-workshop",
      isFeatured: false
   },
   
]
function UpcomingWebinars() {
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
         <div className='text-center'>
         <h2 className="text-base text-teal-600 font-semibold tracking-wide">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
         </div>

         <div className='mt-10'>
         <HoverEffect items={webinarData.map((webinar)=>(
            {
               title:webinar.title,
               description:webinar.description,
               link:"/"
            }
         ))}/>
         </div>

         <div className='text-center mt-10'>
         <Link href={"/"} className="">
          <Button borderRadius="1.75rem" >
            View All webinars
          </Button>
        </Link>
         </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars