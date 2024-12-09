import useState from 'react-usestateref';
import styles from "../styles/components/ContentSlider.module.css"

function ContentSlider() {

    const [currentIndex, setCurrentIndex, indexRef] = useState(0);

    const div = document.getElementsByClassName(styles.sliderBox);
    const slide = document.getElementsByClassName(styles.sliderContent);

    function changePos() {
        div[0].style.transform = "translateX(calc(-" + ((indexRef.current) * (slide[0].clientWidth)) +"px - 10rem))"
    }

    const nextItem = () => {
        setCurrentIndex((currentIndex + 1) % ((slide.length / 2) + 1));
        console.log(indexRef.current + 1)
        changePos()
      };
    
    const prevItem = () => {
        setCurrentIndex((currentIndex - 1 + slide.length) % (slide.length / 2));
        console.log(indexRef.current + 1)
        changePos()
      };

    return(
        <div>
            <div className={styles.slider}>
                <div className={styles.sliderBox}>
                    <div className={styles.sliderContent} style={{backgroundColor: 'red'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'green'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'white'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'blue'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'red'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'green'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'white'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'blue'}}></div>
                </div>
                <div className={styles.buttonBox}>
                    <div onClick={prevItem} className={styles.leftButton}></div>
                    <div className={styles.openButton}></div>
                    <div onClick={nextItem} className={styles.rightButton}></div>
                </div>
            </div>
        </div>
    )

}

export default ContentSlider;