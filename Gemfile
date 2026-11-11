source "https://rubygems.org"

# The site is built locally and the generated _site/ is pushed to the `master` branch
# (see README.md), so only the gems needed for that build are listed here.
# Jekyll 3.10 is what GitHub Pages uses, and installs on current Ruby versions (3.4 / 4.0).
# All styles live in assets/main.scss; no theme gem is used.
gem "jekyll", "~> 3.10"
gem "kramdown-parser-gfm"
gem "webrick" # needed by `jekyll serve` since Ruby 3.0

group :jekyll_plugins do
  gem "jekyll-feed"
end

# Former default gems that Jekyll 3 still requires but newer Rubies no longer bundle.
gem "base64"
gem "bigdecimal"
gem "csv"
gem "logger"
