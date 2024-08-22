import React from 'react';
import styles from './AddBlock.module.css';

const AddBlock = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.backgroundShapes}>
                
            </div>
            <div className={styles.loginDiv}>
                <button className={styles.loginButton}>
                    <img src="src\assets\LoginKey.svg" alt="Login Key" />
                    <a href="/login"> Login to Join </a>
                </button>
                <p className={styles.loginPara}>
                    Get started now!
                </p>
            </div>
        </div>
    );
};

export default AddBlock;

