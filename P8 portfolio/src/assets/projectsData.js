// Les languages sont sous forme:   JS,CSS,HTML,SCSS,REACT,NODEJS,EXPRESS,MONGODB,GITHUB


export const projectsData = {
    projetA: {
        id: "projetA",
        coverImage: '/images/1680512368252_Kasa logo.png',
        title: "Projet A",
        smalldescription: "Description courte du Projet A",
        longdescription: "Description longue du Projet A.\n\nDeuxième paragraphe ici.\n\nTroisième paragraphe ici.",
        languages: ["REACT", "NODEJS"],
        githubBar: [
          { name: 'React', percentage: 80 },
          { name: 'Node.js', percentage: 70 },
          { name: 'MongoDB', percentage: 60 },
          // ... autres technologies
        ],
        githubLink: "https://github.com/projetA"
      },
      projetB: {
        id: "projetB",
        coverImage: '/images/Capture102109-booki.png',
        title: "Projet B",
        smalldescription: "Description courte du Projet B",
        longdescription: "Description longue du Projet B",
        languages: ["HTML", "CSS"],
        githubBar: [
          { name: 'React', percentage: 20 },
          { name: 'Node.js', percentage: 50 },
          { name: 'MongoDB', percentage: 30 },
        ],
        githubLink: "https://github.com/projetB"
      },
      projetC: {
        id: "projetC",
        coverImage: '/images/Capture101627-grimoire.png',        
        title: "Projet C",
        smalldescription: "Description courte du Projet C",
        longdescription: "Description longue du Projet C",
        languages: ["HTML", "CSS"],
        githubBar: [
          { name: 'React', percentage: 20 },
          { name: 'Node.js', percentage: 50 },
          { name: 'MongoDB', percentage: 30 },
        ],
        githubLink: "https://github.com/projetC"
      },
    // Ajout d'autres projets ici
  };