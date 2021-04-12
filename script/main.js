let nav = document.querySelectorAll('.navegation');
let activeSection = "";

let section = () => {
    activeSection = document.querySelector(window.location.hash);
    activeSection.classList.remove('d-none');
    for (let i of nav) {
        i.addEventListener('click', (e) => {
            activeSection.classList.add('d-none');
            activeSection = document.querySelector(e.target.hash);
            activeSection.classList.remove('d-none');
        });
    }
    if (window.location.hash == "") {
        activeSection = document.querySelector('#home');
        activeSection.classList.remove('d-none');
    }
}

section();

