"use strict";
import {borrarDoc, actualizarDoc } from "./ataquesBaseDatos.js";
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

export function pintarGeneral(documento){//Plantilla que inserta la información al DOM
    borrarDivs();
    const nombre = d.getElementById("nom2");
      const peso = d.getElementById("pes");
      const precio = d.getElementById("pre");
      const imagen = d.getElementById("imagen");
      const descripcion = d.getElementById("descripcion");
      documento.docs.map((prod) =>{
          const n = document.createElement("p"); 
          n.innerHTML = prod.data().nom_prod;
          nombre.appendChild(n);
          const p = document.createElement("p");
          p.innerHTML = prod.data().peso;
          peso.appendChild(p);
          const pr = document.createElement("p");
          pr.innerHTML = prod.data().precio;
          precio.appendChild(pr);
          const divI = document.createElement("div");
          var i = document.createElement("img");
          i.addEventListener("mouseover", ()=>{//Para que se vea más grande la imágen
            imagenGrande(prod.data().imagen);
          }, false)

          i.addEventListener("mouseout", ()=>{
            imagenPequena();
          }, false)

          i.setAttribute("src",prod.data().imagen);
          divI.appendChild(i);
          i = document.createElement("img");
          i.setAttribute("src", "https://png.pngtree.com/element_our/20190523/ourlarge/pngtree-green-plus-sign-simple-logo-image_1082145.jpg");
          i.classList.add("pulsable");

          i.addEventListener("click", ()=>{
            addProducto(prod.data().nom_prod);
          },false)
          divI.appendChild(i);

          imagen.appendChild(divI);

          const d = document.createElement("p");
          d.innerHTML = prod.data().descripcion;
          descripcion.appendChild(d);
  })
  }
  
  //Plantilla que inserta la información del documento al DOM (backend)
  export function pintarBackendGeneral(documento, div){
        const div1 = document.createElement("div");
        const n = document.createElement("p"); 
        const p = document.createElement("p");
        const pr = document.createElement("p");
        const d = document.createElement("p");
        const a = document.createElement("p");
        const i = document.createElement("p");
        n.innerHTML = "NOMBRE";
        p.innerHTML = "PESO";
        pr.innerHTML = "PRECIO";
        d.innerHTML = "DESCRIPCION";
        a.innerHTML = "ARTISTA";
        i.innerHTML = "IMAGEN";
        div1.appendChild(n);
        div1.appendChild(a);
        div1.appendChild(p);
        div1.appendChild(pr);
        div1.appendChild(d);
        div1.appendChild(i);
        div.appendChild(div1);
        
        documento.map((prod) =>{
            const div2 = document.createElement("div");
            const n = document.createElement("textarea"); 
            const p = document.createElement("input");
            const pr = document.createElement("input");
            const d = document.createElement("textarea");
            const a = document.createElement("textarea");
            const i = document.createElement("textarea");
            const divI = document.createElement("div");
            n.setAttribute("readonly", "");
            p.setAttribute("type", "number");
            p.setAttribute("readonly", "");
            pr.setAttribute("type", "number");
            pr.setAttribute("readonly", "");
            d.setAttribute("readonly", "");
            a.setAttribute("readonly", "");
            i.setAttribute("readonly", "");
            n.innerHTML = prod.data().nom_prod;
            p.value = prod.data().peso;
            pr.value = prod.data().precio;
            d.innerHTML = prod.data().descripcion;
            a.innerHTML = prod.data().artista;
            i.innerHTML = prod.data().imagen;
            
            
            
            
            
            var editar = document.createElement("button");
            editar.innerHTML = "editar";
            editar.addEventListener("click", (e)=>{
              pulsable(e.target, prod.id);
            },false)
            divI.appendChild(editar);
            
            var borrar = document.createElement("button");
            borrar.setAttribute("id", "botBorrar");
            borrar.innerHTML = "borrar";
            borrar.addEventListener("click", (e)=>{
              borrarDocYDiv(prod.id, e.target, prod.data().nom_prod);
            }, false)
            var enviar = document.createElement("button");
            enviar.innerHTML = "actualizar";
            enviar.addEventListener("click", (e)=>{
              actualizar(e.target.parentNode.parentNode, prod.id);
            }, false)
            divI.appendChild(enviar);
            divI.appendChild(borrar);

            div2.appendChild(n);
            div2.appendChild(a);
            div2.appendChild(p);
            div2.appendChild(pr);
            div2.appendChild(d);
            div2.appendChild(i);
            div2.appendChild(divI);
            div.appendChild(div2);
      })
    }

    export function pulsable(boton, id){
        var padre = boton.parentNode.parentNode;
        for (let i = 0; i < padre.childNodes.length; i++) {
          if(!padre.childNodes[i].classList.contains("editable")){
            if(i!= padre.childNodes.length-1) {
              padre.childNodes[i].removeAttribute("readonly");
              padre.childNodes[i].classList.add("editable");
            }
          }
          else {
            if(i!= padre.childNodes.length-1) {
              padre.childNodes[i].setAttribute("readonly","");
              padre.childNodes[i].classList.remove("editable");
            }
          }
        }
        
    }

    export function actualizar(padre, id){
      var json = {
        nom_prod: padre.childNodes[0].value,
        artista: padre.childNodes[1].value,
        peso: padre.childNodes[2].value,
        precio: padre.childNodes[3].value,
        descripcion: padre.childNodes[4].value,
        imagen: padre.childNodes[5].value
      }

      actualizarDoc(json, id);
    }

    function borrarDocYDiv(id, boton, nombre){
      if(confirm(`¿Estás seguro de que quieres borrar el producto ${nombre}?`)){
        borrarDoc(id);
        var padre = boton.parentNode.parentNode;
        padre.remove();
      }
    }