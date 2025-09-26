// Exemplo simples: Adicionar uma animação de "fade in" ao carregar

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.timeline-item');
    
    // Adiciona uma classe de animação aos itens
    items.forEach((item, index) => {
        // Um pequeno delay para cada item
        item.style.transitionDelay = `${index * 0.15}s`; 
        item.style.opacity = '0'; // Começa invisível
    });

    // Usa um observador para revelar os itens à medida que o usuário rola a página
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Começa a animar quando 20% do item estiver visível
    });

    items.forEach(item => {
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(item);
    });
});
