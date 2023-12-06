import Post from './Post'; // Importamos o componente Post

function App() { //impossível renderizar varios componentes sem ter outro componente que os englobe (nesse caso, div)
  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default App


