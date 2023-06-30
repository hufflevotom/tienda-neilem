import RapidoImg from "../../assets/images/rapido.png";
import EconomicoImg from "../../assets/images/Economico.png";
import EfectivoImg from "../../assets/images/efectivo.png";

const Inicio = () => {
  return (
    <div className="px-40">
      <div className="flex flex-row gap-7 py-8 [&>div]:flex [&>div]:flex-col">
        <div>
          <img src={RapidoImg} className="circulo" />
          <h2>Rápido</h2>
          <p>
            Nuestra experiencia nos permite terminar proyectos en tiempo récord,
            sin que ello implique tener una menor calidad, tu página web puede
            estar funcionando en menos de 1 semana.
          </p>
        </div>
        <div>
          <img src={EconomicoImg} className="circulo" />
          <h2>Económico</h2>
          <p>
            Diseño profesional a un precio justo, nuestro servicio cuesta hasta
            3 veces menos que en otras empresas manteniendo altos estándares de
            calidad y creatividad.
          </p>
        </div>
        <div>
          <img src={EfectivoImg} className="circulo" />
          <h2>Efectivo</h2>
          <p>
            Más de 20 años de experiencia en el campo de diseño gráfico y 10
            años en el de diseño web es tiempo suficiente como para asegurarte
            un servicio profesional y de alta calidad.
          </p>
        </div>
      </div>

      <div className="contenedor-columna">
        <div className="columna1">
          <h2>SOBRE NEILEM SAC </h2>
          <p>
            Se realizan implementaciones, creaciones de sistemas, apps móviles /
            de escritorio y ayuda informática. Especialistas en el ámbito
            informático.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
