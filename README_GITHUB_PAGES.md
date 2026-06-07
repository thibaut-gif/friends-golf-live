# Friends Golf Live - publication mobile via GitHub Pages

## Dossiers

- `golf-app-international-maquette/` : dossier de travail de la maquette.
- `docs/` : dossier public a activer dans GitHub Pages.

## Mettre a jour la version publiable

Depuis la racine du projet :

```bash
npm run pages:prepare
npm test
```

## Publier sur GitHub Pages avec le workflow inclus

1. Envoyer le projet sur GitHub.
2. Ouvrir le depot GitHub.
3. Aller dans `Settings` > `Pages`.
4. Dans `Build and deployment`, choisir `GitHub Actions`.
5. Pousser la branche principale sur GitHub.
6. Le workflow `Friends Golf Live Pages` teste la maquette puis publie le dossier `docs/`.

GitHub affichera ensuite une URL du type :

```text
https://<compte>.github.io/<depot>/
```

Ouvrir cette URL sur le telephone permet de visualiser la version mobile.

Alternative sans workflow :

- choisir `Deploy from a branch` ;
- branch : `main` ou la branche utilisee ;
- folder : `/docs`.

## Point important sur le temps reel

GitHub Pages publie des fichiers statiques. Il permet de voir la maquette sur mobile, mais il ne fournit pas de synchronisation temps reel entre plusieurs telephones.

Pour rendre le score live fiable entre plusieurs appareils, il faudra brancher ensuite une base temps reel, par exemple Supabase, avec :

- une table `competitions` ;
- une table `players` ;
- une table `rounds` ;
- une table `scores` ;
- une table `score_events` pour l'historique ;
- des droits par competition et par role.
