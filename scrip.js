// Select the menu icon and navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu and navbar classes on menu click
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Remove active states when scrolling
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Blockchain Developer', 'Web Designer'],
    typeSpeed: 80,        
    backSpeed: 80,       
    backDelay: 1200,    
    loop: true            
});

