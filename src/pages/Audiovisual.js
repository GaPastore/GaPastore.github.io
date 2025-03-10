import React, { useState } from 'react';
import Carousel from '../components/Audiovisual/Carousel';
import Header from '../components/Audiovisual/Header';
import styles from '../styles/pages/Home.module.css';

function Audiovisual() {
    return (
        <div>
            <Carousel/>
            <Header/>
        </div>
    )
}

export default Audiovisual;