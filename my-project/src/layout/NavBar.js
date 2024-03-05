import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./NavBar.module.css";
import logo from "../imagens/logo.jpeg"

function NavBar() {
    return (
        <div>
            <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} className={styles.logo_title} alt="Varal Ecologico" />
                </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/aboutus">Nos conheça</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/manualdeuso">Manual de Uso</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
            </ul>
            </Container>
        </nav>
        </div>
    )
}

export default NavBar;