import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

import javascript from '../../assets/marquee/react.svg';
import nextjs from '../../assets/marquee/nextjs.svg';

interface IProps {
    textFirst: string;
}

const MarqueeItem: React.FC<IProps> = ({ textFirst }) => {
    return (
        <div className='flex flex-row justify-center items-center text-center gap-[160px] flex-grow-0'>
            <Image
                src={nextjs}
                alt='frontend developer web designer'
                width={144 / 2}
                height={144 / 2}
            />
            <Image
                className='text-white bg-white'
                src={javascript}
                alt='frontend developer web designer'
                width={144 / 2}
                height={144 / 2}
            />
            <p className={`${styles.p} text-whiteCustom`}>{textFirst}</p>
            <Image
                className='text-white bg-white'
                src={javascript}
                alt='frontend developer web designer'
                width={144 / 2}
                height={144 / 2}
            />
            <Image
                className='text-white bg-white'
                src={javascript}
                alt='frontend developer web designer'
                width={144 / 2}
                height={144 / 2}
            />
            <Image
                className='text-white bg-white'
                src={javascript}
                alt='frontend developer web designer'
                width={144 / 2}
                height={144 / 2}
            />
            <Image
                className='text-white bg-white'
                src={javascript}
                alt='frontend developer web designer'
                width={144 / 2}
                height={144 / 2}
            />
        </div>
    );
};

export default MarqueeItem;
