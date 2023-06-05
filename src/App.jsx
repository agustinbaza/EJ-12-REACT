import React, { useState, useEffect } from "react";
import Maquetado from "./components/Maquetado";

function App() {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const apiKey = "c38f9e4109d64ccf9cb1348ca22f400e";
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${apiKey}`;
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setNoticias(datos.articles);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerNoticias();
  }, [categoria]);

  const handleConsultarAPI = (categoriaSeleccionada) => {
    setCategoria(categoriaSeleccionada);
  };

  return (
    <>
      <Maquetado consultarAPI={handleConsultarAPI} noticias={noticias} />
    </>
  );
}

export default App;
