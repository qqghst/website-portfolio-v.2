import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const TextCenter: React.FC = () => {
    const textCenterRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();

        const splitParent = new SplitType(textCenterRef.current!, {
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
                scrollTrigger: {
                    trigger: textCenterRef.current,
                    start: 'top bottom',
                    scrub: 0.1,
                    markers: true,
                    // pin: true,
                },
                duration: 1.8,
                opacity: 1,
                y: 0,
                stagger: 0,
                ease: 'power2',
            }
        );
    }, []);

    return (
        <div>
            <h2
                ref={textCenterRef}
                className='text-[68.8px] text-whiteCustom font-semibold leading-[100%] opacity-1'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={`${styles.gradient}`}>
                    Мой скилл по жизни —{' '}
                </span>
                проявлять эмпатиюк людям, отсюда этот проект. Ибо я знаю, чего
                тебе хочется.
            </h2>
        </div>
    );
};

export default TextCenter;
