Vue.component('navbar',{
    template: /* html */
    `
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a href="#" class="navbar-brand"><i class="fas fa-laptop-code"></i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./clases/1_html.html">HTML</a>
                </li>
                <li class="nav-item">
                    <a href="./clases/2_css.html" class="nav-link">CSS</a>
                </li>
                <li class="nav-item">
                    <a href="./clases/3_bootstrap.html" class="nav-link">Bootstrap</a>
                </li>
                <li class="nav-item">
                    <a href="./clases/4_javascript.html" class="nav-link">JavaScript</a>
                </li>
                <li class="nav-item">
                    <a href="./clases/5_vue.html" class="nav-link">Vue</a>
                </li>
                <li class="nav-item">
                    <a href="./clases/6_git_scrum.html" class="nav-link">Git/Scrum</a>
                </li>
                <li class="nav-item">
                    <a href="./clases/7_base_de_datos.html" class="nav-link">Base de Datos</a>
                </li>
                <li class="nav-item">
                    <a href="./clases/8_java_y_spring.html" class="nav-link">Java y Spring</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Actividades Obligatorias
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="./actividades_obligatorias/1_css.html">CSS</a>
                        <a class="dropdown-item" href="./actividades_obligatorias/2_bootstrap_cards.html">Bootstrap Cards</a>
                        <a class="dropdown-item" href="./actividades_obligatorias/3_bootstrap_formulario.html">Bootstrap Formulario</a>
                        <a class="dropdown-item" href="./actividades_obligatorias/4_javascript_variables.html">JavaScript Variables</a>
                        <a class="dropdown-item" href="./actividades_obligatorias/5_javascript_bucles.html">Javascript Bucles</a>
                        <a class="dropdown-item" href="./actividades_obligatorias/6_javascript_login.html">Javascript Login</a>
                        <a class="dropdown-item" href="./actividades_obligatorias/7_vue.html">Vue</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a href="https://smichelle05a.github.io/portfolio/" class="nav-link">Portfolio</a>
                </li>
            </ul>
        </div>
    </nav>
    `
});