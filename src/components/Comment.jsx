/*eslint-disable*/

import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment ({content, onDeleteComment}) {

    function handleDeleteComment() {
        onDeleteComment(content); 
        //a onDeleteComment(content) chama a função deleteComment que está no Post.jsx passando o conteudo do comentario
        //o ideal seria o id do comentario, mas aqui usamos o content por não termos um backend
        //aqui estamos refernciando o content de cada componente Comment, o que faz o conteudo aparecer no alert
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/lucasunemat.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de uma hora atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}