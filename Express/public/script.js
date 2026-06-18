const loginBtn = document.getElementById("loginBtn");
const profileBtn = document.getElementById("profileBtn");
const signupBtn = document.getElementById("signupBtn");
const logoutBtn = document.getElementById("logoutBtn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const deleteBtn = document.getElementById("deleteBtn");

async () => {
    const me = await fetch("/api/me");
    const user = await me.json();
};

// SIGNUP
signupBtn.addEventListener("click", async () => {
    const data = {
        username: usernameInput.value,
        password: passwordInput.value
    };

    const response = await fetch("/api/auth/signUp", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    const text = await response.json();
    const message = text.message;

    alert(message);
});

// LOGIN
loginBtn.addEventListener("click", async () => {

    const data = {
        username: usernameInput.value,
        password: passwordInput.value
    };

    const response = await fetch("/api/auth/login", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    });

    const text = await response.json();
    const message = text.message;

    alert(message);

});

// PROFILE
profileBtn.addEventListener("click", async () => {

    const response = await fetch("/api/user/profile");

    const text = await response.json();
    const message = text.message;

    alert(message);
});

// LOGOUT
logoutBtn.addEventListener("click", async () => {
    const response = await fetch("/api/user/logout");
    const text = await response.json();
    const message = text.message;
    alert(message);
});

// DELETE ACCOUNT
deleteBtn.addEventListener("click", async () => {
    const response = await fetch("/api/user/deleteAccount", {
        method: "POST"
    });

    const text = await response.json();
    const message = text.message;
    alert(message);
});
