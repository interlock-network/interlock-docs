- [View Interlock Whitepaper](https://docs.interlock.network/token/whitepaper.html)
- [Interlock Homepage](https://interlock.network)

# Building locally

This site uses [Vitepress](https://vitepress.vuejs.org/) for documentation.

First, clone this repo. Then run:
```
$ yarn install
$ yarn docs:dev
```

You may now view the site locally at `http://localhost:3000/`

# Authoring content

Modify `.md` files in `docs/` directory to update content

# Updating navigation links (sidebar)

Modify `docs/.vitepress/config.js` to update navigation links and theme settings

# Deployment

Site is automatically deployed to github pages using github actions file per commit on `master` branch.
