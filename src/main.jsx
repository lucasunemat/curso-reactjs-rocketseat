import React from 'react' //coração do react com todas as suas funções e lógicas
import ReactDOM from 'react-dom/client' //integração do coração do react com a DOM - representação do html por meio do js
import App from './App.jsx'

//metodo createRoot recebe elemento raiz da página e renderiza todos os componentes dentro desse elemento
//no caso, dentro da div com id root
//ali dentro ele está citando os componentes que serão renderizados
//o app é uma rquivo com função que retorna um HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
