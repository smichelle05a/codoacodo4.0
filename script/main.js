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

const animateIn = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = element;

        node.classList.remove('d-none');
        node.classList.add(animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(animationName, 'd-none');
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

const animateOut = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = element;

        node.classList.add(animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.add('d-none');
            node.classList.remove(animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

let sectionSelect = () => {
    animateIn(activeSection, 'fadeIn');
    for (let i of nav) {
        i.addEventListener('click', (e) => {
            animateOut(activeSection, 'fadeOut');
            if (document.querySelector(e.target.hash) == null) {
                activeSection = document.querySelector('#home')
            } else {
                activeSection = document.querySelector(e.target.hash);
            }
            setTimeout(() => {
                animateIn(activeSection, 'fadeIn');
            }, 1000);
        });
    }
}

sectionSelect();


