# Odin JS Foundations — Practice Path

This repository collects my Day-by-Day practice for the Odin Project JavaScript Foundations course. It contains exercises, mini-projects, and notes organized by lesson number and topic.

## What you'll find

- Lesson folders named with a leading number for ordering (e.g. `01-data-types`, `02-conditionals`).
- Small JavaScript demos and practice files (`*.js`) plus optional HTML pages for browser examples.
- A `mini-projects/` folder with small projects (e.g. Rock-Paper-Scissors).

## Repo structure (example)

- `01-data-types/`
- `02-conditionals/`
- `mini-projects/`
- `README.md`

## How to run examples

- Run Node.js scripts in terminal:

```bash
node path/to/file.js
```

- Open HTML examples in a browser by double-clicking the file or serving with a simple HTTP server:

```bash
# from repo root, Python 3 simple server
python -m http.server 8000
# then open http://localhost:8000/02-conditionals/index.html
```

## Conventions I use

- Folders prefixed with two-digit lesson numbers to keep a chronological order.
- Files named to reflect the exercise (e.g. `if-else-practice.js`, `rps-logic.js`).
- Keep each exercise small and focused.

## Git workflow suggestions

I recommend a single repository for the full course practice. Suggested workflow:

```bash
git init
git add .
git commit -m "chore: add Day 01 exercises"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Tips:
- Commit often with descriptive messages (e.g. `feat: add rps logic`, `fix: correct tie logic`).
- Use branches for larger changes or refactors.
- Add a `.gitignore` to exclude `node_modules/` if you start using packages.

## Adding a new day / exercise

1. Create a folder with the next number and topic: `03-functions/`.
2. Add files and a short README inside the folder if useful.
3. Commit with a message like `chore: add Day 03 - functions exercises`.

## License

This repo is for practice. If you want, apply an open license like MIT.

## Contact

If you want feedback or help, open an issue or message me.

---

_Quick start:_ update the repo name and remote, then push your work. Happy coding!