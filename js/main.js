let listaDeDibujos = [];
let idDibujo = 1;


function agregarDibujo() {
    const titulo = document.getElementById("titulo").value;
    const artista = document.getElementById("artista").value;
    const categoria = document.getElementById("categoria").value;

    if (titulo && artista && categoria) {
        document.getElementById("mensajeDeAlerta").innerText = ""; 
        listaDeDibujos.push({ id: idDibujo++, titulo: titulo, artista: artista, categoria: categoria });
        document.getElementById("formDibujo").reset();
    } else {
        document.getElementById("mensajeDeAlerta").innerText = "Por favor, completa todos los campos.";
        return;
    }
}

const botonGuardar = document.getElementById("guardarDibujo");
if (botonGuardar) {
    botonGuardar.onclick = () => {
        agregarDibujo();
        rellenarListaDibujosYActualizarContador();
    }
}


function eliminarDibujos() {
    if (listaDeDibujos.length === 0) {
        document.getElementById("mensajeDeAlerta").innerText = "No hay dibujos para eliminar.";
        return;
    }
    listaDeDibujos = [];
    document.getElementById("formDibujo").reset();
    document.getElementById("mensajeDeAlerta").innerText = "Todos los dibujos han sido eliminados.";
    rellenarListaDibujosYActualizarContador();
}

const botonEliminar = document.getElementById("borrarDibujos");
if (botonEliminar) {
    botonEliminar.onclick = () => {
        eliminarDibujos();
    }
}

let formulario = document.getElementById("formDibujo");
let tituloDibujosRegistrados = document.getElementById("tituloDibujosRegistrados");
let listaDeDibujosGuardados = document.getElementById("listaDibujos");


function rellenarListaDibujosYActualizarContador() {
    listaDeDibujosGuardados.textContent = "";
    listaDeDibujos.forEach(dibujo => {
        let divDibujo = document.createElement("div");

        let titulo = document.createElement("strong");
        titulo.textContent = "Título: " + dibujo.titulo;

        let artista = document.createElement("strong");
        artista.textContent = " Artista: " + dibujo.artista;

        let categoria = document.createElement("strong");
        categoria.textContent = " Categoría: " + dibujo.categoria;

        divDibujo.appendChild(titulo);
        divDibujo.appendChild(artista);
        divDibujo.appendChild(categoria);

        listaDeDibujosGuardados.appendChild(divDibujo);
    });
    tituloDibujosRegistrados.textContent = `Dibujos Registrados: ${listaDeDibujos.length}`;
}


for (let i = 1; i <= 7; i++) {
    listaDeDibujos.push({
        id: i + 1,
        titulo: `Dibujo ${i}`,
        artista: `Artista ${i}`,
        categoria: `Categoría ${i}`
    });
}
rellenarListaDibujosYActualizarContador();

