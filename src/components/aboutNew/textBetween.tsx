import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const TextBetween: React.FC = () => {
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();

        tl.fromTo(
            textRef1.current,
            {
                opacity: 0,
                y: '-80%',
            },
            {
                opacity: 1,
                // y: 0,
                duration: 0.4,
                stagger: 0.2,
                // autoAlpha: 1,
                scrollTrigger: {
                    trigger: textRef1.current,
                    // start: 'start 90%',
                    // start: 'bottom bottom',
                    start: 'bottom bottom+=80px',
                    // end: "+=1000",
                    // start: "top center",
                    scrub: 0.2,
                    // pin: true,
                    // toggleActions: 'restart pause reverse pause',
                    // toggleActions: "restart complete restart reset"
                },
            }
        );

        tl.fromTo(
            textRef2.current,
            {
                opacity: 0,
                y: '100%',
            },
            {
                opacity: 1,
                // y: 0,
                duration: 0.4,
                stagger: 0.2,
                // autoAlpha: 1,
                scrollTrigger: {
                    trigger: textRef2.current,
                    // start: 'start 90%',
                    // start: 'bottom bottom',
                    start: 'bottom bottom+=80px',
                    // end: "+=1000",
                    // start: "top center",
                    scrub: 0.2,
                    // pin: true,
                    // toggleActions: 'restart pause reverse pause',
                    // toggleActions: "restart complete restart reset"
                },
            }
        );
    }, []);
    return (
        <div className='flex justify-between items-center'>
            <p
                ref={textRef1}
                className='text-whiteCustom text-[32.81px] w-[650px] leading-[120%]'>
                Hello, my name is Dmitry, I&apos;m 22 years old. As you can see
                this site looks stylish. But only only outside and also inside?
                What does it mean? Keep reading.
            </p>
            <p
                ref={textRef2}
                className='text-whiteCustom text-[32.81px] w-[650px] leading-[120%] '>
                I do web design & frontend development. Using my ux/ui skill
                sand tech skills in coding i can do really good looking with
                nice animations sites.
            </p>
        </div>
    );
};

export default TextBetween;
