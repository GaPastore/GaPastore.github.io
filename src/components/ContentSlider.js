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

    function setActive(v1, v2) {
        slide[v1].classList.remove(styles.inactive)
        slide[v1].classList.add(styles.active)
        slide[v2].classList.remove(styles.inactive)
        slide[v2].classList.add(styles.active)
    }

    const varSlide = () => {

        for(let i = 0; i < slide.length; i++) {
            setInactive(i)
        }

        if(divRef.current.classList.contains('next')) {

            if(nIndex === null) {
                setActive(1, 6)
            }
            else {
                var v1 = (((nIndex % 10) / 2) + 2) % 5
                var v2 = ((((nIndex % 10) / 2) + 2) % 5) + 5

                setActive(v1, v2)
            }

        }
        else if(divRef.current.classList.contains('prev')) {
            
            if(nIndex === null) {
                setActive(4, 9)
            }
            else {
                var v1 = (nIndex % 10) / 2
                var v2 = ((nIndex % 10) / 2) + 5  

                setActive(v1, v2)
            }

        }
        
    }

    window.onload = () => {

        divRef.current.style.animationDelay = '0s'
        divRef.current.style.animationDirection = 'normal'
        divRef.current.classList.add('next')
        varSlide()
        setnIndex(0)
        
    }

    const animReset = () => {

        divRef.current.classList.remove(styles.animClass)
        void divRef.current.offsetWidth
        divRef.current.classList.add(styles.animClass)

    }

    const switchPrev = () => {
        divRef.current.style.animationDelay = '-' + (((10 - nIndex) % 10) + 1) + 's'
    }

    const switchNext = () => {
        divRef.current.style.animationDelay = '-' + (nIndex % 10) + 's'
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

        setTimeout(() => {
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
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderInside} data-index="0"></div>
                    </div>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderInside} data-index="1"></div>
                    </div>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderInside} data-index="2"></div>
                    </div>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderInside} data-index="3"></div>
                    </div>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderInside} data-index="4"></div>
                    </div>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderInside} data-index="5"></div>
                    </div>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderInside} data-index="6"></div>
                    </div>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderInside} data-index="7"></div>
                    </div>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderInside} data-index="8"></div>
                    </div>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderInside} data-index="9"></div>
                    </div>
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