document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.length < 5) {
            alert('El nombre debe tener al menos 2 caracteres.');
            event.preventDefault(); 
            return;
        }

        if (!email.includes('@')) {
            alert('Por favor, ingresa un correo electrónico válido.');
            event.preventDefault(); 
            return;
        }

        if (message.length < 20) {
            alert('El mensaje debe tener al menos 10 caracteres.');
            event.preventDefault(); 
            return;
        }

        window.location.href = 'recibido.html';
        event.preventDefault(); 
    });
});
