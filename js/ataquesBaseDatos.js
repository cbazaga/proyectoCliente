"use strict";

import {app} from "./firebase.js";
import {
    getFirestore,
    collection,
    getDocs,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

//### CONSTANTES ###//
const bd = getFirestore(app);
const usuarios = collection(bd, "Usuarios");
const productos = collection(bd, "Colección1");

//### FUNCIONES ###//
export async function getUsuarios(){
    var usu = await getDocs(usuarios);
    return usu;
}

export async function getProductos(){
    var pro = await getDocs(productos);
    return pro;
}
