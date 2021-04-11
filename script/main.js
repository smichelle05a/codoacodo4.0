let nav = document.getElementsByClassName('navegation');
let navActive = document.getElementsByClassName('active');
let activeSection = document.getElementById('home')

console.log(nav)

for (let i of nav) {
    i.addEventListener('click', (e) => {
        activeSection.classList.add('d-none');
        console.log(e.target.hash);
        activeSection = document.querySelector(e.target.hash);
        console.log(activeSection);
        activeSection.classList.remove('d-none');
    });
}

