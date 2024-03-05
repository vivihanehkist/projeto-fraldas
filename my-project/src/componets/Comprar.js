import imagem from '../imagens/20220914_155309-b.jpg'

import LinkButton from '../layout/LinkButton';
import styles from './Comprar.module.css';


function Comprar() {
    return (
        <div className={styles.container}>
            <h2>Kit iniciante</h2>
            <img src={imagem} className={styles.img} alt="Fralda Ecologica" />
                <p>Kit ideal para quem quer começar, com 01 absorvente você consegue fazer o uso diurno, e com 2 uso noturno.</p>
                <p>Desde Recém nascido até o desfralde.</p>  
                <select> 
                        <option>Somente a fralda</option>
                        <option>Com 01 absorvente</option>
                        <option>Com 02 absorventes</option>
                    </select>
                <div>
                    <LinkButton to="/carrinho" text="Comprar"/>
                </div>
        </div>
    )
}

export default Comprar;