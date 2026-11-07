# SSC ShortNote poster (1080×1080)

- `ssc-shortnote-poster.html` — the editable design (HTML/CSS, fonts bundled in `fonts/`).
- `ssc-shortnote-poster.png` — rendered output (2160×2160).

Edit text, prices, logo, and website directly in the HTML. Colors are CSS variables at the top of `<style>`.

Re-render:

```
node design/render.js "$PWD/design/ssc-shortnote-poster.html" "$PWD/design/ssc-shortnote-poster.png" 2
```
