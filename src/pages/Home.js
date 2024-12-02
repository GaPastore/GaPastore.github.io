import Carousel from '../components/Carousel';
import ContentSlider from '../components/ContentSlider';
import styles from '../styles/pages/Home.module.css';

function Home(){
    return (
        <div>
            <Carousel/>
            <div className={styles.title + " oswald-plus"}>PORTFOLIO</div>
            <ContentSlider/>
        </div>
    )
}

export default Home;