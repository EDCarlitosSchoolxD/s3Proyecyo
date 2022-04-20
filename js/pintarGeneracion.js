function pintarGeneracion(marca,container){
    if(marca === 'intel'){
        container.innerHTML = `
    <select name="generacion" id="generacion">
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="12">12</option>
    </select>`
    }else if(marca === 'amd'){
        container.innerHTML = `
    <select name="generacion" id="generacion">
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>`
    }
}

export {pintarGeneracion};