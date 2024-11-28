import Carousel from '../components/Carousel';
import styles from '../styles/pages/Home.module.css';

function Home(){
    return (
        <div>
            <Carousel/>
            <div className={styles.title + " oswald-plus"}>PORTFOLIO</div>
        </div>
    )
}

export default Home;