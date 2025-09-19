import gsap from "gsap"
import { ScrollTrigger,SplitText } from "gsap/all"
gsap.registerPlugin(ScrollTrigger,SplitText)
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"

export default function main(){
  return(<main>
            <Navbar/>
            <Hero/>
            <div className="h-dvh bg-black"/>
         </main>)
}