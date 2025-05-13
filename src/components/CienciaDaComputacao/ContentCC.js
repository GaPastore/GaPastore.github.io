import React, { useState } from 'react';
import styles from '../../styles/components/ContentLinks.module.css';

function Header(){

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={styles.flexDiv}>
                <div className={styles.drawImg} id={styles.chronolight}><a className={styles.imgBox + " oswald-geral"} href='https://mutoustudios.itch.io/chronolight' target='_blank'>ChronoLight - Jogo 3D 🔗</a></div>
                    <div className={styles.drawImg} id={styles.micescape}><a className={styles.imgBox + " oswald-geral"} href='https://mutoustudios.itch.io/micescape' target='_blank'>Micescape - Jogo 2D 🔗</a></div>
                    <div className={styles.drawImg} id={styles.iconomonster}><a className={styles.imgBox + " oswald-geral"} href='https://github.com/GaPastore/a3-icon-generator/tree/main' target='_blank'>Iconomonster - Site em Vue.js 🔗</a></div>
                    <div className={styles.drawImg} id={styles.imageasy}><a className={styles.imgBox + " oswald-geral"} href='https://github.com/GiuliaNogoliver/estruturas_matematicas/tree/branch-final' target='_blank'>ImagEasy - Site em Angular 🔗</a></div>
                    <div className={styles.drawImg} id={styles.curriculumAI}><a className={styles.imgBox + " oswald-geral"} href='https://github.com/Curriculum-Vitae-AI' target='_blank'>Curriculum AI - Site em React 🔗</a></div>
                    <div className={styles.drawImg} id={styles.greenPrint}><a className={styles.imgBox + " oswald-geral"} href='https://github.com/GaPastore/A3-Java' target='_blank'>Green Print - App em Java 🔗</a></div>
                    <div className={styles.drawImg} id={styles.theDomeOfHope}><a className={styles.imgBox + " oswald-geral"} href='https://gapastore.itch.io/the-dome-of-hope' target='_blank'>The Dome of Hope - Jogo 2D educacional 🔗</a></div>
                </div>
            </div>
        </div>
    )

}

export default Header;