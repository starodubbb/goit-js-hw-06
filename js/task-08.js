const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", submitFormHandler);

function submitFormHandler(event) {
  event.preventDefault();
  const target = event.currentTarget;

  const email = target.elements.email.value;
  const password = target.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);

  target.reset();
}
