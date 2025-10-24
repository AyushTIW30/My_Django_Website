// Confetti Animation for Navbar Clicks
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const rect = e.target.getBoundingClientRect();
            const x = (rect.left + rect.width / 2) / window.innerWidth;
            const y = (rect.top + rect.height / 2) / window.innerHeight;
            
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { x: x, y: y },
                colors: ['#008060', '#00a97f', '#e9fff1', '#ffffff'],
                ticks: 100,
                gravity: 1.2,
                scalar: 0.8
            });
        });
    });
    
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    // Toggle dark mode
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        let theme = 'light';
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            theme = 'dark';
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            theme = 'light';
        }
        
        localStorage.setItem('theme', theme);
        
        // Add confetti on theme toggle
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: theme === 'dark' ? ['#1a1a1a', '#2d2d2d', '#00a97f', '#008060'] : ['#008060', '#00a97f', '#e9fff1', '#ffffff']
        });
    });
});
