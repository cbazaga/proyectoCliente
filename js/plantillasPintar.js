"use strict";

//A esta función se le pasa por parametro la/las colecciones y el div donde se va a pintar y se imprime un formulario de solo lectura
export function pintarInputsTextInhabilitados(objeto, div){
    console.log(objeto);
    objeto.map((o)=>{
        console.log(o.data().peso);
    })
}