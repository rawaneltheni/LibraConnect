// ==================== SignUp / SignIn slider ====================

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// ==================== Check @limu.edu.ly ====================

const forms = document.querySelectorAll("form");

forms.forEach(form => {
    form.addEventListener("submit", function(event) {
      	event.preventDefault(); // stop the default redirect

		const emailInput = form.querySelector('input[type="email"]');
		const email = emailInput.value.trim();

		// Check if email ends with @limu.edu.ly
		if (/@limu\.edu\.ly$/i.test(email)) {
			// Email is valid, redirect to index.html
			window.location.href = "index.html";
		} else alert("Please use a valid @limu.edu.ly email.");
		
    });
});

// ==================== Google reCAPTCHA ====================

function validateCaptcha() {
    var response = grecaptcha.getResponse();
    if(response.length == 0) {
        alert("Please verify that you are not a robot.");
        return false;
    }
    return true;
}