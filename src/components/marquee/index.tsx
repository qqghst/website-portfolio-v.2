import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

import javascript from '../../assets/marquee/react.svg';
import nextjs from '../../assets/marquee/nextjs.svg';
import MarqueeItem from './marqueeItem';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Marquee: React.FC = () => {
    const firstMarqueeRef = useRef(null)
    const secondMarqueeRef = useRef(null)

    useEffect(() => {
        let tl = gsap.timeline();
        tl.to(firstMarqueeRef.current, {
            // xPercent: 100,
            repeat: -1,
            ease: 'none',
            // delay: 5,
            // duration: 5,
            scrollTrigger: {
                trigger: '#section',
                start: 'top center',
                end: 'bottom top',
                scrub: true,
                // pin: true,
            },
        });
        tl.to(secondMarqueeRef.current, {
            xPercent: -100,
            ease: 'none',
            // delay: 5,
            // duration: 5,
            scrollTrigger: {
                trigger: '#section',
                start: 'top center',
                end: 'bottom top',
                scrub: true,
                // pin: true,
            },
        });
    }, []);

    return (
        <section className='bg-black'>
            <div className='px-[64px] py-[100px] mx-auto flex justify-between'>
                <div className='flex flex-col justify-center items-center gap-[64px]'>
                    <div ref={firstMarqueeRef}>
                        <MarqueeItem textFirst='web design.' />
                    </div>
                    <div ref={secondMarqueeRef}>
                        <MarqueeItem textFirst='frontend dev.' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marquee;
