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
    
    const prevItem = () => {

            console.log(divRef)

            divRef.current.setAttribute('data-animation', 'anim-slider-2')
            divRef.current.style.animationPlayState = 'running'
            divRef.current.onClick = null
            setnIndex((nIndex) => (nIndex + 2) % slide.length)

            setTimeout(() => {
                divRef.current.removeAttribute('data-animation')
                divRef.current.style.animationPlayState = 'paused'
                divRef.current.onClick = {prevItem}
                root.style.setProperty('--seconds', (indexRef.current * 10) + '%')
                root.style.setProperty('--anim-name', 'anim-slider-2')
            }, 2000)

            console.log(divRef.current)

    };

    const nextItem = () => {

        console.log(divRef)

        divRef.current.setAttribute('data-animation-next', 'anim-slider-1')
        root.style.setProperty('--anim-name', divRef.current.getAttribute('data-animation'))
        divRef.current.style.animationPlayState = 'running'
        divRef.current.onClick = null
        setnIndex((nIndex) => (nIndex - 2 + slide.length) % slide.length)

        setTimeout(() =>{
            divRef.current.removeAttribute('data-animation')
            divRef.current.style.animationPlayState = 'paused'
            divRef.current.onClick = {nextItem}
            root.style.setProperty('--seconds', (indexRef.current * 10) + '%')
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