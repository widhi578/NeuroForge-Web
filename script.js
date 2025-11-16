// Saat halaman selesai dimuat → fade-in
window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});

// Saat klik link → fade-out dulu baru pindah halaman
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        // Abaikan jika link bukan ke halaman lain
        if (!href || href.startsWith("#")) return;

        e.preventDefault(); 
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = href;
        }, 600); // sama dengan durasi transition CSS
    });
});
