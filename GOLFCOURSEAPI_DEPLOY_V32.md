# Brancher la vraie API golf

La cle API ne doit pas etre mise dans `app.js` ni dans GitHub Pages.
Elle doit etre stockee comme secret Supabase.

## 1. Creer le secret

Dans Supabase :

1. Project Settings
2. Edge Functions
3. Secrets
4. Ajouter :

Nom :

```text
GOLFCOURSEAPI_KEY
```

Valeur :

```text
Votre cle API GolfCourseAPI
```

Optionnel, si votre fournisseur donne une URL differente :

```text
GOLFCOURSEAPI_BASE_URL
```

Valeur par defaut utilisee par l'app :

```text
https://api.golfcourseapi.com/v1
```

## 2. Deployer la fonction

Dans Supabase > Edge Functions, creer ou remplacer la fonction :

```text
search-golf-courses
```

avec le code du fichier :

```text
supabase/functions/search-golf-courses/index.ts
```

## 3. Verifier la configuration de l'app

Le fichier `supabase-config.js` doit contenir :

```js
golfSearchFunction: "search-golf-courses"
```

## 4. Tester

Dans l'app :

1. Creer une partie
2. Etape parcours
3. Cliquer sur `Utiliser ma position`
4. Autoriser la localisation
5. Ou taper le nom d'un golf dans le champ de recherche

La fonction renvoie les parcours avec les tees, slope/rating, carte de score ou trous si l'API les fournit.
