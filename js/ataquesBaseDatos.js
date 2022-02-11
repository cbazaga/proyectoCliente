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

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

//### CONSTANTES ###//
const bd = getFirestore(app);
const usuarios = collection(bd, "Usuarios");
const productos = collection(bd, "Colección1");
const auth = getAuth();

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

export async function registrarBD(arrayUsuario, userCredential){
    var json = {
        id: userCredential.user.uid,
        nombre: arrayUsuario[0],
        rol: "usuario"
    };
    await addDoc(coleccionUsuarios, json);
    ocultarRegistrarse();
    mostrarListas();
}

export function registrarUsuario(arrayUsuario){
    try{
        createUserWithEmailAndPassword(auth, arrayUsuario[0], arrayUsuario[1])
            .then((userCredential)=>{
                return userCredential;
            })
            .catch((error)=>{
                console.log(error.message);
                return false;
            })
        }
        catch(e){
            
        }
}

export async function validarUsuario(arrayUsuario){
    try{
        signInWithEmailAndPassword(auth, arrayUsuario[0], arrayUsuario[1])
            .then((userCredential)=>{
                return true;
            })
            .catch((error)=>{
                console.log(error.message);
            })
    }
    catch(e){

    }
}


