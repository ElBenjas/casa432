import React, { Component } from "react";

class Contact extends Component {
  render(){
    return(
      <div class="row">

        <div class="col">
          <div align="center">
            <h1>{this.props.header}</h1>

            <p>Escribenos a <a target="_blank" href="mailto:contaco@casa432.com" rel="noopener noreferrer">contaco@casa432.com</a></p>
            <p>ó llena este formulario para contactarnos.</p>
          </div>
        </div>

        <div class="col">
          <form>
            <div class="form-group">
              <label for="name">Nombre</label>
              <input type="text" class="form-control" id="name" placeholder="Nombre"></input>
              <small id="NombreHelp" class="form-text text-muted">Ejemplo: 'Rodrigo Gabriel'.</small>
            </div>

            <div class="form-group">
              <label for="apellido">Apellidos</label>
              <input type="text" class="form-control" id="apellido" placeholder="Apellidos"></input>
              <small id="NombreHelp" class="form-text text-muted">Ejemplo: 'Carrillo Carrillo'.</small>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="ejemplo@ejemplo.com"></input>
              <small id="emailHelp" class="form-text text-muted">Ejemplo: 'contact@casa432.com'.</small>
            </div>

            <div class="form-group">
              <label for="asunto">Asunto</label>
              <input type="text" class="form-control" id="asunto" aria-describedby="asuntoHelp" placeholder="Aqui va el asunto de tu mensaje..."></input>
              <small id="asuntoHelp" class="form-text text-muted">Solicito cotizacón...</small>
            </div>

            <div class="form-group">
              <label for="mensaje">Mensaje</label>
              <textarea type="text" class="form-control" id="mensaje" aria-describedby="mensajeHelp" placeholder="Aquí va tu mensaje." rows="3"></textarea>
              <small id="mensajeHelp" class="form-text text-muted">Ejemplo: 'No me han enviado nada de lo que necesito.'.</small>
            </div>

            <div align="center">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

Contact.defaultProps = {
  header: 'Contacto'
}

export default Contact;
