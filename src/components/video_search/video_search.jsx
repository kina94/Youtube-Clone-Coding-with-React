import React, {useRef} from 'react'
import styles from './video_search.module.css'

const VideoSearch = ({onSearch, onHome}) => {
    const inputRef=useRef();

    const handleSearch=()=>{
        const value=inputRef.current.value;
        onSearch(value);
    };

    const handleHome=()=>{
        const value=inputRef.current.value;
        onHome(value)
    }

    const onClick2=()=>{
        handleHome();
    }

    const onClick=()=>{
        handleSearch();
    };

    const onKeyPress=(event)=>{
        if(event.key==='Enter'){
            handleSearch();
        }
    };
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} onClick={onClick2} src="/images/logo.png"></img>
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input ref={inputRef} className={styles.input} type="search" placeholder='Search...' onKeyPress={onKeyPress}/>
            <button className={styles.button} type="submit" onClick={onClick}>
                <img className={styles.buttonImg} src="/images/search.png" alt="search" />
            </button>
        </header>
    )
}

export default VideoSearch
