const toggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Verifica preferência salva ou do sistema operacional
const savedTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

htmlElement.setAttribute('data-theme', savedTheme);

toggleButton.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
