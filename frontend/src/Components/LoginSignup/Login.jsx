import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styles from './loginSignup.module.css'
import OAuthButton from './OAuthButton'
const Login = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.accountForm}>
            <h1 className={styles.headingOne}>Log in to Trello</h1>
            <div className={styles.mainContainer}>
                <div className={styles.loginForm}>
                    <input type="text" className={styles.formField} name="user" placeholder="Enter email" />
                    <input autoComplete='off' type="password" className={styles.formField} name="password" placeholder="Enter password" />
                    <button className={styles.loginBtn}>
                        Log in
                    </button>
                </div>
                <div className={styles.loginMethods}>
                    <div className={styles.loginMethodOr}>
                        OR
                    </div>
                    <div className={styles.loginMethodContainer}>
                        <OAuthButton label="Google" url="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg" />
                        <OAuthButton label="Microsoft" url="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/72ece804e5285ab6507e2406157cda3c/microsoft-logo.svg" />
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Login