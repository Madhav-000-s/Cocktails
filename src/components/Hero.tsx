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

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(
    () => {
      const titleSel = gsap.utils.selector(root)('.title');
      const subtitleSel = gsap.utils.selector(root)('.subtitle');
      const rightLeafSel = gsap.utils.selector(root)('.right-leaf');
      const leftLeafSel = gsap.utils.selector(root)('.left-leaf');
      const arrowSel = gsap.utils.selector(root)('.arrow');
      const videoSel = gsap.utils.selector(root)('video');

      const heroSplit = new SplitText(titleSel, { type: 'chars,words' }) as any;
      const paragraphSplit = new SplitText(subtitleSel, { type: 'lines' }) as any;

      (heroSplit.chars as HTMLElement[]).forEach((char: HTMLElement) => {
        char.classList.add('text-gradient');
      });

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

      const video = videoRef.current;
      const onLoaded = () => {
        if (!video) return;
        
        const globalVideoTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: 'main',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            pin: false,
          },
        });

        globalVideoTimeline.to(video, { 
          currentTime: video.duration, 
          ease: 'none' 
        });

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

        ScrollTrigger.refresh();
      };

      if (video) {
        if (video.readyState >= 1) onLoaded();
        video.addEventListener('loadedmetadata', onLoaded, { once: true });
      }

      return () => {
        try {
          paragraphSplit.revert && paragraphSplit.revert();
          heroSplit.revert && heroSplit.revert();
        } catch {
        }
        if (video) {
          video.removeEventListener('loadedmetadata', onLoaded);
        }
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === root.current) {
            trigger.kill();
          }
        });
      };
    },
    { scope: root, dependencies: [isMobile] } 
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