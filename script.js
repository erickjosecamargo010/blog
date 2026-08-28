let curtidas = 0;

function curtirConteudo() {
    curtidas++;
    document.getElementById('contador-curtidas').innerText = curtidas;
}

// ====== SISTEMA DE TEMA ESCURO/CLARO ======

// Verifica o armazenamento local ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    const body = document.body;
    const textoTema = document.getElementById('texto-tema');

    if (temaSalvo === "dark") {
        body.classList.add("dark-mode");
        if (textoTema) textoTema.innerText = 'Modo Claro';
    }
});

// Função que o botão executa ao ser clicado
function alternarTema() {
    const body = document.body;
    const textoTema = document.getElementById('texto-tema');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        textoTema.innerText = 'Modo Claro';
        localStorage.setItem("tema", "dark");
    } else {
        textoTema.innerText = 'Modo Escuro';
        localStorage.setItem("tema", "light");
    }
}
