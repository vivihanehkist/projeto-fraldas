import { Link } from 'react-router-dom';

import styles from './Button.module.css';

const LinkButton = ({ to, text }) => {
    return (
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    );
};

export default LinkButton;