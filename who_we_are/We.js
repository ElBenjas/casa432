import React, { Component } from "react";

class We extends Component {
  render(){
    return(
      <div class="row">
        <div class="col-12">
          <h1>{ this.props.teamTitle }</h1>
          <h1>{ this.props.clientsTitle }</h1>
        </div>
      </div>
    );
  }
}

We.defaultProps = {
  teamTitle: 'Nuestro equipo',
  clientsTitle: 'Nuestros clientes'
}

export default We;
