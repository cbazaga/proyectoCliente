"use strict";

import { getUsuarios, validarUsuario, registrarUsuario, registrarBD } from "./ataquesBaseDatos.js";




    const d = document;
    const botSignUp = d.getElementById("botonSignUp");

    botSignUp.addEventListener("click", ()=>{
        var usuario = d.getElementById("correo").value;
        var contrasenya = d.getElementById("contrasenya").value;
        comprobarUsuarioContrasenya(usuario, contrasenya);
    }, false)

    async function comprobarUsuarioContrasenya(usuario, contrasenya){
        if(usuario.length > 0 && contrasenya > 0){
            var arrayUsuario = [usuario, contrasenya];
            var usuarios = await getUsuarios();
            usuarios.map((u)=>{
                if(usuario == u.data().nombre){
                    if (validarUsuario(arrayUsuario)) alert("Has iniciado sesión correctamente");
                } 
            })
            var registro = registrarUsuario(usuario, contrasenya);
            if (registro) {
                registrarBD(arrayUsuario, registro);
                alert("Registrado correctamente.");
            }
        }

    }

    