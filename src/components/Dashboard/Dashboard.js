import React from 'react';
import { Button} from 'react-bootstrap';
import styles from "./Dashboard.module.scss"
import { ReactComponent as Logo } from '../../svg/logo.svg';
import { ReactComponent as Rectangle } from '../../svg/Rectangle 196.svg';

export default function Dashboard(){
    return (
        <div className={styles.container}>
            <div className={styles.leftDiv}>
                <Logo className={styles.logo}/>
                <Rectangle className={styles.rectangle}/>
            </div>
            <div className={styles.rightDiv}>
                <div className={styles.login}>
                    <div className={styles.innerLogin}>
                        <div className={styles.againInner}>
                            <h1 className={styles.pinHeading}>Set your account pin</h1>
                            <input type="password" size="4" className={styles.inputBox} placeholder="Enter new pin" />
                            <div style={{paddingTop: "70px"}}></div>
                            <input type="password" size="4" className={styles.inputBox} placeholder="Confirm new pin" />
                        </div>
                        <div style={{paddingTop: "10px"}}></div>
                        <div>
                            <div className={styles.save} type="button" onClick ><a href="/inner">Save Changes</a></div>
                            <Button variant="primary">Primary</Button>{' '}
                            {/* <button className={styles.save} type="submit"><a href="/inner">Save Changes</a></button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}