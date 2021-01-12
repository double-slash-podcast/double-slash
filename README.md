![double-slash.png](double-slash.png)

## :studio_microphone: Last episodes
<!-- BLOG-POST-LIST:START -->
- [Alpine JS, petit mais costaud !](https://slash-podcast.fr/podcasts/javascript-alpine-js/)
- [Snipcart avec François Lanthier Nadeau](https://slash-podcast.fr/podcasts/e-commerce-snipcart/)
- [Azure Static Web Apps avec Wassim Chegham](https://slash-podcast.fr/podcasts/azure-static-web-app/)
- [Épisode spécial news avec React 17, Webpack 5, Next JS 10, Gatsby...](https://slash-podcast.fr/podcasts/news-octobre-2020/)
- [Les plateformes e-commerce en 2020 avec Aurélien Lavorel](https://slash-podcast.fr/podcasts/e-commerce-state-2020/)
<!-- BLOG-POST-LIST:END -->

# Double Slash Podcast Website

Website developed with [Gatsby JS](https://www.gatsbyjs.org/).
Hosted on [Netlify](https://www.netlify.com/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/a77f591b-7350-47a5-9864-aaa68996e9bf/deploy-status)](https://app.netlify.com/sites/goofy-mccarthy-79e233/deploys)

## Libraries used

- [Preact JS](https://preactjs.com/) / [React JS](https://fr.reactjs.org/) for UI.
- [plyr](https://plyr.io/) for the player
- [prismjs](https://prismjs.com/) for the snippets code
- [postcss](https://postcss.org/) for compile the css

## How to add a new podcast ?

Add a new .md file in src/content/podcasts
Add in this file, the required informations in the frontmatter.
Follow the example :

### Frontmatter example :

```md
---
title: Présentation de la JAMStack
subtitle: Présentation de la JAMStack, avantages et concepts
publicationDate: 2020-03-25
status: published
url: https://double-slash.ams3.digitaloceanspaces.com/DS_001_jamstack.mp3
author: Double slash
duration: 1000
season: 1
episodeNumber: 2
episodeType: full
explicit: false
categories:
  - Technology
---

bla bla description
```

_Specific frontmatter values_

duration: in secondes

## Repository podcast

Informations for all the podcast platforms.

Update values in src/content/repository/data.yml

## Authors infos

Informations for the authors.

Update values in src/content/authors/

## Pages

Update and add pages in src/content/pages/
