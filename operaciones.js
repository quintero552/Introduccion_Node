//Logica de la Aplicacion
const app = require('fs')




//      {
//          nombre: add[0],
//          edad: add[1],
//          animal: add[2],
//          color: add[3],
//          enfermedad: add[4]
//      }
//  ]




//Crear el Archivo JSON

const registrar = (nombre,edad,tipo,color,enfermedad) => {
    try {
        const data = leer()
        const citas = JSON.parse(data)
        citas.push({nombre,edad,tipo,color,enfermedad})
        app.writeFileSync('citas.json', JSON.stringify(citas))
    } catch (error) {
        console.log('NO se ha podidoingresar la informacion')
    }
}

const leer = () =>{
    try {
        const  data = app.readFileSync('citas.json', 'utf-8')
        return data
    } catch (error) {
        console.log('No es posible leer el archivo')
    }
}


module.exports = { registrar, leer}








//Funcion de PROCESS.ARGV.SLICE

// const agregarArregloVacio = (nameArchivo) => {
//     app.writeFileSync(nameArchivo, '[]')
// }

// agregarArregloVacio('citas.json')


//Funcion para agregar datos
// const registrar = (archivo) => {

//     const leer = app.readFileSync(archivo, 'utf8')

//     JSON.parse(leer).forEach(e => {
//         console.log('ESTE VIENE DEL ARCHIVO ADD',e)
//     })
// }

// registrar('citas.json')


//Arreglo Vacio
// const vaciarJSON = (nombreDelArchivo) => {
//     app.writeFileSync(nombreDelArchivo, '[]')
// }

//vaciarJSON('citas.json')