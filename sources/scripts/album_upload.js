const coverBox = document.getElementById("coverBox");
const coverInput = document.getElementById("coverInput");
const errorText = document.getElementById("errorText");
const previewImage = document.getElementById("previewImage");

coverBox.addEventListener("click", () => {
    coverInput.click();
});

coverInput.addEventListener("change", () => {
    const file = coverInput.files[0];
    errorText.textContent = "";
    previewImage.src = "";
    previewImage.style.display = "none";

    if (!file || !file.type.startsWith("image/")) {
        errorText.textContent = "Csak képfájl tölthető fel!";
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
            if (img.width < 1500 || img.height < 1500) {
                errorText.textContent = "A borító legalább 1500x1500 pixel kell legyen!";
                return;
            }

            previewImage.src = img.src;
            previewImage.style.display = "block";

            // Átmeneti mentés base64-ként
            localStorage.setItem("tempAlbumCover", e.target.result);
        };
    };
    reader.readAsDataURL(file);
});

// Előadó és cím átmeneti mentése
const artistInput = document.getElementById("artistInput");
const titleInput = document.getElementById("titleInput");

if (artistInput) {
    artistInput.addEventListener("input", e => {
        localStorage.setItem("tempAlbumArtist", e.target.value);
    });
}

if (titleInput) {
    titleInput.addEventListener("input", e => {
        localStorage.setItem("tempAlbumTitle", e.target.value);
    });
}