// Fungsi untuk menampilkan modal
function showMessage() {
    document.getElementById("myModal").style.display = "block";
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Menutup modal jika pengguna klik di luar modal
window.onclick = function(event) {
    if (event.target === document.getElementById("myModal")) {
        closeModal();
    }
}
