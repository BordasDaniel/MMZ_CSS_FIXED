# CSS Fájlok Szétbontása

## 📁 Projekt Mappastruktúra

```
Distributorhtmldemo1/
├── sources/
│   ├── css/          → 12 CSS modul
│   ├── scripts/      → 7 JavaScript fájl
│   └── images/       → Minden kép (15 db)
├── pages/            → 26 HTML oldal
├── index.html        → Főoldal (korábban base.html)
├── backup.css        → Eredeti CSS biztonsági másolat
└── CSS_README.md     → Ez a dokumentáció
```

## 📋 CSS Fájlok Listája

Létrehozott CSS fájlok a `sources/css/` mappában:

## 1. general.css

**Tartalom:**

- Alapvető reset és globális stílusok (*, body)
- Wrapper és main konténerek
- Navigációs listák
- Általános címek (h1, h2)
- Gombok (back-btn, primary-btn)
- Általános utility osztályok

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/general.css">
```

## 2. navbar.css

**Tartalom:**

- Header és logo stílusok
- Keresősáv és keresési dropdown
- Login/auth gombok
- Profil gomb és dropdown menü
- Felhasználó név és profilkép megjelenítés

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/navbar.css">
```

## 3. home.css

**Tartalom:**

- Slideshow container és animációk
- Slideshow track és item elemek
- Slideshow caption (cím, előadó)
- Streaming linkek
- Főoldal specifikus elemek

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/home.css">
```

## 4. album.css

**Tartalom:**

- Album oldalak specifikus stílusai
- Album cover megjelenítés
- Album cím, előadó, műfaj
- Album streaming linkek
- Album layout

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/album.css">
```

**Érintett oldalak:**
- eden.html
- orgonabokor.html
- gyogyito-frekvenciak.html
- hoangyal.html
- kimaradas.html
- vigyazz-magadra.html
- glamour.html
- djv.html

## 5. footer.css

**Tartalom:**

- Footer teljes stílusai
- Social media ikonok
- Footer oszlopok és linkek
- Copyright szekció

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/footer.css">
```

## 6. auth.css

**Tartalom:**

- Regisztrációs és bejelentkezési oldalak
- Modern auth box
- Social login gombok (Google, Apple)
- FAQ szekció
- Telefonszám mező zászlóval

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/auth.css">
```

## 7. music.css

**Tartalom:**

- Mosaic galéria (music.html)
- Album kártyák megjelenítése
- Hover effektusok

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/music.css">
```

## 8. contact.css

**Tartalom:**

- Kapcsolat oldal form és layout
- Contact info szekció
- Email tooltip
- Contact linkek

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/contact.css">
```

## 9. promo.css

**Tartalom:**

- Promóciós oldal specifikus stílusok
- AboutUs oldal stílusok
- Policy oldal stílusok

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/promo.css">
```

## 10. prods.css

**Tartalom:**

- Producer kártyák grid layout
- Social ikonok
- Ticket modal (foglalási form)
- Producer profilok

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/prods.css">
```

## 11. profile.css

**Tartalom:**

- Felhasználói profil oldal
- Profile card megjelenítés
- Avatar és user info

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/profile.css">
```

## 12. upload.css

**Tartalom:**

- Album feltöltés form
- Track feltöltés form
- Cover image upload box
- Audio file upload box
- Form actions és gombok

**Használat HTML-ben:**

```html
<link rel="stylesheet" href="sources/css/upload.css">
```

---

## Hogyan használd a HTML oldalakon?

### Minden oldalon szükséges:

```html
<link rel="stylesheet" href="sources/css/general.css">
<link rel="stylesheet" href="sources/css/navbar.css">
<link rel="stylesheet" href="sources/css/footer.css">
```

### Oldal-specifikus CSS-ek:

**index.html / base.html:**

```html
<link rel="stylesheet" href="sources/css/general.css">
<link rel="stylesheet" href="sources/css/navbar.css">
<link rel="stylesheet" href="sources/css/home.css">
<link rel="stylesheet" href="sources/css/footer.css">
```

**register.html / login.html:**

```html
<link rel="stylesheet" href="sources/css/general.css">
<link rel="stylesheet" href="sources/css/navbar.css">
<link rel="stylesheet" href="sources/css/auth.css">
<link rel="stylesheet" href="sources/css/footer.css">
```

**music.html:**

```html
<link rel="stylesheet" href="sources/css/general.css">
<link rel="stylesheet" href="sources/css/navbar.css">
<link rel="stylesheet" href="sources/css/music.css">
<link rel="stylesheet" href="sources/css/footer.css">
```

**Album oldalak (eden.html, orgonabokor.html, gyogyito-frekvenciak.html, stb.):**

```html
<link rel="stylesheet" href="../sources/css/general.css">
<link rel="stylesheet" href="../sources/css/navbar.css">
<link rel="stylesheet" href="../sources/css/footer.css">
<link rel="stylesheet" href="../sources/css/album.css">
```

**contact.html:**

```html
<link rel="stylesheet" href="sources/css/general.css">
<link rel="stylesheet" href="sources/css/navbar.css">
<link rel="stylesheet" href="sources/css/contact.css">
<link rel="stylesheet" href="sources/css/footer.css">
```

**promo.html / aboutus.html / policy.html:**

```html
<link rel="stylesheet" href="sources/css/general.css">
<link rel="stylesheet" href="sources/css/navbar.css">
<link rel="stylesheet" href="sources/css/promo.css">
<link rel="stylesheet" href="sources/css/footer.css">
```

**prods.html:**

```html
<link rel="stylesheet" href="sources/css/general.css">
<link rel="stylesheet" href="sources/css/navbar.css">
<link rel="stylesheet" href="sources/css/prods.css">
<link rel="stylesheet" href="sources/css/footer.css">
```

**profile.html:**

```html
<link rel="stylesheet" href="sources/css/general.css">
<link rel="stylesheet" href="sources/css/navbar.css">
<link rel="stylesheet" href="sources/css/profile.css">
<link rel="stylesheet" href="sources/css/footer.css">
```

**album_upload.html / track_upload.html:**

```html
<link rel="stylesheet" href="sources/css/general.css">
<link rel="stylesheet" href="sources/css/navbar.css">
<link rel="stylesheet" href="sources/css/upload.css">
<link rel="stylesheet" href="sources/css/footer.css">
```

---

## ✅ Teljes CSS szétbontás kész!

Összesen **12 különálló CSS fájl** lett létrehozva:

1. general.css - Alapvető stílusok, reset, gombok
2. navbar.css - Header, logo, keresősáv, profil menü
3. home.css - Főoldal slideshow és animációk
4. album.css - Album oldalak specifikus stílusai
5. footer.css - Footer és social linkek
6. auth.css - Bejelentkezés és regisztráció
7. music.css - Zenék oldal mosaic galéria
8. contact.css - Kapcsolat oldal form
9. promo.css - Promóció, About Us, Policy oldalak
10. prods.css - Producer kártyák és ticket modal
11. profile.css - Felhasználói profil
12. upload.css - Album/Track feltöltés formok

---

## 📝 Frissítések

### ✅ Elvégzett feladatok:

1. **CSS Modularizáció** - 2000+ soros CSS szétvágva 12 modulra
2. **Mappastruktúra kialakítása** - sources/css, sources/images, sources/scripts, pages
3. **Fájlok áthelyezése** - Minden fájl a megfelelő mappába
4. **Útvonalak frissítése** - Minden HTML és CSS fájlban
5. **Oldal-specifikus CSS hozzáadása** - Minden oldalhoz a megfelelő modulok


