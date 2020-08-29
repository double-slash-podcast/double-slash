---
publicationDate: 2020-08-31
status: published
author: Double Slash
categories:
  - Technology
duration: 4392
url: https://chtbl.com/track/79E812/double-slash.ams3.cdn.digitaloceanspaces.com/DS_011_pwa.mp3
episodeNumber: 11
episodeType: full
explicit: false
season: 1
title: Les Progressive Web Apps avec Stéphanie Alix
subtitle: Dans cet épisode, nous allons faire le point sur les Progressive Web App en 2020. Définir ce qu'est une PWA, les principales features d'une PWA. Pourquoi choisir une PWA au lieu d'une application native. Et revenir sur les blocages de Safari par rapport aux PWA.
---

Dans cet épisode assez technique, nous allons faire le point sur les Progressive Web App en 2020. Définir ce qu'est une PWA, les principales features d'une PWA. Puis, pourquoi choisir une PWA au lieu d'une application native. Et enfin, revenir sur les blocages de Safari par rapport aux PWA.

Notre invitée pour l'épisode :  
  Stéphanie Alix : [https://stephaniealix.com/](https://stephaniealix.com/)
  **Développeuse Web et spécialisée dans les PWA**



## Principales fonctionnalités d'une PWA :

- webmanifest pour l'apparence (icônes, couleurs, nom..)
- ajout d'un raccourci avec "icône" dans les apps du device
- fonctionnement dans une fenêtre dédiée (fullscreen, stand-alone, minimal-ui) comme une application native.
- Auto-update: juste rafraichir la page après un déploiement
- Notifications push (application ouverte et fermée)
- service worker (gestion du cache, etc..)
- Cache/offline
- Background sync


### Minimum pour être une PWA :

- Être en HTTPS
- Avoir un Service worker
- Avoir web manifest avec au moins les icônes
- iOS >= 11.3 et Chrome >= 71 / 11.3 mars 2018 et chrome 71 décembre 2018

### Prise en charge des fonctionnalités par les navigateurs :

- Service workers browser : [https://caniuse.com/#search=service workers](https://caniuse.com/#search=service%20workers) 
- Web App Manifest : [https://caniuse.com/#search=Web App Manifest](https://caniuse.com/#search=Web%20App%20Manifest)
- Web Notification : [https://caniuse.com/#search=web notification](https://caniuse.com/#search=web%20notification)


## Pourquoi une PWA et pas une app native ?

- Plus léger qu'une application mobile
- Plus accessibles en mauvaise connection grâce aux services workers
- Pas besoin de passer par l'App Store et pas obligé de l'installer
- Multiplateforme: 1 seul code pour toutes les plateformes
- Peut être indexée par Google
- Features natives de plus en plus disponibles: Web Share API, camera access. Voir le [Projet Fugu](https://web.dev/fugu-status/) pour ajouter des fonctionnalités natives pour chromium
- Possibilité de remplacer/intégré dans des applications natives si besoin (web view, pwabuilder, TWA)
- Augmentation du nombre de pages vues, d'utilisateurs qui reviennent (prouvé avec des PWA connues: Pinterest, Starbucks, Twitter..)
- PWA et app natives peuvent aussi être complémentaires


## PWA VS Safari

Les blocages de la part de safari :

- Notifications (obligé de passer par le système Apple)
- Prompt "add to Home" (obligé de passer par le menu "Sur l'écran d'accueil")
- WebManifest icônes (pas bloquant)
- cache capacity 50MB (pas bloquant)
- Background sync 
- IOS purge le cache (indexDB, localstorage) et maintenant iOS [purge aussi les cookies](https://tracedock.com/blog/2019/11/29/24hours-cookies-impact/) après un jour ou une semaine selon la version webkit..

**Note spécifique sur IOS :**
Apple interdit de développer un navigateur pour IOS avec un moteur de rendu différent de WebKit. Donc les navigateurs disponibles sur IOS sont en réalité des applications composées de WebViews WebKit. 
Ils n'ont donc pas les fonctionnalités PWA (ex: impossible d'ajouter la PWA à l'écran d'accueil via iOS chrome ou d'utiliser les Services Workers)


### Podcast présenté par :

- Alexandre Duval [@xlanex6](https://twitter.com/xlanex6)
- Patrick Faramaz [@PatrickFaramaz](https://twitter.com/PatrickFaramaz)
