import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styles from '../../styles/components/Home/Menu.module.css';

function Menu(){

    const [menuHidden, setMenuHidden] = useState(false);
    
    const toggleButton = () => {
        setMenuHidden(!menuHidden);
    };

    const classesText = styles.menuText + " oswald-geral";

    return(
        <div>
            <div className={`${styles.menuBg} ${menuHidden ? styles.visible : ''}`}></div>
            <div className={`${styles.menuBox} ${menuHidden ? styles.visible : ''}`}>
                <div className={`${classesText} ${menuHidden ? styles.visible : ''}`}>
                    <Link to="/">PÁGINA INICIAL</Link>
                </div>
                <div className={`${classesText} ${menuHidden ? styles.visible : ''}`}>
                    <Link to="/audiovisual">PROJETOS EM AUDIOVISUAL</Link>
                </div>
                <div className={`${classesText} ${menuHidden ? styles.visible : ''}`}>
                    <Link to="/ciencia_da_computacao">CIÊNCIA DA COMPUTAÇÃO</Link>
                </div>
                <div className={`${classesText} ${menuHidden ? styles.visible : ''}`}>
                    <Link to="/desenhos">DESENHOS</Link>
                </div>
                <div className={`${classesText} ${menuHidden ? styles.visible : ''}`}>
                    <Link to="/contato">CONTATO</Link>
                </div>
            </div>
            <div className={`${styles.menuBt}`} onClick={toggleButton}></div>
        </div>
    )
}

export default Menu;