import { useEffect } from 'react';
import plainHeader from '../../styles/components/PlainHeader.module.css'
import vignette from '../../styles/components/Vignette.module.css'

function Carousel(){

    const urls = [
      {
        id: 1,
        content: 'https://picsum.photos/seed/1/200/300'
      }
    ];

    return(
        <div>
            <div className={plainHeader.header}>
                <div className={plainHeader.headerText + " oswald-plus"}>INFORMAÇÕES PARA CONTATO</div>
                <div className={vignette.vignette}></div>
                <div className={plainHeader.headerImage} style={{backgroundImage: `url(${urls[0].content})`}}></div>
            </div>
            
          </div>
    )
}

export default Carousel;