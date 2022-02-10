"use strict";

import {app} from "./firebase.js";
import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    deleteDoc,
    setDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

//### CONSTANTES ###//
const bd = getFirestore(app);
const usuarios = collection(bd, "Usuarios");
const productos = collection(bd, "Colección1");

//### FUNCIONES ###//
export async function getUsuarios(){
    var usu = await getDocs(usuarios);
    return usu.docs;
}

export async function getProductos(){
    var pro = await getDocs(productos);
    return pro.docs;
}

export async function getProducto(id){
    var pro = await getDoc(doc(productos, id));
    return pro.data();
}

export async function borrarDoc(id){
    await deleteDoc(doc(productos, id));
}

export async function actualizarDoc(json, id, valor){
    if(id){
        if(valor == "productos") await setDoc(doc(productos, id), json);
        else await setDoc(doc(usuarios, id), json);
    }
    else{
        if(valor == "productos") await setDoc(doc(productos), json);
    }
    
    
}
