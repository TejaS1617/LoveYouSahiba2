# For Baboola 💗 — Birthday Surprise Website

A romantic, mobile-friendly scrapbook birthday page built with plain HTML, CSS, and JavaScript. It includes an interactive 20-second, four-scene animated love story. It works on GitHub Pages without a build step.

## Personalize it

### 1. Add your photos
Inside the project, open `assets/` and replace the three placeholder image files with your own pictures. Keep these exact filenames:

- `photo-1.jpg`
- `photo-2.jpg`
- `photo-3.jpg`

The 20-second story uses these three photos across its first three scenes; the fourth scene ends with an animated birthday cake.

You can use `.jpg` images. If your pictures are `.png` or `.webp`, either convert them to JPG or update the corresponding `src` values in `index.html`.

### 2. Add your song
Place an audio file you are allowed to use in `assets/` and name it `our-song.mp3`. The page only starts the music after the visitor taps the music button because phones generally block autoplay. If your song is in another format, update the `<source>` in `index.html` to match.

### 3. Edit the message
Open `index.html` in a text editor and change any of the letter text, captions, or birthday message. Search for `Baboola` to find the name references.

## Preview on your computer

Open `index.html` in a browser. For best results, use a local server:
- VS Code: install the Live Server extension, right-click `index.html`, choose **Open with Live Server**.
- Or run `python -m http.server 8000` in this folder, then open `http://localhost:8000`.

## Publish free with GitHub Pages

1. Sign in or create an account at [GitHub](https://github.com/).
2. Create a new **public** repository, for example `for-baboola`.
3. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the complete `assets` folder. Keep the same folder structure.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/ (root)`, then press **Save**.
7. Wait a minute or two. The Pages section will show your live URL, usually `https://YOUR-USERNAME.github.io/for-baboola/`.
8. Open that URL on your phone and test the photos and music before sending it to her.

## Project structure

```text
for-baboola/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── photo-1.jpg
    ├── photo-2.jpg
    ├── photo-3.jpg
    └── our-song.mp3
```

## Notes

- The photo spots show attractive placeholders until you add your own pictures.
- Music is not included; add your own song file. Use a file you have the right to upload and share.
- The site is static and does not collect or send any personal data.
