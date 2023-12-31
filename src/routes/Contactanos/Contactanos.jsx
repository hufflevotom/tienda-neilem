import { PHONE_NUMBER } from "../../constantes";
import { FireStore } from "../../firebase";

const validateForm = (body) => {
  const { name, email, phone, date, message } = body;
  if (!name) {
    return { isValid: false, error: "El nombre es obligatorio" };
  }
  if (!body.case) {
    return { isValid: false, error: "El asunto es obligatorio" };
  }
  if (!email) {
    return { isValid: false, error: "El email es obligatorio" };
  }
  if (!phone) {
    return { isValid: false, error: "El teléfono es obligatorio" };
  }
  if (!date) {
    return { isValid: false, error: "La fecha es obligatoria" };
  }
  if (!message) {
    return { isValid: false, error: "El mensaje es obligatorio" };
  }
  return { isValid: true };
};

const submitForm = async (event) => {
  try {
    event.preventDefault();
    const form = document.getElementById("appointmentForm");
    const body = {
      name: form.name.value,
      case: form.case.value,
      email: form.email.value,
      phone: form.phone.value,
      date: form.date.value,
      message: form.message.value,
    };
    const { isValid, error } = validateForm(body);
    if (isValid) {
      const docRef = await FireStore.save("citas", body);
      console.log("Document written with ID: ", docRef.id);
      alert("Cita solicitada con éxito");
      form.reset();
    } else {
      alert(error);
    }
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error al solicitar la cita");
  }
};

const Contactanos = () => {
  return (
    <div className="flex flex-row items-start justify-center">
      <div className="flex flex-col items-start justify-center w-2/5">
        <h1 className="text-4xl font-bold text-center mt-10 mb-5">
          Oficinas centrales
        </h1>
        <p className="text-center mb-10">
          Estamos ubicados en la siguiente dirección:
        </p>
        <div className="flex flex-col items-center justify-center mb-10">
          <p className="text-center mb-5">
          Avenida Mariscal Cáceres Mz 43A Lt 8 - Buenos Aires de Villa ( Inicial -primaria) / Av. Pedro RuizGallo Mz 43 Lt4 - Buenos Aires de Villa( secundaria)
          </p>
          <p className="text-center mb-5">Teléfono: {PHONE_NUMBER}</p>
          <p className="text-center mb-5"> 
            Email: <a href="mailto:abc@gmail.com">institucioneducativareydereyes@gmail.com</a>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mb-10">
          <p className="text-center mb-5">Horario de atención:</p>
          <p className="text-center mb-5">
            Lunes a viernes de 8:00 a.m. a 5:00 p.m.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-3/5">
        <h1 className="text-4xl font-bold text-center mt-10 mb-5">
          Solicita una cita
        </h1>
        <p className="text-center mb-10">
          Déjanos tus datos y nos pondremos en contacto contigo para agendar una
          cita.
        </p>

        <form
          id="appointmentForm"
          onSubmit={(e) => submitForm(e)}
          className={`flex flex-col gap-4 w-full pt-10 pb-10 [&>label]:text-gray-500
        [&>input]:border-gray-500
        [&>input]:rounded-lg 
        [&>input]:border 
        [&>input]:px-3 
        [&>input]:py-2.5 
        [&>input]:text-sm 
        [&>input]:outline 
        [&>input]:outline-0 
        [&>input]:transition-all 
        [&>textarea]:border-gray-500
        [&>textarea]:rounded-lg 
        [&>textarea]:border 
        [&>textarea]:bg-transparent 
        [&>textarea]:px-3 
        [&>textarea]:py-2.5 
        [&>textarea]:text-sm 
        [&>textarea]:outline 
        [&>textarea]:outline-0 
        [&>textarea]:transition-all 
        [&>select]:border-gray-500
        [&>select]:rounded-lg 
        [&>select]:border 
        [&>select]:bg-transparent 
        [&>select]:px-3 
        [&>select]:py-2.5 
        [&>select]:text-sm 
        [&>select]:outline 
        [&>select]:outline-0 
        [&>select]:transition-all 
      `}
        >
          <label string="name">Nombre:</label>
          <input type="text" id="name" name="name" required />

          <label string="case">Asunto:</label>
          <select id="case" name="case" required>
            <option value="iniciar un proyecto">Matricula</option>
            <option value="creacion de software">Asistencias</option>
            <option value="mantenimiento">Notas</option>
            <option value="otros">Otros</option>
          </select>

          <label string="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label string="phone">Teléfono:</label>
          <input type="text" id="phone" name="phone" required />

          <label string="date">Fecha de reunion:</label>
          <input type="date" id="date" name="date" required />

          <label string="message">Mensaje adicional:</label>
          <textarea id="message" name="message" rows="4"></textarea>

          <input
            type="submit"
            value="Solicitar Cita"
            className="pt-6 py-2 text-white bg-red-600 border-none hover:cursor-pointer hover:bg-red-700"
          />
        </form>
        <div className="flex flex-row items-center justify-center gap-4">
          <a
            href={`https://api.whatsapp.com/send?phone=51${PHONE_NUMBER}&text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20sus%20servicios.`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 px-4 py-2 rounded-md text-white"
          >
            <i className="fa-brands fa-whatsapp" /> WhatsApp
          </a>
          <a
            href={`https://www.google.com/maps/place/I.E.P+Rey+de+Reyes/@-12.1886918,-76.9989859,3a,75y/data=!3m8!1e2!3m6!1sAF1QipNpjj7FeLfv-A3EIDV4opoxTKmrIgY3SMK8tRuZ!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNpjj7FeLfv-A3EIDV4opoxTKmrIgY3SMK8tRuZ%3Dw114-h86-k-no!7i4032!8i3024!4m7!3m6!1s0x9105b9db3493de91:0xc87ec070301e11d5!8m2!3d-12.1886584!4d-76.9990306!10e5!16s%2Fg%2F11c58s02bs?authuser=0&entry=ttu`}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 px-4 py-2 rounded-md text-white"
          >
            <i className="fa-solid fa-map-location-dot" /> Ubícanos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
