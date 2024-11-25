import React, { useState } from 'react';
import styles from '../styles/components/Menu.module.css';

function Menu(){

    const [menuHidden, setMenuHidden] = useState(false);
    
    const toggleButton = () => {
        setMenuHidden(!menuHidden);
    };

    const classesText = styles.menuText + " oswald-plus";

    return(
        <div>
            <div className={`${styles.menuBox} ${menuHidden ? styles.visible : ''}`}>
                <div className={`${classesText} ${menuHidden ? styles.visible : ''}`}>PÁGINA INICIAL</div>
                <div className={`${classesText} ${menuHidden ? styles.visible : ''}`}>PROJETOS EM AUDIOVISUAL</div>
                <div className={`${classesText} ${menuHidden ? styles.visible : ''}`}>CIÊNCIA DA COMPUTAÇÃO</div>
                <div className={`${classesText} ${menuHidden ? styles.visible : ''}`}>DESENHOS</div>
                <div className={`${classesText} ${menuHidden ? styles.visible : ''}`}>CONTATO</div>
            </div>
            <div className={`${styles.menuBt}`} onClick={toggleButton}></div>
        </div>
    )
}

export default Menu;