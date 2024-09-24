import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src="src/assets/LogoIcon.svg" alt="iQPaths Logo" />
          <p>Something here about our motto.</p>
        </div>

        <div className={styles.footerLinks}>
          <div>
            <h4>iQPath</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4>Useful Links</h4>
            <ul>
              <li><a href="/dsa-practice">DSA Practice</a></li>
              <li><a href="/interviews">Interviews</a></li>
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="/competitions">Competitions</a></li>
              <li><a href="/resources">Resources</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow us on</h4>
            <div className={styles.socialIcons}>
              <img src="src/assets/InstagramIcon.svg" alt="Instagram" />
              <img src="src/assets/YoutubeIcon.svg" alt="YouTube" />
              <img src="src/assets/TwitterIcon.svg" alt="Twitter" />
            </div>
            <h4>Contact Us: </h4>
            <div className={styles.contactSec}>
              <ul>
                <li className={styles.inlineItem}>
                  <img src="src/assets/MailIcon.svg" alt="Email" />
                  <a href="mailto:shriyansh@gmail.com">info@iqpaths.com</a>
                </li>
                <li className={styles.inlineItem}>
                  <img src="src/assets/FeedbackIcon.svg" alt="Feedback" />
                  <a href="/feedback">Feedback</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright © 2024 iQPath - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
