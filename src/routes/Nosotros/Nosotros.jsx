import nosotrosImg from "../../assets/images/noimg.png";

const Nosotros = () => {
  return (
    <div className="flex flex-row px-40 py-4">
      <div className="flex flex-col w-3/5">
        <h2 className="text-xl text-red-600 pb-4">Nosotros</h2>
        <div className="px-8">
          <p>
            NEILEM SAC es una empresa dedicada a brindar soluciones
            tecnológicas, como la creación de software, aplicaciones de
            escritorio y app móviles.
            <br />
            Actualmente se encuentra en el rubro de ventas de software y está
            ubicada en Av. Antunez de Mayolo 1251, Santiago de Surco, Lima,
            Perú, con RUC 20521819503 registrado en Sunat.
            <br />
            Llevan a cabo su actividad basándose en nuevas tecnologías y
            aplicaciones para generar nuevos productos y brindar soluciones
            eficientes a sus clientes.
          </p>
        </div>
        <br />
        <h2 className="text-xl text-red-600 pb-4">Mision</h2>
        <p className="px-8">
          Ser una empresa líder soluciones tecnológicas y creadores de software
          a nivel nacional, diferenciándose en nuestros tres pilares: confianza,
          servicio y la calidad del producto; con un alto grado de
          responsabilidad hacia nuestra sociedad.
        </p>
        <br />
        <h2 className="text-xl text-red-600 pb-4">Vision</h2>
        <p className="px-8">
          Ser la empresa líder en nuestro rubro empresarial diferenciándose de
          cualquier competencia, enfocados en la preparación, el mantenimiento
          de los productos y en el énfasis del tiempo, optimizando algunas
          funciones del proceso de despacho.
        </p>
      </div>

      <div className="flex w-2/5">
        <img src={nosotrosImg} />
      </div>
    </div>
  );
};

export default Nosotros;
