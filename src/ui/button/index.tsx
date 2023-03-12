import React from 'react';
import styles from './styles.module.scss';

interface IButtonProps {
    children: React.ReactNode,
    type: 'button' | 'submit' | 'reset',
    onClick?: (event: React.MouseEvent) => void,
}

const Button: React.FC<IButtonProps> = ({children, type, onClick}) => {
  return (
    <button type={type} className={`${styles.button}`}>
        <p className={`${styles.text}`}>{children}</p>
        <div className={`${styles.circle}`}/>
    </button>
  )
}

export default Button