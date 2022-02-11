"use strict";

window.onload = ()=>{
    const d = document;

    const canciones = [new Audio("../audio/60s-70s-japanese-instrumental-cinema-funk-breaks-beats.mp3"), new Audio("../audio/Alleycat.mp3"), new Audio("../audio/SOZIEDAD_ALKOHOLIKA-NieblaDeGuerra.mp3"), new Audio("../audio/Animal.mp3"), new Audio("../audio/FreakingOutTheNeighborhood.mp3"), new Audio("../audio/RedHotChiliPeppers-SuckMyKiss.mp3")];

    // ##### ASIGNACIÓN BOTONES ##### //
    const botComienza = d.getElementById("botComienza");
    const botReproducir = d.getElementById("botReproducir");
    const botDetener = d.getElementById("botDetener");
    const botAleatorio = d.getElementById("botAleatorio");

    // ##### ASIGNACIÓN VARIABLES ##### //
    var posCancionActual = recogerCancionAleatoria();
    var intervalo = false;
    var intervaloProgress = false;

    // ##### ASIGNACIÓN EVENTOS ##### //

    botComienza.addEventListener("click", ()=>{
        var hijos = d.getElementById("reproductor").children;
        for (let i = 0; i < hijos.length; i++) {
            if(i!=2) revertirOcultoBoton(hijos[i]);
        }
    }, false);

    //Este botón es para reproducir la canción actual y que el cliente la escuche, se oculta y muestra el otro botón
    botReproducir.addEventListener("click", ()=>{
        activarReproductor();
    }, false)

    //Este botón detiene la canción que esta sonando, se oculta y muestra el otro botón
    botDetener.addEventListener("click", ()=>{
        detenerReproductor();
    }, false)

    botAleatorio.addEventListener("click", ()=>{
        //las tres primeras son equivalentes a detenerReproductor();
        detenerCancionActual(posCancionActual);
        detenerContador();
        detenerProgreso();
        reiniciarContador();
        //las tres ultimas son equivalentes a activarReproductor();
        reproducirCancion(posCancionActual);
        comenzarContador();
        comenzarProgreso();
        botReproducir.classList.toggle("oculto", true);
        botDetener.classList.remove("oculto");
    }, false)

    // ##### ASIGNACIÓN FUNCIONES ##### //

    //devuelve un numero del rango del array de canciones
    function recogerCancionAleatoria(){
        var ran = posCancionActual;
        while(ran == posCancionActual) var ran = Math.floor(Math.random() * canciones.length);
        posCancionActual = ran;
        return ran;
    }

    //Le entra una posicion por parametro y se reproduce la cancion con esa posición en el array de canciones
    function reproducirCancion(posicion){
        canciones[posicion].play();
    }

    //Se detiene la canción activa
    function detenerCancionActual(posicion) {
        canciones[posicion].pause();
    }

    //Oculta o no el nodo que se le introduce
    function revertirOcultoBoton(boton){
        boton.classList.toggle("oculto");
    }

    function reiniciarContador(){
        d.getElementById("tiempoCancion").innerHTML = "00:00";
        cancionACero();
        recogerCancionAleatoria();
    }

    function cancionACero(){
        canciones[posCancionActual].currentTime = 0;
    }

    //Inicia el contador del reproductor
    function comenzarContador(){
        var tiempoCancion = d.getElementById("tiempoCancion").textContent;
        var minutos = Number.parseInt(tiempoCancion[0]);
        minutos += Number.parseInt(tiempoCancion[1]);
        var segundos = Number.parseInt(tiempoCancion[3]);
        segundos += Number.parseInt(tiempoCancion[4]);
        if(!intervalo)
            intervalo = setInterval(()=>{
                if(segundos==60){
                    segundos=0;
                    minutos++;
                }
                else{
                    segundos++;
                }
                segundos = String(segundos);
                minutos = String(minutos);
                
                if(segundos.length == 1) segundos = "0"+segundos;
                if(minutos.length==1) minutos = "0"+minutos;
                d.getElementById("tiempoCancion").textContent = `${minutos}:${segundos}`;
            }, 1000);
    }

    //Inicia la barra de progreso
    function comenzarProgreso(){
        var barraProgreso = d.getElementById("progress");
        if(!intervaloProgress)
            intervaloProgress = setInterval(()=>{
                barraProgreso.value++;
            }, 1000);
    }

    //Se detiene la barra de progreso
    function detenerProgreso(){
        clearInterval(intervaloProgress);
        intervaloProgress = false;
    }

    //Se detiene el contador
    function detenerContador(){
        clearInterval(intervalo);
        intervalo = false;
    }

    function detenerReproductor(){
        detenerCancionActual(posCancionActual);
        detenerContador();
        detenerProgreso();
        revertirOcultoBoton(botReproducir);
        revertirOcultoBoton(botDetener);
    }

    function activarReproductor(){
        reproducirCancion(posCancionActual);
        comenzarContador();
        comenzarProgreso();
        revertirOcultoBoton(botReproducir);
        revertirOcultoBoton(botDetener);
    }

}