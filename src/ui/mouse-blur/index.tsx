import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';

interface Props {
    children: React.ReactNode;
}

const MouseBlur = ({ children }: Props) => {
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: PointerEvent) => {
            const { clientX, clientY } = event;

            blobRef.current?.animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`,
                },
                { duration: 3000, fill: 'forwards' }
            );
        };
        window.addEventListener('pointermove', handleMouseMove);

        return () => {
            window.removeEventListener('pointermove', handleMouseMove);
        };
    }, [blobRef]);

    return (
        <>
            <div
                className={`${styles.blob}`}
                ref={blobRef}
            />
            <div className={`${styles.blur}`} />
            {children}
        </>
    );
};

export default MouseBlur;
