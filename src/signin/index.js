// signin/index.js
document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginForm = document.getElementById("login-form");
  const userKey = "userSignInfo";

  const storedData = localStorage.getItem(userKey);
  const user = JSON.parse(storedData);

  if (user && user?.loggedIn) {
    window.location.href = "./src/tracker/index.html";
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("🚀 Login attempt");

    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value;

    // Pull stored user
    const storedData = localStorage.getItem(userKey);

    if (!storedData) {
      alert("No account found. Please sign up first.");
      return;
    }

    let user;
    try {
      user = JSON.parse(storedData);
    } catch {
      alert("Corrupted user data. Please sign up again.");
      return;
    }

    // Validate
    if (enteredEmail !== user.email || enteredPassword !== user.password) {
      alert("❌ Email or password is incorrect.");
      return;
    }

    // Success!
    alert("✅ Login successful!");
    const updatedData = {
      ...user,
      loggedIn: true,
    };
    // Redirect to your dashboard or home
    window.location.href = "../tracker/index.html";
  });
});
