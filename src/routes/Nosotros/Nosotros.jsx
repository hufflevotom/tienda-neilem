import nosotrosImg from "../../assets/images/noimg.png";

const Nosotros = () => {
  return (
    <div className="container">
      <div className="columna1">
        <h2>Nosotros</h2>
        <p>
          <p>
            NEILEM SAC es una empresa dedicada a brindar soluciones
            tecnológicas, como la creación de software, aplicaciones de
            escritorio y app móviles.
          </p>
          <br />
          <p>
            Actualmente se encuentra en el rubro de ventas de software y está
            ubicada en Av. Antunez de Mayolo 1251, Santiago de Surco, Lima,
            Perú, con RUC 20521819503 registrado en Sunat.
          </p>
          <br />
          <p>
            Llevan a cabo su actividad basándose en nuevas tecnologías y
            aplicaciones para generar nuevos productos y brindar soluciones
            eficientes a sus clientes.
          </p>
          <br />
        </p>
        <h2>Mision</h2>
        <p>
          <p>
            Ser una empresa líder soluciones tecnológicas y creadores de
            software a nivel nacional, diferenciándose en nuestros tres pilares:
            confianza, servicio y la calidad del producto; con un alto grado de
            responsabilidad hacia nuestra sociedad.
          </p>
          <br />
        </p>
        <h2>Vision</h2>
        <p>
          <p>
            Ser la empresa líder en nuestro rubro empresarial diferenciándose de
            cualquier competencia, enfocados en la preparación, el mantenimiento
            de los productos y en el énfasis del tiempo, optimizando algunas
            funciones del proceso de despacho.
          </p>
          <br />
        </p>
      </div>

      <div className="columna2">
        <img src={nosotrosImg} />
      </div>
    </div>
  );
};

export default Nosotros;
