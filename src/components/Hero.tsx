'use client';

import { useRef } from 'react';
import Image from 'next/image';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);

interface HeroProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

const Hero: React.FC<HeroProps> = ({ videoRef }) => {
  const root = useRef<HTMLDivElement | null>(null);

  // react-responsive runs client-side; fine for a client component.
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(
    () => {
      // Scope all selectors to this component instance
      // so multiple <Hero /> don't clash.
      const titleSel = gsap.utils.selector(root)('.title');
      const subtitleSel = gsap.utils.selector(root)('.subtitle');
      const rightLeafSel = gsap.utils.selector(root)('.right-leaf');
      const leftLeafSel = gsap.utils.selector(root)('.left-leaf');
      const arrowSel = gsap.utils.selector(root)('.arrow');
      const videoSel = gsap.utils.selector(root)('video');

      // SplitText instances
      const heroSplit = new SplitText(titleSel, { type: 'chars,words' }) as any;
      const paragraphSplit = new SplitText(subtitleSel, { type: 'lines' }) as any;

      // Apply text-gradient class before animating
      (heroSplit.chars as HTMLElement[]).forEach((char: HTMLElement) => {
        char.classList.add('text-gradient');
      });

      // Entrances
      gsap.from(heroSplit.chars, {
        yPercent: 100,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.06,
      });

      gsap.from(paragraphSplit.lines, {
        opacity: 0,
        yPercent: 100,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.06,
        delay: 1,
      });

      // Global video scrub timeline that spans the entire page
      const video = videoRef.current;
      const onLoaded = () => {
        if (!video) return;
        
        // Create a global video timeline that spans from hero to end of cocktails
        const globalVideoTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: 'main',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            pin: false,
          },
        });

        // Animate video currentTime as user scrolls through entire page
        globalVideoTimeline.to(video, { 
          currentTime: video.duration, 
          ease: 'none' 
        });

        // Hero section parallax effects
        const heroParallaxTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });

        heroParallaxTimeline
          .to(rightLeafSel, { y: 200, ease: 'none' }, 0)
          .to(leftLeafSel, { y: -200, ease: 'none' }, 0)
          .to(arrowSel, { y: 100, ease: 'none' }, 0);

        // Refresh ScrollTrigger after setup
        ScrollTrigger.refresh();
      };

      if (video) {
        // If already loaded (e.g., from cache), run immediately
        if (video.readyState >= 1) onLoaded();
        video.addEventListener('loadedmetadata', onLoaded, { once: true });
      }

      // Cleanup: revert SplitText & listeners when unmounting
      return () => {
        try {
          paragraphSplit.revert && paragraphSplit.revert();
          heroSplit.revert && heroSplit.revert();
        } catch {
          // ignore
        }
        if (video) {
          video.removeEventListener('loadedmetadata', onLoaded);
        }
        // Kill all ScrollTriggers for this component
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === root.current) {
            trigger.kill();
          }
        });
      };
    },
    { scope: root, dependencies: [isMobile] } // re-run if breakpoint flips
  );

  return (
    <>
      <section id="hero"  ref={root}>
        <h1 className="title">MOJITO</h1>

        <Image
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
          width={400}
          height={400}
          priority
        />
        <Image
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
          width={400}
          height={400}
          priority
        />

        <div className="body">
          {/* <Image src="/images/arrow.png" alt="arrow" className="arrow" width={64} height={64} /> */}

          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and
                timeless recipes — designed to delight your senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;
