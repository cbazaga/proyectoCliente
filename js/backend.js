"use strict";
import {pintarBackendGeneral} from "./plantillasPintar.js";
import {getProductos} from "./ataquesBaseDatos.js";

window.onload = async ()=>{
    var d = document;
    const productos = await getProductos();

    // ##### ASIGNANDO BOTONES ##### //
    var botonEditarProductos = d.getElementById("editarProductos");
    var botonEditarUsuarios = d.getElementById("editarUsuarios");

    // ##### ASIGNANDO EVENTOS ##### //

        botonEditarProductos.addEventListener("click", ()=>{
            var divEditar = d.getElementById("divEditar");
            pintarBackendGeneral(productos, divEditar);
        }, false);
}