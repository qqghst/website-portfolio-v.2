import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';

import Navbar from '@/components/navbar';
import Masthead from '@/components/masthead';
import CustomCursor from '@/ui/custom-cursor';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
    }, [])
    return (
        <>
            <CustomCursor />
            <div>
                <Navbar />
                <Masthead />
            </div>
        </>
    );
}
