import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

import TextCenter from './textCenter';
import TextBetween from './textBetween';

const AboutNew: React.FC = () => {
    return (
        <section className='bg-black pb-[1500px] pt-[200px]'>
            <div className='px-[64px] mx-auto '>
                <TextBetween />
                <TextCenter />
            </div>
        </section>
    );
};

export default AboutNew;
