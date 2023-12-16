import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <img className={styles.avatar}
                        src="https://github.com/lucasunemat.png"
                        alt=""
                    />

                    <div className={styles.authorInfo}>
                        <strong>Lucas Batista</strong>
                        <span>Analista de Negócio</span>
                    </div>
                </div>

                <time title="11 de Maio às 08h13min." dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

                <p>Numquam dolorem eius repellendus commodi fuga molestias dicta,</p>

                <p>sint voluptates, quos perferendis, sit quod? Voluptatum ut</p>

                <p>excepturi <a href="">vero dolore ratione</a> soluta ea!</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>

                <textarea
                    placeholder='Deixe seu comentário :)'
                />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}

/**
 * Tag time permite eu ter a hora exata que o post foi publicado
 * Posso checar ela no html
 * O title permite que quando usuário está com mouse em cima, ele apareça como orientação
 */