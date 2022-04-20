import Procesadores from "./js/classes/Procesadores.js";
import Motherboard from "./js/classes/Motherboard.js";
import pedirDatos from "./js/pedirDatos.js";
import { pintarGeneracion } from "./js/pintarGeneracion.js";
import { crearOption } from "./js/crearOption.js";
import { borrarDatos } from "./js/borrarDatos.js";
import { Memory } from "./js/classes/Memory.js";

/**
 * DOM NODOS;
 */
const debug = document.getElementById('Mostrar');
// Marca Button
const intelButton = document.getElementById('intel-button');
const amdButton = document.getElementById('amd-button');
// SELECT
const selectGeneracion = document.getElementById('generacion');
const selectProcesadores = document.getElementById('procesadores');
const selectMotherboard = document.getElementById('mother')
const selectMemory = document.getElementById('memory');
const selectRAM = document.getElementById('ram');
//Container IMG
const imgContainerProcesador = document.getElementById('img-pro');
const imgContainerMother = document.getElementById('img-mother');
const imgContainerMemory = document.getElementById('img-memory');
const imgContainerRAM = document.getElementById('img-ram');


const genPDF = document.getElementById('pdf')


/**
 * DATOS INTEL
 */
 const procesadores9 = new Procesadores;
 const procesadores10 = new Procesadores;
 const procesadores12 = new Procesadores;
 pedirDatos(procesadores9,'./servidor/procesadoresIntel/novenaIntel.php')
 pedirDatos(procesadores10,'./servidor/procesadoresIntel/decimaIntel.php')
 pedirDatos(procesadores12,'./servidor/procesadoresIntel/doceIntel.php')
 /*TERMINA DATOS INTEL*/
 
 /**
  * DATOS AMD
  */
 const procesadores3 = new Procesadores;
 const procesadores4 = new Procesadores;
 const procesadores5 = new Procesadores;
 pedirDatos(procesadores3,'./servidor/procesadoresAMD/terceraAMD.php');
 pedirDatos(procesadores4,'./servidor/procesadoresAMD/cuartaAmd.php');
 pedirDatos(procesadores5,'./servidor/procesadoresAMD/quintaAmd.php')
 
 
 /**
  * DATOS MOTHERBOARD
  */
  const amdMother = new Motherboard;
  const intelMother9 = new Motherboard;
  const intelMother10 = new Motherboard;
  const intelMother12 = new Motherboard;
 
 pedirDatos(amdMother,'./servidor/motherboard/amdMotherboard.php');
 pedirDatos(intelMother9,'./servidor/motherboard/intel9.php');
 pedirDatos(intelMother10,'./servidor/motherboard/intel10.php');
 pedirDatos(intelMother12,'./servidor/motherboard/intel12.php')
 
 
 console.log(intelMother12);
// DATOS MEMORY
const memory = new Memory;
pedirDatos(memory,'./servidor/memory/memory.php');
// RAM
const RAM = new Memory;
pedirDatos(RAM,'./servidor/memory/ram.php')

console.log(memory);
console.log(RAM);


/**
 * VARIABLES GLOBALES
 */
let marca = 'intel';
let precioProcesador;
let precioMother;
let precioMemory;
let precioRam;
/*TERMINA LOS GLOBALES */




/**
 * FUNCIONES QUE NO SE PUEDEN EXPORTAR
 */
function mapOption(array,nodo){
    array.nombres.map(nombre =>{
        crearOption(nodo,nombre);
    })
}

function pintarProcesador(object,select,container,precioV){
    

    for(let i = 0; i<=object.nombres.length; i++){
        const img = document.createElement('img');
        const nombre = document.createElement('p');
        const precio = document.createElement('p');
        
        if(select.value === object.nombres[i]){
            img.src = object.imagen[i];
            nombre.textContent = object.nombres[i];

            const br = document.createElement('br');

            precio.textContent = object.precio[i]+ '$';
            console.log(object.nombres[i]);
            container.appendChild(img);
            container.appendChild(br);
            container.appendChild(br);
            container.appendChild(nombre);
            container.appendChild(precio);
            precioV = parseFloat(object.precio[i]);
            console.log(precioV);

            break;
        }

    }
    return precioV;
}
function buttons(button, marcaa){
    button.addEventListener('click',()=>{
        marca = marcaa;
        pintarGeneracion(marca,selectGeneracion);
        borrarDatos(selectMotherboard,selectProcesadores,imgContainerMother,imgContainerProcesador);
    })
}

/*TERMINA LAS FUNCIONES */






/*EVENT LISTENER (APP)*/


// Marca ('click') event
buttons(amdButton,'amd');
buttons(intelButton,'intel');


// Generacion event ('change')
selectGeneracion.addEventListener('click',()=>{
    
    selectMotherboard.innerHTML = "";
    selectMemory.innerHTML = "";
    selectRAM.innerHTML = "";
    selectProcesadores.innerHTML = "";
    const value = parseInt(selectGeneracion.value);


    if(value === 9){
        borrarDatos(selectMotherboard,selectProcesadores,imgContainerMother,imgContainerProcesador);
        mapOption(procesadores9,selectProcesadores);
        mapOption(intelMother9,selectMotherboard);

    }else if(value === 10){
        borrarDatos(selectMotherboard,selectProcesadores,imgContainerMother,imgContainerProcesador);
        mapOption(procesadores10,selectProcesadores); 
        mapOption(intelMother10,selectMotherboard);

    }else if (value === 12){
        borrarDatos(selectMotherboard,selectProcesadores,imgContainerMother,imgContainerProcesador);
        mapOption(procesadores12,selectProcesadores);
        mapOption(intelMother12,selectMotherboard);

    }else if(value === 3){
        mapOption(procesadores3,selectProcesadores);
        mapOption(amdMother,selectMotherboard);

    }else if(value === 4){
        mapOption(procesadores4,selectProcesadores);
        mapOption(amdMother,selectMotherboard);

    }else if(value === 5){
        mapOption(procesadores5,selectProcesadores);
        mapOption(amdMother,selectMotherboard);

    }
    else{
        selectProcesadores.innerHTML = `<option value="No hay">Seleccione una marca</option>`
        selectMotherboard.innerHTML = `<option value="No hay">Seleccione una marca</option>`
    }
    mapOption(memory,selectMemory);
    mapOption(RAM,selectRAM)
})
    

// Procesadores event('change')
selectProcesadores.addEventListener('change',()=>{
    imgContainerProcesador.innerHTML = "";

    precioProcesador = pintarProcesador(procesadores9,selectProcesadores,imgContainerProcesador,precioProcesador);
    precioProcesador = pintarProcesador(procesadores10,selectProcesadores,imgContainerProcesador,precioProcesador);
    precioProcesador = pintarProcesador(procesadores12,selectProcesadores,imgContainerProcesador,precioProcesador)
    precioProcesador = pintarProcesador(procesadores3,selectProcesadores,imgContainerProcesador,precioProcesador)
    precioProcesador = pintarProcesador(procesadores4,selectProcesadores,imgContainerProcesador,precioProcesador)
    precioProcesador = pintarProcesador(procesadores5,selectProcesadores,imgContainerProcesador,precioProcesador)
})

selectMotherboard.addEventListener('change',()=>{
    imgContainerMother.innerHTML = "";
    precioMother = pintarProcesador(amdMother,selectMotherboard,imgContainerMother,precioMother)
    precioMother = pintarProcesador(intelMother9,selectMotherboard,imgContainerMother,precioMother)
    precioMother = pintarProcesador(intelMother10,selectMotherboard,imgContainerMother,precioMother)
    precioMother = pintarProcesador(intelMother12,selectMotherboard,imgContainerMother,precioMother)


})

selectMemory.addEventListener('change',()=>{
    imgContainerMemory.innerHTML = "";

    precioMemory = pintarProcesador(memory,selectMemory,imgContainerMemory,precioMemory);
})

selectRAM.addEventListener('change',()=>{
    imgContainerRAM.innerHTML = "";
    precioRam = pintarProcesador(RAM,selectRAM,imgContainerRAM,precioRam);
})


debug.addEventListener('click',()=>{
    console.log(precioProcesador);
    console.log(precioMother);
    console.log(precioMemory);
    console.log(precioRam);

    const total = precioMemory+precioProcesador+precioRam+precioMother;
    console.log('el total es:' + total);
})




genPDF.addEventListener('click',(e)=>{
    e.preventDefault();

    const htmlDOM = document.getElementById('a').outerHTML;
    console.log(selectGeneracion);


    fetch('http://localhost/proyectoFinalS3/pdf.php',{
        method: 'POST',
        body: JSON.stringify(htmlDOM),
        headers: {
            'Content-Type': 'application/json'// AQUI indicamos el formato
          }
    })
    .then(a => a.text())
    .then(a => console.log(a))
    
})

