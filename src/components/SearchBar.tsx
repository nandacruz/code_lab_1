import React from 'react';
import styles from '../assets/css/searchBar.module.css';


type SearchProps = {
    input:string;
    placeholder: string;
}


export default function SearchBar(){
    return(
        <>
            <input type="text" className={styles.searchbar} placeholder="Pesquisar no blog" tabIndex={1}></input>
        </>
    )
}