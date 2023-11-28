let loginForm = document.querySelector(".my-form");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");

    console.log('Email:', email.value);
    console.log('senha:', senha.value); 
});


