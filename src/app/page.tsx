'use client';

import { useEffect, useRef } from 'react';
import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
gsap.registerPlugin(ScrollTrigger,SplitText)
import Cocktails from "@/components/Cocktails"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Art from "@/components/Art"

export default function main(){
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Refresh ScrollTrigger after all components are mounted
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return(
    <main>
      {/* Global video element that spans entire page */}
      <div className="global-video fixed inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output.mp4"
          className="w-full h-full object-cover"
        />
      </div>
      
      <Navbar/>
      <Hero videoRef={videoRef}/>
      <Cocktails/>
      <About/>
      <Art/>
  
    </main>
  )
}