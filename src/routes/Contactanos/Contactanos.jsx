import { FireStore } from "../../firebase";

const validateForm = (body) => {
  const { name, email, phone, date, message } = body;
  if (!name) {
    return { isValid: false, error: "El nombre es obligatorio" };
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
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;
    const body = {
      name: name,
      email: email,
      phone: phone,
      date: date,
      message: message,
    };
    const { isValid, error } = validateForm(body);
    if (isValid) {
      const docRef = await FireStore.save("citas", body);
      console.log("Document written with ID: ", docRef.id);
      alert("Cita solicitada con éxito");
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
    <form
      id="appointmentForm"
      onSubmit={(e) => submitForm(e)}
      className="flex flex-col gap-4 mx-40 [&>input]:border-red-500"
    >
      <label string="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="rounded-lg border bg-transparent px-3 py-2.5 text-sm outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      />

      <label string="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label string="phone">Teléfono:</label>
      <input type="text" id="phone" name="phone" required />

      <label string="date">Fecha de la cita:</label>
      <input type="date" id="date" name="date" required />

      <label string="message">Mensaje adicional:</label>
      <textarea id="message" name="message" rows="4"></textarea>

      <input type="submit" value="Solicitar Cita" />
    </form>
  );
};

export default Contactanos;
