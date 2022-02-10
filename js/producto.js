"use strict";
import {getProducto} from "./ataquesBaseDatos.js";
import { pintarProducto } from "./plantillasPintar.js";

window.onload = async ()=>{
    var d = document;
    
    var id = getParameterByName("producto"); //producto recogido

    if(id.length==0) {
        window.alert("ERROR");
        window.location.href = "marketplace.html";
    }

    var divEditar = d.getElementById("producto");
    var producto = await getProducto(id);
    
    pintarProducto(producto, divEditar);
    
    


    // ##### FUNCIONES ##### //

    //Esta función recoge el parámetro que le pongamos por metodo GET de la URL de la página web.
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    
}
