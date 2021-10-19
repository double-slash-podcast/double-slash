---
publicationDate: 2021-10-19
status: published
author: Double Slash
categories:
  - Technology
duration: 3456
url: https://chtbl.com/track/79E812/double-slash.ams3.cdn.digitaloceanspaces.com/DS_028_prisma.mp3
episodeNumber: 28
episodeType: full
explicit: false
season: 1
title: Prisma ORM
subtitle: Un épisode "explore" dans lequel Alex nous présente l'ORM Prisma.
---

## Un épisode "explore" dans lequel Alex nous présente l'ORM Prisma

## Prisma ORM

> V2, j’oublie la V1 et je reprends depuis le début !

**Prisma** est un ORM (object-relational mapping) open source écrit en **Rust**. Il est compatible **JavaScript/TypeScript** et **Go**.

Au départ, [Prisma](https://www.prisma.io/) dans sa version 1, était une sorte de générateur d'API. Vous lui donniez une DB et il vous donnait accès à des routes et une API graphQL pour récupérer les data.
Après un virage à 180 degrés, la V2 n'a plus rien a voir avec la V1. Pour la V2, **Prisma** est désormais un ORM.

Un **ORM** est un système qui vous permet de gérer les data d'une base de données en manipulant des objets. Les objets représentent les data et vous n'écrivez normalement jamais de query vers la base. Par exemple, pour une table "user", vous avez accès à un objet `User` et vous interrogez la base via cet objet.

Il gère plusieurs systèmes de base de données : Postgres / Mysql / SQlite / SQLServer / MongoDB

**Prisma** est présenté sou 4 modules : CLIENT / MIGRATE / STUDIO / DATA PLATFORM ( early stage )

### Client

Cette partie gère:

- la connexion avec les DB.
- le schéma des modèles
- la récupération des data et des queries

### Migrate

Cette partie gère les migrations. Pour mettre à jour une DB en prod quand vous modifiez les modèles en développement.

### Studio

Cette partie offre une interface de visualisation dans le style PHPMyAdmin, mais en beaucoup mieux !

### Data Platform

Un service en early stage pour gérer un DB via une interface cloud.

## Outil recommandé

- [syncinc.so](https://syncinc.so)

### Podcast présenté par :

- Alexandre Duval [@xlanex6](https://twitter.com/xlanex6)
- Patrick Faramaz [@PatrickFaramaz](https://twitter.com/PatrickFaramaz)
