"use strict";

import {getProductos, getListaSpotify} from "./ataquesBaseDatos.js";
import {pintarProductosEnDiv} from "./plantillasPintar.js";

window.onload = async ()=>{
    const d = document;
    getListaSpotify();
    const divProd = d.getElementById("productos");
    var productos = await getProductos();
    pintarProductosEnDiv(productos, divProd);
}