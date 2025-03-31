import React, { useState } from 'react';
import styles from '../../styles/components/Audiovisual/Header.module.css';

function Header(){

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={"title oswald-plus " + styles.thisTitle}>MEUS TRABALHOS</div>
                <div className={styles.profileImg}></div>
                <div className={"oswald-geral " + styles.introText}>
                    Lorem impsum.
                </div>
            </div>
        </div>
    )

}

export default Header;