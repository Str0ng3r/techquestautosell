import { Link } from "react-router-dom"
import styles from './header.module.css'
export const Header = ()=> {
    return (
        <header className={styles.header}>
            <ul className={styles.list}>  
                <li className={styles.li_header}><Link to='/' className={styles.li_header }>Home</Link></li>
                <li className={styles.li_header}><Link to='/catalog' className={styles.li_header }>Catalog</Link></li>
                <li className={styles.li_header}><Link to='/favorites' className={styles.li_header }>Favorites</Link></li>
            </ul>
        </header>
    )
}