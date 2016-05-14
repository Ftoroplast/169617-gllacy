function initMap(){var e=new google.maps.Map(document.getElementById("map"),{zoom:16,center:{lat:59.9386034,lng:30.3293023}}),t="img/icon__map--ice-cream.svg";new google.maps.Marker({position:{lat:59.938767,lng:30.3231},map:e,icon:t})}for(var disabledElements=document.querySelectorAll(".disabled"),fields=document.querySelectorAll(".form__field"),placeholder="",btnContacts=document.querySelector("a.btn.btn--contacts"),contactsModalWindow=document.querySelector(".modal-window.modal-window--contacts"),crossContacts=document.querySelector(".modal-window__cross.modal-window__cross--contacts"),nameField=contactsModalWindow.querySelector('[name="name"]'),emailField=contactsModalWindow.querySelector('[name="e-mail"]'),messageField=contactsModalWindow.querySelector('[name="message"]'),formContacts=contactsModalWindow.querySelector("form"),storedName=localStorage.getItem("nameField"),storedEmail=localStorage.getItem("emailField"),i=0;i<fields.length;++i)fields[i].addEventListener("focus",function(){placeholder=this.getAttribute("placeholder"),this.setAttribute("placeholder","")}),fields[i].addEventListener("blur",function(){this.setAttribute("placeholder",placeholder)});for(var i=0;i<disabledElements.length;++i)disabledElements[i].addEventListener("click",function(e){e.preventDefault()});btnContacts.addEventListener("click",function(e){e.preventDefault(),contactsModalWindow.classList.add("modal-window--show"),overlay.classList.add("overlay--show"),storedName&&(nameField.value=storedName,emailField.focus()),storedEmail&&(emailField.value=storedEmail,messageField.focus())}),crossContacts.addEventListener("click",function(e){e.preventDefault(),contactsModalWindow.classList.remove("modal-window--show"),contactsModalWindow.classList.remove("modal-window--error")}),nameField.required=!1,emailField.required=!1,messageField.required=!1,formContacts.addEventListener("submit",function(e){nameField.value&&emailField.value&&messageField.value?(localStorage.setItem("nameField",nameField.value),localStorage.setItem("emailField",emailField.value)):(e.preventDefault(),contactsModalWindow.classList.remove("modal-window--error"),contactsModalWindow.offsetWidth=contactsModalWindow.offsetWidth,contactsModalWindow.classList.add("modal-window--error"))});
