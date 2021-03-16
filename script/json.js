const usuarios = {
    usuario: {
        Nombre: "Scarlet",
        Apellido: "Albornoz",
        Admin: true,
        Email: "smichelle05a@gmail.com"
    }
}

console.log("Primera ejecución");
console.log("Segunda ejecución");
console.log("Tercera ejecución");

console.log("------Funciones asíncronas------")

setTimeout(() => console.log("Tercera ejecución"), 1000);
setTimeout(() => console.log("Segunda ejecución"), 500);
console.log("Primera ejecución")