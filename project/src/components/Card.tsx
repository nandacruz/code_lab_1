import React from 'react';
import styles from '../assets/css/card.module.css'
import { FaRegHeart } from "react-icons/fa";


type CardProps = {
    date: string;
    title: string;
    description: string;
}

export default function Card({date, title, description}:CardProps){
    return(
        <>  
            <div className={styles.card}>
                <div className={styles.card_container}>

                    <div className={styles.info_card}>
                        <p className={styles.date}>{date}</p> <FaRegHeart className={styles.icon}/>
                    </div>
                    <div className={styles.content_card}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div> 

                </div>
            </div>
            
        </>
    )
}