function alternarTema() {
    const body = document.body;
    const textoTema = document.getElementById("texto-tema");
    
    // Se o modo claro já estiver ativo, remove e volta para o escuro
    if (body.getAttribute("data-theme") === "light") {
        body.removeAttribute("data-theme");
        if (textoTema) {
            textoTema.innerText = "Modo Escuro";
        }
    } else {
        // Se estiver no escuro, ativa o modo claro
        body.setAttribute("data-theme", "light");
        if (textoTema) {
            textoTema.innerText = "Modo Claro";
        }
    }
}

// Inicializador padrão para o botão de curtir original do seu documento
let totalCurtidas = 0;
function curtirConteudo() {
    totalCurtidas++;
    const contador = document.getElementById("contador-curtidas");
    if (contador) {
        contador.innerText = totalCurtidas;
    }
}
