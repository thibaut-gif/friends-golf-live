# Brancher GolfCourseAPI

La cle API ne doit jamais etre mise dans GitHub, `app.js` ou `supabase-config.js`.
Elle doit etre stockee comme secret Supabase.

## 1. Ajouter le secret

Dans Supabase, ouvrir le projet `friends-golf-live`, puis :

1. `Edge Functions`
2. `Secrets`
3. Ajouter :
   - name: `GOLFCOURSEAPI_KEY`
   - value: votre cle API GolfCourseAPI

Optionnel si l'URL change :

- name: `GOLFCOURSEAPI_BASE_URL`
- value: `https://api.golfcourseapi.com/v1`

## 2. Deployer la fonction

La fonction a deployer est :

```text
supabase/functions/search-golf-courses/index.ts
```

Elle expose :

```text
https://uzjsdbjalzzoryiuuvez.supabase.co/functions/v1/search-golf-courses?query=chantilly
```

L'application l'appelle automatiquement depuis l'ecran de selection du golf.
Si la fonction n'est pas encore deployee ou si l'API ne repond pas, l'app garde les resultats de demonstration.

## 3. Test rapide apres deploiement

Dans l'app, creer une partie, aller a l'etape `Selectionner le golf`, puis taper au moins deux lettres.

Statuts possibles :

- `Resultats GolfCourseAPI` : l'API fonctionne.
- `Aucun golf trouve dans l'API` : l'API fonctionne mais ne renvoie rien pour cette recherche.
- `API golf indisponible pour le moment` : la fonction ou la cle API n'est pas encore correctement configuree.
