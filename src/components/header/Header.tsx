import { Link } from "react-router-dom";
import styles from "./header.module.css";


export function Header(){
    return <header>
                <div className={styles.leftHeaderSide}>
                    <h1>Remery</h1>
                    <div>
                        <Link to = "/" id = "homeLink">Home</Link>
                        <Link to = "/posts/" id = "allPostsLink">All posts</Link>
                        <button>Create Post</button>
                    </div>
                </div>
                <div className={styles.rightHeaderSide}>
                    <h6>\+/</h6> 
                    <div className={styles.hidden}>
                        <div>
                            <p>\+/</p>
                            <p>English</p>
                        </div>
                        <div>
                            <p>---</p>
                            <p>Українська</p>
                        </div>
                    </div>
                    <a href="login" id = "signInButton" className={styles.loginButton}>Sign In</a>
                    <a href="register" id = "signUpButton" className={styles.registrationButton}>Sign Up</a>
                    <h5 className={styles.userIcon}>O</h5>
                </div>
            </header>
}
