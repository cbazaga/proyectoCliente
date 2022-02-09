"use strict";

import {app} from "./firebase.js";
import {
    getFirestore,
    collection,
    getDocs,
    deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

//### CONSTANTES ###//
const bd = getFirestore(app);
const usuarios = collection(bd, "Usuarios");
const productos = collection(bd, "Colección1");

//### FUNCIONES ###//
export async function getUsuarios(){
    return await getDocs(usuarios);
}

export async function getProductos(){
    var pro = await getDocs(productos);
    return pro.docs;
}

export async function borrarDoc(id){
    deleteDoc
}
