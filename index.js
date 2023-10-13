function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
}

var openBtn = document.getElementById('open');

openBtn.addEventListener('click', toggleNavbar);

var closeBtn = document.getElementById('close');

closeBtn.addEventListener('click', toggleNavbar);

console.log('File Working');