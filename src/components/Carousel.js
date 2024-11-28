import { useEffect } from 'react';
import styles from '../styles/components/Carousel.module.css'

function Carousel(){

    const urls = [
      {
        id: 1,
        content: 'https://picsum.photos/seed/1/200/300'
      },
      {
        id: 2,
        content: 'https://picsum.photos/seed/2/200/300'
      },
      {
        id: 3,
        content: 'https://picsum.photos/seed/3/200/300'
      },
      {
        id: 4,
        content: 'https://picsum.photos/seed/4/200/300'
      },
      {
        id: 5,
        content: '../../public/4kImageColored.jpg'
      }
    ];

    return(
        <div>
            <div className={styles.carousel}>
                <div className={styles.carouselText + " oswald-plus"}>BEM-VINDO</div>
                <div className={styles.vignette}></div>
                <div className={styles.carouselWrapper}>
            
                      <div className={styles.carouselImage} style={{backgroundImage: `url(${urls[0].content})`}}></div>
                      <div className={styles.carouselImage} style={{backgroundImage: `url(${urls[1].content})`}}></div>
                      <div className={styles.carouselImage} style={{backgroundImage: `url(${urls[2].content})`}}></div>
                      <div className={styles.carouselImage} style={{backgroundImage: `url(${urls[3].content})`}}></div>
                      <div className={styles.carouselImage} style={{backgroundImage: `url(${urls[4].content})`}}></div>
                      <div className={styles.carouselImage} style={{backgroundImage: `url(${urls[0].content})`}}></div>
                      <div className={styles.carouselImage} style={{backgroundImage: `url(${urls[1].content})`}}></div>
                      <div className={styles.carouselImage} style={{backgroundImage: `url(${urls[2].content})`}}></div>
                      <div className={styles.carouselImage} style={{backgroundImage: `url(${urls[3].content})`}}></div>
                      <div className={styles.carouselImage} style={{backgroundImage: `url(${urls[4].content})`}}></div>

                </div>

            </div>
            
          </div>
    )
}

export default Carousel;