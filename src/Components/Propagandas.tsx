import Arte1 from '../assets/Promoção1.png'
import Arte2 from '../assets/Promoção 2.png'
import { Propaganda } from '../styled'

export default function Propagandas (){
    return(
        <Propaganda id='home'>
            <div className="Artes">
                <img className='Promocao' src={Arte1} alt="Imagem 1" />
                <img className='Promocao' src={Arte2} alt="Imagem 2" />
            </div>
        </Propaganda>
    )
}