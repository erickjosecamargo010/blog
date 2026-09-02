function alternarTema() {
    const body = document.body;
    const textoTema = document.getElementById("texto-tema");
    
    // Verifica se o modo claro já está ativo
    if (body.getAttribute("data-theme") === "light") {
        body.removeAttribute("data-theme");
        if (textoTema) textoTema.innerText = "Modo Escuro";
    } else {
        body.setAttribute("data-theme", "light");
        if (textoTema) textoTema.innerText = "Modo Claro";
    }
}

// Garante o funcionamento do botão de curtir original do seu HTML
let totalCurtidas = 0;
function curtirConteudo() {
    totalCurtidas++;
    const contador = document.getElementById("contador-curtidas");
    if (contador) {
        contador.innerText = totalCurtidas;
    }
}
