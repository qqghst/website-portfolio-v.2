import React, { useEffect } from 'react';
import styles from './styles.module.scss';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const About: React.FC = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const split = new SplitType('p', { types: 'lines' });
        split.lines?.forEach((target) => {
            gsap.to(target, {
                backgroundPositionX: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: target,
                    scrub: 0.2,
                    start: 'top center',
                    end: 'bottom center',
                },
            });
        });
    }, []);
    return (
        <section className='bg-black'>
            <div className='px-[64px] mx-auto'>
                <div className={`${styles.scrollingText}`}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Error quas voluptates fugit, iusto iste nobis
                        tenetur, ratione provident est iure exercitationem
                        ducimus beatae laudantium totam temporibus, officiis
                        quidem. Praesentium, ratione.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
