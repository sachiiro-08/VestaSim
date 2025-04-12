const menuBtn = document.querySelector('.menubtn')
const navlinks = document.querySelector('.navlinks')

menuBtn.addEventListener('click',()=>{
  navlinks.classList.toggle('mobile-menu')
})

const loginBtn = document.querySelector(".log-btn");
const formPopup = document.querySelector(".form-popup");
const closePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLinks = document.querySelectorAll(".form-box .bottom-link a");
 
let isLoggedIn = false; // Track login state
let storedUsername = ""; // Store username temporarily
let storedPassword = ""; // Store password temporarily

// Show/hide login form
loginBtn.addEventListener("click", () => {
  if (!isLoggedIn) {
    document.body.classList.toggle("show-popup");
  } else {
    isLoggedIn = false;
    loginBtn.textContent = "Login";
    alert("Logged out successfully!");
  }
});

// Close login form
closePopupBtn.addEventListener("click", () => {
  document.body.classList.remove("show-popup");
});

// Toggle between login and signup forms
loginSignupLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
  });
});

// Handle user registration
document.querySelector(".signup form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const newUsername = document.querySelector(".signup input[type='text']").value;
  const newPassword = document.querySelector(".signup input[type='password']").value;
  const policyChecked = document.getElementById("policy").checked;

  if (newUsername && newPassword && policyChecked) {
    storedUsername = newUsername;
    storedPassword = newPassword;
    alert("Account created successfully!");

    formPopup.classList.remove("show-signup"); // Switch back to login form
  } else {
    alert("Please complete all fields and accept the Terms & Conditions.");
  }
});

// Handle user login
document.querySelector(".login form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector(".login input[type='text']").value;
  const password = document.querySelector(".login input[type='password']").value;

  if (username === storedUsername && password === storedPassword) {
    alert(`Welcome, ${username}!`);
    isLoggedIn = true;
    loginBtn.textContent = "Logout";
    document.body.classList.remove("show-popup");
  } else {
    alert("Invalid username or password.");
  }
});