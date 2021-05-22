import React from 'react';
import Data from './data';
import Card from './Card';
import styles from "./Leftsection.module.scss";
const Leftsection=()=>
{
    return(
        <>
        <div className={styles.leftsectiondiv}>
        <Card Heading={Data[0].Heading} Content={Data[0].Content} Content2={Data[0].Content2}/>
        <Card Heading={Data[1].Heading} Content={Data[1].Content} Content2={Data[1].Content2}/>
        <Card Heading={Data[2].Heading} Content={Data[2].Content}/>
        <Card Heading={Data[3].Heading} Content={Data[3].Content}/>
        </div>
        </>
    );
}

export default Leftsection;