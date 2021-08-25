import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";


function App() {

  //Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);



  //Definir la categoria y noticias
 useEffect(()=>{
  const consultarAPI = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=0c3354abf8d84215800f7752ea4a3e43`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
  }
  consultarAPI()
 },[categoria])


  return (
    <>
      <Header
        titulo='Buscador de Noticias'
      />

      <div className="container">
          <Formulario
            guardarCategoria={guardarCategoria}
          />

          <ListadoNoticias 
            noticias={noticias}
          />

          
      </div>

    </>
  );
}

export default App;
