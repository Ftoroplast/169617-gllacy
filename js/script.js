var disabledElements = document.querySelectorAll(".disabled");
var fields = document.querySelectorAll(".field");
var placeholder = "";

for (var i = 0; i < fields.length; ++i) {
  fields[i].addEventListener("focus", function () {
     placeholder = this.getAttribute("placeholder");
    this.setAttribute("placeholder", "");
  });
  fields[i].addEventListener("blur", function () {
    this.setAttribute("placeholder", placeholder);
  });
}

for (var i = 0; i < disabledElements.length; ++i) {
  disabledElements[i].addEventListener("click", function(event) {
    event.preventDefault();
  });
}
