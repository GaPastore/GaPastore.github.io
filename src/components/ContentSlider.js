import { useState } from "react";
import styles from "../styles/components/ContentSlider.module.css"

function ContentSlider(){

    return(
        <div>
            <div className={styles.slider}>
                <div className={styles.sliderBox}>
                    <div className={styles.sliderContent}></div>
                    <div className={styles.sliderContent}></div>
                    <div className={styles.sliderContent}></div>
                    <div className={styles.sliderContent}></div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )

}

export default ContentSlider;