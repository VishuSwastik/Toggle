const bodyElement = document.querySelector('body');
const toggleButton = document.querySelector('.btn');
const iconElement = document.querySelector('.btn__icon');
function store(value) {
    localStorage.setItem('darkmode', value);
}

function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
        store(false);
        iconElement.classList.add('fa-sun');
    } else if (darkmode === 'true') { 
        bodyElement.classList.add('darkmode');
        iconElement.classList.add('fa-moon');
    } else if (darkmode === 'false') { 
        iconElement.classList.add('fa-sun');
    }
}

load();

toggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('darkmode');
    iconElement.classList.add('animated');

    store(bodyElement.classList.contains('darkmode'));

    if (bodyElement.classList.contains('darkmode')) {
        iconElement.classList.remove('fa-sun');
        iconElement.classList.add('fa-moon');
    } else {
        iconElement.classList.remove('fa-moon');
        iconElement.classList.add('fa-sun');
    }

    setTimeout(() => {
        iconElement.classList.remove('animated');
    }, 500);
});