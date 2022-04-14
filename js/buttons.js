function buttons(button, marcaa){
let marca = 'intel';
    button.addEventListener('click',()=>{
        marca = marcaa;
        pintarGeneracion(marca,selectGeneracion);
        selectMotherboard.innerHTML = "";
        selectMotherboard.innerHTML = "";
        selectProcesadores.innerHTML = "";
        imgContainerMother.innerHTML = "";
        imgContainerProcesador.innerHTML = "";
    })
}
export {buttons};