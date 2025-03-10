import { useEffect } from 'react';
import styles from '../../styles/components/Audiovisual/Carousel.module.css'

function Carousel(){

    const urls = [
      {
        id: 1,
        content: 'https://picsum.photos/seed/1/200/300'
      }
    ];

    return(
        <div>
            <div className={styles.carousel}>
                <div className={styles.carouselText + " oswald-plus"}>PROJETOS EM AUDIOVISUAL</div>
                <div className={styles.vignette}></div>
                <div className={styles.carouselWrapper}>
            
                      <div className={styles.carouselImage} style={{backgroundImage: `url(${urls[0].content})`}}></div>

                </div>

            </div>
            
          </div>
    )
}

export default Carousel;