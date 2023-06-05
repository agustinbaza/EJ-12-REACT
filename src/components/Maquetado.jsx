import React from "react";
import "./Maquetado.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Noticias from "./Noticias";

const Maquetado = ({ consultarAPI, noticias }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const categoriaSeleccionada = event.target.categoria.value;
    consultarAPI(categoriaSeleccionada);
  };

  return (
    <section>
      <h1 className="text-center mt-4">Noticias</h1>
      <hr />
      <article className="orden">
        <div className="d-flex justify-content-evenly align-items-center mt-5 mb-5 espaciado">
          <h2 className="">Buscar por categoría:</h2>
          <div className="ordenBoton">
            <form onSubmit={handleSubmit}>
              <select className="input" name="categoria">
                <option value="general">General</option>
                <option value="sports">Deportes</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="technology">Tecnología</option>
              </select>
              <button type="submit" className="btn btn-dark">
                Buscar
              </button>
            </form>
          </div>
        </div>
        <hr />
        <Noticias noticias={noticias} />
      </article>
      <footer>
        <p className="text-center">
          {" "}
          Creado por Agustin Baza - RollingCode School
        </p>
      </footer>
    </section>
  );
};

export default Maquetado;
