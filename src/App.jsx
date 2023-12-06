import { Post } from './Post'; // Importamos o componente Post

export function App() { //impossível renderizar varios componentes sem ter outro componente que os englobe (nesse caso, div)
  return (
    <div>
      <Post author="Winy Zanin"
        content="lorem ipsum"
      />
      <Post author="Lucas Isidoro"
        content="lorem ipsum legal"
      />
    </div>
  )
}



