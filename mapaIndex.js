function elegirPlataforma(dato){
    alert(dato + "actualizando conocimientos de git");
    console.log(dato);
    if(dato.opcion == 1){
        window.location.href = 'pizarra_Teclado.html/'+dato.detalle;
    }else if(dato.opcion == 2){
        window.location.href = 'pizarra_Mouse.html'+dato.detalle;
    }
}
