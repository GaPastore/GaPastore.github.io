import useState from 'react-usestateref';
import { useRef } from 'react';
import styles from "../styles/components/ContentSlider.module.css"

function ContentSlider() {

    const [nIndex, setnIndex, indexRef] = useState(0);
    
    const divRef = useRef();

    const slide = document.getElementsByClassName(styles.sliderContent);
    const leftBt = document.getElementById(styles.leftButton);
    const rightBt = document.getElementById(styles.rightButton);
    const root = document.querySelector(':root')

    var percent = 0

    const prevItem = () => {

            console.log(divRef)

            percent = nIndex + 2
            if(percent <= 0){
                percent = 10
            }
            if(divRef.current.style.animationDirection == 'normal'){
                divRef.current.style.animationDelay = '-' + percent + 's'
            }
            divRef.current.style.animationDirection = 'reverse'
            divRef.current.style.animationPlayState = 'running'
            divRef.current.disabled = true
            setnIndex((nIndex) => (nIndex - 2 + slide.length) % slide.length)

            setTimeout(() => {
                divRef.current.style.animationPlayState = 'paused'
                divRef.current.disabled = false
                
                console.log(percent)
            }, 2000)

            console.log(divRef.current)

    };

    const nextItem = () => {

        console.log(divRef)

        percent = nIndex - 2
        if(percent >= 10){
            percent = 0
        }
        if(divRef.current.style.animationDirection == 'reverse'){
            divRef.current.style.animationDelay = '-' + percent + 's'
        }
        divRef.current.style.animationDirection = 'normal'
        divRef.current.style.animationPlayState = 'running'
        divRef.current.disabled = true
        setnIndex((nIndex) => (nIndex + 2) % slide.length)

        setTimeout(() =>{
            divRef.current.style.animationPlayState = 'paused'
            divRef.current.disabled = false
            console.log(percent)
        }, 2000)

        console.log(divRef.current)

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
                    <div onClick={prevItem} id={styles.leftButton}></div>
                    <div id={styles.openButton}></div>
                    <div onClick={nextItem} id={styles.rightButton}></div>
                </div>
            </div>
        </div>
    )

}

export default ContentSlider;