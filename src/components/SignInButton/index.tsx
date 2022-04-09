import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import styles from '../SignInButton/styles.module.scss'
export function SignInButton(){
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button className={styles.signInButton} type="button">
            <FaGithub color="#46FF1F"/>
            Rylder Oliveira
            <FiX color="#A2A2A2" className={styles.closeIcon} />
        </button>
    ):(
        <button className={styles.signInButton} type="button">
            <FaGithub color="#FFF000"/>
            Sign in with GitHub
        </button>    
    )
}