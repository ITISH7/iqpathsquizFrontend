import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { AuthContext } from '../../context/AuthContext';
import utilityStyle from '../../utils/utils.module.css';

function Header() {
  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Courses', path: '/courses' },
    { name: 'Testimonial', path: '/testimonial' },
    { name: 'DashBoard', path: '/' },
    { name: 'Test', path: '/test' },
    { name: 'Result', path: '/result' },
  ];

  const { isLoggedIn, setIsLoggedIn,ToggleLogin } = useContext(AuthContext);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isBellRung, setIsBellRung] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(prevState => !prevState);
    document.body.style.overflowY = isMobileNavOpen ? 'auto' : 'hidden';
  };

  const handleBellHover = () => {
    if (!isBellRung) {
      const bell = document.getElementById('notificationBell');
      bell.classList.add(styles.ring);

      setTimeout(() => {
        bell.classList.remove(styles.ring);
        setIsBellRung(true);
      }, 1000); // Wait for the animation to complete (twice the duration of 0.5s * 2)
    }
  };

  return (
    <header className={`${styles.header} `}>
      <nav className={`${styles.nav} ${utilityStyle.container}`}>
        <div>
          <img className={styles.logo} src="src/assets/logo.svg" alt="Logo" />
        </div>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={`${styles.navItem} `}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              {item.name}
            </NavLink>
          </li>
          
          ))}
        </ul>
        <div className={styles.authButtons}>
          {isLoggedIn ? (
            <div className={styles.iconContainer}>
              <img
                src="src/assets/ProfilePicture.svg"
                alt="Profile"
                className={`${styles.icon} ${styles.profile}`}
                onClick={() => setIsLoggedIn(false)}
              />
              <div
                className={`${styles.iconContainer} ${isBellRung ? styles.ringCompleted : ''}`}
                onMouseEnter={handleBellHover}
              >
                <img
                  id="notificationBell"
                  src="src/assets/notification.png"
                  alt="notification"
                  className={styles.icons}
                />
                <div className={styles.notificationDot}></div>
              </div>
            </div>
          ) : (
            <div className={styles.joiningBut}>
              {/* <Link to="/login"> */}
                <button className={styles.loginButton} 
                onClick={() => ToggleLogin(isLoggedIn)}
                >
                  Log in
                </button>
              {/* </Link> */}
              <button className={styles.joinButton}>Join Free</button>
            </div>
          )}
        </div>
      </nav>
      <button className={styles.headerBarContainer} onClick={toggleMobileNav}>
        <img className={styles.headerBars} src="src/assets/bars.svg" alt="Bars" />
      </button>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMobileNavOpen ? styles.open : styles.closed}`}>
        <button className={styles.headerBarContainer} onClick={toggleMobileNav}>
          <img className={styles.headerBars} src="src/assets/bars.svg" alt="Bars" />
        </button>
        <nav>
          <ul className="mobileNavMenu">
            <li>
              <a className="mobileNavLink" href="#Home">
                Home
              </a>
            </li>
            <li>
              <a className="mobileNavLink" href="#Courses">
                Courses
              </a>
            </li>
            <li>
              <a className="mobileNavLink" href="#Testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="mobileNavLink" href="#Dashboard">
                Dashboard
              </a>
            </li>
            <li>
              <a className="mobileNavBtn btn" href="#">
                Test
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
