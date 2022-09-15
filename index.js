(function () {
    "use strict";
  
    // Definir variables
    var items = document.querySelectorAll(".lineaTiempo li");

    function pantalla(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function llamarFuncion() {
      for (var i = 0; i < items.length; i++) {
        if (pantalla(items[i])) {
          items[i].classList.add("vista");
        }
      }
    }
  
    // Escuchar eventos
    window.addEventListener("load", llamarFuncion);
    window.addEventListener("resize", llamarFuncion);
    window.addEventListener("scroll", llamarFuncion);
  })();