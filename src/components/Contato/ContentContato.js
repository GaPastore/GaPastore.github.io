import React, { useState } from 'react';
import styles from '../../styles/components/Contato/Header.module.css';

function Header(){

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={"title oswald-plus " + styles.thisTitle}>REDES SOCIAIS</div>
                <div className={styles.socialBox}>
                    <div id={styles.linkedin} className={styles.profileImg}></div>
                    <a className={"oswald-plus " + styles.introText} href='https://www.linkedin.com/in/gabriel-pastore-b11506206/' target='_blank'>
                        Gabriel Pastore - Linkedin 🔗
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Header;