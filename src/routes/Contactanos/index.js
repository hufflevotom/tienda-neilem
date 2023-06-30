import React from 'react';
class Contactanos extends React.Component {
    
    validateForm = (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const date = document.getElementById("date").value;
  
      const errorElement = document.getElementById("error");
      errorElement.innerHTML = "";
  
      if (name === "" || email === "" || phone === "" || date === "") {
        errorElement.innerHTML = "Por favor, complete todos los campos.";
        return;
      }
  
      // Mostrar mensaje de éxito
      alert("¡Solicitud de cita enviada con éxito!");
      document.getElementById("appointmentForm").reset();
    };
    render() {
      return (
        <>
        <h2>Solicitud de Cita</h2>
        <form id="appointmentForm" onSubmit="validateForm(event)"/>
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
        <form/>
        </>
      );
    }
  }
  
  export default Contactanos;

  