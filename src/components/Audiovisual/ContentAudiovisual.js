import React, { useState } from 'react';
import styles from '../../styles/components/ContentLinks.module.css';

function Header(){

    return(
        <div>
            <div className={styles.introDiv}>
                    <div className={styles.flexDiv}>
                    <div className={styles.drawImg} id={styles.somosAlgo}><a className={styles.imgBox + " oswald-geral"} href='https://instagram.com/curtasomosalgo' target='_blank'>Somos Algo? - Marketing Digital para curta 🔗</a></div>
                    <div className={styles.drawImg} id={styles.fitTrack}><a className={styles.imgBox + " oswald-geral"} href='https://www.figma.com/proto/zxMUrCh7GsqKeHIQN0Pg5l?node-id=0-1&t=otN8lK9XmDXJ5hbo-6' target='_blank'>FitTrack - Projeto visual de App Mobile🔗</a></div>
                    <div className={styles.drawImg} id={styles.youtube}><a className={styles.imgBox + " oswald-geral"} href='https://youtube.com/@GaPastore' target='_blank'>Pastore - Canal do YouTube 🔗</a></div>
                </div>
            </div>
        </div>
    )

}

export default Header;