/*eslint-disable*/

import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

    //o componente vai mudar a partir de interação do usuário? ==> use o useState()
    const [likeCount, setLikeCount] = useState(0);

    function handleNewComment() {
        setLikeCount(likeCount + 1);
    }

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
                    <button onClick={handleNewComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

/*
 * Conceito: funcao !== funcao()
    * Uma é a funcao em si, a outra é a execução da funcao
    * Se você usar funcao() o react vai executar a funcao assim que o componente for renderizado. SEM ESPERAR O CLIQUE DO USUÁRIO
    * E isso vai gerar um loop infinito de renderização
    * A solução seria : onClick={() => funcao()}. Por que assim a funcao só vai ser executada quando o usuário clicar no botão
        * Quando a função estiver vendo o primeiro () ela entende que precisa esperar alguma coisa, alguma ação (no caso, o clique do usuário)
*/