"use strict";

import {getProductos} from "./ataquesBaseDatos.js";
import {pintarProductosEnDiv} from "./plantillasPintar.js";

window.onload = ()=>{
    const d = document;

    const divProd = d.getElementById("productos");
    pintarProductosEnDiv(getProductos(), divProd);
}