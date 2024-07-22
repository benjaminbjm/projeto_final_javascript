            // Validação do formulário de contato
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            let valid = true;

            // Validar nome
            const name = document.getElementById('name').value;
            if (!name) {
                valid = false;
                document.getElementById('nameError').textContent = 'Nome é obrigatório.';
            } else {
                document.getElementById('nameError').textContent = '';
            }

            // Validar email
            const email = document.getElementById('email').value;
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!email || !emailPattern.test(email)) {
                valid = false;
                document.getElementById('emailError').textContent = 'Email inválido.';
            } else {
                document.getElementById('emailError').textContent = '';
            }

            // Validar mensagem
            const message = document.getElementById('message').value;
            if (!message) {
                valid = false;
                document.getElementById('messageError').textContent = 'Mensagem é obrigatória.';
            } else {
                document.getElementById('messageError').textContent = '';
            }

            if (!valid) {
                event.preventDefault();
            }
        });

        // Integração com a API do GitHub
        fetch('https://api.github.com/users/benjaminbjm/repos')
            .then(response => response.json())
            .then(data => {
                const reposList = document.getElementById('repos');
                data.forEach(repo => {
                    const listItem = document.createElement('li');
                    const repoLink = document.createElement('a');
                    repoLink.href = repo.html_url;
                    repoLink.textContent = repo.name;
                    repoLink.target = '_blank';
                    listItem.appendChild(repoLink);
                    reposList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Erro ao buscar repositórios do GitHub:', error));
    
