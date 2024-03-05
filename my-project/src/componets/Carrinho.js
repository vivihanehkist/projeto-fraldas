import styles from './Carrinho.module.css'
import imagem from '../imagens/20220914_155309-b.jpg'
import LinkButton from '../layout/LinkButton';

function Carrinho() {
    return (
        <div>
            <img src={imagem} className={styles.img} alt="Fralda Ecologica" />
            <div id="carrinho">Carrinho de Compras: 0 itens</div>
            <input type="number" id="quantidade" value="1" min="1" />
            <LinkButton to="/" id="comprar" text="Comprar" />
        </div>
    )
}

export default Carrinho;