import {headers} from './encabezados'
function Validar(nombreModulo, nombreActividad, encabezadosTodos) {

let validacionEncabezados;
const encabezadosPredeterminados = []
let noEncontrado
encabezadosPredeterminados.push(...headers[nombreModulo][nombreActividad])

for (let i = 0; i < encabezadosTodos.length && encabezadosPredeterminados.length; i++) {
        let celdasActuales = encabezadosTodos[i], celdasPredeterminadas = encabezadosPredeterminados[i];
    if (celdasActuales.length === celdasPredeterminadas.length) {
        for (let j = 0; j < celdasActuales.length; j++) {
            for (let k = 0; k < celdasPredeterminadas.length; k++) {
                if (celdasActuales[j] !== celdasPredeterminadas[k]) {
                    noEncontrado=celdasActuales[j]
                    validacionEncabezados = false
                } else {
                    validacionEncabezados = true
                    break
                }
            }
            if (validacionEncabezados === false) {
                break
            }
        }
    } else {
        validacionEncabezados = false
        break
    }
};
if (validacionEncabezados === true) {
    alert(`--Es valido--`)
} else {
    alert(`No es valido: el encabezado ${noEncontrado} no coincide`)
}};

export default Validar