"use strict";

import {getProductos} from "./ataquesBaseDatos.js";
import {pintarProductosEnDiv} from "./plantillasPintar.js";

window.onload = async ()=>{
    const d = document;

    const divProd = d.getElementById("productos");
    var productos = await getProductos();
    pintarProductosEnDiv(productos, divProd);
}