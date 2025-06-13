document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Dummy validation — replace with API in future
  if (username === "admin" && password === "1234") {
    window.location.href = "home.html";
  } else {
    document.getElementById("error-msg").textContent = "Invalid username or password!";
  }
});
