var disabledElements = document.querySelectorAll(".disabled");
var fields = document.querySelectorAll(".form__field");
var placeholder = "";
var btnContacts = document.querySelector("a.btn.btn--contacts");
var contactsModalWindow = document.querySelector(".modal-window.modal-window--contacts");
var overlay = document.querySelector(".overlay");
var crossContacts = document.querySelector(".modal-window__cross.modal-window__cross--contacts");
var nameField = contactsModalWindow.querySelector("[name=\"name\"]");
var emailField = contactsModalWindow.querySelector("[name=\"e-mail\"]");
var messageField = contactsModalWindow.querySelector("[name=\"message\"]");
var formContacts = contactsModalWindow.querySelector("form");
var storedName = localStorage.getItem("nameField");
var storedEmail = localStorage.getItem("emailField");

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
  if (storedName) {
    nameField.value = storedName;
    emailField.focus();
  }

  if (storedEmail) {
    emailField.value = storedEmail;
    messageField.focus();
  }
});

crossContacts.addEventListener("click", function(event) {
  event.preventDefault();
  contactsModalWindow.classList.remove("modal-window--show");
  overlay.classList.remove("overlay--show");
  contactsModalWindow.classList.remove("modal-window--error");
});

overlay.addEventListener("click", function(event) {
  contactsModalWindow.classList.remove("modal-window--show");
  overlay.classList.remove("overlay--show");
  contactsModalWindow.classList.remove("modal-window--error");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (contactsModalWindow.classList.contains("modal-window--show")) {
      overlay.classList.remove("overlay--show");
      contactsModalWindow.classList.remove("modal-window--show");
      contactsModalWindow.classList.remove("modal-window--error");
    }
  }
});

nameField.required = false;
emailField.required = false;
messageField.required = false;

formContacts.addEventListener("submit", function(event) {
  if (!nameField.value || !emailField.value || !messageField.value) {
    event.preventDefault();
    contactsModalWindow.classList.remove("modal-window--error");
    contactsModalWindow.offsetWidth = contactsModalWindow.offsetWidth;
    contactsModalWindow.classList.add("modal-window--error");
  } else {
    localStorage.setItem("nameField", nameField.value);
    localStorage.setItem("emailField", emailField.value);
  }
});

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: {lat: 59.9386034, lng: 30.3293023}
  });

  var image = "img/icon__map--ice-cream.svg";
  var beachMarker = new google.maps.Marker({
    position: {lat: 59.938767, lng: 30.323100},
    map: map,
    icon: image
  });
}
