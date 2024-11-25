import React, { useState } from 'react';
import styles from '../styles/pages/Home.module.css';
import Carousel from '../components/Carousel';

function Home(){
    return (
        <div>
            <Carousel/>
            <div className={styles.title + " oswald-geral"}>PORTFOLIO</div>
        </div>
    )
}

export default Home;