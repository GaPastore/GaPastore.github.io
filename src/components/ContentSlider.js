import useState from 'react-usestateref';
import { useRef } from 'react';
import styles from "../styles/components/ContentSlider.module.css"

function ContentSlider() {

    const [nIndex, setnIndex] = useState(0);
    const [disabled, setDisabled] = useState(false);
    
    const divRef = useRef();

    const slide = document.getElementsByClassName(styles.sliderContent);

    const prevItem = () => {

        if(divRef.current.style.animationDirection == 'reverse'){
            switch (nIndex){
                case 2:
                    divRef.current.style.animationDelay = '-4s'
                    break
                case 4:
                    divRef.current.style.animationDelay = '-2s'
                    break
                case 6:
                    divRef.current.style.animationDelay = '0s'
                    break
                case 8:
                    divRef.current.style.animationDelay = '-8s'
                    break
                case 10:
                    divRef.current.style.animationDelay = '-6s'
                    break
            }
        }

        divRef.current.style.animationDirection = 'reverse'
        divRef.current.style.animationPlayState = 'running'
        setDisabled(true)
        console.log(nIndex)

        setTimeout(() => {
            divRef.current.style.animationPlayState = 'paused'
            divRef.current.style.pointerEvents = 'auto'
            setnIndex((nIndex) => (nIndex - 2 + slide.length) % slide.length)
            setDisabled(false)
        }, 2000)

    };

    const nextItem = () => {

        if(divRef.current.style.animationDirection == 'normal'){
            switch (nIndex){
                case 2:
                    divRef.current.style.animationDelay = '0s'
                    break
                case 4:
                    divRef.current.style.animationDelay = '-2s'
                    break
                case 6:
                    divRef.current.style.animationDelay = '-4s'
                    break
                case 8:
                    divRef.current.style.animationDelay = '-6s'
                    break
                case 10:
                    divRef.current.style.animationDelay = '-8s'
                    break
            }
        }

        divRef.current.style.animationDirection = 'normal'
        divRef.current.style.animationPlayState = 'running'
        setDisabled(true)
        console.log(nIndex)

        setTimeout(() =>{
            divRef.current.style.animationPlayState = 'paused'
            divRef.current.style.pointerEvents = 'auto'
            setnIndex((nIndex) => (nIndex + 2) % slide.length)
            setDisabled(false)
        }, 2000)

    };

    

    return(
        <div>
            <div className={styles.slider}>
                <div ref={divRef} id={styles.sliderBox}>
                    <div className={styles.sliderContent} style={{backgroundColor: 'red'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'green'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'white'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'blue'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'purple'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'red'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'green'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'white'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'blue'}}></div>
                    <div className={styles.sliderContent} style={{backgroundColor: 'purple'}}></div>
                </div>
                <div className={styles.buttonBox}>
                    <div onClick={disabled ? () => {} : prevItem} id={styles.leftButton}></div>
                    <div id={styles.openButton}></div>
                    <div onClick={disabled ? () => {} : nextItem} id={styles.rightButton}></div>
                </div>
            </div>
        </div>
    )

}

export default ContentSlider;