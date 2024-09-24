let inputs = document.querySelectorAll("input");
let tex = document.querySelectorAll("textarea");
let ErrName = document.getElementById("ErrName");
let ErrLast = document.getElementById("ErrLast");
let ErrEmail = document.getElementById("ErrEmail");
let ErrMessage = document.getElementById("ErrMessage");
let ErrQuery = document.getElementById("ErrQuery");
let ErrTerms = document.getElementById("ErrTerms");
let general = document.getElementById("general");
let request = document.getElementById("Request");
let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function ValidateData() {
  let valid = true; // Inicializamos 'valid' como true

  inputs.forEach((element) => {
    switch (element.id) {
      case "first_name":
        if (element.value === "") {
          ErrName.classList.add("act");
          valid = false;
        } else {
          ErrName.classList.remove("act");
        }
        break;

      case "last_name":
        if (element.value === "") {
          ErrLast.classList.add("act");
          valid = false;
        } else {
          ErrLast.classList.remove("act");
        }
        break;

      case "email":
        if (element.value !== "") {
          if (reg.test(element.value)) {
            ErrEmail.classList.remove("act");
          } else {
            ErrEmail.classList.add("act");
            valid = false;
          }
        } else {
          ErrEmail.classList.add("act");
          valid = false;
        }
        break;

      case "checkBox":
        if (!element.checked) {
          ErrTerms.classList.add("act");
          valid = false;
        } else {
          ErrTerms.classList.remove("act");
        }
        break;

      default:
        break;
    }
   });

  return valid;
}

function ValidateText() {
  let valid = true;
  let textarea = document.getElementById("message");

  if (textarea.value === "") {
    ErrMessage.classList.add("act");
    valid = false;
  } else {
    ErrMessage.classList.remove("act");
  }

  return valid;
}

let InputRadio = document.querySelectorAll("input[type=radio]");

InputRadio.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.id === "general") {
      general.checked = true;
      request.checked = false;
    } else if (element.id === "Request") {
      general.checked = false;
      request.checked = true;
    }
  });
});

function ValidateCheck() {
  let valid = true;

  if (!general.checked && !request.checked) {
    ErrQuery.classList.add("act");
    valid = false;
  } else {
    ErrQuery.classList.remove("act");
  }

  return valid;
}

function ValidateForm() {
  let validCheck = ValidateCheck();
  let validData = ValidateData();
  let validText = ValidateText();

  if (validCheck && validData && validText) {
    Welcome();
  } else {
    console.log("Por favor, verifica los campos.");
  }
}


function Welcome() {
  let form=document.getElementById("form")
  form.reset();
  let dialog = document.getElementById("dialog");
  dialog.classList.add("Activate_Dialog")
   
    dialog.show(); 
   
}

 