import styles from '../assets/css/searchBar.module.css';


export default function SearchBar(){
    return(
        <>
            <input type="text" className={styles.searchbar} placeholder="Pesquisar no blog" tabIndex={1}></input>
        </>
    )
}