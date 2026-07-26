document.getElementById("btnLogin").addEventListener("click", function () {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "perpustakaan123" && password === "adminkey") {

        alert("Login Berhasil!");

        // Nanti diarahkan ke Dashboard
        // window.location.href = "dashboard.html";

    } else {

        alert("Username atau Password Salah!");

    }

});
