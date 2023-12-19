/*eslint-disable*/
import { format } from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

//isso é para evitar repetir props.author. O que tô fazendo é destructuring (pegando a propriedade author dentro do objeto props)
export function Post({ author, publishedAt }) {

    const publishedDateFormated = format(publishedAt, "dd MMM yyyy 'às' HH:mm:ss");

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar //o src abaixo é uma PROPRIEDADE (props) do componente Avatar
                        src={author.avatarUrl} //estou puxando o author que aparece no objeto dentro da iteração no App.jsx
                        alt=""
                    />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="11 de Maio às 08h13min." dateTime="2022-05-11 08:13:30">{publishedDateFormated}</time>
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