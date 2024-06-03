<div align="center">

[![Firefox Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Farbitrarily%2Fstartpage-addons%2Fmaster%2Ffirefox%2Fmanifest.json&query=%24.version&logo=firefox&label=Firefox%20Version)](https://addons.mozilla.org/en-US/firefox/addon/startyparty/)
[![Chrome Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Farbitrarily%2Fstartpage-addons%2Fmaster%2Fchrome%2Fmanifest.json&query=%24.version&logo=googlechrome&label=Chrome%20Version)](https://chromewebstore.google.com/detail/startyparty/niboekcakmfpliephbcjgoepgnffalme)
![Last Commit](https://img.shields.io/github/last-commit/arbitrarily/startpage-addons?display_timestamp=committer)
![Startpage Webstie](https://img.shields.io/website?url=https%3A%2F%2Fstartyparty.dev%2F)
</div>

# [Startyparty](https://startyparty.dev/)

![preview](https://startyparty.nyc3.cdn.digitaloceanspaces.com/screenshots/screenshot.png)

## The start of it all. Your new front page for the web

Welcome to your new front page for the web. Tired of social media? Sick of excessively curated/sponsored content and newsfeeds? News/media/tech junkie? Have I got the solution for you - startyparty. The power users' launchpad.

This has been my passion project for several years; created a home or start page that aggregates all the best articles, news, toots, podcasts, videos, games and more content online into a single launcher style single page application. Every growing and evolving, always up to date.

Paid tier is a one time payment granting the user account based access to the full site, more features, more content, personalization, history, and more. Full marketing site to come.

This is a privacy focused product. No subscriptions, no ads, no tracking, no third party analytics, no spam, for the people by the person who cares too much about this stuff..

## Links

- [Homepage](https://startyparty.dev/)
- [Marketing](https://marketing.startyparty.dev/)
- [Github](https://github.com/arbitrarily/startyparty-addons)
- [Discord](https://discord.gg/32HjYnctSg)
- [Privacy Policy](https://startyparty.dev/privacy)
- [Terms of Service](https://startyparty.dev/terms)

## local development

### installing dependencies

```bash
npm install
```

#### firefox

```bash
npm run start:firefox
```

This will start a new firefox instance with the addon installed and reload the addon on file changes.

#### Chrome

You have to load the "chrome" folder as an unpacked extension in chrome.

## Building

#### Firefox

```bash
npm run build:firefox
```

#### Chrome

```bash
npm run build:chrome
```

## Linting

#### Firefox

```bash
npm run lint:firefox
```

#### Chrome -- It will lint it as a firefox addon so it will show some errors

```bash
npm run lint:chrome
```

### firefox addon

[https://addons.mozilla.org/en-US/firefox/addon/startyparty/](https://addons.mozilla.org/en-US/firefox/addon/startyparty/)

### chrome addon

[https://chromewebstore.google.com/detail/startyparty/niboekcakmfpliephbcjgoepgnffalme](https://chromewebstore.google.com/detail/startyparty/niboekcakmfpliephbcjgoepgnffalme)
