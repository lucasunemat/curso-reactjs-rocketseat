//importando o css modular dando nome global para as classes (styles)
//depois acessa as classes usando styles.nomeDaClasse

import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <strong>Ignite Feed</strong>
        </header>

    )
}