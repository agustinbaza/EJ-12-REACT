import React, { useState, useEffect } from "react";
import Maquetado from "./components/Maquetado";
import Noticias from "./components/Noticias";

function App() {
  const [pais, setPais] = useState("us");
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const apiKey = "c38f9e4109d64ccf9cb1348ca22f400e";
        const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=${apiKey}`;
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setNoticias(datos.articles);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerNoticias();
  }, [pais, categoria]);

  const handleConsultarAPI = (paisSeleccionado, categoriaSeleccionada) => {
    setPais(paisSeleccionado);
    setCategoria(categoriaSeleccionada);
  };

  return (
    <>
      <h1 className="text-center mt-4 mb-4">Noticias</h1>
      <hr />
      <Maquetado consultarAPI={handleConsultarAPI} />
      <Noticias noticias={noticias} />
      <footer>
        <p className="text-center">
          {" "}
          Creado por Agustin Baza - RollingCode School
        </p>
      </footer>
    </>
  );
}

export default App;
