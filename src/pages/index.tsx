import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';

import Loader from '@/components/loader';
import Navbar from '@/components/navbar';
import Masthead from '@/components/masthead';
import CustomCursor from '@/ui/custom-cursor';
import Footer from '@/components/footer';

// import gsap from 'gsap';
import { gsap } from 'gsap/dist/gsap';
import TextPlugin from 'gsap/dist/TextPlugin';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);
    }, []);

    const [loader, setLoader] = useState(false);
    const [loaderOpacity, setLoaderOpacity] = useState(1);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoader(false);
    //     }, 1500);
    // }, []);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoaderOpacity(0);
    //         setTimeout(() => {
    //             setLoader(true);
    //         }, 1100);
    //     }, 2000);
    // }, []);
    return (
        <>
            {loader ? (
                <Loader loaderOpacity={loaderOpacity}/>
            ) : (
                <div >
                    <CustomCursor />
                    <Navbar />
                    <Masthead />
                    <Footer />
                </div>
            )}
        </>
    );
}
