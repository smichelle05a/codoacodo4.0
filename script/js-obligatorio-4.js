let u = document.getElementById('user');
let uValidation = document.getElementById('user-validation');
let p = document.getElementById('password');
let pValidation = document.getElementById('password-validation');
let btn = document.getElementById('btn');

const removeValidations = () => {
    if (uValidation) {
        uValidation.innerText= '';
        uValidation.classList.remove('text-danger', 'text-success');
    }
    if (pValidation) {
        pValidation.innerText= '';
        pValidation.classList.remove('text-danger', 'text-success');
    }
}

const validate = () => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`Usuario: ${u.value}, Contraseña: ${p.value}`);
        removeValidations();
        if (!u.value) {
            uValidation.classList.add('text-danger');
            uValidation.innerText = 'El campo no puede estar vacío';
        } else if (u.value.indexOf("@") == -1) {
            uValidation.classList.add('text-danger');
            uValidation.innerText = 'El usuario debe contener un @';
        } else {
            uValidation.classList.add('text-success');
            uValidation.innerText = 'Usuario ok';
        };
        if (!p.value) {
            pValidation.classList.add('text-danger');
            pValidation.innerText = 'El campo no puede estar vacío';
        } else {
            pValidation.classList.add('text-success');
            pValidation.innerText = 'Contraseña ok';
        }
    })
};

validate();