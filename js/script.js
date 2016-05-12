var disabledElements = document.querySelectorAll(".disabled");
var fields = document.querySelectorAll(".form__field");
var placeholder = "";
var btnContacts = document.querySelector("a.btn.btn--contacts");
var contactsModalWindow = document.querySelector(".modal-window.modal-window--contacts");
var overlay = document.querySelector(".overlay");
var crossContacts = document.querySelector(".modal-window__cross.modal-window__cross--contacts");

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

btnContacts.addEventListener("click", function(event) {
  event.preventDefault();
  contactsModalWindow.classList.add("modal-window--show");
  overlay.classList.add("overlay--show");
});

crossContacts.addEventListener("click", function(event) {
  event.preventDefault();
  contactsModalWindow.classList.remove("modal-window--show");
  overlay.classList.remove("overlay--show");
});

overlay.addEventListener("click", function(event) {
  contactsModalWindow.classList.remove("modal-window--show");
  overlay.classList.remove("overlay--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (contactsModalWindow.classList.contains("modal-window--show")) {
      contactsModalWindow.classList.remove("modal-window--show");
      overlay.classList.remove("overlay--show");
    }
  }
});
