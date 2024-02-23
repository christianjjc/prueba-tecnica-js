let toggleVisible = false;
const opciones = ['activo', 'inactivo','borrador', 'publicado'];
const boton = document.getElementById("btn");
const seleccionado = document.getElementById("texto-opcion");
const contenedor = document.getElementById("contenedor");

const arrowin = document.getElementById("arrowin")
const arrowout= document.getElementById("arrowout")

const cargarOpciones=(array)=>{
    let i = 1;
    for (const el of array) {
        const divOpciones = document.createElement("div")
        divOpciones.setAttribute("id",`opt-${i}`);
        divOpciones.innerHTML=el
        divOpciones.classList.add("option");
        contenedor.appendChild(divOpciones)
        i++
        divOpciones.addEventListener("click",()=>{
            seleccionar(divOpciones);
        })
    }
}

boton.addEventListener("click",()=>{
    if (!toggleVisible) {
      contenedor.classList.remove("oculto");
      arrowin.classList.add("oculto");
      arrowout.classList.remove("oculto");
      toggleVisible = true;
    } else {
      contenedor.classList.add("oculto");
      arrowin.classList.remove("oculto");
      arrowout.classList.add("oculto");
      toggleVisible = false;
    }
})

function seleccionar(divOpciones){
    seleccionado.innerHTML  = divOpciones.innerHTML
    contenedor.classList.add("oculto");
    arrowout.classList.add("oculto");
    arrowin.classList.remove("oculto");
    toggleVisible = false;
}

cargarOpciones(opciones);