---
publicationDate: 2022-06-08
status: published
author: Double Slash
categories:
  - Technology
duration: 3385
url: https://chtbl.com/track/79E812/double-slash.ams3.cdn.digitaloceanspaces.com/DS_038_ts.mp3
episodeNumber: 38
episodeType: full
explicit: false
season: 1
title: Doit-on utiliser TypeScript ?
subtitle: Doit-on utiliser TypeScript sur nos projets en 2022
---

## Un épisode sur les bases de TypeScript afin de vous convaincre d’utiliser TypeScript dans vos projets

### Retrouvez la vidéo de l'enregistrement sur [le Youtube de DoubleSlash](https://youtu.be/kVdeiE-hod0)

**Précision sur les types et interfaces**
Durant l'épisode, on évoque la différence entre les types et les interfaces. Je dois préciser que l'on peut également faire des objets avec les types.

Les principales différences :
- Les types ne peuvent pas être réimplementés et étendus
- Les interfaces peuvent être réassignées, ce qui provoque un fusion. Elles peuvent être implémentées contrairement aux types.  
Nous vous renvoyons sur cette vidéo explicative : https://youtu.be/sFNQeh5Oc08

## TypeScript c’est quoi exactement ?

En prenant la documentation officielle, TypeScript est un langage de programmation construit par-dessus Javascript et offrant de nouvelles fonctionnalités pour combler les manques.

Créé par Anders Hejlsberg (concepteur du FW .net) pour Microsoft entre 2010 et 2012 (premiere version 0.8 en 2012), dans l'objectif de combler les manques de Javascript. JS est obligatoire pour le browser, seulement pour les gros projet, JS c’est pas simple. Le projet est open-source.

Ce type de technologie est souvent appelé "Superset", un exemple très connu est SASS pour le CSS.

**Un language adoré par les dev Java, C++.**

Nous allons écrire du code TypeScript qui sera ensuite transcompiler en Javascript.

Il a été créé en 2012 mais personnellement, j’ai entendu parler de typescript avec la sortie d’angular 2.

Avant l’utilisation de typescript, j’utilisais Flow ([https://flow.org/](https://flow.org/)) projet FB. Et Babel, si je voulais utiliser des choses non présentes dans JS.
Exemple : les classes.

### Important !
**Le code est toujours compilé en JS. Le browser ne sais pas executer du TS. Pareil pour le coté serveur. Deno, convertie en JS.**

## Pourquoi TypeScript ?

1 - Disposer de type : JavaScript est un language au typage dynamique. Dans les langages à typage dynamique, l'interpréteur attribue aux variables un type lors de l'exécution en fonction de la valeur qu'elles possèdent à ce moment.
Autre exemple : Piège classique, les valeurs des champs de formulaire sont en texte. Pour provoquer des bugs pour les calcules avec des nombres par exemple. TypeScript te prévient en cas d’usage avec les types définis pour les éléments de formulaire.

```
2 + "3"
"23"
2 + "lol"
"2lol"
```
2 - Comme les tests, c’est une façon de contrôler et de valider son code
3 - Autocompletion et vérification des valeurs : Quand un projet devient gros avec beaucoup de fonction et de fichier, il devient difficile de se souvenir des paramètres de fonction, les valeurs, etc.
En gros, avec TypeScript, c’est une sorte de pair programming. TypeScript vient régulièrement te taper sur l’épaule pour te dire : “Yep mon gars, là, ce que tu fais, ce n’est pas bon.”
4 - Travail avec les API. Cela permet de typer les réponses des API par exemple. On définit clairement la réponse et ensuite on peut être certain que notre code fonctionne correctement. [https://medium.com/@wujido20/runtime-types-in-typescript-5f74fc9dc6c4](https://medium.com/@wujido20/runtime-types-in-typescript-5f74fc9dc6c4)

### Principe de base

 • Initialisation
Création du fichier tsconfig.json qui indique comment compiler le code. Avec target, on indique la version de JS. Mini ES5. Max ESNext. [https://www.typescriptlang.org/tsconfig#target](https://www.typescriptlang.org/tsconfig#target)
 • Extension des fichiers en .ts ou .tsx
 • Type/Interface définir les types des variables, paramètres, retour de fonction, etc.
 • Les types c’est pour les définitions simples
 • Les interfaces, c’est une sorte de shape d’objet. On pour aller plus loin et faire de l’héritage, etc..
 • Inférence TypeScript est capable de définir lui-même le type. À partir du moment où une variable est définie, il peut voir automatiquement le type.
 • Generic C’est une sorte de typage dynamique. On détermine à l’usage le type de la valeur. Ça offre plus de souplesse, car avec l’inférence, je ne suis pas obligé de typer. Il devine. Si le premier usage de la fonction envoie une string, alors le type est string.

 Exemple simple :
 ```
 function identity<T>(value: T): T {
  return value;
}

const result = identity<number>(123);
```
Plus poussé :
```
function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]) {
  let result = {} as Pick<T, K>
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key]
    }
  }
  return result
}

const language = {
  name: "TypeScript",
  age: 8,
  extensions: ['ts', 'tsx']
}

const ageAndExtensions = pickObjectKeys(language, ['age', 'extensions'])
```
[https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript](https://www.digitalocean.com/community/tutorials/how-to-use-generics-in-typescript)

 • Type Guard et Narrowing Permet comme avec du code JS, vérifier que la valeur est bien la bonne. Si tu utilises un union avec donc plusieurs types, il faut tester le type avant de l’utiliser.
 ```
 const isArticle = (article: any): article is Article =>
    typeof article === 'object' && article !== null &&
    hasOwnProperty(article, 'title') && typeof article.title === 'string' &&
    hasOwnProperty(article, 'views') in article && typeof article.views === 'number';
```
```
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
```

 • Classes Usage très avancées des classes avec les éléments classiques : private, public, protected, readOnly, etc..
 • Decorator (toujours experimental) utiliser une fonction dans une classe, sorte d’héritage.

### Tips
On peut inclure TS dans un projet JS. Pas obligatoire de faire 100% TS. AllowJS dans la config. Et on peut même utiliser les types à travers JSDoc [https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#type](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html#type)

## Inclure les dépendances dans son projet

De plus en plus de librairies sont écrites avec TS. Donc dans ce cas, les Definitions Types sont dans le package. Exemple: Vue 3 est 100% en TS. Donc les définitions sont générées à la compilation.
Sinon pour les full JS, il faut ajouter un package de type.
Exemple : Lodash est en JS mais un package @type existe
 • [https://www.npmjs.com/package/lodash](https://www.npmjs.com/package/lodash)
 • [https://www.npmjs.com/package/@types/lodash](https://www.npmjs.com/package/@types/lodash
 )

Definitely Typed, l’organisation @types, un repo à la base communautaire et automatisé pour ajouter les types des packages [https://github.com/DefinitelyTyped](https://github.com/DefinitelyTyped)

En dernier recours, il faudra déclarer les type pour un package, si rien n’existe.
Repo pour vérifier les packages [https://www.typescriptlang.org/dt/search](https://www.typescriptlang.org/dt/search)

## Courbe d’apprentissage

Un peu difficile dès que l’on rentre dans du code plus complexe. Notamment sur les types. Parfois on passe du temps à chercher pourquoi il n’accepte pas tel type.
C’est souvent un problème de définition de type un peu trop poussé.

## Liens

- [https://www.typescriptlang.org/cheatsheets](https://www.typescriptlang.org/cheatsheets)


Bonne écoute !



### Podcast présenté par :

- Alexandre Duval [@xlanex6](https://twitter.com/xlanex6)
- Patrick Faramaz [@PatrickFaramaz](https://twitter.com/PatrickFaramaz)
