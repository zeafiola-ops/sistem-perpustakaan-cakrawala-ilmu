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
// =====================
// JAM DIGITAL
// =====================

function updateJam() {

    const jam = document.getElementById("jam");

    if (jam) {

        const sekarang = new Date();

        jam.innerHTML = sekarang.toLocaleTimeString("id-ID");

    }
}

setInterval(updateJam, 1000);
updateJam();
// =====================
// HAPUS DATA BUKU
// =====================

document.querySelectorAll(".btn-danger").forEach(function (btn) {

    btn.addEventListener("click", function () {

        Swal.fire({
            title: "Hapus Buku?",
            text: "Data buku akan dihapus.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Ya",
            cancelButtonText: "Batal"
        }).then((result) => {

            if (result.isConfirmed) {

                btn.closest("tr").remove();

                Swal.fire(
                    "Berhasil!",
                    "Data berhasil dihapus.",
                    "success"
                );

            }

        });

    });

});
// =====================
// EDIT DATA BUKU
// =====================

document.querySelectorAll(".btn-warning").forEach(function (btn) {

    btn.addEventListener("click", function () {

        Swal.fire({
            title: "Edit Buku",
            text: "Fitur edit sedang dalam tahap pengembangan.",
            icon: "info",
            confirmButtonText: "OK"
        });

    });

});
// ===============================
// SEARCH DATA BUKU
// ===============================

const searchBuku = document.getElementById("searchBuku");

if (searchBuku) {

    searchBuku.addEventListener("keyup", function () {

        let keyword = this.value.toLowerCase();

        let rows = document.querySelectorAll("#tabelBuku tr");

        rows.forEach(function(row){

            let text = row.innerText.toLowerCase();

            if(text.includes(keyword)){
                row.style.display = "";
            }else{
                row.style.display = "none";
            }

        });

    });

}
