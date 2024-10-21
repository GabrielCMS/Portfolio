
//Script para controlar a velocidade de rolagem da página ao clicar no cabeçalho
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            
            window.scrollTo({
                top: target.offsetTop - 80,  // Ajuste para compensar o cabeçalho fixo
                behavior: 'smooth'
            });
        });
    });

//Script para ao clicar mudar o tamanho dos itens em "Habilidades"

    // Seleciona todos os quadrados de habilidades
    const skillBoxes = document.querySelectorAll('.skill-box');

    // Adiciona o evento de clique em cada quadrado
    skillBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Alterna a classe "expanded" no quadrado clicado
            this.classList.toggle('expanded');
        });
    });
