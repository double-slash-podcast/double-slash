![double-slash.png](double-slash.png)

## :studio_microphone: Last episodes
<!-- BLOG-POST-LIST:START -->
- [Vite.., un bundler !](https://slash-podcast.fr/podcasts/vite-bundler/)
- [Strapi, le CMS headless open source 100% JavaScript avec Jim Laurie](https://slash-podcast.fr/podcasts/strapi/)
- [Fastify, le framework rapide pour Node JS avec Vincent Le Goff](https://slash-podcast.fr/podcasts/fastify-node-js-open-source/)
- [Jamstatic fr, Forestry.io et Tina CMS avec Frank Taillandier](https://slash-podcast.fr/podcasts/jamstatic-fr-forestry/)
- [Alpine JS, petit mais costaud !](https://slash-podcast.fr/podcasts/javascript-alpine-js/)
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
