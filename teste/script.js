document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    // Simulação de notícias
    const noticias = [
        "Nova atualização traz novos personagens!",
        "Evento de Halloween começa na próxima semana.",
        "Dicas para melhorar suas habilidades no jogo."
    ];

    noticias.forEach(noticia => {
        const div = document.createElement('div');
        div.textContent = noticia;
        newsContainer.appendChild(div);
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada! Obrigado pelo seu contato.');
        form.reset();
    });

    // Alternar seções
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('section');
    const teamLinks = document.querySelectorAll('.sub-option'); // Seleciona sub-opções de times

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remover a classe 'active' dos links
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Mostrar a seção correspondente
            sections.forEach(section => {
                section.style.display = 'none';
            });
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.style.display = 'block';
        });
    });

    // Adiciona o evento de clique para as sub-opções
    teamLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Esconde todas as informações de times
            const teamInfos = document.querySelectorAll('.team-info');
            teamInfos.forEach(info => info.style.display = 'none');

            // Exibe a informação do time selecionado
            const targetTeamInfo = document.querySelector(link.getAttribute('href'));
            targetTeamInfo.style.display = 'block';
        });
    });

    // Inicializa a primeira seção
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? 'block' : 'none';
    });

    // Toggle Sidebar
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('mouseover', () => {
        sidebar.classList.add('active');
    });

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    sidebar.addEventListener('mouseleave', () => {
        sidebar.classList.remove('active');
    });

    // Função para voltar à home
    const homeBtn = document.getElementById('home-btn');
    homeBtn.addEventListener('click', () => {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector('#home').style.display = 'block';
        links.forEach(l => l.classList.remove('active'));
        document.querySelector('.sidebar a.active').classList.remove('active');
        links[0].classList.add('active');
    });
});
