---
publicationDate: 2020-08-21
status: published
author: Double Slash
categories:
  - Technology
duration: 2600
url: https://double-slash.ams3.cdn.digitaloceanspaces.com/DS_010_pair_coding.mp3
episodeNumber: 10
episodeType: full
explicit: false
season: 1
title: Live Share pour Visual Studio Code et des news
subtitle: Un retour sur l'utilisation de l'extension Live Share pour Visual Studio Code. Une extension qui permet de faire du pair programming à distance. Nous revenons sur quelques actualités concernant les outils web diffusés durant l'été.
---

Dans cet épisode, nous faisons un retour sur l'utilisation de l'extension Live Share pour Visual Studio Code. Une extension qui permet de faire du pair programming à distance. 
Nous revenons sur quelques actualités concernant les outils web diffusés durant l'été. Notamment la sortie de WordPress 5.5, les évolutions de Next et Nuxt sur la génération de site statique. Petite découverte également, avec Stormkit, un service d'hébergement équivalent à Netlify.


[Live Share Extension Pack](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) pour VScode.

## Les news de l'épisode

### Worpress passe en version 5.5 :

- Mise à jour automatique des plugins et des thèmes
- plan de site XML en natif
- lazy loading des images
- Améliorations de gutenberg (A11y)
- Block Directory. Installer et trouver facilement un bloc pour gutenberg.

En tout, 165 améliorations, 310 correctifs de bugs.

### Incremental build pour Nuxt et Next :

#### Nuxt
Avec la version 2.14 sortie fin juillet, la commande ```nuxt generate``` ne lance pas de build webpack si le code n'a pas changé, mais génère juste les nouvelles pages statiques. Un gros gain de vitesse pour générer un site statique.

Article de blog de [Nuxt version 2.14](https://nuxtjs.org/blog/nuxt-static-improvements)


#### Next

Next propose également l'Incremental Static Generation. Comme nuxt, il ajoute une page de contenu sans faire un build complet si le code n'a pas changé.
Mais avec la version 9.5, next propose l'Incremental Static Re-generation.
Une mise à jour du contenu lors du rendu via un paramètre (revalidate: 1). Plus besoin de regénérer le site. Supporté uniquement par Vercel pour le moment.

[Next version 9.5](https://nextjs.org/blog/next-9-5#stable-incremental-static-regeneration)

#### StormKit

Un service équivalent à Netlify pour déployer vos sites statique ou SPA automatiquement. Par contre, c'est un service européen (Suisse). Ils utilisent AWS avec des serveurs à Francfort.

[Stormkit](https://www.stormkit.io/)

### Podcast présenté par :

- Alexandre Duval [@xlanex6](https://twitter.com/xlanex6)
- Patrick Faramaz [@PatrickFaramaz](https://twitter.com/PatrickFaramaz)
