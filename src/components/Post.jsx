/*eslint-disable*/
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

//isso é para evitar repetir props.author. O que tô fazendo é destructuring (pegando a propriedade author dentro do objeto props)

export function Post({ author, publishedAt, content }) { //antes tinha "props" aqui, só para lembrar

    const [comments, setComments] = useState([
        'Post deveras bacana risos risos!'
    ]);

    //tudo que tem aspas simples é string que eu quero que a biblioteca ignore e não formate
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true //adiciona o 'há' antes da data
    })

    function handleCreateNewComment() {
        event.preventDefault();
        //comment é o valor de name do textarea
        const newCommentText = event.target.comment.value;
        setComments([...comments, newCommentText]);
        event.target.comment.value = '';
    }

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

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href="">{line.content}</a></p>
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe seu comentário :)'
                />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}
            </div>
        </article>
    );
}

/**
 * Tag time permite eu ter a hora exata que o post foi publicado
 * Posso checar ela no html
 * O title permite que quando usuário está com mouse em cima, ele apareça como orientação
 */