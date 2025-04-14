import React, { useState } from 'react';
import styles from '../../styles/components/ContentLinks.module.css';
import desenhos from '../../styles/components/Desenhos/Header.module.css'

function Content(){

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={styles.flexDiv}>
                    <div className={desenhos.drawImg} id={desenhos.tcd}></div>
                    <div className={desenhos.drawImg} id={desenhos.joshua}></div>
                    <div className={desenhos.drawImg} id={desenhos.nika}></div>
                </div>
            </div>
        </div>
    )

}

export default Content;