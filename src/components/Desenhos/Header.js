import React, { useState } from 'react';
import styles from '../../styles/components/Desenhos/Header.module.css';

function Header(){

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={"title oswald-plus animate " + styles.thisTitle}>ARTES</div>
                <div className={styles.flexDiv}>
                    <div className={styles.drawImg} id={styles.tcd}></div>
                    <div className={styles.drawImg} id={styles.joshua}></div>
                    <div className={styles.drawImg} id={styles.nika}></div>
                </div>
            </div>
        </div>
    )

}

export default Header;