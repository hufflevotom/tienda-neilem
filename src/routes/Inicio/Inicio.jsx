import InicioImg from "../../assets/images/efectivo.png";
import InicioImg1 from "../../assets/images/rapido.png";
import InicioImg3 from "../../assets/images/Economico.png";

const Inicio = () => {
  return (
    <div className="container-index">
      <div className="container-circulos">
        <div className="container-imagen">
          <img src={InicioImg1} className="circulo" />
          <h2>Rápido</h2>
          <p>
          Nuestra experiencia nos permite terminar proyectos en tiempo récord,
          sin que ello implique tener una menor calidad, tu página web puede estar 
          funcionando en menos de 1 semana.
          </p>
        </div>
        <div className="container-imagen">
          <img src={InicioImg3} className="circulo" />
          <h2>Económico</h2>
          <p>
          Diseño profesional a un precio justo, nuestro servicio cuesta hasta 3 veces 
          menos que en otras empresas manteniendo altos estándares de calidad y creatividad.
          </p>
        </div>
        <div className="container-imagen">
          <img src={InicioImg} className="circulo" />
          <h2>Efectivo</h2>
          <p>
          Más de 20 años de experiencia en el campo de diseño gráfico y 10 años en el de diseño 
          web es tiempo suficiente como para asegurarte un servicio profesional y de alta calidad.
          </p>
        </div>
      </div>

      <div className="contenedor-columna">
        <div className="columna1">
          <h2>SOBRE NEILEM SAC </h2>
          <p>
          Se realizan implementaciones, creaciones de sistemas, apps móviles / de escritorio 
          y ayuda informática. Especialistas en el ámbito informático.  
          </p>
        </div>
        <div className="columna2">
          <img src="assets/img/index.png" />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
