"use strict";

import { getUsuarios } from "./ataquesBaseDatos.js";



window.onload = ()=>{
    const d = document;
    
    const botSignUp = d.getElementById("botonSignUp");

    botSignUp.addEventListener("click", ()=>{
        var usuario = d.getElementById("correo").value;
        var contrasenya = d.getElementById("contrasenya").value;
        comprobarUsuarioContrasenya(usuario, contrasenya);
    }, false)

    async function comprobarUsuarioContrasenya(usuario, contrasenya){
        var usuarios = await getUsuarios();
        var semaforo = true;
        usuarios.map((u)=>{
            if(usuario == u.data().nombre && contrasenya) {
                alert("Contraseña incorrecta");
            }
            

        })
    }
}