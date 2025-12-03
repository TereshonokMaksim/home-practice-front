import styles from "./footer.module.css"


export function Footer(){
    return  <footer>
                <p>2025, Remery</p>
                <p className={styles.clickableFooterLink}>Terms of use</p>
                <p className={styles.clickableFooterLink}>Privacy</p>
                <p className={styles.clickableFooterLink}>Cookie management</p>
                <p className={styles.clickableFooterLink}>Security</p>
            </footer>
}