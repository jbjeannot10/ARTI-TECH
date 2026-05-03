const quizData = {
    art: [
      { q: "Qui a peint la Joconde ?", choices: ["Raphaël","Michel-Ange","Léonard de Vinci","Botticelli"], ans: 2 },
      { q: "Quel mouvement artistique est associé à Claude Monet ?", choices: ["Cubisme","Impressionnisme","Baroque","Surréalisme"], ans: 1 },
      { q: "Le cubisme a été fondé par :", choices: ["Salvador Dalí","Picasso et Braque","Monet et Renoir","Warhol"], ans: 1 },
      { q: "La sculpture 'Le Penseur' est de :", choices: ["Rodin","Michel-Ange","Donatello","Bernini"], ans: 0 },
      { q: "Quel pigment donne la couleur bleue dans la peinture à l'huile classique ?", choices: ["Oxyde de fer","Lapis-lazuli","Carbone","Plomb blanc"], ans: 1 },
      { q: "L'art numérique utilise comme outil principal :", choices: ["Pinceau","Ordinateur","Couteau à palette","Pastel"], ans: 1 },
      { q: "Le mouvement surréaliste est lancé par :", choices: ["André Breton","Picasso","Manet","Cézanne"], ans: 0 },
      { q: "Quelle technique consiste à gratter une surface pour révéler une couleur en dessous ?", choices: ["Aquarelle","Fresque","Grattage","Collage"], ans: 2 },
      { q: "La Renaissance a commencé dans quel pays ?", choices: ["France","Italie","Espagne","Allemagne"], ans: 1 },
      { q: "Le Pop Art est associé à :", choices: ["Banksy","Jackson Pollock","Andy Warhol","Basquiat"], ans: 2 }
    ],
    informatique: [
      { q: "Que signifie RAM ?", choices: ["Random Access Memory","Read And Modify","Run All Modes","Rapid Action Memory"], ans: 0 },
      { q: "Quel protocole est utilisé pour envoyer des emails ?", choices: ["FTP","HTTP","SMTP","DNS"], ans: 2 },
      { q: "Le modèle OSI comporte combien de couches ?", choices: ["4","5","7","9"], ans: 2 },
      { q: "Quelle commande affiche l'adresse IP sous Windows ?", choices: ["ipconfig","ifconfig","netstat","ping"], ans: 0 },
      { q: "Excel est un logiciel de :", choices: ["Traitement de texte","Tableur","Présentation","Base de données"], ans: 1 },
      { q: "Le DNS sert à :", choices: ["Chiffrer les données","Tradure les noms de domaine en IP","Gérer les emails","Contrôler le pare-feu"], ans: 1 },
      { q: "Quel est le rôle d'un routeur ?", choices: ["Stocker des fichiers","Diriger les paquets réseau","Afficher des pages web","Gérer les imprimantes"], ans: 1 },
      { q: "Access est un logiciel de :", choices: ["Tableur","Présentation","Base de données","Traitement de texte"], ans: 2 },
      { q: "Un octet est composé de :", choices: ["4 bits","8 bits","16 bits","32 bits"], ans: 1 },
      { q: "PowerPoint sert principalement à créer :", choices: ["Des bases de données","Des feuilles de calcul","Des présentations","Des sites web"], ans: 2 }
    ],
    sgbd: [
      { q: "SGBD signifie :", choices: ["Système Global de Base de Données","Système de Gestion de Base de Données","Super Gestionnaire de Bases de Données","Serveur de Gestion de Bases de Données"], ans: 1 },
      { q: "Quelle commande SQL crée une table ?", choices: ["ADD TABLE","NEW TABLE","CREATE TABLE","MAKE TABLE"], ans: 2 },
      { q: "Pour récupérer toutes les colonnes d'une table, on utilise :", choices: ["SELECT ALL","SELECT *","GET *","FETCH ALL"], ans: 1 },
      { q: "La clé primaire sert à :", choices: ["Trier les données","Identifier uniquement chaque enregistrement","Chiffrer la table","Créer des relations automatiques"], ans: 1 },
      { q: "INNER JOIN retourne :", choices: ["Tous les enregistrements de la table gauche","Tous les enregistrements","Les enregistrements communs aux deux tables","Aucun enregistrement"], ans: 2 },
      { q: "Quelle commande supprime une ligne dans une table ?", choices: ["REMOVE","DROP","DELETE","ERASE"], ans: 2 },
      { q: "La fonction COUNT() sert à :", choices: ["Additionner","Compter les lignes","Trouver le maximum","Calculer la moyenne"], ans: 1 },
      { q: "Le langage SQL est :", choices: ["Un langage de programmation orienté objet","Un langage de requête structuré","Un langage de balisage","Un langage compilé"], ans: 1 },
      { q: "ORDER BY classe les résultats par :", choices: ["Date de création","Ordre aléatoire","Colonne spécifiée","Clé primaire"], ans: 2 },
      { q: "WHERE est utilisé pour :", choices: ["Grouper les données","Filtrer les enregistrements","Joindre des tables","Créer des index"], ans: 1 }
    ],
    prog: [
      { q: "Qu'est-ce qu'une variable ?", choices: ["Une fonction","Un espace mémoire pour stocker des données","Un type de boucle","Un opérateur"], ans: 1 },
      { q: "En langage C, le programme commence par :", choices: ["start()","begin()","main()","run()"], ans: 2 },
      { q: "La POO signifie :", choices: ["Protocole Orienté Opération","Programmation Orientée Objet","Processus d'Organisation Optimale","Aucun des précédents"], ans: 1 },
      { q: "L'héritage en POO permet de :", choices: ["Copier du code","Étendre les fonctionnalités d'une classe","Créer des bases de données","Exécuter du code en parallèle"], ans: 1 },
      { q: "En Java, quelle est l'extension des fichiers source ?", choices: [".class",".jar",".java",".jav"], ans: 2 },
      { q: "Une boucle FOR sert à :", choices: ["Prendre une décision","Répéter un bloc de code","Déclarer une variable","Définir une fonction"], ans: 1 },
      { q: "Le polymorphisme en POO c'est :", choices: ["Plusieurs classes sans lien","Une méthode avec plusieurs comportements","Un objet sans attributs","Une classe sans méthodes"], ans: 1 },
      { q: "En C, malloc() sert à :", choices: ["Libérer la mémoire","Allouer dynamiquement de la mémoire","Copier des chaînes","Ouvrir des fichiers"], ans: 1 },
      { q: "Quelle structure de données fonctionne en LIFO ?", choices: ["File (Queue)","Tableau","Pile (Stack)","Liste chaînée"], ans: 2 },
      { q: "Un algorithme est :", choices: ["Un langage de programmation","Une suite d'instructions pour résoudre un problème","Un type de base de données","Un composant matériel"], ans: 1 }
    ],
    compta: [
      { q: "Le bilan comptable montre :", choices: ["Les revenus de l'année","La situation patrimoniale à un instant T","Les flux de trésorerie","Les charges d'exploitation"], ans: 1 },
      { q: "L'actif du bilan représente :", choices: ["Les dettes","Ce que l'entreprise possède","Les capitaux propres","Les charges"], ans: 1 },
      { q: "Le débit dans un journal comptable :", choices: ["Augmente les dettes","Diminue les actifs","Enregistre les ressources","Enregistre les emplois"], ans: 3 },
      { q: "La TVA signifie :", choices: ["Taxe sur les Valeurs Ajoutées","Titre de Vente d'Actifs","Transfert de Valeur Anticipé","Aucun des précédents"], ans: 0 },
      { q: "L'amortissement correspond à :", choices: ["Le paiement d'une dette","La dépréciation d'un bien","Un bénéfice réalisé","Une charge extraordinaire"], ans: 1 },
      { q: "Le compte de résultat indique :", choices: ["Le patrimoine de l'entreprise","Le bénéfice ou la perte sur une période","Les dettes à long terme","Les capitaux propres"], ans: 1 },
      { q: "Un bilan est équilibré quand :", choices: ["Actif = Passif","Charges = Produits","Dettes = Capitaux","Revenus = Dépenses"], ans: 0 },
      { q: "Les capitaux propres sont :", choices: ["Des dettes envers les banques","Des ressources appartenant aux associés","Des charges d'exploitation","Des immobilisations"], ans: 1 },
      { q: "Une provision est :", choices: ["Un bénéfice exceptionnel","Une charge pour risque futur probable","Un actif circulant","Un apport des actionnaires"], ans: 1 },
      { q: "Le résultat net est :", choices: ["Chiffre d'affaires − TVA","Produits − Charges","Actif − Passif","Trésorerie − Dettes"], ans: 1 }
    ],
    sante: [
      { q: "La santé mentale inclut :", choices: ["Seulement l'absence de maladie","Le bien-être émotionnel, psychologique et social","Uniquement la santé physique","La mémoire uniquement"], ans: 1 },
      { q: "Le burnout est principalement causé par :", choices: ["Excès de sommeil","Stress chronique au travail","Trop de loisirs","Manque d'exercice uniquement"], ans: 1 },
      { q: "La méditation a pour effet prouvé :", choices: ["Augmenter l'anxiété","Réduire le stress","Diminuer le QI","Aucun effet prouvé"], ans: 1 },
      { q: "L'OMS définit la santé comme :", choices: ["L'absence de maladie","Un état complet de bien-être physique, mental et social","La capacité à travailler","L'absence de douleur"], ans: 1 },
      { q: "Combien d'heures de sommeil recommande-t-on pour un adulte ?", choices: ["4–5h","6h exactement","7–9h","Plus de 10h"], ans: 2 },
      { q: "La dépression est :", choices: ["Un signe de faiblesse","Une maladie mentale traitable","Un choix personnel","Uniquement lié aux problèmes financiers"], ans: 1 },
      { q: "L'anxiété chronique peut causer :", choices: ["Seulement de la fatigue","Des problèmes cardiaques, digestifs et immunitaires","Uniquement des migraines","Aucune conséquence physique"], ans: 1 },
      { q: "Que signifie 'pleine conscience' (mindfulness) ?", choices: ["Dormir longtemps","Porter attention au moment présent sans jugement","Ignorer les émotions","Se concentrer sur le passé"], ans: 1 },
      { q: "Un facteur protecteur de la santé mentale est :", choices: ["L'isolement social","Le soutien social et familial","Le manque de sommeil","La sédentarité"], ans: 1 },
      { q: "Demander de l'aide psychologique est :", choices: ["Un signe de faiblesse","Courageux et intelligent","Inutile","Réservé aux cas graves"], ans: 1 }
    ],
    drywaller: [
      { q: "Le drywall est aussi appelé :", choices: ["Brique légère","Plaque de plâtre/gypse","Béton cellulaire","Ardoise"], ans: 1 },
      { q: "L'ossature métallique est composée de :", choices: ["Poutres en bois","Rails et montants métalliques","Tubes en PVC","Câbles en acier"], ans: 1 },
      { q: "Combien de couches d'enduit applique-t-on généralement ?", choices: ["1","2","3","5"], ans: 2 },
      { q: "La bande de papier est utilisée pour :", choices: ["Fixer les plaques","Couvrir les joints entre plaques","Isoler acoustiquement","Imperméabiliser"], ans: 1 },
      { q: "L'outil principal pour couper le drywall est :", choices: ["Scie circulaire","Couteau utilitaire et règle","Meuleuse","Perceuse"], ans: 1 },
      { q: "La vis pour drywall s'appelle :", choices: ["Vis à bois","Vis de drywall (galvanisée fine)","Cheville","Rivet"], ans: 1 },
      { q: "Un faux plafond suspendu utilise :", choices: ["Des rails en bois uniquement","Des rails métalliques et suspentes","Du béton","Du PVC rigide"], ans: 1 },
      { q: "L'isolation placée dans les cloisons est :", choices: ["Du sable","De la laine de roche ou laine de verre","Du béton","De la mousse expansive uniquement"], ans: 1 },
      { q: "Le ponçage final du joint sert à :", choices: ["Résistance","Obtenir une surface lisse pour la peinture","Fixer les plaques","Imperméabiliser"], ans: 1 },
      { q: "L'épaisseur standard d'une plaque de drywall est :", choices: ["5 mm","12,5 mm","25 mm","50 mm"], ans: 1 }
    ],
    photo: [
      { q: "L'effet photovoltaïque convertit :", choices: ["Chaleur en électricité","Lumière en électricité","Eau en électricité","Vent en électricité"], ans: 1 },
      { q: "Le composant qui transforme le courant DC en AC s'appelle :", choices: ["Régulateur","Onduleur","Batterie","Disjoncteur"], ans: 1 },
      { q: "Un panneau monocristallin est :", choices: ["Moins efficace que le polycristallin","Le plus efficace des technologies courantes","Uniquement pour usage industriel","Fait de plusieurs matériaux"], ans: 1 },
      { q: "Un système 'off-grid' signifie :", choices: ["Connecté au réseau électrique","Autonome, non connecté au réseau","Partiellement connecté","Utilisé en milieu urbain uniquement"], ans: 1 },
      { q: "Le watt-crête (Wc) mesure :", choices: ["La puissance en conditions réelles","La puissance maximale dans des conditions standards","La capacité de la batterie","L'efficacité de l'onduleur"], ans: 1 },
      { q: "Le régulateur de charge sert à :", choices: ["Convertir DC en AC","Protéger la batterie de la surcharge","Amplifier la tension","Mesurer l'ensoleillement"], ans: 1 },
      { q: "L'orientation idéale des panneaux dans l'hémisphère nord est :", choices: ["Est","Ouest","Plein Sud","Plein Nord"], ans: 2 },
      { q: "La capacité d'une batterie se mesure en :", choices: ["Watts","Ampères-heures (Ah)","Volts","Ohms"], ans: 1 },
      { q: "L'ensoleillement optimal correspond à :", choices: ["Ciel nuageux","Soleil direct perpendiculaire aux panneaux","Aube et crépuscule","Lumière diffuse"], ans: 1 },
      { q: "La durée de vie moyenne d'un panneau solaire est :", choices: ["5–10 ans","15–20 ans","25–30 ans","50 ans"], ans: 2 }
    ]
  };
  
  const quizState = {};
  
  function startQuiz(domain) {
    const questions = quizData[domain];
    if (!questions) return;
    quizState[domain] = { current: 0, score: 0, answers: [] };
    renderQuestion(domain);
  }
  
  function renderQuestion(domain) {
    const state = quizState[domain];
    const q = quizData[domain][state.current];
    const container = document.getElementById('quiz-' + domain);
    container.innerHTML = `
      <div class="quiz-progress">Question ${state.current + 1} / ${quizData[domain].length}</div>
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-choices">
        ${q.choices.map((c, i) => `
          <button class="quiz-choice" onclick="answerQuiz('${domain}', ${i})">${c}</button>
        `).join('')}
      </div>
    `;
    document.getElementById('quiz-' + domain + '-result').textContent = '';
  }
  
  function answerQuiz(domain, index) {
    const state = quizState[domain];
    const q = quizData[domain][state.current];
    const buttons = document.querySelectorAll(`#quiz-${domain} .quiz-choice`);
  
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.ans) btn.classList.add('correct');
      else if (i === index && index !== q.ans) btn.classList.add('wrong');
    });
  
    if (index === q.ans) state.score++;
    state.current++;
  
    setTimeout(() => {
      if (state.current < quizData[domain].length) {
        renderQuestion(domain);
      } else {
        showQuizResult(domain);
      }
    }, 1000);
  }
  
  function showQuizResult(domain) {
    const state = quizState[domain];
    const total = quizData[domain].length;
    const pct = Math.round((state.score / total) * 100);
    const container = document.getElementById('quiz-' + domain);
    const result = document.getElementById('quiz-' + domain + '-result');
  
    container.innerHTML = '';
    result.innerHTML = `
      <div class="quiz-final">
        <div class="quiz-score">${state.score} / ${total}</div>
        <div class="quiz-pct">${pct}%</div>
        <p>${pct >= 80 ? '🏆 Excellent !' : pct >= 60 ? '👍 Bien !' : '📚 Continue à apprendre !'}</p>
        <button class="btn btn-outline" onclick="startQuiz('${domain}')">Recommencer</button>
      </div>
    `;
  }