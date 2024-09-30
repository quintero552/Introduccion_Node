const {registrar, leer} = require('./operaciones')

const add = process.argv.slice(2);
const operacion = add[0];
const nombre = add[1];
const edad = add[2];
const tipo = add[3];
const color = add[4];
const enfermedad = add[5];

if (operacion === 'registrar') {
    let resultados = registrar(nombre,edad,tipo,color,enfermedad)
    console.log(resultados)
}else if (operacion === 'leer'){
    let resultados = leer()
    console.log(resultados)
}else (
    console.log('Operación no válida')
)