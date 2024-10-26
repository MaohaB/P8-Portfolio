// Les languages sont sous forme:   JS,CSS,HTML,SCSS,REACT,NODEJS,EXPRESS,MONGODB,GITHUB
// utiliser \n\n pour séparer les paragraphes

export const projectsData = {
  Projet2: {
    id: "booki",
    coverImage: 'images/Capture102109-booki.png',        
    title: "Page d'accueil d'agence de voyage",
    smalldescription: "Créer la page d'accueil avec HTML & CSS ",
    longdescription: "Le projet consistait à créer une page d'accueil originale pour l'agence de voyage Booki, en utilisant des maquettes Figma fournies pour desktop, tablette et mobile. L'approche adoptée était desktop-first, avec une adaptation responsive pour les autres formats. Grâce aux maquettes et aux assets (images et contenu) fournis, j'ai pu me concentrer sur l'intégration plutôt que sur la conception visuelle, ce qui m'a permis de travailler avec des designs professionnels et de comprendre comment les traduire en code HTML et CSS.\n\nCe projet était entièrement axé sur le front-end, utilisant uniquement HTML et CSS. Il n'y avait pas de composante back-end ni de base de données à gérer, ce qui m'a permis de me concentrer pleinement sur l'amélioration de mes compétences en intégration web. Le travail s'est effectué en local, sans nécessité d'intégrer des API externes. Dans ce cadre, j'ai dû relever plusieurs défis techniques importants : Implémentation d'une interface responsive, gestion du design pour desktop, tablette et mobile pour une intégration fidèle aux maquettes et assurer une adaptation fluide à différentes tailles d'écran (Utilisation de Flexbox/Grid : pour une mise en page flexible) ainsi que la mise en place d'un système de versionning avec Git et GitHub pour suivre l'évolution du projet et maintenir un historique clair des modifications.",
    languages: ["HTML", "CSS"],
    githubBar: [
      { name: 'HTML', percentage: 60 },
      { name: 'CSS', percentage: 40 },
    ],
    githubLink: "https://github.com/MaohaB/Projet-n-2"
  },
  projet4: {
    id: "Sitephotographe",
    coverImage: 'images/Capture100819-photo.png',        
    title: "Optimiser un site de photographe",
    smalldescription: "Débugger et améliorer les performances d'un site de photographe professionnel ",
    longdescription: "Dans le cadre de ce projet, j'ai endossé le rôle d'un développeur freelance chargé d'optimiser le référencement et les performances d'un site web existant pour une photographe professionnelle. Ce projet m'a permis de développer des compétences cruciales en matière d'optimisation SEO, de performance web et d'accessibilité.\n\nJ'ai tout d'abord réalisé un audit approfondi du site en utilisant des outils spécialisés comme Lighthouse et Wave pour identifier les problèmes de performance et d'accessibilité. Sur cette base, j'ai élaboré une stratégie d'optimisation complète, incluant l'optimisation des images, l'amélioration de la structure du code, et l'implémentation de meilleures pratiques SEO. J'ai également mis en place le référencement local avec Schema.org et ajouté des métadonnées pour les réseaux sociaux. Une attention particulière a été portée à l'amélioration de l'accessibilité du site, en veillant à ce qu'il soit utilisable par un large éventail d'utilisateurs, y compris ceux ayant des besoins spécifiques.\n\nLe projet comportait également un volet de débogage, où j'ai dû résoudre des problèmes spécifiques dans le code existant, notamment des bugs dans la navigation de la galerie d'images et dans le système de filtrage. Pour conclure, j'ai produit un rapport détaillé documentant toutes les optimisations effectuées, leur impact sur les performances et le référencement, ainsi qu'une liste de cas d'utilisation. Ce projet m'a permis de développer une expertise pratique en optimisation web et de renforcer mes compétences en analyse, optimisation et documentation technique.",
    languages: ["HTML", "JS", "CSS"],
    githubBar: [
      { name: 'HTML', percentage: 56 },
      { name: 'Javascript', percentage: 27 },
      { name: 'CSS', percentage: 17 },
    ],
    githubLink: "https://github.com/MaohaB/Projetn-4"
  },
  projet3: {
    id: "Sitearchitecte",
    coverImage: 'images/Capture092414-archi.png',        
    title: "Page web pour une architecte",
    smalldescription: "Création d'une page web dynamique avec JavaScript ",
    longdescription: "Dans le cadre de ce projet, j'ai développé des compétences avancées en manipulation du DOM avec JavaScript, me permettant de créer des interfaces utilisateur interactives et dynamiques. J'ai approfondi ma maîtrise de la gestion des événements utilisateurs, essentielle pour offrir une expérience fluide et réactive. Le projet m'a également amené à implémenter des fonctionnalités d'authentification robustes, ainsi qu'à concevoir des modales et des formulaires dynamiques pour une interaction utilisateur optimale. Une composante clé de mon travail a été l'intégration d'API RESTful, me permettant de connecter efficacement le front-end aux services back-end. Enfin, l'utilisation de Figma pour interpréter les maquettes de design a renforcé ma capacité à traduire fidèlement les concepts visuels en code fonctionnel, assurant ainsi une cohérence parfaite entre le design et l'implémentation technique.",
    languages: ["HTML", "CSS", "JS"],
    githubBar: [
      { name: 'HTML', percentage: 17 },
      { name: 'Javascript', percentage: 58 },
      { name: 'CSS', percentage: 25 },
    ],
    githubLink: "https://github.com/MaohaB/projetn-3"
  },
 
    projet5: {
        id: "Kasaimmobilier",
        coverImage: 'images/Capture101012-kasa.png',
        title: "Application web de location immobilière",
        smalldescription: "Créer une application web avec React ",
        longdescription: "Dans ce projet, j'ai été chargé de développer le front-end d'une application de location immobilière pour Kasa, en utilisant React et React Router. J'ai commencé par initialiser l'application avec Create React App, ce qui m'a permis de poser une base solide pour le développement. La configuration de la navigation entre les différentes pages a été essentielle pour offrir une expérience utilisateur fluide et intuitive.\n\nUn aspect central de mon travail a été la création de composants React réutilisables, notamment un composant de galerie d'images avec des fonctionnalités de défilement circulaire et un composant Collapse pour afficher et masquer du contenu. J'ai également utilisé Sass pour gérer le CSS, ce qui m'a permis d'organiser efficacement les styles et d'intégrer des animations CSS fluides, améliorant ainsi l'expérience visuelle de l'application.\n\nTout au long du projet, j'ai travaillé avec des données simulées extraites d'un fichier JSON, ce qui m'a permis de me concentrer sur la logique front-end sans dépendre d'un back-end. Cette expérience a renforcé mes compétences en React et m'a préparé à relever des défis similaires dans ma carrière future, tout en me familiarisant avec des outils et des pratiques essentiels dans le développement web moderne.",
        languages: ["REACT", "NODEJS", "HTML", "CSS"],
        githubBar: [
          { name: 'JavaScript', percentage: 50 },
          { name: 'Sass', percentage: 45 },
          { name: 'HTML', percentage: 3 },
          { name: 'CSS', percentage: 2 },
          // ... autres technologies
        ],
        githubLink: "https://github.com/MaohaB/Projetn-5"
      },
      projet6: {
        id: "MonvieuxGrimoire",
        coverImage: 'images/Capture101627-grimoire.png',        
        title: "Architecture d'un site de notation de livres ",
        smalldescription: "Développer le back-end d'une plateforme d'évaluation littéraire ",
        longdescription: "Dans le cadre de ce projet, j'ai été chargé de développer le back-end d'un site de notation de livres appelé 'Mon Vieux Grimoire'. Ce projet m'a permis de mettre en pratique des compétences essentielles en développement back-end, notamment la création d'une API RESTful avec Node.js et Express, l'intégration avec une base de données MongoDB, et la mise en place de fonctionnalités de sécurité et d'authentification. \n\nJ'ai tout d'abord configuré l'environnement de développement en installant toutes les dépendances nécessaires et en démarrant un serveur Node fonctionnel. Ensuite, j'ai connecté une base de données MongoDB à mon application Express en utilisant Mongoose, tout en développant les modèles de données pour les livres et les utilisateurs. J'ai stocké les informations utilisateur dans la base de données, mis en place le cryptage des mots de passe, et créé des tokens JWT pour l'authentification. J'ai également ajouté un middleware d'authentification pour sécuriser les routes.\n\nUn aspect important du projet a été l'implémentation des fonctionnalités d'affichage, de création et de modification des livres. J'ai géré le téléchargement et l'optimisation des images avec Multer, ainsi que la mise en place d'un système de notation des livres. Enfin, j'ai implémenté le calcul de la note moyenne pour chaque livre. Ce projet m'a permis de renforcer mes compétences en développement back-end et m'a préparé à des projets full-stack plus complexes à l'avenir.",
        languages: [ "CSS", "JS", "HTML",],
        githubBar: [
          { name: 'Javascript', percentage: 77 },
          { name: 'CSS', percentage: 20 },
          { name: 'HTML', percentage: 3 },
        ],
        githubLink: "https://github.com/MaohaB/projetn-6"
      },
    // Ajout d'autres projets ici
  };