window.addEventListener('DOMContentLoaded', event => {

    const themeToggle = document.getElementById("themeToggle");
    const themeToggleDesktop = document.getElementById("themeToggleDesktop");
    const html = document.documentElement;

    function setIcon(theme) {
        const icon = theme === "dark"
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
        if (themeToggle) themeToggle.innerHTML = icon;
        if (themeToggleDesktop) themeToggleDesktop.innerHTML = icon;
    }

    // Carrega tema salvo
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        html.setAttribute("data-bs-theme", savedTheme);
        setIcon(savedTheme);
    }

    function toggleTheme() {
        const currentTheme = html.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        html.setAttribute("data-bs-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setIcon(newTheme);
    }

    if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
    if (themeToggleDesktop) themeToggleDesktop.addEventListener("click", toggleTheme);

    // ===== código original =====
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -20%',
        });
    }

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});