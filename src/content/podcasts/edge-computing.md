---
publicationDate: 2022-07-13
status: published
author: Double Slash
categories:
  - Technology
duration: 2571
url: https://chtbl.com/track/79E812/double-slash.ams3.cdn.digitaloceanspaces.com/DS_041_edge.mp3
episodeNumber: 41
episodeType: full
explicit: false
season: 1
title: Edge computing, le serverless à la sauce CDN
subtitle: Edge computing, la simplicité du serverless et la rapidité du CDN.
---

## Dans cet épisode nous allons vous expliquer les grands principes du Edge Computing, son fonctionnement et son utilisation.

### Retrouvez la vidéo de l'enregistrement sur [le Youtube de DoubleSlash](https://youtu.be/sy-cV7KzU6E)

## Le serverless

Un service serverless est un service que vous appelez, qui va exécuter le code qui lui est dédié (que vous avez écrit) et renvoyer une réponse.
Vous le payez a l'utilisation, souvent en nombre de requête et durée de processing.
Cela permet de ne pas posséder de serveur et de la gestion qui va avec.
Cependant, lorsque vous créez une fonction serverless, vous sélectionnez une zone géographique. Si vous êtes en France, vous allez privilégier les lieux plus proches de vos internautes.
Mais dans le cas, où votre site est international et qu'un visiteur se trouve loin de la France.
Le temps de réponse s'allonge et la latence s'installe.
Pour une poignée de fonction, cela peut éventuellement passer, mais si toute votre logique, voir votre site repose sur du serverless. Cela devient problématique pour les internautes loin de votre zone de serveur.
Évidemment, il est possible de multiplier les serveurs pour servir en fonction du lieu géographique, mais cela ajoute une complexité que vous n'avez pas forcément envie de gérer.

## Les CDN

Un serveur CDN (Content Delivery Network) fait partie d'un réseau réparti à travers la planète. Quand on utilise un CDN, c'est généralement pour des éléments statiques: Images, scripts, fichiers.
Le réseau va automatiquement sélectionner le serveur le plus proche du visiteur pour réduire le temps de réponse.
Pour une personne en Californie, les éléments statiques proviendront d'un serveur sur la cote Ouest des US. Pour une personne en Allemagne, c'est un serveur allemand qui répondra pour les éléments statiques.
Cela marche parfaitement, mais uniquement pour des fichiers. Pas de logique, pas de traitement.


## Les edges functions

Les edges functions, sont des services serverless qui agissent comme des serveurs CDN.
Cela permet d'effectuer des traitements au plus proche des internautes.
Il y a différent service disponible. Ils utilisent des runtimes différentes. C'est-à-dire que l'on ne retrouve pas forcément du Node.JS pour faire tourner JavaScript.
Cloudflare, fait tourner le moteur V8 par exemple. Le même que Chrome ou Node.JS. Netlify a basé ses fonctions edge sur Deno.
Cela permet d'avoir des temps de réponse plus rapide, car le cold start est ultra court par rapport à un serveur Node.JS.


## La suite

Au-delà de faire des traitements quand on les appelle. Les edges functions sont capable de faire beaucoup plus.
Les Frameworks sont en train d'évoluer et de s'adapter à cette nouvelle technologie.
On peut citer, Nuxt 3 qui est capable de tourner sur des Cloudflare Workers. Oui vous avez bien lu, une application complète qui tourne sur un workers. Et donc, une application toujours générée au plus près du visiteur.
Fresh, un nouveau Framework, est également pensé pour tourner sur du edge.
Bref, le futur est en marche et il semble prometteur.





### Les liens

- [Netlify Edge function](https://www.netlify.com/blog/deep-dive-into-netlify-edge-functions/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/learning/how-workers-works/)



Bonne écoute !



### Podcast présenté par :

- Alexandre Duval [@xlanex6](https://twitter.com/xlanex6)
- Patrick Faramaz [@PatrickFaramaz](https://twitter.com/PatrickFaramaz)
