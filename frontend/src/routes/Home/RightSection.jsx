import styles from "./Home.module.scss";
const RightSection=()=>
{
    return (
        <>
            <img className={styles.firstimage} /> 
            <img className={styles.secondimage}/> 
            <img className={styles.thirdimage}/> 
            <img className={styles.fourthimage}/> 
        </>
    );
}

export default RightSection;