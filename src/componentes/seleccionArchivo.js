import React from "react";
import * as XLSX from "xlsx";
import Validar from './validacion'
import '../styles/estilos.css'
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';

class ExcelToJson extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      espera:'',
      show:false
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  };


  handleFile() {
    const reader = new FileReader();
    const lecturaDelArchivo = !!reader.readAsBinaryString;
    const encabezadosTodos = []

    try {
      reader.onload = (e) => {
        try {
          const archivo = e.target.result;
          const hojasArchivo = XLSX.read(archivo, { type: lecturaDelArchivo ? 'binary' : 'array', bookVBA: true });
          for (let i = 0; i < hojasArchivo.SheetNames.length; i++) {
            const hoja = hojasArchivo.SheetNames[i];
            const encabezadosPorHoja = hojasArchivo.Sheets[hoja];
            const data = XLSX.utils.sheet_to_json(encabezadosPorHoja, { header: 1 });
            this.setState({ data: data });
            encabezadosTodos.push(this.state.data[0])
          }
          Validar(this.props.modulo, this.state.file.name, encabezadosTodos)

        } catch (error) {
          this.setState({ error })
          alert('no se encontro ' + this.state.file.name + ' en el modulo ' + this.props.modulo)
        }

      };
      if (lecturaDelArchivo) {
        reader.readAsBinaryString(this.state.file);
      } else {
        reader.readAsArrayBuffer(this.state.file);
      };
    } catch (error) {
      this.setState({ error })
    }
  }

  render() {
    return (
      <div>
        <form>
        <TextField type="file"
          className="archivo"
          id="file"
          onChange={this.handleChange} 
          required/>
        <br/><br/> 
        <input type='submit'
          className="enviar"
          value="Validar"  
          onClick={this.handleFile}/>
        </form>
        <p>{this.state.espera}</p>
        <Modal style={{background: 'red'}} ref={"modal1"}>
          <h1>Hola</h1>
        </Modal>
      </div>

    )
  }
}

export default ExcelToJson;