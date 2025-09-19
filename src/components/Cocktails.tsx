'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { cocktailLists, mockTailLists } from '@/constants';

gsap.registerPlugin(ScrollTrigger);

const Cocktails: React.FC = () => {
  useGSAP(() => {
    // Subtle parallax effects for cocktail leaves that work with the global video
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#cocktails',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });

    parallaxTimeline
      .to('#c-left-leaf', { x: -50, y: 50, ease: 'none' }, 0)
      .to('#c-right-leaf', { x: 50, y: 50, ease: 'none' }, 0);

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();
  }, []);

  return (
    <section id="cocktails" >
      {/* If these images live in /public/images, referencing by path is fine. 
          Using next/image keeps TS/Next happy and gives optimization. */}
      <Image
        src="/images/cocktail-left-leaf.png"
        alt="left leaf"
        id="c-left-leaf"
        width={320}
        height={320}
        priority
      />
      <Image
        src="/images/cocktail-right-leaf.png"
        alt="right leaf"
        id="c-right-leaf"
        width={320}
        height={320}
        priority
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
