"use client"
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { navLinks } from '@/constants'

const Navbar = () => {
 useGSAP(() => {
	const navTween = gsap.timeline({
	 scrollTrigger: {
		trigger: 'nav',
		start: 'bottom top'
	 }
	});
	
	navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
	 backgroundColor: 'rgba(0, 0, 0, 0)',
	 backdropFilter: 'blur(30px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
 })
 
 return (
	<nav className="fixed top-0 w-full z-50">
	 <div className="container mx-auto px-6 py-4 flex justify-between items-center">
		<a href="#home" className="flex items-center gap-2 ">
		 <img src="/images/logo.png" alt="logo" />
		 <p>Velvet Pour</p>
		</a>
		
		<ul>
		 {navLinks.map((link) => (
			<li key={link.id}>
			 <a href={`#${link.id}`}>{link.title}</a>
			</li>
		 ))}
		</ul>
	 </div>
	</nav>
 )
}
export default Navbar