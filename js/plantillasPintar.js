"use strict";

const d = document;

//A esta función se le pasa por parametro la/las colecciones y el div donde se va a pintar y se imprime un formulario de solo lectura
export function pintarInputsTextInhabilitados(objeto, div){
    console.log(objeto);
    objeto.map((o)=>{
        console.log(o.data().peso);
    })
}

//Pinta dentro de un div los productos de la tienda de
export function pintarProductosEnDiv(objeto, div){
    var divObj = d.createElement("div");
    objeto.docs.map((prod) =>{
        const n = document.createElement("p");  
        n.innerHTML = prod.data().nom_prod;
        const i = document.createElement("img");
        i.addEventListener("click", ()=>{//Para que se vea más grande la imágen
            imagenGrande(prod);
        }, false)

        i.addEventListener("mouseout", ()=>{
            imagenPequena();
        }, false)

        i.setAttribute("src",prod.data().imagen);
        divObj.appendChild(i);
        divObj.appendChild(n);
        div.appendChild(divObj);
    })
}