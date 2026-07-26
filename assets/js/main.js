document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btnLogin").addEventListener("click", function () {

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "perpustakaan123" && password === "adminkey") {

            alert("Login Berhasil!");

        } else {

            alert("Username atau Password Salah!");

        }

    });

});
