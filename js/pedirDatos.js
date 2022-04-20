async function pedirDatos(object,url){
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            object.nombres.push(element.nombre);
            object.marca.push(element.marca);
            object.precio.push(element.precio);
            object.imagen.push(element.imagen)
        });
    })
    .catch(err => console.log(err))

}
export default pedirDatos;