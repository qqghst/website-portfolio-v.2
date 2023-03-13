import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

import vectorBlue from '../../assets/Vector.svg';
import vectorAqua from '../../assets/Vector2.svg';
import vectorPurple from '../../assets/Vector3.svg';

const Blur: React.FC = () => {
    return (
        <>
            <div className={`${styles.blur}`} />
            <div>
                <Image
                    className={`${styles.svg} absolute left-[400px] top-[80px] rotate-[15deg]`}
                    src={vectorPurple}
                    alt='frontend developer'
                    width={700 / 2}
                    height={700 / 2}
                />
                <Image
                    className={`${styles.svg} absolute left-[850px] top-[100px] z-20 rotate-[-15deg]`}
                    src={vectorBlue}
                    alt='frontend developer'
                    width={700 / 2}
                    height={700 / 2}
                />
                <Image
                    className={`${styles.svg} absolute left-[850px] top-[473.02px] rotate-[15deg]`}
                    src={vectorAqua}
                    alt='frontend developer'
                    width={700 / 2}
                    height={700 / 2}
                />
            </div>
            <div className='z-[2000]'></div>
        </>
    );
};

export default Blur;
