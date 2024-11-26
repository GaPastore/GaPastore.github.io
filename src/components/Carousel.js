import { useState } from 'react'
import styles from '../styles/components/Carousel.module.css'

function Carousel(){

    const [currentIndex, setCurrentIndex] = useState(0);

    const urls = [
      {
        id: 1,
        content: `url('https://picsum.photos/seed/1/200/300')`
      },
      {
        id: 2,
        content: `url('https://picsum.photos/seed/2/200/300')`
      },
      {
        id: 3,
        content: `url('https://picsum.photos/seed/3/200/300')`
      },
      {
        id: 4,
        content: `url('https://picsum.photos/seed/4/200/300')`
      }
    ];

    const elem = document.getElementById("1");
    
    if(styles.carouselImage == "translateX(-100%)"){
      setCurrentIndex((prevIndex) => (prevIndex + 1) % urls.length)
    }

    return(
        <div>
            <div className={styles.carousel}>
                <div className={styles.carouselText + " oswald-geral"}>BEM-VINDO</div>
                <div className={styles.carouselWrapper}>
            
                      <div id="1" className={styles.carouselImage} style={{backgroundImage: urls[currentIndex].content}}></div>
            
                      <div className={styles.carouselImage} style={{backgroundImage: urls[currentIndex].content}}></div>

                </div>

            </div>
            
          </div>
    )
}

export default Carousel;