// Controle do contador de curtidas
let curtidas = 0;

function curtirConteudo() {
    curtidas++;
    const contador = document.getElementById('contador-curtidas');
    const btn = document.querySelector('.btn-curtir');
    contador.innerText = curtidas;
    
    // Animação de clique no botão curtir
    btn.classList.add('pulse');
    setTimeout(() => {
        btn.classList.remove('pulse');
    }, 300);
}

// Alternador do modo Preto e Branco
function alternarPretoBranco() {
    // Liga/Desliga a classe de escala de cinza na tag HTML
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('modo-pb');
    
    // Altera dinamicamente o texto exibido no botão
    const textoBotao = document.getElementById('texto-pb');
    if (htmlElement.classList.contains('modo-pb')) {
        textoBotao.innerText = "Modo Colorido";
    } else {
        textoBotao.innerText = "Modo P&B";
    }
}
