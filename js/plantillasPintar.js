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
    objeto.map((prod) =>{
        var divObj = d.createElement("div");
        const n = document.createElement("p");  
        n.innerHTML = prod.data().nom_prod;
        const a = document.createElement("p");
        a.innerHTML = prod.data().artista;
        const pr = document.createElement("p");
        pr.innerHTML = `${prod.data().precio}€`;
        const i = document.createElement("img");
        i.classList.add("imgPequeñaProducto");
        divObj.addEventListener("click", ()=>{
            window.location.href = `../producto.html?producto=${prod.id}`;
        }, false)
        i.setAttribute("src",prod.data().imagen);
        divObj.appendChild(i);
        divObj.appendChild(n);
        divObj.appendChild(a);
        divObj.appendChild(pr);
        div.appendChild(divObj);
    })
}