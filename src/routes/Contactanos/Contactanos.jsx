const contactanos = () => {
    
    return (
        <form id="appointmentForm" onSubmit="validateForm(event)">
          <label string="name">Nombre:</label>
          <input type="text" id="name" name="name" required/>
      
          <label string="email">Email:</label>
          <input type="email" id="email" name="email" required/>
      
          <label string="phone">Teléfono:</label>
          <input type="text" id="phone" name="phone" required/>
      
          <label string="date">Fecha de la cita:</label>
          <input type="date" id="date" name="date" required/>
      
          <label string="message">Mensaje adicional:</label>
          <textarea id="message" name="message" rows="4"></textarea>
      
          <input type="submit" value="Solicitar Cita"/>
        </form>
    );
  };
  
  export default contactanos;