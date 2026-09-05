# Ordværk - Dansk grammatiktræning

Ordværk is a responsive web app for practising Danish grammar through short, interactive exercises. It is designed for learners around levels A2-B1 and runs entirely in the browser.

## Features

- Topic-based quizzes for verbs, adverbs, pronouns, adjectives, and conjunctions
- A mixed quiz covering all grammar topics
- Sentence-building exercises for Danish word order
- A 60-second speed challenge
- Immediate feedback and a short explanation after each answer
- Points, answer streaks, daily goals, and best scores
- Progress saved locally in the browser
- Responsive layout for phones, tablets, and desktop computers
- No backend, database, account, or build process required

## Technology

The project uses only:

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage` for progress

There are no npm dependencies.

## Project structure

```text
dansk-grammatiktraener/
├── dist/
│   ├── index.html      # Page structure and metadata
│   ├── styles.css      # Visual design and responsive styles
│   └── app.js          # Questions, game logic, and saved progress
├── .openai/
│   └── hosting.json    # Configuration used by OpenAI Sites
└── README.md
```

## Run locally

### Simplest method

Open `dist/index.html` directly in a web browser.

### With a local web server

From the project directory, run:

```bash
python3 -m http.server 8000 --directory dist
```

Then open [http://localhost:8000](http://localhost:8000).

## Push the project to GitHub

Create an empty repository on GitHub, then run these commands from the project directory:

```bash
git init
git add .
git commit -m "Initial version of Ordværk"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub details.

> If Git is already initialized, skip `git init`. If an `origin` remote already exists, update it with `git remote set-url origin YOUR-GITHUB-URL` instead of adding it again.

## Deploy with GitHub Pages

Because the public files are stored in `dist/`, the cleanest GitHub Pages setup uses GitHub Actions.

1. Open your repository on GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Create `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Configure Pages
        uses: actions/configure-pages@v5

      - name: Upload website
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy website
        id: deployment
        uses: actions/deploy-pages@v4
```

Commit and push the workflow. GitHub will publish the app after the action finishes.

## Other deployment options

The `dist` folder is a complete static website. It can also be deployed to services such as Netlify, Cloudflare Pages, Vercel, or any conventional web server.

Set the publish or output directory to:

```text
dist
```

No build command is needed.

## Add or edit questions

Question data is stored near the top of `dist/app.js`.

A multiple-choice question follows this structure:

```javascript
{
  topic: "verbs",
  q: "I går ___ jeg bussen klokken syv.",
  options: ["tager", "tog", "har taget", "tage"],
  answer: "tog",
  explain: "‘I går’ peger på afsluttet datid. Datid af ‘at tage’ er ‘tog’."
}
```

The `answer` value must exactly match one item in `options`. Supported topic keys are:

- `verbs`
- `adverbs`
- `pronouns`
- `adjectives`
- `conjunctions`

Sentence-building exercises are stored in the `BUILD_QUESTIONS` array. For these exercises, the words selected by the learner must produce the exact text in `answer`.

## Reset saved progress

Progress is stored in the browser under the key `ordvaerk-progress`. Learners can reset it from the browser developer console with:

```javascript
localStorage.removeItem("ordvaerk-progress");
location.reload();
```

## Accessibility and browser support

The interface supports keyboard navigation, visible focus states, screen-reader feedback, reduced-motion preferences, and responsive layouts. It is intended for current versions of Chrome, Firefox, Safari, and Edge.

## Content notes

The included exercises are original learning activities informed by common Danish grammar patterns. Review all educational content before using the app in a formal course or publishing substantial modifications.

## License

No open-source license is included yet. Add a license file before inviting others to copy, modify, or redistribute the project.
