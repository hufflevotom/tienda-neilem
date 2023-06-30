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
        <h2 className="text-xl text-red-600 pb-4">Proceso</h2>
        <h2 className="text-xl text-blue-600 pb-4">Planeamiento</h2>
        <p className="px-8">
        Juntos estableceremos un cronograma de trabajo definiendo 
        los objetivos y metas a lograr al finalizar el proyecto. 
        Esto nos permitirá tener un producto de calidad dentro del 
        tiempo establecido.
        </p>
        <h2 className="text-xl text-blue-600 pb-4">Contenidos</h2>
        <p className="px-8">
        Para cumplir con los objetivos del proyecto es necesario definir el 
        contenido (imágenes, textos, vídeos) adecuado. Se debe hacer una 
        selección cuidadosa de la información teniendo en cuenta que a veces 
        demasiada información puede saturar y hasta confundir a nuestros 
        visitantes.
        </p>
        <h2 className="text-xl text-blue-600 pb-4">Diseños</h2>
        <p className="px-8">
        Una vez que los contenidos están definidos y bien organizados le daremos 
        un toque visual llamativo y eficaz con lo cual el sitio web se vera atractivo 
        y funcional permitiendo que los usuarios tengan una buena experiencia.
        </p>
        <h2 className="text-xl text-blue-600 pb-4">Programación</h2>
        <p className="px-8">
        Necesitamos que su sitio web pueda visualizarse perfectamente en 
        dispositivos como laptops, smartphones, tablets o Pc´s y del mismo modo contar 
        con un panel administrable que le permitan modificar la información de una 
        forma sencilla y rápida.
        </p>
        <h2 className="text-xl text-blue-600 pb-4">Coordinación</h2>
        <p className="px-8">
        En este punto revisaremos los contenidos, el diseño y la programación 
        del sitio web pudiendo darnos observaciones y/o sugerencias que puedan 
        ayudarnos a mejorar la propuesta. Es importante tener en cuenta las 
        sugerencias de los especialistas.
        </p>
        <h2 className="text-xl text-blue-600 pb-4">Optimización</h2>
        <p className="px-8">
        Una vez teniendo todo listo es necesario ajustar algunos detalles 
        que permitirán que tu web cargue mas rápido, aparezca en los buscadores 
        o cuente con un chat para una mayor comodidad de tus clientes potenciales.
        </p>
        <h2 className="text-xl text-blue-600 pb-4">Lanzamiento</h2>
        <p className="px-8">
        Tu web está completa, ahora debemos darla a conocer, difundela 
        por tus redes sociales, envía algunos correos o empieza una campaña 
        en google adwords. Tu web esta visible para el Perú y el mundo.
        </p>

      </div>

      <div className="flex w-2/5">
        <img src={nosotrosImg} />
      </div>
    </div>
  );
};

export default Nosotros;
