"use strict";

window.onload = ()=>{
    var d = document;
    
    var producto = getParameterByName("producto"); //producto recogido

    if(producto.length==0) {
        window.alert("ERROR");
        window.location.href = "marketplace.html";
    }
    
    
    //Esta función recoge el parámetro que le pongamos por metodo GET de la URL de la página web.
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    
}
