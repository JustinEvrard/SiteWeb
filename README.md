# SiteWeb — Portfolio de Justin Evrard

Portfolio personnel présentant mon CV, mes compétences techniques et mes projets.

## Stack

- HTML5 / CSS3 / JavaScript vanilla (aucun framework, aucun build requis)
- Mode sombre / clair persistant (localStorage)
- Bilingue FR/EN avec détection automatique de la langue du navigateur (localStorage)
- Design responsive (mobile-first)

## Structure

```
SiteWeb/
├── index.html             # Structure et contenu du site (attributs data-i18n)
├── css/style.css           # Design, thèmes, responsive, animations
├── js/
│   ├── translations.js      # Dictionnaire de traduction FR/EN
│   └── script.js             # Thème, langue, menu mobile, scroll-reveal, formulaire
├── scripts/
│   ├── generate_og_image.py  # Regenere assets/img/og-image.png (apercu de lien)
│   └── generate_favicon.py    # Regenere assets/img/favicon.* (necessite Pillow)
└── assets/
    ├── cv/                  # Placer ici CV_Justin_Evrard.pdf
    └── img/                  # Favicon, og-image.png, photos du site
```

### Traductions

Tout le texte traduisible porte un attribut `data-i18n="section.cle"` (texte simple), `data-i18n-html="section.cle"` (texte avec balises `<strong>`/`<span>` imbriquées) ou `data-i18n-attr="attribut:section.cle"` (attributs comme `aria-label`). Les valeurs FR/EN sont dans `js/translations.js`. **Toute nouvelle section de contenu doit ajouter ses clés aux deux langues dans ce fichier.**

## À faire avant mise en ligne

- [x] Ajouter `assets/cv/CV_Justin_Evrard.pdf`
- [x] Remplacer les liens GitHub/LinkedIn placeholder par les vrais profils
- [x] Remplacer l'adresse `mailto:` par la vraie adresse de contact
- [x] Ajouter le lien réel vers le dépôt du Bot Discord IA (le Site Web Météo n'a pas de dépôt public)
- [x] Connecter le formulaire de contact à Formspree (envoi vers justin.evrard24@gmail.com)

## Lancer en local

Ouvrir simplement `index.html` dans un navigateur, ou servir le dossier avec un petit serveur statique :

```bash
npx serve .
```

## Déploiement

En ligne via GitHub Pages : https://justinevrard.github.io/SiteWeb/

`css/style.css`, `js/script.js` et `js/translations.js` sont chargés avec un paramètre `?v=N` dans `index.html` pour éviter que les navigateurs affichent une version mise en cache après un déploiement. **Après toute modification de l'un de ces fichiers, incrémenter son numéro** dans la balise `<link>`/`<script>` correspondante d'`index.html`.
