let nav = document.querySelectorAll('.navegation');
let section = () => {
    let sect = '';
    if (window.location.hash == "") {
        sect = '#home';
    } else {
        sect = window.location.hash;
    }
    return sect; 
}
let activeSection = document.querySelector(section());


let sectionSelect = () => {
    activeSection.classList.remove('d-none');
    for (let i of nav) {
        i.addEventListener('click', (e) => {
            activeSection.classList.add('d-none');
            activeSection = document.querySelector(e.target.hash);
            activeSection.classList.remove('d-none');
        });
    }
}

sectionSelect();

