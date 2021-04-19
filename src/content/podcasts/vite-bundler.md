---
publicationDate: 2021-04-19
status: published
author: Double Slash
categories:
  - Technology
duration: 2799
url: https://chtbl.com/track/79E812/double-slash.ams3.cdn.digitaloceanspaces.com/DS_022_bundler.mp3
episodeNumber: 22
episodeType: full
explicit: false
season: 1
title: Vite.., un bundler !
subtitle: Un épisode dédié au bundler. On passe en revue les différents bundlers utilisés et pourquoi les nouveaux comme Vite, changent les règles. 
---

Les bundlers (générateur de bundle), on les utilise au quotidien. Ils sont indispensables dans les outils des développeurs front et ils ont beaucoup évolué.
Nous passons en revue les principaux bundlers les plus utilisés et surtout nous parlons des nouvelles générations de bundler.


## Pourquoi on utilise des bundlers :

- Limiter les requêtes, minifier et éviter de polluer le scope global (window).
- Avoir un code plus propre découpé en module. 
- Et une réutilisation du code.

Avant les bundlers:

- Immediately Invoked Function Expression (IIFE).

```js
(function foo() {
	return bar;
})();
```

- Plugin jQuery qui s'appelait à travers jQuery

```js
(function ( $ ) {
 
    $.fn.greenify = function() {
        this.css( "color", "green" );
        return this;
    };
 
}( jQuery ));
```

## Les principaux types de modules :


- CommonJS: 
```js 
require('..');

module.exports = ...;
```


- AMD (Asynchronous Module Definition):

```js
define(['dep1', 'dep2'], function (dep1, dep2) {
    //Define the module value by returning a value.
    return function () {};
});
```

- UMD (Universal Module Definition):

```js
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"));
    } else {
        root.Requester = factory(root.$, root._);
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = { // ... };

    return Requester;
})); 
```

- ESM (EcmaScript Modules): compatibilité 92% [https://caniuse.com/es6-module](https://caniuse.com/es6-module)

```js
import toto from ...;

export default ...;
```


- Browserify (js + plugin pour autre fichier) première release en 2011. Uniquement JS. Permettait de créer des modules avec require/module.exports: [http://browserify.org/](http://browserify.org/)
- Brunch (js, css, etc..) simple, peu de config, skeleton: [https://brunch.io/](https://brunch.io/)
- Webpack (js, css, ...): [https://webpack.js.org/](https://webpack.js.org/)
- Rollup: Top pour faire des packages. Capable de compiler en differents types (CommonJs, AMD, IIFE) [https://rollupjs.org/guide/en/](https://rollupjs.org/guide/en/)


## Nouvelle génération de bundler

- Snowpack: En mode dev, pas de bundle. Recharge uniquement le fichier modifié. En production, par défaut, il fait une optimisation optionnelle, mais on est toujours sur du ESM. On peut ajouter des plugins (webpack, Rollup) pour faire un seul fichier. [https://www.snowpack.dev/](https://www.snowpack.dev/)
- Rome: [https://github.com/rome/tools](https://github.com/rome/tools)
- Vite: Fais beaucoup de choses "out of the box”. Le mode dev est en ESM. Divise en 2 modules: le code source de l'app et les dépendances. Il prébundle les dépendances, car elles changent peu lors du dev. Le code source est en ESM. Fais un bundle (sans ESBuild mais avec Rollup) pour la production pour le moment. [https://vitejs.dev/](https://vitejs.dev/)
- ESBuild (Go) vraiment jeune pas encore prêt pour la production. Par contre extrêmement rapide et très prometteur. [https://esbuild.github.io/](https://esbuild.github.io/)
- WMR: [https://github.com/preactjs/wmr](https://github.com/preactjs/wmr)


### Podcast présenté par :

- Alexandre Duval [@xlanex6](https://twitter.com/xlanex6)
- Patrick Faramaz [@PatrickFaramaz](https://twitter.com/PatrickFaramaz)
