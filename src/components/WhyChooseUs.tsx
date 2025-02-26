"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal"
const content=[
   {
     title: "Melody Masters Music Academy",
     description: "At Melody Masters Music Academy, we provide high-quality music education for students of all ages. From classical to contemporary, our courses are designed to help you develop your musical skills and confidence."
   },
   {
     title: "Rhythm & Tunes Music School",
     description: "Discover the joy of music at Rhythm & Tunes Music School! Our passionate instructors offer lessons in a variety of instruments, helping students build strong foundations and express their creativity."
   },
   {
     title: "Virtuoso Music Institute",
     description: "Virtuoso Music Institute is committed to excellence in music education. We provide personalized training in instrumental and vocal performance, music theory, and composition to help students reach their full potential."
   },
   {
     title: "Crescendo School of Music",
     description: "Crescendo School of Music offers a dynamic and engaging learning experience for aspiring musicians. Whether you're a beginner or an advanced student, our expert teachers will help you refine your skills and passion for music."
   },
   {
     title: "Echo Music Academy",
     description: "Echo Music Academy blends traditional and modern teaching methods to help students master their instruments and develop a deep appreciation for music. Join us and bring your musical dreams to life!"
   },
   {
     title:"Symphony Music Conservatory",
     description: "Symphony Music Conservatory provides world-class training in instrumental and vocal music. Our curriculum is designed to prepare students for professional music careers or personal musical enrichment."
   },
   {
     title: "Blue Note Music Academy",
     description: "Blue Note Music Academy is a premier institution for music education, specializing in jazz, rock, classical, and contemporary styles. Our experienced faculty ensures a fun and immersive learning experience for all ages."
   }
 ]
 
function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs