import React, { Component } from 'react'
import ExcelToJson from './seleccionArchivo'
import '../styles/estilos.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class Modulo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value1: ''
    }

    this.definirValue = this.definirValue.bind(this);
    this.evento = this.evento.bind(this);
  }


  definirValue(event) {
    this.setState({ value1: event.target.value })

  }

  evento(event) {

    alert(this.state.value1)
    event.preventDefault();
  }
  modulo = 'Analisis'
  render() {

    return (

      <div>
        <form onSubmit={this.evento}>
          <InputLabel id="demo-controlled-open-select-label" >Seleccione un modulo</InputLabel>
          <Select labelId="demo-controlled-open-select-label" 
          style={{ width: '300px' }} 
          value={this.state.value1} 
          onChange={this.definirValue}>
            <MenuItem value='Analisis'>Analisis </MenuItem>
            <MenuItem value='Balance macromedicion'> Balance macromedicion</MenuItem>
            <MenuItem value='Hallazgos'> Hallazgos</MenuItem>
            <MenuItem value='Informativas'>Informativas </MenuItem>
            <MenuItem value='Liquidacion'>Liquidacion </MenuItem>
            <MenuItem value='Novedades'>Novedades </MenuItem>
            <MenuItem value='Storia'> Storia</MenuItem>
          </Select>
        </form><br />
        <ExcelToJson name={this.state.value1} />
      </div>

    )
  }

}

export default Modulo