import React from 'react';
import styles from './NoticeSection.module.css';


const NoticeSection = () => {

    return (
        <div className={styles.notice}> 
            <div className={styles.noticeHeading}>
                <img src="src/assets/NoticeIcon.svg" alt="Notice" className={styles.noticeIcon} />
                <h1>Important Notice</h1>
            </div>
            <div className={styles.noticePara}>
                <p>
                    The evaluation will emphasize consistency over 45 days, not the speed of completion. This challenge is meant to help you build sustainable habits and long-term skills.
                </p>
            </div>
            <button className={styles.dismissButton}>Don't show this again</button>
        </div>
    );
}

export default NoticeSection;
