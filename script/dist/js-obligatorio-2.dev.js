"use strict";

var tablas = document.querySelector('#tablas-multiplicar');

for (var i = 11; i >= 9; i--) {
  var HTML = '';
  HTML +=
  /* html */
  "\n    <div class=\"d-flex flex-column col-3 p-3 bg-light\">\n        <div class=\"container text-center\">\n            <p class=\"fw-bold\">\n                La tabla del ".concat(i, ":\n            </p>");

  for (var j = 1; j < 10; j++) {
    HTML +=
    /* html */
    "\n        <p class=\"m-0 pb-2\"> ".concat(i, " x ").concat(j, " = ").concat(i * j, "</p>");
  }

  HTML +=
  /* html */
  "\n        </div>\n    </div>";
  tablas.innerHTML += HTML;
}