let toggleVisible = false;
const opciones = ['activo', 'inactivo','borrador', 'publicado'];
const boton = document.getElementById("btn");
const contenedor = document.getElementById("contenedor");

const cargarOpciones=(array)=>{
    let i = 1;
    for (const el of array) {
        const divOpciones = document.createElement("div")
        divOpciones.setAttribute("id",`opt-${i}`);
        divOpciones.innerText=el
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
        toggleVisible = true;
    } else {
        contenedor.classList.add("oculto");
        toggleVisible = false;
    }
})

function seleccionar(divOpciones){
    boton.textContent = divOpciones.textContent
    contenedor.classList.add("oculto");
    toggleVisible = false;
}

cargarOpciones(opciones);