import React, { useState } from 'react';
import styles from '../../styles/components/Audiovisual/Header.module.css';

function Header(){

    function onLoad() {

            console.log("teste")
    
            const observer = new IntersectionObserver(entries => {
    
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add(styles.onScreen)
                        return
                    }
                })
    
            })
    
            const animElems = document.querySelectorAll('.animate')
    
            animElems.forEach((element) => observer.observe(element))

    }

    onLoad()

    return(
        <div>
            <div className={styles.introDiv}>
                <div className={"title oswald-plus animate " + styles.thisTitle}>MEUS TRABALHOS</div>
                <div className={"animate " + styles.profileImg}></div>
                <div className={"oswald-geral animate " + styles.introText}>
                    Lorem impsum.
                </div>
            </div>
        </div>
    )

}

export default Header;