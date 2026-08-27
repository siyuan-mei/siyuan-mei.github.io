# Maintaining the homepage and CV

This note records the local workflow for editing the homepage and rebuilding the bilingual CV. The source files are kept in the project workspace; the requested Windows copy is `E:\\code\\cv\\_siyuan`.

## 1. Edit the content

- Homepage text, publication links, news, awards, and experience: `data/content.js`
- Homepage layout and visitor-map embed: `index.html`, `styles.css`
- English CV source: `..\\cv\\main.tex`
- Chinese CV source: `..\\cv\\main_zh.tex`
- Photo: `..\\cv\\picture.jpg`

Keep publication links labelled `Paper` and add `Code` only when a public implementation exists. Do not add private paths, access tokens, personal datasets, or internal experiment artefacts.

## 2. Rebuild the PDFs (PowerShell)

Run from the repository workspace (`C:\\Users\\DELL\\Documents\\ChatGPT\\git_usage`):

```powershell
$tectonic = '.\\profile_update\\tools\\tectonic.exe'
& $tectonic '.\\profile_update\\cv\\main.tex' `
  --outdir '.\\profile_update\\cv\\output' --keep-logs --print

Push-Location '.\\profile_update\\cv'
& '..\\tools\\tectonic.exe' '.\\main_zh.tex' `
  --outdir '.\\output' --keep-logs --print
Pop-Location
```

The Chinese build is run from the `cv` directory so its local `fonts\\` folder is found. A successful build writes `output\\main.pdf` and `output\\main_zh.pdf`.

## 3. Preview and sync the PDFs

Render pages for a visual check (the bundled Poppler path is shown below):

```powershell
$pdftoppm = 'C:\\Users\\DELL\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\native\\poppler\\Library\\bin\\pdftoppm.exe'
New-Item -ItemType Directory -Force '.\\profile_update\\tmp' | Out-Null
& $pdftoppm -png -r 150 '.\\profile_update\\cv\\output\\main.pdf' '.\\profile_update\\tmp\\cv-en'
& $pdftoppm -png -r 150 '.\\profile_update\\cv\\output\\main_zh.pdf' '.\\profile_update\\tmp\\cv-zh'
```

After checking the rendered pages, copy the PDFs to the homepage and to the requested CV folder:

```powershell
Copy-Item '.\\profile_update\\cv\\output\\main.pdf' `
  '.\\profile_update\\site\\assets\\files\\curriculum_vitae.pdf' -Force
Copy-Item '.\\profile_update\\cv\\output\\main_zh.pdf' `
  '.\\profile_update\\site\\assets\\files\\curriculum_vitae_zh.pdf' -Force

Copy-Item '.\\profile_update\\cv\\main.tex' 'E:\\code\\cv\\_siyuan\\main.tex' -Force
Copy-Item '.\\profile_update\\cv\\main_zh.tex' 'E:\\code\\cv\\_siyuan\\main_zh.tex' -Force
Copy-Item '.\\profile_update\\cv\\output\\main.pdf' 'E:\\code\\cv\\_siyuan\\curriculum_vitae.pdf' -Force
Copy-Item '.\\profile_update\\cv\\output\\main_zh.pdf' 'E:\\code\\cv\\_siyuan\\curriculum_vitae_zh.pdf' -Force
```

## 4. Test the static homepage locally

```powershell
Push-Location '.\\profile_update\\site'
python -m http.server 8027
```

Open `http://127.0.0.1:8027/` and check the responsive layout, social links, publication cards, MapMyVisitors widget, and both CV downloads. Stop the server with `Ctrl+C`, then run `Pop-Location`.

## 5. Commit and publish with Git

From `profile_update\\site`:

```powershell
git status
git diff --check
git add README.md THIRD_PARTY_NOTICES.md CV_MAINTENANCE.md data/content.js index.html styles.css assets/files/curriculum_vitae.pdf assets/files/curriculum_vitae_zh.pdf assets/img/speech-guided.png assets/img/metal-inpainting.png assets/img/tmi-motion.png
git commit -m "Describe the homepage update"
git push origin main
```

Check the Pages workflow and the live site:

```powershell
gh run list --repo siyuan-mei/siyuan-mei.github.io --limit 5
gh run watch <RUN_ID> --repo siyuan-mei/siyuan-mei.github.io --exit-status
Invoke-WebRequest 'https://siyuan-mei.github.io/' -UseBasicParsing
Invoke-WebRequest 'https://siyuan-mei.github.io/assets/files/curriculum_vitae.pdf' -UseBasicParsing
Invoke-WebRequest 'https://siyuan-mei.github.io/assets/files/curriculum_vitae_zh.pdf' -UseBasicParsing
```

If a change is only to the homepage, rebuild and copy the PDFs only when the CV source changed. Keep the working tree clean after pushing with `git status`.
