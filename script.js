const form = document.getElementById("form");
const email = document.getElementById("emailValue");
const error = document.getElementById("error");

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  return false;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value.trim() === "") {
    error.style.cssText = "display:block";
    error.innerText = "Email address required.";
  } else if (!ValidateEmail(email.value)) {
    error.style.cssText = "display:block";
    error.innerText = "Please enter a valid email address.";
  } else {
    console.log(email.value);
    error.style.cssText = "display:none";
    error.innerText = "";
  }
});
