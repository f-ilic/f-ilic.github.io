# f-ilic.github.io

Personal website, built with [Jekyll](https://jekyllrb.com/) (minima theme) and served by GitHub Pages.

## Branches

| Branch    | Contents                                              |
| --------- | ----------------------------------------------------- |
| `sources` | Jekyll source (this README, layouts, pages, assets).  |
| `master`  | The generated static site that GitHub Pages serves.   |

Develop on `sources` (or a branch off it). `master` only ever receives build output.

## Develop

Requires Ruby (any current version, incl. 3.4 / 4.0) and Bundler.

```
bundle install
bundle exec jekyll serve        # http://localhost:4000, rebuilds on change
```

## Build & deploy

```
bundle exec jekyll build        # writes the site to _site/
```

`_site/` is a checkout of the `master` branch (a nested git repo, ignored by this one).
Review the result, then commit and push from inside `_site/`:

```
cd _site
git add -A
git commit -m "Update site"
git push origin master
```

First-time setup of `_site/`: `git clone -b master git@github.com:f-ilic/f-ilic.github.io.git _site`,
then run the build (Jekyll keeps the `.git` folder inside `_site/`).

## Notes

- The contact email shown on the site is `email` in `_config.yml`.
- All styling is in `assets/main.scss` (no theme gem). Colours are the tokens at its top (`--accent` etc.), each with a light and a dark value.
- The GitHub repository must be **public** for GitHub Pages to serve it on a free plan.
