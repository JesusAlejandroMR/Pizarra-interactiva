function elegirPlataforma(dato){
    //alert(dato);
    console.log(dato);
    if(dato.opcion == 1){
        window.location.href = 'pizarra_Teclado.html';
    }else if(dato.opcion == 2){
        window.location.href = 'pizarra_Mouse.html'
    }
}