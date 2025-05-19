
//------ START -- MATRIX EFFECT ------
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

var fontSize = 16;
var columns = canvas.width / fontSize;
var drops = [];

for (var i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
    }
}

setInterval(draw, 50);
//------ END -- MATRIX EFFECT ------

//------ START -- PROGRESS BAR ANIMATION ------
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.percent + '%';
        }
    });
}, {
    threshold: 0.6
});

document.querySelectorAll('.progress-bar').forEach(el => observer.observe(el));
//------ END -- PROGRESS BAR ANIMATION ------

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

const translations = {
    en: {
        "nav_home": "Home",
        "nav_about": "About",
        "nav_skills": "Skills",
        "nav_experience": "Experience",
        "nav_education": "Education",
        "nav_contact": "Contact",
        "hero_hello": "Hello, I'm",
        "hero_title": "João Victor",
        "hero_desc": "Web Developer & Full Stack E-commerce",
        "btn_view_experience": "View My Experience",
        "btn_contact_me": "Contact Me",
        "about_title": "About Me",
        "about_whoami": "Who am I?",
        "about_desc01": "I'm a passionate professional in creating impactful and functional digital experiences. With beginner level Python and a strong skill set in web development, including advanced knowledge in HTML, CSS, JavaScript, PHP, and SQL.",
        "about_desc02": "Having experience in previous positions as a web programmer, I am currently eligible to work in Portugal and Brazil, with proficiency in English at a B2 level and C2 Portuguese.",
        "about_desc03": "I'm excited to contribute my experience in an international environment. In addition to my technical skills, I have mastery over the Microsoft Office Suite, providing a comprehensive and effective approach to projects.",
        "skills_title": "Skills & Expertise",
        "skills_technical": "Technical Skills",
        "skills_tools": "Tools & Technologies",
        "skills_jsextension": "JavaScript Extensions",
        "skills_officesuite": "Microsoft Office Suite",
        "skills_webdevelopment": "Web Development",
        "skills_languages": "Languages",
        "skills_portuguese": "Portuguese",
        "skills_c2fluent": "C2 (Fluent)",
        "skills_english": "English",
        "skills_b2": "B2",
        "skills_softskills": "Soft Skills",
        "skills_teamcolaboration": "Team Collaboration",
        "skills_problemsolving": "Problem Solving",
        "skills_communication": "Communication",
        "skills_agilemethodologies": "Agile Methodologies",
        "experience_title": "Work Experience",
        "experience03_time": "10/2024 - Present",
        "experience02_time": "02/2021 - 07/2022",
        "experience01_time": "12/2020 - 01/2021",
        "experience03_title": "Full Stack E-commerce Developer",
        "experience02_title": "Trainee TI",
        "experience01_title": "Web Developer",
        "experience03_desc01": "Responsible for the development of systems for the financial, HR, and administrative sectors.",
        "experience03_desc02": "Investigation and problem-solving in a team, using agile methodologies.",
        "experience03_desc03": "Conducting tests and continuous improvements to ensure the usability and performance of the systems.",
        "experience03_desc04": "Assisting in the construction of web pages.",
        "experience03_desc05": "Use of JavaScript extensions and interaction with databases.",
        "experience03_desc06": "Creation and management of prestashop modules.",
        "experience02_desc01": "System Development (for financial, HR and administrative sectors)",
        "experience02_desc02": "Problem investigation and solution creation alongside the team in an agile manner.",
        "experience02_desc03": "Testing and continuous improvement of usability and performance.",
        "experience02_desc04": "Report elaboration.",
        "experience02_desc05": "Supporting in page building.",
        "experience02_desc06": "Working with JavaScript extensions and databases.",
        "experience01_desc01": "Perform maintenance on existing software.",
        "experience01_desc02": "Participate in meetings with leadership.",
        "experience01_desc03": "Alignment and update of daily activities with squads.",
        "experience01_desc04": "Contribute to project execution.",
        "experience01_desc05": "Develop queries for SQL Server and MySQL databases.",
        "experience01_desc06": "Interpret projects and needs with a systemic vision.",
        "experience01_desc07": "Develop, execute, and implement web system projects using programming languages, within appropriate standards of quality, efficiency, and security.",
        "education_title": "Education",
        "education_course": "Bachelor’s degree in Information Systems",
        "education_institution": "Estácio de Sá University - UNESA",
        "education_time": "Completed in 2023",
        "education_desc": "Comprehensive education in information systems, focusing on software development, database management, and IT infrastructure.",
        "contact_title": "Get In Touch",
        "contact_email": "E-mail",
        "contact_phone": "Phone",
        "contact_location": "Location",
        "contact_linkedin": "LinkedIn",
        "btn_send_email": "Send Me an Email",
        "footer_rights": "© 2025 João Victor. All rights mostly reserved.",
        "footer_dev": "Web Developer & Full Stack E-commerce Developer",
    }
    , pt: {
        "nav_home": "Início",
        "nav_about": "Sobre",
        "nav_skills": "Habilidades",
        "nav_experience": "Experiência",
        "nav_education": "Educação",
        "nav_contact": "Contato",
        "hero_hello": "Olá, eu sou",
        "hero_title": "João Victor",
        "hero_desc": "Desenvolvedor Web & Full Stack E-commerce",
        "btn_view_experience": "Ver Minha Experiência",
        "btn_contact_me": "Entre em Contato",
        "about_title": "Sobre mim",
        "about_whoami": "Quem sou eu?",
        "about_desc01": "Sou um profissional apaixonado por criar experiências digitais impactantes e funcionais. Com nível iniciante em Python e um sólido conjunto de habilidades em desenvolvimento web, incluindo conhecimento avançado em HTML, CSS, JavaScript, PHP e SQL.",
        "about_desc02": "Com experiência em cargos anteriores como programador web, atualmente sou elegível para trabalhar em Portugal e Brasil, com proficiência em inglês nível B2 e português C2.",
        "about_desc03": "Estou animado para contribuir com minha experiência em um ambiente internacional. Além das minhas habilidades técnicas, tenho domínio sobre o Microsoft Office Suite, proporcionando uma abordagem abrangente e eficaz para projetos.",
        "skills_title": "Habilidades & Experiência",
        "skills_technical": "Habilidades Técnicas",
        "skills_tools": "Ferramentas & Tecnologias",
        "skills_jsextension": "Extensões JavaScript",
        "skills_officesuite": "Pacote Microsoft Office",
        "skills_webdevelopment": "Desenvolvimento Web",
        "skills_languages": "Idiomas",
        "skills_portuguese": "Português",
        "skills_c2fluent": "C2 (Fluente)",
        "skills_english": "Inglês",
        "skills_b2": "B2",
        "skills_softskills": "Competências Comportamentais",
        "skills_teamcolaboration": "Colaboração em Equipe",
        "skills_problemsolving": "Resolução de Problemas",
        "skills_communication": "Comunicação",
        "skills_agilemethodologies": "Metodologias Ágeis",
        "experience_title": "Experiência Profissional",
        "experience03_time": "10/2024 - Presente",
        "experience02_time": "02/2021 - 07/2022",
        "experience01_time": "12/2020 - 01/2021",
        "experience03_title": "Desenvolvedor Full Stack E-commerce",
        "experience02_title": "Jovem Aprendiz TI",
        "experience01_title": "Programador Web",
        "experience03_desc01": "Responsável pelo desenvolvimento e adpação de sistemas para os setores financeiro, RH e administrativo.",
        "experience03_desc02": "Investigação e resolução de problemas em equipe, utilizando metodologias ágeis.",
        "experience03_desc03": "Realização de testes e melhorias contínuas para garantir a usabilidade e desempenho dos sistemas.",
        "experience03_desc04": "Auxílio na construção de páginas web.",
        "experience03_desc05": "Uso de extensões JavaScript e interação com bancos de dados.",
        "experience03_desc06": "Criação e gestão de módulos prestashop.",
        "experience02_desc01": "Responsável pelo desenvolvimento e adpação de sistemas para os setores financeiro, RH e administrativo.",
        "experience02_desc02": "Investigação de problemas e criação de soluções junto à equipe de forma ágil.",
        "experience02_desc03": "Testes e melhoria contínua de usabilidade e desempenho.",
        "experience02_desc04": "Elaboração de relatórios.",
        "experience02_desc05": "Apoio na construção de páginas.",
        "experience02_desc06": "Trabalho com extensões JavaScript e bancos de dados.",
        "experience01_desc01": "Realizar manutenção em softwares existentes.",
        "experience01_desc02": "Participar de reuniões com a liderança.",
        "experience01_desc03": "Alinhamento e atualização das atividades diárias com diferentes equipes.",
        "experience01_desc04": "Contribuir para a execução de projetos.",
        "experience01_desc05": "Responsável pelo desenvolvimento de bancos de dados SQL Server e MySQL.",
        "experience01_desc06": "Interpretar projetos e necessidades com precisão.",
        "experience01_desc07": "Desenvolver, executar e implementar projetos de sistemas web utilizando linguagens de programação, dentro dos padrões adequados de qualidade, eficiência e segurança.",
        "education_title": "Educação",
        "education_title": "Educação",
        "education_course": "Bacharelado em Sistemas de Informação",
        "education_institution": "Universidade Estácio de Sá - UNESA",
        "education_time": "Concluído em 2023",
        "education_desc": "Formação abrangente em sistemas de informação, com foco em desenvolvimento de software, gestão de bancos de dados e infraestrutura de TI.",
        "contact_title": "Entre em Contato",
        "contact_email": "E-mail",
        "contact_phone": "Telefone",
        "contact_location": "Localização",
        "contact_linkedin": "LinkedIn",
        "btn_send_email": "Envie-me um Email",
        "footer_rights": "© 2025 João Victor. Maioria dos direitos reservados.",
        "footer_dev": "Desenvolvedor Web & Full Stack E-commerce"
    }
};

let currentLang = 'en';

document.getElementById('translateBtn').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    for (const key in translations[currentLang]) {
        const el = document.querySelector(`[translationTag="${key}"]`);
        if (el) el.textContent = translations[currentLang][key];
    }
    document.getElementById('translateBtn').textContent = currentLang === 'en' ? 'PT' : 'EN';
});