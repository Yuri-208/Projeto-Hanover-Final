
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return; // Evitar erros em páginas sem form

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;
        
        const nome = document.getElementById('nome');
        const cpf = document.getElementById('cpf');
        const email = document.getElementById('email');
        const telefone = document.getElementById('telefone');
        
        // Reset errors
        document.querySelectorAll('.error').forEach(el => el.innerText = '');

        if (!nome.value.trim()) { 
            document.getElementById('err-nome').innerText = 'Nome é obrigatório.'; valid = false; 
        }
        if (!cpf.value.trim() || cpf.value.length < 14) { 
            document.getElementById('err-cpf').innerText = 'CPF inválido.'; valid = false; 
        }
        if (!email.value.includes('@')) { 
            document.getElementById('err-email').innerText = 'E-mail inválido.'; valid = false; 
        }
        if (!telefone.value.trim() || telefone.value.length < 14) { 
            document.getElementById('err-telefone').innerText = 'Telefone inválido.'; valid = false; 
        }
        
        if (valid) {
            const msgSucesso = document.getElementById('msg-sucesso');
            msgSucesso.style.display = 'block';
            this.reset();
            setTimeout(() => msgSucesso.style.display = 'none', 4000);
        }
    });

    // Masks
    const cpfInput = document.getElementById('cpf');
    if(cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let v = e.target.value.replace(/\D/g, '');
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = v;
        });
    }

    const telInput = document.getElementById('telefone');
    if(telInput) {
        telInput.addEventListener('input', function(e) {
            let v = e.target.value.replace(/\D/g, '');
            v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
            v = v.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = v;
        });
    }
});
