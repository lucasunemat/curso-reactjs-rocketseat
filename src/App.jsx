/*eslint-disable*/

import { Post } from './components/Post'; // Importamos o componente Post
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css' //sempre importar os estilos nos arquivos javascript

//author: avata_url, name, role;
//publishedAt: Date;
//content: String;

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasunemat.png',
      name: 'Lucas Batista',
      role: 'Analista de Sistemas @ DATAPREV'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      { type: 'paragraph', content: 'Numquam dolorem eius repellendus commodi fuga molestias dicta,' },
      { type: 'paragraph', content: 'sint voluptates, quos perferendis, sit quod? Voluptatum ut excepturi ' },
      { type: 'link', content: 'vero dolore ratione' },
      { type: 'paragraph', content: 'soluta ea!' }
    ],
    publishedAt: new Date('2021-05-11 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'PO @ DATAPREV'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' },
      { type: 'paragraph', content: 'Numquam dolorem eius repellendus commodi fuga molestias dicta,' },
      { type: 'paragraph', content: 'sint voluptates, quos perferendis, sit quod? Voluptatum ut excepturi ' },
      { type: 'link', content: 'vero dolore ratione' },
      { type: 'paragraph', content: 'soluta ea!' }
    ],
    publishedAt: new Date('2021-05-11 20:30:00')
  },
]

console.log(posts[0]); //só para evitar eslint

export function App() { //componentes sempre com letra maiuscula para não confundir com html
  //impossível renderizar varios componentes sem ter outro componente que os englobe (nesse caso, div)
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post />
          })}
        </main>
      </div>
    </div>
  )
}




