// Smooth scrolling for navigation
$(document).ready(function(){
    $("a.nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});

$('#back-to-top').click(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
});



// Get the theme toggle button and the icon inside it
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeIcon.classList.toggle('bi-brightness-high', savedTheme === 'light-mode');
    themeIcon.classList.toggle('bi-moon', savedTheme === 'dark-mode');
}

// Function to toggle dark mode
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDarkMode);
    const theme = isDarkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', theme);

    // Switch between sun and moon icons
    themeIcon.classList.toggle('bi-brightness-high', !isDarkMode);
    themeIcon.classList.toggle('bi-moon', isDarkMode);
}

// Event listener for the toggle button
themeToggle.addEventListener('click', toggleTheme);