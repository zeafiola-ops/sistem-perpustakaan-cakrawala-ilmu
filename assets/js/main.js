document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btnLogin").addEventListener("click", function () {

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "perpustakaan123" && password === "adminkey") {

            Swal.fire({
                icon: "success",
                title: "Login Berhasil",
                text: "Selamat datang di Perpustakaan Cakrawala Ilmu",
                confirmButtonColor: "#5D4037"
            }).then(() => {

                // Nanti diarahkan ke Dashboard
                window.location.href = "dashboard.html";

            });

        } else {

            Swal.fire({
                icon: "error",
                title: "Login Gagal",
                text: "Username atau Password salah!",
                confirmButtonColor: "#5D4037"
            });

        }

    });

});
