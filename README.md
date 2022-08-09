- [View Interlock Whitepaper](https://interlock-network.github.io/interlock-whitepaper/)
- [Interlock Homepage](https://interlock.network)

# Building locally

This site uses [Vitepress](https://vitepress.vuejs.org/) for documentation.

First, clone this repo. Then run:
```
$ yarn install
$ yarn docs:dev
```

You may now view the site locally at `http://localhost:3000/interlock-whitepaper/`

# Authoring content

Modify `.md` files in `docs/` directory to update content

# Deployment

Site is automatically deployed to github pages using github actions file per commit on `master` branch.