import React from 'react';
import styles from './styles.module.scss';

import ServiceItem from './serviceItem';

const Services: React.FC = () => {
    return (
        <section className='bg-black'>
            <div className='px-[64px] mx-auto flex flex-col gap-[160px]'>
                <ServiceItem
                    serviceNumber='01'
                    serviceTitle='WEB DESIGN'
                />
                <ServiceItem
                    serviceNumber='02'
                    serviceTitle='FRONTEND DEV.'
                />
            </div>
        </section>
    );
};

export default Services;
