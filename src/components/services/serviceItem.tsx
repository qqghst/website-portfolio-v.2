import React from 'react';
import styles from './styles.module.scss';

interface IServiceProps {
    serviceNumber: string;
    serviceTitle: string;
}

const serviceItem: React.FC<IServiceProps> = ({
    serviceNumber,
    serviceTitle,
}) => {
    return (
        <>
            <div className='bg-white/50 w-full h-[1px]' />
            <div className='flex flex-row justify-between items-start'>
                <h4 className='text-whiteCustom'>
                    <div className='text-whiteCustom text-[16px] italic tracking-[1px]'>
                        {serviceNumber}
                        &nbsp;&minus;&nbsp;
                        {serviceTitle}
                    </div>
                </h4>
                <p className='text-whiteCustom text-[39.81px] leading-[140%] w-[800px] font-light'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
                    ipsum dolor sit amet consectetur adipisicing.{' '}
                    <span className='text-greyCustom'>
                        Repudiandae consectetur possimus ea qui eligendi labore
                        ipsam totam neque saepe earum atque commodi voluptatum
                        unde ab quisquam assumenda, odit modi! Ipsum.
                    </span>
                </p>
            </div>
            <div className='bg-white w-full h-[1px]' />
        </>
    );
};

export default serviceItem;
