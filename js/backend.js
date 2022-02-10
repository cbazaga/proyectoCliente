"use strict";
import {pintarBackendProducto, pintarBackendUsuarios} from "./plantillasPintar.js";
import {getProductos, getUsuarios} from "./ataquesBaseDatos.js";

window.onload = async ()=>{
    var d = document;
    

    // ##### ASIGNANDO BOTONES ##### //
    var botonEditarProductos = d.getElementById("editarProductos");
    var botonEditarUsuarios = d.getElementById("editarUsuarios");

    // ##### ASIGNANDO EVENTOS ##### //

    botonEditarProductos.addEventListener("click", async ()=>{
        const productos = await getProductos();
        var divEditar = d.getElementById("divEditar");
        pintarBackendProducto(productos, divEditar);
    }, false);

    botonEditarUsuarios.addEventListener("click", async ()=>{
        const usuarios = await getUsuarios();
        var divEditar = d.getElementById("divEditar");
        pintarBackendUsuarios(usuarios, divEditar);
    }, false);

}