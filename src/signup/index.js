// index.js
document.addEventListener("DOMContentLoaded", () => {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const signupForm = document.getElementById("signup-form");

  const userKey = "userSignInfo";

  const storedData = localStorage.getItem(userKey);
  const user = JSON.parse(storedData);

  if (user && user?.loggedIn) {
    window.location.href = "./src/tracker/index.html";
  }

  // Listen on the FORM, not the button
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userData = {
      username: username.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };

    // Validate password match
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user data
    localStorage.setItem(
      userKey,
      JSON.stringify({ ...userData, loggedIn: false })
    );

    alert("Signup successful!");
    window.location.href = "../signin/index.html";
  });
});
