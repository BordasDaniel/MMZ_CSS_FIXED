const audioInput = document.getElementById("audioInput");
const audioBox = document.getElementById("audioBox");
const audioError = document.getElementById("audioError");
const audioFileName = document.getElementById("audioFileName");

audioBox.addEventListener("click", () => {
    audioInput.click();
});

audioInput.addEventListener("change", () => {
    audioError.textContent = "";
    audioFileName.textContent = "";

    const file = audioInput.files[0];
    if (!file) return;

    const allowedTypes = ["audio/mpeg", "audio/wav"];

    if (!allowedTypes.includes(file.type)) {
        audioError.textContent = "Hibás fájlformátum! Csak MP3 vagy WAV engedélyezett.";
        audioInput.value = "";
        return;
    }

    audioFileName.textContent = `✔ Feltöltve: ${file.name}`;
});

// VÉGLEGES ALBUM MENTÉS
function saveAlbum(final = true) {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const uploaderEmail = loggedInUser?.email || "anonymous"; // biztonsági fallback

  const artist = (localStorage.getItem("tempAlbumArtist") || "").trim() || "Ismeretlen előadó";
  const title = (localStorage.getItem("tempAlbumTitle") || "").trim() || "Ismeretlen album";
  const cover = localStorage.getItem("tempAlbumCover");

  const newAlbum = {
    artist: artist,
    title: title,
    cover: cover,
    uploaderEmail: uploaderEmail  // ← EZT ÚJONNAN HOZZÁADJUK
  };

  let albums = JSON.parse(localStorage.getItem("albums") || "[]");
  albums.push(newAlbum);
  localStorage.setItem("albums", JSON.stringify(albums));

  // Tisztítás
  localStorage.removeItem("tempAlbumArtist");
  localStorage.removeItem("tempAlbumTitle");
  localStorage.removeItem("tempAlbumCover");

  alert("Album sikeresen mentve!");

  if (final) {
    window.location.href = "albums_list.html";
  } else {
    location.reload();
  }
}

// Gombok
document.querySelector(".form-actions button:first-of-type").onclick = () => saveAlbum(true);
document.querySelector(".form-actions button:last-of-type").onclick = () => saveAlbum(false);