# SSC ShortNote poster (1080×1080)

- `ssc-shortnote-poster.html` — the editable design (HTML/CSS, fonts bundled in `fonts/`).
- `ssc-shortnote-poster.png` — rendered output (2160×2160).

Edit text, prices, logo, and website directly in the HTML. Colors are CSS variables at the top of `<style>`.

Re-render:

```
node design/render.js "$PWD/design/ssc-shortnote-poster.html" "$PWD/design/ssc-shortnote-poster.png" 2
```

# Defence Viva Crash Course poster (1080×1080, red theme)

- `defence-viva-poster.html` — editable design. Bangla tagline uses Li Ador Noirrit (`fonts/li-ador/`).
- `defence-viva-poster.png` — rendered output (2160×2160).
- `img/teacher-zihad.png` — teacher cutout.

Replace the logo, website and phone placeholders in the HTML, then re-render:

```
node design/render.js "$PWD/design/defence-viva-poster.html" "$PWD/design/defence-viva-poster.png" 2
```
