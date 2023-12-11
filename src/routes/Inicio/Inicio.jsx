import RapidoImg from "../../assets/images/rapido.png";
import EconomicoImg from "../../assets/images/Economico.png";
import EfectivoImg from "../../assets/images/efectivo.png";

import "./inicio.css";
import Slider from "./Slider/Slider";

const Inicio = () => {
  return (
    <>
      <Slider />
      <div className="px-40">
        <div className="flex flex-row gap-7 py-8 [&>div]:flex [&>div]:flex-col">
          <div>
            <img src={RapidoImg} className="circulo" />
            <h2>Excelencia académica</h2>
            <p>
            Buscamos que nuestros alumnos se integren y aporten a la sociedad actual compleja, 
            cambiante y que presenta múltiples desafíos a nivel global por ello nuestro enfoque 
            académico está centrado en el desarrollo de habilidades que contribuyen al logro de 
            una sólida formación académica.Promovemos la creatividad, el aprendizaje de los idiomas, 
            el uso de la tecnología como herramientas en el proceso de enseñanza y de aprendizaje. 
            Además, dentro de esta formación académica las experiencias de viajes internacionales 
            en el ámbito académico, cultural, tecnológico y de idiomas permiten a los alumnos abrir 
            su mente y conocer otras culturas.
            </p>
          </div>
          <div>
            <img src={EconomicoImg} className="circulo" />
            <br>
            </br>
            <h2>Programas Académicos</h2>
            <p>
            Nuestros programas académicos están diseñados para desafiar a los estudiantes 
            intelectualmente mientras integran principios bíblicos en cada materia. 
            Creemos que la educación es un viaje continuo, y nuestro dedicado equipo de profesionales 
            está aquí para guiar a los estudiantes en cada paso.
            </p>
          </div>
          <div>
            <img src={EfectivoImg} className="circulo" />
            <h2>Únete a Nuestra Comunidad:</h2>
            <p>
            Rey de reyes es más que una institución educativa; somos una comunidad 
            que se apoya mutuamente en el crecimiento académico y espiritual. 
            Únete a nosotros en este viaje emocionante hacia la excelencia educativa 
            y la formación integral de nuestros estudiantes.
            </p>
          </div>
        </div>

        <div className="contenedor-columna">
          <div className="columna1">
            <h2>SOBRE NEILEM SAC </h2>
            <p>
              Se realizan implementaciones, creaciones de sistemas, apps móviles
              / de escritorio y ayuda informática. Especialistas en el ámbito
              informático.
            </p>
            <br>
            </br>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
