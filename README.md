# SiteWeb — Portfolio de Justin Evrard

Portfolio personnel présentant mon CV, mes compétences techniques et mes projets.

## Stack

- HTML5 / CSS3 / JavaScript vanilla (aucun framework, aucun build requis)
- Mode sombre / clair persistant (localStorage)
- Design responsive (mobile-first)

## Structure

```
SiteWeb/
├── index.html        # Structure et contenu du site
├── css/style.css      # Design, thèmes, responsive, animations
├── js/script.js        # Toggle thème, menu mobile, scroll-reveal, formulaire
└── assets/
    ├── cv/             # Placer ici CV_Justin_Evrard.pdf
    └── img/             # Photos / images du site
```

## À faire avant mise en ligne

- [x] Ajouter `assets/cv/CV_Justin_Evrard.pdf`
- [x] Remplacer les liens GitHub/LinkedIn placeholder par les vrais profils
- [x] Remplacer l'adresse `mailto:` par la vraie adresse de contact
- [x] Ajouter le lien réel vers le dépôt du Bot Discord IA (le Site Web Météo n'a pas de dépôt public)
- [ ] Connecter le formulaire de contact à un service (Formspree, EmailJS, ou une API propre) — il est actuellement validé en front-end uniquement, sans envoi réel

## Lancer en local

Ouvrir simplement `index.html` dans un navigateur, ou servir le dossier avec un petit serveur statique :

```bash
npx serve .
```

## Déploiement

En ligne via GitHub Pages : https://justinevrard.github.io/SiteWeb/
