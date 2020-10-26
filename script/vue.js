console.log("======================Vue====================")
let app = new Vue ({
    el: "#app",
    data: {
        valorModel: "Hola",
        valorBind: "Hola",
        link: "https://vuejs.org/v2/guide/installation.html",
        nombreLink: "vue.js",
        nombre: "",
        tecnologias: ["HTML","CSS","Javascript","Bootstrap", "Vue"],
    },
    methods: {

    }
})

new Vue ({
    el: "#formVue",
    data: {
        tareas: [],
        nuevaTarea: "",
    },
    methods: {
        guardarTarea() {
            this.tareas.push(this.nuevaTarea)
            this.nuevaTarea = ""
        }
    }
})