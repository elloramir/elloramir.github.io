### Important note
This project is just for fun and features the code style I like most, so don't expect to see common design choices from other React projects. I am constantly trying to solve problems by bringing my creativity and always trying to create new ways to solve problems. I hope you enjoy it! 😄

### How it's built

No build step. `index.html` loads [Reactopus](https://github.com/elloramir/reactopus)'s runtime (`reactopus.min.js`), which parses, transpiles, and runs `src/index.jsx` (and everything it imports) directly in the browser. The whole repo root is the site - what you see on disk is exactly what gets deployed.

To run it locally, serve the repo root with any static file server (opening `index.html` directly via `file://` won't work - the module loader needs `fetch()` over `http(s)://`), e.g.:

```
python3 -m http.server
```

To update the runtime itself, rebuild `reactopus.min.js` in the [reactopus](https://github.com/elloramir/reactopus) repo and copy it here.
