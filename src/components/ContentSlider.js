import useState from 'react-usestateref';
import { useRef } from 'react';
import styles from "../styles/components/ContentSlider.module.css"

function ContentSlider() {

    const [nIndex, setnIndex] = useState(null);
    const [disabled, setDisabled] = useState(false);
    
    const divRef = useRef();

    const slide = document.getElementsByClassName(styles.sliderContent);

    function setInactive(value) {
        slide[value].classList.remove(styles.active)
        slide[value].classList.add(styles.inactive)
    }

    function setActive(value) {
        slide[value].classList.remove(styles.inactive)
        slide[value].classList.add(styles.active)
    }

    const varSlide = () => {
        for(let i = 0; i < slide.length; i++) {
            setInactive(i)
        }
        if(divRef.current.classList.contains('next')){
            switch(nIndex) {
                case 0:
                    setActive(2)
                    setActive(7)
                    break
                case 2:
                    setActive(3)
                    setActive(8)
                    break
                case 4:
                    setActive(4)
                    setActive(9)
                    break
                case 6:
                    setActive(0)
                    setActive(5)
                    break
                case 8:
                    setActive(1)
                    setActive(6)
                    break
                case 10:
                    setActive(2)
                    setActive(7)
                    break
                case null:
                    setActive(1)
                    setActive(6)
                    break
            }
        }
        else if(divRef.current.classList.contains('prev')){
            switch(nIndex) {
                case 0:
                    setActive(0)
                    setActive(5)
                    break
                case 2:
                    setActive(1)
                    setActive(6)
                    break
                case 4:
                    setActive(2)
                    setActive(7)
                    break
                case 6:
                    setActive(3)
                    setActive(8)
                    break
                case 8:
                    setActive(4)
                    setActive(9)
                    break
                case 10:
                    setActive(0)
                    setActive(5)
                    break
                case null:
                    setActive(4)
                    setActive(9)
                    break
            }
        }
    }

    window.onload = () => {
        divRef.current.style.animationDelay = '0s'
        divRef.current.style.animationDirection = 'normal'
        divRef.current.classList.add('next')
        varSlide()
        setnIndex((nIndex) => 0)
    }

    const animReset = () => {
        divRef.current.classList.remove(styles.animClass)
        void divRef.current.offsetWidth
        divRef.current.classList.add(styles.animClass)
    }

    const switchPrev = () => {
        switch (nIndex){
            case 0:
                divRef.current.style.animationDelay = '-1s'
                break
            case 2:
                divRef.current.style.animationDelay = '-9s'
                break
            case 4:
                divRef.current.style.animationDelay = '-7s'
                break
            case 6:
                divRef.current.style.animationDelay = '-5s'
                break
            case 8:
                divRef.current.style.animationDelay = '-3s'
                break
            case 10:
                divRef.current.style.animationDelay = '-1s'
                break
        }
    }

    const switchNext = () => {
        switch (nIndex){
            case 0:
                divRef.current.style.animationDelay = '0s'
                break
            case 2:
                divRef.current.style.animationDelay = '-2s'
                break
            case 4:
                divRef.current.style.animationDelay = '-4s'
                break
            case 6:
                divRef.current.style.animationDelay = '-6s'
                break
            case 8:
                divRef.current.style.animationDelay = '-8s'
                break
            case 10:
                divRef.current.style.animationDelay = '0s'
                break
        }
    }

    const prevItem = () => {

        divRef.current.classList.add('prev')
        divRef.current.classList.remove('next')

        if(divRef.current.style.animationDirection === 'normal'){
            animReset()
            switchPrev()
        }

        varSlide()

        divRef.current.style.animationDirection = 'reverse'
        divRef.current.style.animationPlayState = 'running'
        setDisabled(true)
        console.log(nIndex)

        setTimeout(() => {
            divRef.current.style.animationPlayState = 'paused'
            divRef.current.style.pointerEvents = 'auto'
            setnIndex((nIndex) => (nIndex - 2 + slide.length) % slide.length)
            setDisabled(false)
        }, 1995)

    };

    const nextItem = () => {

        divRef.current.classList.add('next')
        divRef.current.classList.remove('prev')

        if(divRef.current.style.animationDirection === 'reverse'){
            animReset()
            switchNext()
        }

        varSlide()

        divRef.current.style.animationDirection = 'normal'
        divRef.current.style.animationPlayState = 'running'
        setDisabled(true)
        console.log(nIndex)

        setTimeout(() =>{
            divRef.current.style.animationPlayState = 'paused'
            divRef.current.style.pointerEvents = 'auto'
            setnIndex((nIndex) => (nIndex + 2) % slide.length)
            setDisabled(false)
        }, 1995)

    };

    

    return(
        <div>
            <div className={styles.slider}>
                <div ref={divRef} className={styles.sliderBox + " " + styles.animClass}>
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
                    <div onClick={disabled ? () => {} : nextItem} id={styles.rightButton}></div>
                </div>
            </div>   
        </div>
    )

}

export default ContentSlider;