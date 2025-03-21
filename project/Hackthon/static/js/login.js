document.addEventListener("DOMContentLoaded", function () {

    // Function to get CSRF token from cookies
    function getCSRFToken() {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            document.cookie.split(';').forEach(cookie => {
                const trimmedCookie = cookie.trim();
                if (trimmedCookie.startsWith("csrftoken=")) {
                    cookieValue = trimmedCookie.split("=")[1];
                }
            });
        }
        return cookieValue;
    }

    // Function to render the home page
    function redirectToHome() {
        window.location.href = "/home/";
    }

    // Function to handle login
    async function login(username, password) {
        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        try {
            const response = await fetch('/login_check/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCSRFToken()
                },
                body: JSON.stringify({ user:username, pass:password })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                alert("Login Successful!");
                redirectToHome();
            } else {
                alert(result.error || "Invalid login credentials.");
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert("Something went wrong. Please try again.");
        }
    }

    // Event listener for the login button
    document.getElementById("login").addEventListener("click", function () {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        if(username==""||password==""){
            alert("please add both user and password");
        }
        login(username, password);
    });

});
