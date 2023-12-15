import { Post } from './components/Post'; // Importamos o componente Post
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css' //sempre importar os estilos nos arquivos javascript

export function App() { //componentes sempre com letra maiuscula para não confundir com html
  //impossível renderizar varios componentes sem ter outro componente que os englobe (nesse caso, div)
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}




