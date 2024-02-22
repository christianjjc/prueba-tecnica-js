let toggleVisible = false;
const opciones = ['activo', 'inactivo','borrador', 'publicado'];

const cargarOpciones=(array)=>{
    let i = 1;
    for (const el of array) {
        const divOpciones = document.createElement("div")
        divOpciones.setAttribute("id",`opt-${i}`);
        divOpciones.innerText=el
        divOpciones.classList.add("option");

        divOpciones.addEventListener("click",()=>{
            seleccionar(divOpciones);
        })

        document.getElementById("contenedor").appendChild(divOpciones)
        i++
    }
}

cargarOpciones(opciones);


const contenedor = document.getElementById("contenedor");
document.getElementById("btn").addEventListener("click",()=>{
    if (!toggleVisible) {
        contenedor.classList.remove("oculto");
        contenedor.classList.add("visible");
        toggleVisible = true;
    } else {
        contenedor.classList.remove("visible");
        contenedor.classList.add("oculto");
        toggleVisible = false;
    }
})

function seleccionar(divOpciones){
    const opciones = document.getElementsByClassName("option")
    for (const el of opciones) {
        el.addEventListener("click",()=>{
            document.getElementById("btn").textContent = el.textContent
            document.getElementById("contenedor").classList.remove("visible");
            document.getElementById("contenedor").classList.add("oculto");
        })
    }
    toggleVisible = false;
} 

seleccionar();