// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre.trim() === "") {
        // El nombre está vacío
        alert("Por favor, ingresa un nombre.");
        return;
    }else {
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        
        actualizarLista(); // Llama a la función para actualizar la lista de amigos
        
    }
    
}
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;      
    }
        let indice = Math.floor(Math.random() * amigos.length);
        let nombreSorteado = amigos[indice];
        document.getElementById("resultado").innerHTML = "Amigo sorteado: " + nombreSorteado;
        amigos.splice(indice, 1); // Elimina el amigo sorteado del array
        actualizarLista(); // Actualiza la lista en pantalla
        // Si ya no quedan amigos después del sorteo, muestra el mensaje final
   if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML = "Ya terminaste de sortear.";
    alert("Ya terminaste de sortear. Presiona 'Aceptar' para reiniciar.");
    document.getElementById("resultado").innerHTML = ""; // Borra el mensaje después del alert
    }
    
}