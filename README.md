# Justin Evrard — Portfolio

Site web personnel présentant mon parcours, mes compétences techniques et mes projets.

**🔗 En ligne :** [justinevrard.github.io/SiteWeb](https://justinevrard.github.io/SiteWeb/)

## Fonctionnalités

- Design moderne et responsive (mobile-first)
- Mode sombre / clair persistant
- Bilingue FR/EN avec détection automatique de la langue du navigateur
- Animations au défilement et composition visuelle animée dans le hero
- Formulaire de contact fonctionnel (Formspree)
- Image de partage (Open Graph) et favicon personnalisés

## Stack technique

HTML5 / CSS3 / JavaScript vanilla — aucun framework, aucun build requis.

## Structure du projet

```
SiteWeb/
├── index.html                  # Structure et contenu du site (attributs data-i18n)
├── css/
│   └── style.css                # Design, thèmes, responsive, animations
├── js/
│   ├── translations.js           # Dictionnaire de traduction FR/EN
│   └── script.js                  # Thème, langue, menu mobile, scroll-reveal, formulaire
├── scripts/
│   ├── generate_og_image.py       # Régénère assets/img/og-image.png (aperçu de lien)
│   └── generate_favicon.py         # Régénère assets/img/favicon.* (nécessite Pillow)
└── assets/
    ├── cv/                       # CV_Justin_Evrard.pdf
    └── img/                       # Favicon, og-image.png, photos du site
```

## Traductions (i18n)

Tout le texte traduisible porte un attribut :

| Attribut | Usage |
|---|---|
| `data-i18n="section.cle"` | Texte simple |
| `data-i18n-html="section.cle"` | Texte avec balises imbriquées (`<strong>`, `<span>`...) |
| `data-i18n-attr="attribut:section.cle"` | Attributs HTML (`aria-label`, `title`...) |

Les valeurs FR/EN sont centralisées dans `js/translations.js`. **Toute nouvelle section de contenu doit ajouter ses clés aux deux langues dans ce fichier.**

## Développement local

```bash
npx serve .
```

Ou ouvrir directement `index.html` dans un navigateur.

## Déploiement

En ligne via GitHub Pages (branche `main`, dossier racine).

> **Cache-busting :** `css/style.css`, `js/script.js` et `js/translations.js` sont chargés avec un paramètre `?v=N` dans `index.html` pour éviter que les navigateurs affichent une version mise en cache après un déploiement. Après toute modification de l'un de ces fichiers, incrémenter son numéro dans la balise `<link>`/`<script>` correspondante.

## Contact

[justin.evrard24@gmail.com](mailto:justin.evrard24@gmail.com) · [LinkedIn](https://www.linkedin.com/in/justin-evrard-10ba72212/) · [GitHub](https://github.com/JustinEvrard)
