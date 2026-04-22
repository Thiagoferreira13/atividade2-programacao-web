document.addEventListener('DOMContentLoaded', () => {

    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');

    function setIcon(theme) {
        const icon = theme === 'dark'
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
        themeToggle.querySelector('.icon').innerHTML = icon;
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    setIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        setIcon(next);
    });

    const burger = document.getElementById('navBurger');
    const menu = document.getElementById('navMenu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    menu.querySelectorAll('.navbar-item[href]').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('is-active');
            menu.classList.remove('is-active');
        });
    });

});