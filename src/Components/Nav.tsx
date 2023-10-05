import React from "react";
import styles from './Nav.module.css';
import * as data from './links.json';

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;
type Link = {
    label: string,
    href: string
}
const NavBar: React.FC<{}> = () => {
    return(
        <nav className={styles.navbar}>
            <div className = {styles['logo-container']}>
                <span>Logo</span>
            </div>
           <div className={styles['links-container']}>
            {links.map((link: Link) => {
                return(
                    <div key={link.href} className={styles['link']}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
           </div>
            
        </nav>
    )
}

export default NavBar;