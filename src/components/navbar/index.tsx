import React from 'react';
import Link from 'next/link';

import Button from '@/ui/button';

import styles from './styles.module.scss';

const Navbar: React.FC = () => {
    return (
        <section className=''>
            <div className='flex flex-row justify-between items-center py-[40px] px-[64px] mx-auto absolute left-0 right-0 z-10'>
                <Link href='/' className='text-whiteCustom text-[32px]'>DMITRY OCH</Link>
                <ul className='flex flex-row items-center gap-[40px] text-whiteCustom'>
                    <Link href='/'>resume</Link>
                    <Link href='/'>works</Link>
                    <Button type='button'>
                        <span>contact me</span>
                    </Button>
                </ul>
            </div>
        </section>
    );
};

export default Navbar;
