import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
  ];

  const { isLoggedIn, ToggleLogin } = useContext(AuthContext);

  return (
    <header className={`${styles.header} `}>
      <nav className={`${styles.nav} `}>
        <div>
          <img className={styles.logo} src="src\assets\logo.svg" alt="Logo" />
        </div>
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li
            key={index}
            className={`${styles.navItem} ${
              location.pathname === item.path ? styles.active : ''
            }`}
          >
            <Link to={item.path} className={styles.navLink}>
              {item.name}
            </Link>
          </li>
          ))}
        </ul>
        <div className={styles.authButtons}>
          {isLoggedIn ? (
            <div className={styles.iconContainer}>
              <img  src="src\assets\ProfilePicture.svg" alt="ProfilePiture" className={`${styles.icon} ${styles.profile}`} onClick={() => ToggleLogin(isLoggedIn)}/>
              <img src="src\assets\notification.svg" alt="notification" className={styles.icons} />
            </div>
          ) : (
            <div className={styles.joiningBut}>
              <button className={styles.loginButton}
                      onClick={() => ToggleLogin(isLoggedIn)}
              >Log in</button>
              <button className={styles.joinButton}>Join Free</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
