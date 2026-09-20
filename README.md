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

- [ ] Ajouter `assets/cv/CV_Justin_Evrard.pdf` (le bouton "Télécharger mon CV" pointe déjà vers ce fichier)
- [ ] Remplacer les liens GitHub/LinkedIn placeholder (`https://github.com/`, `https://www.linkedin.com/`) par les vrais profils dans `index.html`
- [ ] Remplacer l'adresse `mailto:` par la vraie adresse de contact
- [ ] Connecter le formulaire de contact à un service (Formspree, EmailJS, ou une API propre) — il est actuellement validé en front-end uniquement, sans envoi réel
- [ ] Ajouter des liens réels vers les dépôts des projets (Bot Discord IA, Site Web Météo)

## Lancer en local

Ouvrir simplement `index.html` dans un navigateur, ou servir le dossier avec un petit serveur statique :

```bash
npx serve .
```

## Déploiement

Compatible GitHub Pages tel quel : activer Pages sur la branche `main` (dossier racine).
