# quantum-site

Quantum Computing site: a first page of topics, with a visual map of how they connect to come later.
Plain HTML, no build step. Published at https://abduloo7454.github.io/Quantum/

## Edit topics

All topics live in `topics.js`. Each topic has an `id`, a `title`, a short `summary`,
a `related` list of other topic ids, and a `page` (empty until the topic has its own page).
The first page and the future map both read this file.

## Preview (run on your Mac)

```bash
cd "/Users/abdullahabdullah/Documents/Personel Website/quantum-site"
python3 -m http.server 8002
# then open http://localhost:8002
```
