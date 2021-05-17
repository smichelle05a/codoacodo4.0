let tablas = document.querySelector('#tablas-multiplicar');

for (let i = 11; i >= 9; i--) {
    let HTML = '';
    HTML += /* html */`
    <div class="d-flex flex-column col-3 p-3 bg-light">
        <div class="container text-center">
            <p class="fw-bold">
                La tabla del ${i}:
            </p>`
    for (let j = 1; j < 10; j++) {
        HTML += /* html */`
        <p class="m-0 pb-2"> ${i} x ${j} = ${i*j}</p>`
    }
    HTML += /* html */`
        </div>
    </div>`
    tablas.innerHTML += HTML;
}

