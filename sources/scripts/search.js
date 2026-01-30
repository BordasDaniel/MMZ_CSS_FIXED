document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-bar input");
  if (!searchInput) return;

  // 1. Megállapítjuk, hol vagyunk: ha a fájl az /pages/ mappában van, kell a ../ visszalépés
  const isSubPage = window.location.pathname.includes('/pages/');
  const pathPrefix = isSubPage ? '../' : '';

  const releases = [
    { title: "Orgonabokor (Album)", artist: "Manuel", image: "sources/images/Orgona.jpg", page: "pages/orgonabokor.html", spotify: "https://open.spotify.com/track/6PfQxSKdb1T71Y6rotJ5a9?si=6640903e482442a9", apple: "https://music.apple.com/hu/album/orgonabokor/1795742501?l=hu", genre: "POP", year: "2025" },
    { title: "ÉDEN", artist: "Mehringer", image: "sources/images/ÉDEN.jpg", page: "pages/eden.html", spotify: "https://open.spotify.com/track/37rab2ZEkXwsPboXTZxHBf?si=4523c77e314b4141", apple: "https://music.apple.com/hu/album/%C3%A9den-single/1853879430?l=hu", genre: "POP - ALTERNATÍV ROCK", year: "2025" },
    { title: "gyógyító frekvenciák (Album)", artist: "gyuris", image: "sources/images/gyógyító.png", page: "pages/gyogyito-frekvenciak.html", spotify: "https://open.spotify.com/prerelease/2LF2wBcsARv7v5zUEuKkIZ?si=7671d6d48efa44dd", apple: "https://music.apple.com/hu/album/cyan-single/1862743735?l=hu", genre: "TRAP", year: "2025" },
    { title: "hóangyal", artist: "gyuris", image: "sources/images/hóangyal.png", page: "pages/hoangyal.html", spotify: "https://open.spotify.com/album/1x7cbY0aFqC5UEiJizAscJ?si=NwqJHTvESdyebZkggvAGlw", apple: "https://music.apple.com/hu/album/h%C3%B3angyal-single/1858886516?l=hu", genre: "TRAP", year: "2025" },
    { title: "Kimaradás", artist: "Mario", image: "sources/images/Kimaradás.jpg", page: "pages/kimaradas.html", spotify: "https://open.spotify.com/track/6ij2MtTi05Tpghcvp4i64m?si=bcdf96c784b0410e", apple: "https://music.apple.com/hu/album/kimarad%C3%A1s-single/1828260599?l=hu", genre: "POP", year: "2025" },
    { title: "Vigyázz magadra, jó szórakozást", artist: "AKC Misi", image: "sources/images/Vigyázz_magadra.jpg", page: "pages/vigyazz-magadra.html", spotify: "https://open.spotify.com/album/1fBB3D2EqSYKXvuCePwI5S?si=qC8iybZ4QdKdp_IXIh9kkA", apple: "https://music.apple.com/hu/album/vigy%C3%A1zz-magadra-j%C3%B3-sz%C3%B3rakoz%C3%A1st/1862121130?l=hu", genre: "TRAP", year: "2025" },
    { title: "GLAMOUR (Album)", artist: "matro", image: "sources/images/GLAMOUR.jpg", page: "pages/glamour.html", spotify: "", apple: "", genre: "R&B - TRAP", year: "2025" },
    { title: "DJV", artist: "Bruno X Spacc", image: "sources/images/djv.jpg", page: "pages/djv.html", spotify: "https://open.spotify.com/track/2rCQ3zEmyjiXuBlXms3mc4?si=20261d26767a45a2", apple: "https://music.apple.com/hu/album/djv-single/1811164701?l=hu", genre: "TRAP - POP - AFRO", year: "2025" }
  ];

  const dropdown = document.createElement("div");
  dropdown.classList.add("search-dropdown");
  searchInput.parentNode.appendChild(dropdown);

  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    dropdown.innerHTML = "";
    dropdown.style.display = "none";

    if (query.length >= 2) {
      const filtered = releases.filter(r => 
        r.title.toLowerCase().includes(query) || r.artist.toLowerCase().includes(query)
      );

      if (filtered.length > 0) {
        filtered.forEach(release => {
          const item = document.createElement("div");
          item.classList.add("search-dropdown-item");
          
          // Alkalmazzuk a pathPrefix-et a képre és a linkre is
          item.innerHTML = `
            <img src="${pathPrefix}${release.image}" alt="${release.title}">
            <div class="item-info">
              <div class="single-line-text">
                <span class="artist-name">${release.artist}</span> – ${release.title}
              </div>
            </div>
          `;
          
          // Kattintáskor is figyelembe vesszük a prefixet
          item.addEventListener("click", () => {
            window.location.href = `${pathPrefix}${release.page}`;
          });
          
          dropdown.appendChild(item);
        });
        dropdown.style.display = "block";
      }
    }
  });

  document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
});