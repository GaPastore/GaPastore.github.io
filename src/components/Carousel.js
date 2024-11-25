import styles from '../styles/components/Carousel.module.css';

function Carousel(){
    return(
        <div>
            <div className={styles.carouselContainer}>
                <div className={styles.carouselText + " oswald-geral"}>BEM-VINDO</div>
                <div className={styles.carousel}>
                    <div className={styles.imgOne}></div>
                    <div className={styles.imgTwo}></div>
                    <div className={styles.imgThree}></div>
                    <div className={styles.imgFour}></div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;