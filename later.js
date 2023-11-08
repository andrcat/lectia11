document.getElementById("aboutLink").addEventListener("click", function (e) {
    e.preventDefault(); // Opriți acțiunea de navigare implicită a link-ului.
    document.getElementById("aboutText").style.display = "block"; // Afișați textul "About" când faceți clic pe link.
});

document.getElementById("servicesLink").addEventListener("click", function (e) {
    e.preventDefault(); // Opriți acțiunea de navigare implicită a link-ului.
    document.getElementById("servicesText").style.display = "block"; // Afișați textul "Services" când faceți clic pe link.
});

document.getElementById("contactLink").addEventListener("click", function (e) {
    e.preventDefault(); // Opriți acțiunea de navigare implicită a link-ului.
    document.getElementById("contactText").style.display = "block"; // Afișați textul "Contact" când faceți clic pe link.
});