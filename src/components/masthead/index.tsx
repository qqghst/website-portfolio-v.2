import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

import Blur from '@/ui/blur';
import Button from '@/ui/button';

import gsap from 'gsap';
import SplitType from 'split-type';

const Masthead: React.FC = () => {
    // let titleRef = useRef(null);
    let titleRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        let tl = gsap.timeline();

        // const split = new SplitType(titleRef.current!, { types: 'lines', lineClass: styles['lineChildren']});
        // const splitParent = new SplitType(titleRef.current!, { types: 'lines', lineClass: styles['lineParent']});
        const splitParent = new SplitType(titleRef.current!, {
            types: 'lines',
            lineClass: styles['lineParent'],
        });
        const split = new SplitType(splitParent.lines, {
            types: 'lines',
            lineClass: styles['lineChildren'],
        });

        tl.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.01,
            ease: 'power2',
        });
        // tl.fromTo(
        //     split.lines,
        //     {
        //         opacity: 0,
        //         y: 500,
        //     },
        //     {
        //         duration: 1.6,
        //         opacity: 1,
        //         y: 0,
        //         stagger: 0.01,
        //         ease: 'power2'
        //     }
        // );
    }, []);

    return (
        <Blur>
            <section className='bg-black'>
                <div className='px-[40px] mx-auto min-h-screen flex justify-center items-center'>
                    <h1
                        ref={titleRef}
                        className='text-whiteCustom leading-[110%] xl:leading-[100%] tracking-[-1px] font-semibold text-[47.78px] md:text-[57.33px] xl:text-[99.07px] z-10'>
                        {/* this is a{' '}
                        <span className={`${styles.gradient}`}>catchy</span>{' '}
                        header
                        <br />
                        all the fun below
                        <br />
                        keep scrolling. */}
                        TAKE <br />
                        EASY
                    </h1>
                </div>
            </section>
        </Blur>
    );
};

export default Masthead;

{
    /* <span>
this is a{' '}
<span className={`${styles.gradient}`}>catchy</span>{' '}
header
</span>
<br />
<span>all the fun below</span>
<br />
<span>keep scrolling.</span> */
}
