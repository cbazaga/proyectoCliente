"use strict";
import {
    getProductos,
    getUsuarios,
} from "./ataquesBaseDatos.js";

import {
    pintarInputsTextInhabilitados,
} from "./plantillasPintar.js";

const d = document;
const divUsuarios = d.getElementById("usuarios");

pintarInputsTextInhabilitados(getProductos, divUsuarios);