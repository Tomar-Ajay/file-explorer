import React from 'react';
import styles from "./Left.module.scss"
import { ReactComponent as Logo } from '../../svg/logo.svg';
import LockModal from '../Modal/LockModal';

export default function Left(){
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Logo className={styles.logo}/>
            </div>
            <div>
                <h1>Folder Space</h1>
            </div>
            <div className={styles.bottom}>
                <LockModal />
            </div>
        </div>
)}