---
publicationDate: 2020-08-01
status: published
author: Double Slash
categories:
  - Technology
duration: 3611
url: https://chtbl.com/track/79E812/double-slash.ams3.cdn.digitaloceanspaces.com/DS_009_jquery.mp3
episodeNumber: 9
episodeType: full
explicit: false
season: 1
title: jQuery en 2020
subtitle: Faut-il encore utiliser jQuery en 2020 ? Pas de réponse absolue et tranchée. On pèse le pour et le contre, puis on vous livre notre avis.
---

Faut-il encore utiliser jQuery en 2020 ? Pas de réponse absolue et tranchée. On pèse le pour et le contre, puis on vous livre notre avis.

Avec l’évolution des navigateurs, l’uniformisation et la standardisation de JavaScript. Est ce qu’il est encore vraiment nécessaire d’embarquer et d’utiliser jQuery sur nos sites web ?

**Correction** : Wordpress ne charge pas jQuery par défaut. Il est disponible, mais il faut l'ajouter dans le code du thème pour l'utiliser en front.

[listes des scripts par défaut dans wordpress](https://developer.wordpress.org/reference/functions/wp_enqueue_script/#default-scripts-and-js-libraries-included-and-registered-by-wordpress)

**Les principales Librairies créées entre 2004 et 2010**

[Dojo](https://fr.wikipedia.org/wiki/Dojo_Toolkit) : 2004
[Prototype](http://prototypejs.org/) : 2005
[jQuery](https://jquery.com/) : 2006
[MooTools](https://mootools.net/) : 2006
[script.aculo.us](http://script.aculo.us/) : 2010

**Supprimer jQuery sur un code existant**

Un article de github sur la suppression de JQUERY sur GitHub en 2018.
[https://github.blog/2018-09-06-removing-jquery-from-github-frontend/](https://github.blog/2018-09-06-removing-jquery-from-github-frontend/)

**Remplacer jQuery par une autre librarie (joke)**

[http://vanilla-js.com/](http://vanilla-js.com/)

## Réponse de la communauté

Les réponses de la question posée sur [Linkedin](https://www.linkedin.com/posts/alexduval71_jquery-et-2020-ami-ou-ennemi-perso-si-activity-6688330120941314048-JB8a) :

- Dépendance à Wordpress. Sachant que wp utilise encore la version 1
- Dépendance à bootstrap
- Utilisé par habitude
- Toujours enseigné dans certaines formations
- Encore bien utilisé dans certaine entreprise

Notes perso :

- Dans l'idéal, utiliser un mix de vanilla et de jQuery si il est chargé par défaut (WP)
- JQuery est plus lent que vanilla JS
- En règle générale, il faut éviter les manipulations du DOM. Utiliser une lib type Vue JS ou React qui change uniquement les éléments qui ont changé.
- Éviter les animations en JS.

Petit sondage sur [Twitter](https://mobile.twitter.com/PatrickFaramaz/status/1281517173396189184) :

jQuery, est-ce que vous en avez encore besoin dans vos projets en 2020 ?
27 votes :

- oui 15%
- non 66%
- ça dépend 18%

## Liste de Liens:

**Comparaison entre méthodes jQuery et pure JS :**

- [http://youmightnotneedjquery.com/](http://youmightnotneedjquery.com/)
- [https://github.com/pablorgarcia/vanilla-js-vs-jquery](https://github.com/pablorgarcia/vanilla-js-vs-jquery)

**Article sur la fragmentation des version de jQuery :**

- [https://love2dev.com/blog/jquery-obsolete/](https://love2dev.com/blog/jquery-obsolete/)

**Stats sur jQuery et Bootstrap :**

- [https://w3techs.com/technologies/comparison/js-bootstrap,js-jquery](https://w3techs.com/technologies/comparison/js-bootstrap,js-jquery)

### Podcast présenté par :

- Alexandre Duval [@xlanex6](https://twitter.com/xlanex6)
- Patrick Faramaz [@PatrickFaramaz](https://twitter.com/PatrickFaramaz)
