---
publicationDate: 2021-06-02
status: published
author: Double Slash
categories:
  - Technology
duration: 2681
url: https://chtbl.com/track/79E812/double-slash.ams3.cdn.digitaloceanspaces.com/DS_024_audit.mp3
episodeNumber: 24
episodeType: full
explicit: false
season: 1
title: Audit des Google core web vitals
subtitle: Comment faire un audit des core web vitals en 2021 et comment améliorer le score d’un site sur chaque critère.
---

En juin 2021, Google introduit de nouveaux indicateurs de performance pour les sites web. Ils annoncent qu'ils sont désormais pris en compte dans les critères pour le classement dans le résultat de recherches.

On constate une panique générale des propriétaires de site web alors que Google avait prévenu depuis un moment que la vitesse de chargement serait de plus en plus prise en compte.

Si vous êtes propriétaire d'un site WordPress créé avec un builder, vous pouvez vous inquiéter ! Mais attention, cela peut toucher tous les sites. N'oubliez jamais, rien n'est automatique et votre site sera rapide uniquement si vous faites en sorte qu'il le soit !

Dans cet épisode, nous détaillons les 3 indicateurs et comment améliorer le score d’un site sur chaque critère :

- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## 1 - Largest Contentful Paint (LCP)

Moins de 2.5 secs pour charger le plus gros élément visible dans le viewport.

Une image, une image dans un svg, une vidéo, élément avec background-image, élément avec du texte.
Pour la majorité des sites, c'est une image (hero image)

Pour trouver l'élément, Dev Tools (chrome) > Preformance (run) > dans la timeline "Timing" trouver le bloc "LCP"

### Serveur

- [ ]  optimiser la réponse du serveur (cache, code..)

### Images

- [ ]  les images doivent être responsive (afficher différentes images en fonction de la largeur du device).
- [ ]  limiter les formats des images, notamment pour les grands formats
- [ ]  réduire le poids des images et utiliser webp si possible
- [ ]  utiliser loading sur les images pour différer le chargement

### Fonts

- [ ]  limiter et optimiser les polices
- [ ]  utiliser "font-display: swap" et avoir des polices de fallback

### Scripts tiers

- [ ]  limiter les scripts tiers (GA, etc..)

### optimisations

- [ ]  réduire le poids des fichiers JS
- [ ]  réduire le poids des fichiers CSS
- [ ]  supprimer le CSS inutilisé
- [ ]  utiliser la technique du critical CSS
- [ ]  defer chargement du CSS si possible. Pour les éléments non visibles.

```
for(...)
var link = document.createElement('link');
link.href = ...
link.type = "text/css"
...
document.getElementsByTagName('head')[0].appendChild(link)
```

- [ ]  async ou defer sur les scripts non nécessaires au chargement

### Bonus

- [ ]  utiliser les preconnect
- [ ]  preload les éléments importants (image hero, fonts)

## 2 - First Input Delay (FID)

Le temps pour que la page soit utilisable (clique sur un lien ou un bouton par exemple)
Principale coupable, les fichiers JS. Le poids et le temps de parsing.

- [ ]  réduire la taille des fichiers JS

Pour limiter le temps de parsing des fichiers.

- [ ]  limiter les scripts tiers (GA, etc..)

Pour limiter les requêtes et le temps de parsing des fichiers.

## 3 - Cumulative Layout Shift (CLS)

Dev Tools (chrome) > Performance (run) > Dans timeline "experience", trouver le bloc "Layout Shift"

Stabilité des éléments dans la page. Insertions de pub, de bannière ou une hydratation qui est longue peut décaler le contenu. Attention aux images qui peuvent décaler le contenu une fois chargé.

- [ ]  définir la taille des images et des vidéos. (16:9, height * 16/9)

```
<style>
  img {
    width: 100%;
    height: auto;
	// aspect-ratio: 1/1;
    aspect-ratio: attr(width) / attr(height);
  }
</style>
<img src="hero_image.jpg" alt="" width="500" height="500">

```

- [ ]  ne pas insérer des éléments entre d'autres éléments au chargement de la page (pub, banner)

Réserver l'espace pour les éléments dynamiques, utiliser des skeletons pour les images (bloc bg gris par exemple)

- [ ]  définir la place pour les éléments "embed" (pub, vidéo, etc..)


### Les liens de l'épisode :

- [Un hack plutôt efficace](https://www.devisedlabs.com/blog/largest-contentful-paint-lcp-hack)
- [https://web.dev/vitals/](https://web.dev/vitals/)
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=fr)
- [https://gtmetrix.com/](https://gtmetrix.com/)
- [Ligthouse](https://developers.google.com/web/tools/lighthouse)

### Podcast présenté par :

- Alexandre Duval [@xlanex6](https://twitter.com/xlanex6)
- Patrick Faramaz [@PatrickFaramaz](https://twitter.com/PatrickFaramaz)
