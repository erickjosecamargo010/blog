const themeToggleBtn = document.getElementById('theme-toggle');

// Verifica preferência salva ou do sistema do usuário
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.setAttribute('aria-pressed', 'true');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.setAttribute('aria-pressed', 'false');
}

// Alternar tema
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggleBtn.setAttribute('aria-pressed', newTheme === 'dark');
});