import useState from 'react-usestateref';
import styles from "../styles/components/ContentSlider.module.css"

function ContentSlider() {

    const [currentIndex, setCurrentIndex, indexRef] = useState(0);

    const div = document.getElementsByClassName(styles.sliderBox);
    const slide = document.getElementsByClassName(styles.sliderContent);

    function changePos() {
        div[0].style.transform = "translateX(-" + ((currentIndex+1) * slide[0].style.width) +"px)"
    }

    const nextItem = () => {
        setCurrentIndex((currentIndex + 1) % slide.length);
        console.log(slide[0].style)
        changePos()
      };
    
    const prevItem = () => {
        setCurrentIndex((currentIndex - 1 + slide.length) % slide.length);
        changePos()
      };

    return(
        <div>
            <div className={styles.slider}>
                <div className={styles.sliderBox}>
                    <div className={styles.sliderContent}></div>
                    <div className={styles.sliderContent}></div>
                    <div className={styles.sliderContent}></div>
                    <div className={styles.sliderContent}></div>
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