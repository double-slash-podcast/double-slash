---
publicationDate: 2022-08-19
status: published
author: Double Slash
categories:
  - Technology
duration: 2983
url: https://chtbl.com/track/79E812/double-slash.ams3.cdn.digitaloceanspaces.com/DS_044_animeCSS.mp3
episodeNumber: 44
episodeType: full
explicit: false
season: 1
title: Les animations avec CSS
subtitle: Comment faire des animations avec CSS et optimiser les performances de vos animations
---
## Dans cet épisode, nous allons expliquer comment faire des animations avec CSS et comment optimiser les performances de vos animations

### Retrouvez la vidéo de l'enregistrement sur [le Youtube de DoubleSlash](https://youtu.be/opO05lQNKYA)


## Animation avec CSS

Tout commence avec un changement d’état d’un élément.
Changement de couleur et de taille pour un bouton par exemple quand je passe dessus avec la souris.

```css
button {
	width: 170px;
	height: 35px;
	background-color: #eee;
}

button:hover {
	width: 200px;
	height: 40px;
	background-color: #ccc;
}
```

### Déclencher les changements d’états

Pour déclencher des animations, on peut utiliser les pseudo classes (focus, hover, etc.), ajouter des classes avec JS et utiliser "IntersectionObserver" pour déclencher l'animation quand l'élément devient visible.

### Transition

L’animation/transition apparait dès que l’on ajoute la propriété “Transition"

Pour déterminer les transitions entre 2 états :

```css
transition: <property> <duration> <timing-function> <delay>;
```

Marche sur quasiment tout : width, height, background, etc..

### Transform

Mais dans l’idéal, il faut utiliser en priorité la propriété Transform. On reviendra sur la raison plus tard.

Transform c'est 20 propriétés de transformation.

```css
transform: scale();
transform: translate()
transform: rotate()
transform: skew()
transform: perspective()
```

Avec transform-origin, on peut créer des mouvements poussés

```css
transform-origin: 0% 50%;
```

### Animation

Passons maintenant aux vraies animations, celle qui peuvent tourner en boucle.

Il est tout à fait possible de faire des animations avec CSS.
Pour cela, il faut utiliser les propriétés animations :

- animation-name
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count
- animation-direction
- animation-fill-mode
- animation-play-state

Évidemment, il y a une écriture raccourcie pour toutes les propriétés :

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

### Keyframes

Mais avant de pouvoir utiliser les propriétés ”animation”, il faut créer une timeline avec @keyframes :

```css
@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}
```

ou

```css
@keyframes mymove {
  0%   {top: 0px;}
  25%  {top: 200px;}
  50%  {top: 100px;}
  75%  {top: 200px;}
  100% {top: 0px;}
}
```

Dans l'ensemble, c'est assez simple.
On peut tout utiliser dans les @keyframes mais attention aux performances !

### Motion Path

3 propriétés qui permettent à un élément de suivre un tracé.

Le tracé a suivre : offset-path

Position de l’élément sur le tracé : offset-distance

La rotation de l’élément sur le tracé : offset-rotate

```css
div {
  offset-path: path('M10 10 H 180 V 180 H 10 Z');
}
```

```css
div {
  animation: myMove 1s;
}

@keyframes myMove {
  0% {
    offset-distance: 0%;
  }
	40% {
		offset-distance: 70%;
	}
  100% {
    offset-distance: 100%;
  }
}
```

**Bientôt supporté par Safari !!**

### FPS

La plupart des appareils actualisent aujourd'hui leurs écrans 60 fois par seconde. S'il y a une animation ou une transition en cours d'exécution, ou si l'utilisateur fait défiler les pages, le navigateur doit faire correspondre le taux de rafraîchissement de l'appareil et mettre en place 1 nouvelle image, ou cadre, pour chacun de ces rafraîchissements d'écran.

Chacune de ces cadres a un budget d'un peu plus de 16 ms (1 seconde / 60 = 16,66 ms). En réalité, cependant, le navigateur a un travail de nettoyage à faire, donc tout votre travail doit être achevé à l'intérieur de 10 ms. Lorsque vous ne respectez pas ce budget, la fréquence d'images baisse et le contenu juge à l'écran. Ceci est souvent appelé Jank, et cela a un impact négatif sur l'expérience de l'utilisateur.

## Bien animer !

Pour commencer, on va parler des étapes de rendu du page web (HTML, CSS).

Cela fonctionne comme un tunnel qui s'appelle pixels-to-screen pipeline :

0 - JavaScript : Trier, ajouter un élément dans le DOM, etc... Dans le cas où c'est JS qui déclenche un changement visuel.

1 - style calculation (calcul du style) : lecture du CSS et détermination des règles basées sur les sélecteurs pour pouvoir les appliquer sur les éléments

2 - Layout (disposition) : Determination de la taille des éléments et placements dans le flux de la page

3 - Paint (peinture( : Les éléments deviennent des pixels. Essentiellement toutes les parties visuelles des éléments. Le dessin est généralement effectué sur plusieurs surfaces, souvent appelées couches.

4 - Composition : assemblage des layers entre eux pour composer la page

**Important**

Les propriétés ne sont pas toutes appliquées aux mêmes étapes.
width et height c'est au layout.
backgroud color c'est au paint.

Chaque étape déclenche les suivantes.

Changer la width d'un élément déclenche un layout > paint > composition.
Donc plus de calcul et donc plus de temps.

Dans l'idéal, il faut éviter de déclencheur du layout et du paint.
Et donc, utiliser des propriétés qui déclenche que de la composition :
**transform et opacity.**

Si vous devez utiliser une propriété qui déclenche la disposition ou la peinture, il est peu probable que vous puissiez rendre l'animation fluide et performante.

[https://csstriggers.com/](https://csstriggers.com/) pour vérifier ce que chaque propriété déclenche.

### will change

Si vous êtes obligé d'utiliser des propriétés autres que transform et opacity, vous pouvez spécifier au navigateur que l'élément va subir des transformations.

```css
body > .sidebar {
  will-change: transform;
}
```

**Attention** : will-change est conçu pour être utilisé en dernier recours afin d'aider à la résolution de problèmes de performance existants. Il ne doit pas être utilisé partout de façon purement préventive.

## Debug

DevTools onglet animation `CMD+P   > ` et performance pour analyser les animations.

## A11y

Il existe un media query qui permet au personne de spécifier qu’ils ne veulent pas d’animation.

Important pour ne pas imposer des mouvements sur l’écran à des personnes qui les refusent.

```css
@media (prefers-reduced-motion: reduce) {}
```

## Les liens

### Articles

- [https://web.dev/rendering-performance/](https://web.dev/rendering-performance/)
- [https://web.dev/animations-guide/](https://web.dev/animations-guide/)
- [https://web.dev/animations-overview/](https://web.dev/animations-overview/)
- [https://web.dev/stick-to-compositor-only-properties-and-manage-layer-count/](https://web.dev/stick-to-compositor-only-properties-and-manage-layer-count/)
- [Web Animation Performance Fundamentals – How to Make Your Pages Look Smooth (freecodecamp.org)](https://www.freecodecamp.org/news/web-animation-performance-fundamentals/)
- [Layers and how to force them — surma.dev (dassur.ma)](https://dassur.ma/things/forcing-layers/)

### Cours

- [https://openclassrooms.com/fr/courses/5919246-creez-des-animations-css-modernes](https://openclassrooms.com/fr/courses/5919246-creez-des-animations-css-modernes)
- [Motion Path : introduction aux animations CSS modernes - Alsacreations](https://www.alsacreations.com/tuto/lire/1807-Motion-Path--introduction-aux-animations-CSS-modernes.html)

### Créer des animations

- [https://animista.net/](https://animista.net/)
- [https://animate.style/](https://animate.style/)


Bonne écoute !


### Podcast présenté par :

- Alexandre Duval [@xlanex6](https://twitter.com/xlanex6)
- Patrick Faramaz [@PatrickFaramaz](https://twitter.com/PatrickFaramaz)
