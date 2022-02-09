"use strict";

import {app} from "./firebase.js";
import {
    getFirestore,
    collection,
    getDocs,
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

export async function getListaSpotify(){
    var respuesta = await fetch("https://spotify-charts.p.rapidapi.com/dominican-republic-top-200", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spotify-charts.p.rapidapi.com",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}
