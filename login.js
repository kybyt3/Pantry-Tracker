// login.js

// Login button functionality
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "user" && password === "pass") {
    document.getElementById("loginContainer").style.display = "none";
    window.location.href = 'dashboard.html';
  } else {
    alert("Incorrect username or password.");
  }
}

// Admin login button functionality
function adminLogin() {
  const adminUsername = prompt("Enter admin username:");
  const adminPassword = prompt("Enter admin password:");
  alert(`Admin Login:\nUsername: ${adminUsername}\nPassword: ${adminPassword}`);
}

// Wait for the DOM to load before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginBtn").addEventListener("click", login);
  document.getElementById("adminBtn").addEventListener("click", adminLogin);
});
