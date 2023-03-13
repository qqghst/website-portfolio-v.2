import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

import MouseBlur from '@/ui/mouse-blur';

import gsap from 'gsap';
import SplitType from 'split-type';

const Masthead: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        const splitParent = new SplitType(titleRef.current!, {
            types: 'lines',
            lineClass: styles['lineParent'],
        });
        const split = new SplitType(splitParent?.lines ?? [], {
            types: 'lines',
        });

        tl.fromTo(
            split.lines,
            {
                opacity: 0,
                y: 500,
            },
            {
                duration: 1.2,
                opacity: 1,
                y: 0,
                stagger: 0.02,
                ease: 'power2'
            }
        );
    }, []);

    return (
        <MouseBlur>
            <section className='bg-black'>
                <div className='min-h-screen px-[40px] mx-auto flex justify-center items-center'>
                    <h1
                        ref={titleRef}
                        className='text-whiteCustom leading-[110%] xl:leading-[100%] tracking-[-1px] font-semibold text-[47.78px] md:text-[57.33px] xl:text-[99.07px] z-10'>
                        this is a{' '}
                        <span className={`${styles.gradient}`}>catchy</span>{' '}
                        header
                        <br />
                        all the fun below
                        <br />
                        keep scrolling.
                    </h1>
                </div>
            </section>
        </MouseBlur>
    );
};

export default Masthead;
