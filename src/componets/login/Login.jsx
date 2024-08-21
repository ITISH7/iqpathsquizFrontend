import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.backgroundShapes}>
                <img src="src\assets\AdblockBg.png" alt="Background Shapes" />
            </div>
            <div className={styles.loginDiv}>
                <button className={styles.loginButton}>
                    <a href="/login"> Login to Join </a>
                </button>
                <p className={styles.loginPara}>
                    Get started now!
                </p>
            </div>
        </div>
    );
};

export default Login;

// import React from 'react';
// import styles from './Login.module.css';

// const Login = () => {
//   return (
//     <div className={styles.login}>
//       <div className={styles.loginButtonContainer}>
//         <a href="/login" className={styles.loginButton}>
//            Login to Join
//         </a>
//         <p className={styles.getStartedText}>
//             Get started now!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
