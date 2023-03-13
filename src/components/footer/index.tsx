import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Footer: React.FC = () => {
    return (
        <section className='bg-black'>
            <div className='min-h-screen px-[64px] mx-auto flex justify-center items-center'>
                <h1 className='text-whiteCustom leading-[110%] xl:leading-[100%] tracking-[-1px] font-semibold text-[47.78px] md:text-[57.33px] xl:text-[99.07px] z-10'>
                    let&apos;s create
                    <br />
                    something together
                    <br />
                    <Link href='/'>
                        <span className={`${styles.gradient}`}>
                            contact me.
                        </span>{' '}
                    </Link>
                </h1>
            </div>
        </section>
    );
};

export default Footer;
