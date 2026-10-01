// =========================================================
// Translation dictionary (FR / EN)
// Keys are dot-paths looked up by getTranslation() in script.js
// =========================================================
const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
    },
    a11y: {
      themeToggle: 'Basculer le mode sombre/clair',
      menuToggle: 'Ouvrir le menu',
      scrollCue: 'Défiler vers le bas',
    },
    hero: {
      eyebrow: 'Développeur logiciel · Montréal, QC',
      titleLine1: 'Salut, je suis',
      titleLine2: 'Je construis des logiciels avec rigueur,',
      titleLine3: "et un peu d'art.",
      subtitle:
        "Étudiant en informatique et génie logiciel à l'UQAM, je conçois des solutions complètes, du back-end à l'interface, avec le souci du détail.",
      status: 'Disponible pour un stage · Montréal, QC',
      cvButton: 'Télécharger mon CV',
      statProjects: 'Projets réalisés',
      statInternship: 'Stage réalisé',
      statTech: 'Technologies maîtrisées',
      statSchool: 'Informatique et génie logiciel',
      badge: 'Développement web',
      stackTitle: 'Mon stack',
      quote: 'Des solutions utiles, simples et élégantes.',
      scrollCueText: 'Découvrir mon travail',
    },
    about: {
      eyebrow: 'Qui suis-je',
      title: 'À propos',
      text:
        "Je suis étudiant au <strong>Baccalauréat en informatique et génie logiciel à l'UQAM</strong>, avec une <strong>mineure en art et science</strong>. Cette double formation m'a appris à voir le développement logiciel comme une discipline à la fois rigoureuse et créative : je conçois des <strong>solutions logicielles complètes</strong>, du back-end (API, bases de données, déploiement) jusqu'à l'interface utilisateur, en gardant toujours un œil sur l'expérience et l'esthétique du produit final.",
      factLocationLabel: 'Localisation',
      factLocationValue: 'Montréal, Québec',
      factEducationLabel: 'Formation',
      factEducationValue: 'B.Sc. Informatique et génie logiciel — UQAM',
      factMinorLabel: 'Mineure',
      factMinorValue: 'Art et science',
      factInterestsLabel: "Champs d'intérêt",
      factInterestsValue: 'Back-end, IA appliquée, JavaScript',
    },
    skills: {
      eyebrow: 'Ma boîte à outils',
      title: 'Compétences techniques',
      languagesTitle: 'Langages',
      riscv: 'Assembleur RISC-V',
      toolsTitle: 'Outils & Infrastructure',
    },
    projects: {
      eyebrow: 'Mon travail',
      title: 'Projets',
      discordTitle: 'Bot Discord IA',
      discordDesc:
        'Bot conversationnel développé en Node.js/JavaScript, intégrant une API LLM (OpenRouter) pour générer des réponses en temps réel. Déploiement entièrement automatisé via GitHub Actions sur un serveur Oracle Cloud, avec gestion du processus par PM2.',
      discordLink: 'Code source →',
      weatherTitle: 'Site Web Météo',
      weatherDesc:
        'Application web développée en France, structurée selon une architecture MVC et connectée à une base de données SQL pour la persistance et l\'affichage de données météorologiques.',
      notPublic: 'Code non public',
    },
    experience: {
      eyebrow: 'Mon parcours',
      title: 'Expérience',
      internTitle: 'Stagiaire — Programmation scientifique',
      internMeta: 'MATLAB · Traitement et analyse de données',
      internDesc:
        "Stage axé sur la programmation en <strong>MATLAB</strong> : développement de scripts pour l'analyse, le traitement et la visualisation de données, avec application de méthodes numériques à des problèmes concrets.",
      degreeTitle: 'Baccalauréat en informatique et génie logiciel',
      degreeMeta: 'UQAM · Mineure en art et science',
      degreeDesc:
        'Formation combinant les fondements du génie logiciel (structures de données, systèmes, architecture logicielle) et une ouverture créative via la mineure en art et science.',
    },
    contact: {
      eyebrow: 'Parlons-en',
      title: 'Contact',
      labelName: 'Nom',
      labelEmail: 'Email',
      labelMessage: 'Message',
      submit: 'Envoyer le message',
      text: "Vous avez un projet, une opportunité ou simplement envie d'échanger ? N'hésitez pas à me contacter, je réponds rapidement.",
    },
    footer: {
      rights: 'Tous droits réservés.',
      note: 'Conçu & développé avec HTML, CSS et JavaScript.',
    },
    form: {
      fillAll: 'Merci de remplir tous les champs.',
      invalidEmail: "Merci d'entrer une adresse email valide.",
      sending: 'Envoi en cours…',
      success: 'Merci {name}, votre message a bien été envoyé !',
      error: 'Une erreur est survenue, réessayez ou écrivez-moi directement par email.',
    },
    meta: {
      description: "Portfolio de Justin Evrard, étudiant en informatique et génie logiciel à l'UQAM, Montréal.",
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    a11y: {
      themeToggle: 'Toggle dark/light mode',
      menuToggle: 'Open menu',
      scrollCue: 'Scroll down',
    },
    hero: {
      eyebrow: 'Software Developer · Montreal, QC',
      titleLine1: "Hi, I'm",
      titleLine2: 'I build software with rigor,',
      titleLine3: 'and a bit of art.',
      subtitle:
        'Computer science and software engineering student at UQAM, I design complete solutions, from back-end to front-end, with attention to detail.',
      status: 'Available for an internship · Montreal, QC',
      cvButton: 'Download my resume',
      statProjects: 'Projects completed',
      statInternship: 'Internship completed',
      statTech: 'Technologies mastered',
      statSchool: 'Computer Science & Software Engineering',
      badge: 'Web Development',
      stackTitle: 'My stack',
      quote: 'Useful, simple and elegant solutions.',
      scrollCueText: 'Discover my work',
    },
    about: {
      eyebrow: 'Who I am',
      title: 'About',
      text:
        "I'm a student in the <strong>Bachelor's in Computer Science and Software Engineering at UQAM</strong>, with a <strong>minor in Art and Science</strong>. This dual background taught me to see software development as both a rigorous and creative discipline: I design <strong>complete software solutions</strong>, from the back-end (APIs, databases, deployment) to the user interface, always keeping an eye on the experience and polish of the final product.",
      factLocationLabel: 'Location',
      factLocationValue: 'Montreal, Quebec',
      factEducationLabel: 'Education',
      factEducationValue: 'B.Sc. Computer Science & Software Engineering — UQAM',
      factMinorLabel: 'Minor',
      factMinorValue: 'Art and Science',
      factInterestsLabel: 'Areas of interest',
      factInterestsValue: 'Back-end, Applied AI, JavaScript',
    },
    skills: {
      eyebrow: 'My toolbox',
      title: 'Technical Skills',
      languagesTitle: 'Languages',
      riscv: 'RISC-V Assembly',
      toolsTitle: 'Tools & Infrastructure',
    },
    projects: {
      eyebrow: 'My work',
      title: 'Projects',
      discordTitle: 'AI Discord Bot',
      discordDesc:
        'Conversational bot built with Node.js/JavaScript, integrating an LLM API (OpenRouter) to generate real-time responses. Fully automated deployment via GitHub Actions on an Oracle Cloud server, with process management handled by PM2.',
      discordLink: 'Source code →',
      weatherTitle: 'Weather Website',
      weatherDesc:
        'Web application built in France, structured with an MVC architecture and connected to a SQL database for storing and displaying weather data.',
      notPublic: 'Not public',
    },
    experience: {
      eyebrow: 'My journey',
      title: 'Experience',
      internTitle: 'Intern — Scientific Programming',
      internMeta: 'MATLAB · Data processing and analysis',
      internDesc:
        'Internship focused on <strong>MATLAB</strong> programming: developing scripts for data analysis, processing and visualization, applying numerical methods to real-world problems.',
      degreeTitle: 'Bachelor\'s in Computer Science and Software Engineering',
      degreeMeta: 'UQAM · Minor in Art and Science',
      degreeDesc:
        'Program combining software engineering fundamentals (data structures, systems, software architecture) with a creative outlook through the minor in Art and Science.',
    },
    contact: {
      eyebrow: "Let's talk",
      title: 'Contact',
      labelName: 'Name',
      labelEmail: 'Email',
      labelMessage: 'Message',
      submit: 'Send message',
      text: 'Got a project, an opportunity, or just want to chat? Feel free to reach out, I respond quickly.',
    },
    footer: {
      rights: 'All rights reserved.',
      note: 'Designed & built with HTML, CSS and JavaScript.',
    },
    form: {
      fillAll: 'Please fill in all fields.',
      invalidEmail: 'Please enter a valid email address.',
      sending: 'Sending…',
      success: 'Thanks {name}, your message has been sent!',
      error: 'Something went wrong, please try again or email me directly.',
    },
    meta: {
      description: "Justin Evrard's portfolio — computer science and software engineering student at UQAM, Montreal.",
    },
  },
};

function getTranslation(lang, key) {
  return key.split('.').reduce((obj, part) => (obj ? obj[part] : undefined), translations[lang]);
}
