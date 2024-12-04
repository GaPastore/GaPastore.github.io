import useState from 'react-usestateref';
import styles from "../styles/components/ContentSlider.module.css"

function ContentSlider(){

    const [currentIndex, setCurrentIndex, indexRef] = useState(0);

    const items = [
        {
            id: 1,
            content: "teste1"
        },
        {
            id: 2,
            content: "teste2"
        },
        {
            id: 3,
            content: "teste3"
        }
    ]

    const nextItem = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
      };
    
    const prevItem = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
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