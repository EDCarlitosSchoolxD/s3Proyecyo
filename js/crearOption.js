function crearOption(nodo,dato){
    const option = document.createElement('option');
            option.value = dato;
            option.textContent = dato
            nodo.appendChild(option);
}

export {crearOption};