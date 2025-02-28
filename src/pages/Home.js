import Carousel from '../components/Carousel';
import ContentSlider from '../components/ContentSlider';
import Header from '../components/Header';
import styles from '../styles/pages/Home.module.css';

function Home(){
    return (
        <div>
            <Carousel/>
            <Header/>
            <ContentSlider/>
        </div>
    )
}

export default Home;