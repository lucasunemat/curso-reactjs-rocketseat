/*eslint-disable*/
import { format, formatDistanceToNow, set } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

//isso é para evitar repetir props.author. O que tô fazendo é destructuring (pegando a propriedade author dentro do objeto props)

export function Post({ author, publishedAt, content }) { //antes tinha "props" aqui, só para lembrar

    //aqui controla o estado do portfólio de comentarios. quantos tem, etc
    //ela é usada para : 1. renderizar os comentarios 2. adicionar novos comentarios com o estado do newCommentText
    const [comments, setComments] = useState([
        'Post deveras bacana risos risos!'
    ]);

    //esse é o estado que armazena estado do conteudo do textareas
    //inicie o estado com valor inicial no formato do que vc vai usar no estado.
    const [newCommentText, setNewCommentText] = useState('');

    //tudo que tem aspas simples é string que eu quero que a biblioteca ignore e não formate
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true //adiciona o 'há' antes da data
    })

    function handleCreateNewComment() {
        event.preventDefault(); //previne o comportamento padrão do form, que é recarregar a página
        setComments([...comments, newCommentText]); //seta o valor que está no estado do newCommentText (que foi atualizado ao escrever o comentario)
        setNewCommentText(''); //reset a caixa de texto para vazio por meio de atualização do estado para vazio novamente
    }

    //essa função é chamada toda vez que o usuario digita algo no textarea. 
    //Ela pega o conteúdo e joga ele para mudar o estado do newCommentText
    //Essa função é tipo um alarmezinho que vai avisar o useState newCommentText que o valor dele mudou
    function handleNewCommentChange() {
        //armazena o valor do textarea no estado
        setNewCommentText(event.target.value);
    }

    function deleteComment(comment) {
        alert(`Deletar comentário ${comment}`);
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

                <time
                    title={publishedDateFormated}
                    dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>; //cada paragrafo precisa de um identificador para evitar o erro de "all children must have a key prop"
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback!</strong>

                <textarea
                    name='comment'
                    value={newCommentText} //text area fica em branco depois porque o valor dele é o estado, e o valor incial do estado é vazio
                    placeholder='Deixe seu comentário :)'
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type='submit'>Comentar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                    //passando a função como propriedade
                    //a propriedade deleteComment daqui vai receber o valor retornado pela deleteComment do Comment.jsx
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