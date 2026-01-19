document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Correct login details (demo purpose)
  const correctUsername = "admin";
  const correctPassword = "12345";

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === correctUsername && password === correctPassword) {
    // Redirect to home page
    window.location.href = "home.html";
  } else {
    errorMessage.textContent = "Invalid username or password!";
  }
});
