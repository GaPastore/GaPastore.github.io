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
                    <div id={styles.instagram} className={styles.profileImg}></div>
                    <a className={"oswald-plus " + styles.introText} href='https://www.instagram.com/pastore_drawing' target='_blank'>
                        @pastore_drawing - Instagram (desenhos) 🔗
                    </a>
                    <div id={styles.github} className={styles.profileImg}></div>
                    <a className={"oswald-plus " + styles.introText} href='https://github.com/GaPastore' target='_blank'>
                        GaPastore - GitHub 🔗
                    </a>
                </div>
            </div>
        </div>
    )

}

export default Header;