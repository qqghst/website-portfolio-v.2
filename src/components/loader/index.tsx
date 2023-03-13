import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

import noise2 from '../../assets/noise2.webp';

import { gsap } from 'gsap/dist/gsap';
import Blur from '@/ui/blur';

interface ILoaderProps {
    loaderOpacity: number;
}

const Loader: React.FC<ILoaderProps> = ({ loaderOpacity }) => {
    let textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(textRef.current, {
            duration: 1.4,
            ease: 'none',
            text: '/good<br />design<br />can speak.',
        });
    }, []);
    return (
        <>
            {/* <Image
                className='z-[1000]'
                src={noise2}
                alt='frontend developer web designer'
                layout='fill'
                objectFit='cover'
                quality={100}
            /> */}
            <section
                className={`${styles.loader} bg-black z-10 overflow-hidden`}
                style={{ opacity: loaderOpacity }}>
                <div className='min-h-screen mx-auto flex justify-center items-center relative'>
                    <h1
                        ref={textRef}
                        className={`${styles.loaderTitleGradient} z-[900] text-whiteCustom leading-[110%] xl:leading-[100%] tracking-[-1px] font-semibold text-[47.78px] md:text-[57.33px] xl:text-[99.07px]`}
                    />
                    <Blur />
                </div>
            </section>
        </>
    );
};

export default Loader;
