import React from 'react';
import styles from "./Header.module.scss";
const Header=()=>
{
    return (
    <> 
    <div className={styles.oneline}>
    <div className={styles.leftDiv}> 
    <img className={styles.logostyle}/>
    </div>   
    <div className={styles.rightDiv}> 
    <ul className={styles.navbar}>
        <li className={styles.s1}> <a> Home </a>   </li>
        <li className={styles.s1}> <a> Events </a>  </li>
        <li className={styles.s1}> <a> Movies  </a> </li>
        <li className={styles.s1}> <a> Teams </a> </li>    
        <li className={styles.s1}> <a>FAQs </a> </li>
    </ul>
    </div>
    </div>
    </> );
}

export default Header;