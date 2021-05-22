import styles from './Card.module.scss';
const Card=(props)=>
{
    return(
        <>
        <div className={styles.cardstyle}>
        <p className={styles.Headingstyle}> {props.Heading} </p>
        <p className={styles.Contentstyle}> {props.Content} </p>
        <br />
        <p className={styles.Contentstyle}> {props.Content2}</p>
        {/* <button type="button" onClick={Buttonfun}>Movies</button> */}
        </div>
        </>
    );
}
export default Card;