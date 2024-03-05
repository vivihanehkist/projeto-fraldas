import { FaInstagram } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer() {
    return (<footer>
            <ul className={styles.footer}>
                <li>
                    <FaInstagram />varal.ecologico
                </li>
            </ul>
            <p><span>Varal Ecológico</span>&copy; 2023</p>
        </footer>
    )
}

export default Footer;