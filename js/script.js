
document.addEventListener("DOMContentLoaded", () => {
    // Menu Mobile e Navegação
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Correção: Fechar menu ao clicar no link (mobile)
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Scroll Reveal & Back to Top
    window.addEventListener('scroll', reveal);
    window.addEventListener('scroll', toggleTopBtn);

    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = reveals[i].getBoundingClientRect().top;
            if (revealTop < windowHeight - 50) {
                reveals[i].classList.add('active');
            }
        }
    }
    reveal(); // run on load

    function toggleTopBtn() {
        const btn = document.getElementById('btn-top');
        if (btn) {
            if (window.scrollY > 300) btn.classList.add('show');
            else btn.classList.remove('show');
        }
    }
});
