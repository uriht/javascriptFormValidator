  const form = document.querySelector("#form");
  form.addEventListener("submit", validateForm);

  function validateForm(event) {
    event.preventDefault();

    const fullName = document.querySelector("#fullName").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const pwd = document.querySelector("#pwd").value;
    const confirmPwd = document.querySelector("#confirmPwd").value;

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const phoneError = document.querySelector("#phoneError");
    const passwordError = document.querySelector("#passwordError");
    const confirmError = document.querySelector("#confirmError");

    if (fullName.length < 5) {
      nameError.textContent = "Name must be at least 5 characters";
      return;
    } else {
      nameError.textContent = "";
    }

    if (!email.includes("@")) {
      emailError.textContent = "Enter a valid email";
      return;
    } else {
      emailError.textContent = "";
    }

    if (phone.length !== 10 || phone === "123456789") {
      phoneError.textContent = "Enter a valid 10-digit phone number";
      return;
    } else {
      phoneError.textContent = "";
    }

    if (pwd.length < 8 || pwd.toLowerCase() === "password" || pwd.toLowerCase() === fullName.toLowerCase()) {
      passwordError.textContent = "Password must be at least 8 characters and cannot be 'password' or your name";
      return;
    } else {
      passwordError.textContent = "";
    }

    if (pwd !== confirmPwd) {
      confirmError.textContent = "Passwords do not match";
      return;
    } else {
      confirmError.textContent = "";
    }

    alert("Form submitted successfully");
  }