import Procesadores from "./js/classes/Procesadores.js";
import Motherboard from "./js/classes/Motherboard.js";
import pedirDatos from "./js/pedirDatos.js";
import { pintarGeneracion } from "./js/pintarGeneracion.js";
import { crearOption } from "./js/crearOption.js";
import { borrarDatos } from "./js/borrarDatos.js";

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
//Container IMG
const imgContainerProcesador = document.getElementById('img-pro');
const imgContainerMother = document.getElementById('img-mother');
const imgContainerMemory = document.getElementById('img-memory');
const imgContainerRAM = document.getElementById('img-ram');



/**
 * VARIABLES GLOBALES
 */
let marca = 'intel';
let precioProcesador;
let precioMother;

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
        const nombre = document.createElement('h2');
        const precio = document.createElement('p');
        if(select.value === object.nombres[i]){
            img.src = object.imagen[i];
            nombre.textContent = object.nombres[i];

            precio.textContent = object.precio[i]+ '$';
            console.log(object.nombres[i]);
            container.appendChild(img);
            container.appendChild(nombre);
            container.appendChild(precio);
            precioV = object.precio[i];
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


/*EVENT LISTENER (APP)*/

// Marca ('click') event


buttons(amdButton,'amd');
buttons(intelButton,'intel');


// Generacion event ('change')
selectGeneracion.addEventListener('change',()=>{
    
    selectMotherboard.innerHTML = "";

    const value = parseInt(selectGeneracion.value);
    selectProcesadores.innerHTML = "";
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
        selectProcesadores.innerHTML = `<option value="No hay">No hay</option>`
    }

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



debug.addEventListener('click',()=>{
    console.log(precioProcesador);
    console.log(precioMother);
})