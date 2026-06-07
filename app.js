const icons = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M5 5H3v2a4 4 0 0 0 4 4"/><path d="M19 5h2v2a4 4 0 0 1-4 4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  score: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11h6"/><path d="M9 15h6"/><path d="M17 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22V4"/><path d="M4 4h13l-2 4 2 4H4"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.3 21a2 2 0 0 0 3.4 0"/><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
};

const state = {
  view: "dashboard",
  format: "stableford",
  language: "FR",
  languageMenuOpen: false,
  scoringMode: "marker",
  wizardOpen: false,
  wizardStep: 0,
  leaderboardOpen: false,
  leaderboardRound: 1,
  statsRange: "competition",
  savingSetup: false,
  saveStatus: null,
  supabaseIds: {
    competitionId: null,
    playerIds: [],
    roundIds: [],
    groupIds: [],
  },
  groupsGeneratedForCount: 0,
  courseSearchDrafts: {},
  courseSearchResults: {},
  courseApiStatus: {},
  courseSearchTimers: {},
  scorecardScanStatus: {},
  manualCourseOpen: {},
  manualCourseForms: {},
  roundGroups: [],
  setup: {
    competitionType: "friends",
    competitionName: "Friends Golf Live 2026",
    startDate: "2026-06-18",
    endDate: "2026-06-18",
    playerCount: 4,
    roundCount: 1,
    groupSize: 3,
    courseName: "Golf de Chantilly - Vineuil",
    tees: "Jaunes",
    gameFormula: "stableford-net",
    scrambleSize: 2,
    liveLeaderboard: true,
    cardSignature: true,
  },
  locationPermission: "idle",
  setupPlayers: [
    { name: "Sophie Martin", index: 12.4 },
    { name: "Thomas Keller", index: 8.7 },
    { name: "Ines Duarte", index: 18.1 },
    { name: "Marc Lefevre", index: 21.8 },
  ],
  roundCourses: [
    { courseName: "Golf de Chantilly - Vineuil", tees: "Jaunes", selectedCourseId: "chantilly-vineuil" },
  ],
  groups: [
    {
      id: "g1",
      name: "Partie 1",
      playerIndexes: [0, 1, 2],
      teeTime: "09:10",
      markerAssignments: [
        { playerIndex: 0, marksIndex: 1 },
        { playerIndex: 1, marksIndex: 2 },
        { playerIndex: 2, marksIndex: 0 },
      ],
    },
    {
      id: "g2",
      name: "Partie 2",
      playerIndexes: [3],
      teeTime: "09:20",
      markerAssignments: [{ playerIndex: 3, marksIndex: 3 }],
    },
  ],
  teams: [
    { id: "t1", name: "Equipe 1", playerIndexes: [0, 1] },
    { id: "t2", name: "Equipe 2", playerIndexes: [2, 3] },
  ],
  account: {
    firstName: "Thibault",
    lastName: "Chaumais",
    email: "thibaut@chaumais.com",
    country: "France",
    handicap: "16.4",
    licenseNumber: "",
    password: "",
    role: "Organisateur",
    signedIn: false,
  },
  markerAssignments: [
    { playerIndex: 0, marksIndex: 1 },
    { playerIndex: 1, marksIndex: 2 },
    { playerIndex: 2, marksIndex: 0 },
  ],
  hole: 7,
  roundValidated: false,
  puttsEnabled: true,
  activeScore: { playerKey: "sophie", field: "gross" },
  scoreEvents: [],
  scores: {
    sophie: { name: "Sophie", gross: 5, putts: 2, points: 3, cardRole: "verification" },
    thomas: { name: "Thomas", gross: 4, putts: 1, points: 4, cardRole: "official" },
    ines: { name: "Ines", gross: 6, putts: 2, points: 2, cardRole: "group" },
    marc: { name: "Marc", gross: 5, putts: 2, points: 3, cardRole: "group" },
  },
};

const languages = [
  { code: "FR", label: "Francais", flag: "🇫🇷" },
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "ES", label: "Espanol", flag: "🇪🇸" },
  { code: "IT", label: "Italiano", flag: "🇮🇹" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
];

const golfSuggestions = [
  { id: "chantilly-vineuil", name: "Golf de Chantilly - Vineuil", location: "Chantilly, France", distance: "42 km", par: 71 },
  { id: "national-albatros", name: "Golf National - Albatros", location: "Guyancourt, France", distance: "31 km", par: 72 },
  { id: "fontainebleau", name: "Golf de Fontainebleau", location: "Fontainebleau, France", distance: "68 km", par: 72 },
  { id: "saint-cloud", name: "Golf de Saint-Cloud", location: "Garches, France", distance: "12 km", par: 71 },
  { id: "st-andrews", name: "St Andrews Links - Old Course", location: "St Andrews, Scotland", distance: "monde", par: 72 },
  { id: "valderrama", name: "Real Club Valderrama", location: "Sotogrande, Spain", distance: "monde", par: 71 },
];

const translations = {
  FR: {
    tagline: "Jouez entre amis. Scores en direct.",
    homeBadge: "Nouvelle partie entre amis",
    heroTitle: "Friends Golf Live",
    heroText: "Créez une partie de golf entre amis, étape par étape, puis saisissez les scores en direct.",
    home: "Accueil",
    create: "Créer",
    createNewGame: "Créer une nouvelle partie",
    synced: "Synchronisé",
    step: "Étape",
    next: "Suivant",
    back: "Retour",
    close: "Fermer",
    validate: "Valider",
    startScoring: "Démarrer la saisie",
    competitionTypeTitle: "Quel type de compétition ?",
    competitionTypeHelp: "Choisissez le cadre, donnez un nom à la partie et indiquez les dates.",
    type: "Type",
    competitionName: "Nom de la compétition",
    startDate: "Date de début",
    endDate: "Date de fin",
    friendsCompetition: "Compétition entre amis",
    privateCompetition: "Compétition privée",
    golfTrip: "Séjour golfique",
    matchplayCompetition: "Match play",
    ryderCupCompetition: "Ryder Cup / équipes",
    playerCountTitle: "Combien de joueurs participent ?",
    playerCountHelp: "Saisissez le nombre de joueurs. L'écran suivant préparera autant de lignes.",
    players: "Joueurs",
    playersTitle: "Saisir les joueurs",
    playersHelp: "Renseignez le nom et l'index de chaque joueur.",
    name: "Nom",
    index: "Index",
    roundsTitle: "Combien de tours ?",
    roundsHelp: "Choisissez le nombre de tours de la compétition.",
    coursesTitle: "Sélectionner le golf",
    coursesHelp: "Choisissez un golf par tour. Utilisez la géolocalisation ou recherchez un parcours dans le monde.",
    useLocation: "Utiliser ma position",
    locationHelp: "Demander l'autorisation pour proposer les golfs autour de moi.",
    nearbyGolf: "Golfs proches",
    searchGolf: "Rechercher un golf",
    selectCourse: "Sélectionner",
    round: "Tour",
    groupsTitle: "Créer les parties",
    groupsHelp: "Générez les parties automatiquement, puis ajustez les joueurs si besoin.",
    group: "Partie",
    groupSize: "Taille des parties",
    groupsOf: "Parties de",
    generateGroups: "Générer les parties",
    manualPlayers: "Ajuster les joueurs",
    teeTime: "Départ",
    teamsTitle: "Créer les équipes",
    teamsHelp: "Pour un scramble, choisissez des équipes de 2 ou de 4 joueurs.",
    scrambleSize: "Scramble à",
    team: "Équipe",
    markerAssignTitle: "Qui marque qui ?",
    markerAssignHelp: "Définissez les marqueurs dans chaque partie uniquement. Chacun verra sa carte à marquer et sa carte personnelle.",
    markerByGroup: "Marqueurs de la partie",
    marks: "marque",
    course: "Golf",
    tees: "Départs",
    formulaTitle: "Formule de jeu",
    formulaHelp: "Choisissez la formule de calcul dans la liste.",
    formula: "Formule",
    scoringModeTitle: "Mode de saisie",
    scoringModeHelp: "Choisissez qui saisit les scores pendant la partie.",
    centralized: "Saisie centralisée",
    centralizedHelp: "Une seule personne saisit tous les scores.",
    individual: "Saisie individuelle",
    individualHelp: "Chaque joueur saisit uniquement ses propres scores.",
    marker: "Carteur / marqueur",
    markerHelp: "Chaque joueur saisit la carte officielle et sa propre vérification.",
    optionsTitle: "Options de partie",
    optionsHelp: "Activez uniquement ce dont vous avez besoin pour garder la saisie simple.",
    putts: "Saisie des putts",
    leaderboardVisible: "Classement visible en direct",
    signature: "Vérification croisée et signature",
    digitalScorecard: "Carte digitale",
    officialCard: "Carte officielle",
    checkCard: "Ma carte de vérification",
    signCard: "Signer la carte",
    chouetteHelp: "Chouette : partie à 3 joueurs, 6 points par trou. Égalité à trois : 2/2/2. Scores tous différents : 4/2/0. Deux meilleurs ex aequo : 3/3/0.",
    score: "Score",
    cards: "Cartes",
    ranking: "Classement",
    security: "Sécurité",
  },
  EN: {
    tagline: "Play with friends. Score live.",
    homeBadge: "New round with friends",
    heroTitle: "Friends Golf Live",
    heroText: "Create a golf game with friends step by step, then enter scores live.",
    home: "Home",
    create: "Create",
    createNewGame: "Create new game",
    synced: "Synced",
    step: "Step",
    next: "Next",
    back: "Back",
    close: "Close",
    validate: "Confirm",
    startScoring: "Start scoring",
    competitionTypeTitle: "What type of competition?",
    competitionTypeHelp: "Choose the setup, name the game and enter the dates.",
    type: "Type",
    competitionName: "Competition name",
    startDate: "Start date",
    endDate: "End date",
    friendsCompetition: "Friends competition",
    privateCompetition: "Private competition",
    golfTrip: "Golf trip",
    matchplayCompetition: "Match play",
    ryderCupCompetition: "Ryder Cup / teams",
    playerCountTitle: "How many players?",
    playerCountHelp: "Enter the number of players. The next screen creates the lines.",
    players: "Players",
    playersTitle: "Enter players",
    playersHelp: "Enter each player's name and handicap index.",
    name: "Name",
    index: "Index",
    roundsTitle: "How many rounds?",
    roundsHelp: "Choose the number of rounds.",
    coursesTitle: "Select the golf course",
    coursesHelp: "Choose one course per round. Use location or search worldwide.",
    useLocation: "Use my location",
    locationHelp: "Ask permission to suggest nearby golf courses.",
    nearbyGolf: "Nearby courses",
    searchGolf: "Search course",
    selectCourse: "Select",
    round: "Round",
    groupsTitle: "Create groups",
    groupsHelp: "Generate groups automatically, then adjust players if needed.",
    group: "Group",
    groupSize: "Group size",
    groupsOf: "Groups of",
    generateGroups: "Generate groups",
    manualPlayers: "Adjust players",
    teeTime: "Tee time",
    teamsTitle: "Create teams",
    teamsHelp: "For scramble, choose teams of 2 or 4 players.",
    scrambleSize: "Scramble",
    team: "Team",
    markerAssignTitle: "Who marks whom?",
    markerAssignHelp: "Choose markers inside each group only. Each player sees the official card they mark and their own check card.",
    markerByGroup: "Group markers",
    marks: "marks",
    course: "Course",
    tees: "Tees",
    formulaTitle: "Game format",
    formulaHelp: "Choose the scoring formula.",
    formula: "Format",
    scoringModeTitle: "Scoring mode",
    scoringModeHelp: "Choose who enters scores during the round.",
    centralized: "Centralized scoring",
    centralizedHelp: "One person enters all scores.",
    individual: "Individual scoring",
    individualHelp: "Each player enters only their own scores.",
    marker: "Marker mode",
    markerHelp: "Each player enters an official card and their own check card.",
    optionsTitle: "Game options",
    optionsHelp: "Enable only what you need to keep scoring simple.",
    putts: "Track putts",
    leaderboardVisible: "Live leaderboard visible",
    signature: "Cross-check and signature",
    digitalScorecard: "Digital scorecard",
    officialCard: "Official card",
    checkCard: "My check card",
    signCard: "Sign card",
    chouetteHelp: "Chouette: 3-player game, 6 points per hole. Three-way tie: 2/2/2. All different: 4/2/0. Two tied best scores: 3/3/0.",
    score: "Score",
    cards: "Cards",
    ranking: "Ranking",
    security: "Security",
  },
  ES: {
    tagline: "Juega con amigos. Resultados en vivo.",
    homeBadge: "Nueva partida con amigos",
    heroTitle: "Friends Golf Live",
    heroText: "Crea una partida de golf con amigos paso a paso y registra los resultados en vivo.",
    home: "Inicio",
    create: "Crear",
    createNewGame: "Crear nueva partida",
    synced: "Sincronizado",
    step: "Paso",
    next: "Siguiente",
    back: "Atrás",
    close: "Cerrar",
    validate: "Validar",
    startScoring: "Empezar puntuación",
    competitionTypeTitle: "¿Qué tipo de competición?",
    competitionTypeHelp: "Elige el contexto, el nombre y las fechas.",
    type: "Tipo",
    competitionName: "Nombre de la competición",
    startDate: "Fecha inicio",
    endDate: "Fecha fin",
    friendsCompetition: "Competición entre amigos",
    privateCompetition: "Competición privada",
    golfTrip: "Viaje de golf",
    matchplayCompetition: "Match play",
    ryderCupCompetition: "Ryder Cup / equipos",
    playerCountTitle: "¿Cuántos jugadores?",
    playerCountHelp: "Introduce el número de jugadores.",
    players: "Jugadores",
    playersTitle: "Introducir jugadores",
    playersHelp: "Introduce nombre e índice de cada jugador.",
    name: "Nombre",
    index: "Índice",
    roundsTitle: "¿Cuántas vueltas?",
    roundsHelp: "Elige el número de vueltas.",
    coursesTitle: "Seleccionar campo",
    coursesHelp: "Elige el campo y las salidas.",
    course: "Campo",
    tees: "Salidas",
    formulaTitle: "Formato de juego",
    formulaHelp: "Elige la fórmula de cálculo.",
    formula: "Formato",
    scoringModeTitle: "Modo de registro",
    scoringModeHelp: "Elige quién introduce los resultados.",
    centralized: "Registro centralizado",
    centralizedHelp: "Una persona introduce todos los resultados.",
    individual: "Registro individual",
    individualHelp: "Cada jugador introduce sus propios resultados.",
    marker: "Marcador oficial",
    markerHelp: "Cada jugador introduce una tarjeta oficial y una de verificación.",
    optionsTitle: "Opciones",
    optionsHelp: "Activa solo lo necesario.",
    putts: "Registrar putts",
    leaderboardVisible: "Clasificación en vivo",
    signature: "Verificación y firma",
    score: "Resultado",
    cards: "Tarjetas",
    ranking: "Clasificación",
    security: "Seguridad",
  },
  IT: {
    tagline: "Gioca con amici. Punteggi live.",
    homeBadge: "Nuova partita con amici",
    heroTitle: "Friends Golf Live",
    heroText: "Crea una partita di golf con amici passo dopo passo e inserisci i punteggi live.",
    home: "Home",
    create: "Crea",
    createNewGame: "Crea nuova partita",
    synced: "Sincronizzato",
    step: "Passo",
    next: "Avanti",
    back: "Indietro",
    close: "Chiudi",
    validate: "Conferma",
    startScoring: "Avvia punteggi",
    competitionTypeTitle: "Che tipo di competizione?",
    competitionTypeHelp: "Scegli contesto, nome e date.",
    type: "Tipo",
    competitionName: "Nome competizione",
    startDate: "Data inizio",
    endDate: "Data fine",
    friendsCompetition: "Competizione tra amici",
    privateCompetition: "Competizione privata",
    golfTrip: "Viaggio golf",
    matchplayCompetition: "Match play",
    ryderCupCompetition: "Ryder Cup / squadre",
    playerCountTitle: "Quanti giocatori?",
    playerCountHelp: "Inserisci il numero di giocatori.",
    players: "Giocatori",
    playersTitle: "Inserisci giocatori",
    playersHelp: "Inserisci nome e indice di ogni giocatore.",
    name: "Nome",
    index: "Indice",
    roundsTitle: "Quanti giri?",
    roundsHelp: "Scegli il numero di giri.",
    coursesTitle: "Seleziona il golf",
    coursesHelp: "Scegli campo e tee.",
    course: "Campo",
    tees: "Tee",
    formulaTitle: "Formula di gioco",
    formulaHelp: "Scegli la formula di calcolo.",
    formula: "Formula",
    scoringModeTitle: "Modalità punteggi",
    scoringModeHelp: "Scegli chi inserisce i punteggi.",
    centralized: "Inserimento centralizzato",
    centralizedHelp: "Una persona inserisce tutti i punteggi.",
    individual: "Inserimento individuale",
    individualHelp: "Ogni giocatore inserisce i propri punteggi.",
    marker: "Marcatore ufficiale",
    markerHelp: "Ogni giocatore inserisce scheda ufficiale e verifica.",
    optionsTitle: "Opzioni partita",
    optionsHelp: "Attiva solo ciò che serve.",
    putts: "Inserisci putt",
    leaderboardVisible: "Classifica live",
    signature: "Verifica e firma",
    score: "Punteggio",
    cards: "Schede",
    ranking: "Classifica",
    security: "Sicurezza",
  },
  DE: {
    tagline: "Mit Freunden spielen. Live scoren.",
    homeBadge: "Neue Runde mit Freunden",
    heroTitle: "Friends Golf Live",
    heroText: "Erstelle Schritt für Schritt eine Golfrunde mit Freunden und erfasse Scores live.",
    home: "Start",
    create: "Erstellen",
    createNewGame: "Neue Runde erstellen",
    synced: "Synchronisiert",
    step: "Schritt",
    next: "Weiter",
    back: "Zurück",
    close: "Schließen",
    validate: "Bestätigen",
    startScoring: "Scoring starten",
    competitionTypeTitle: "Welche Art Wettbewerb?",
    competitionTypeHelp: "Wähle Rahmen, Namen und Daten.",
    type: "Typ",
    competitionName: "Wettbewerbsname",
    startDate: "Startdatum",
    endDate: "Enddatum",
    friendsCompetition: "Freunde-Wettbewerb",
    privateCompetition: "Privater Wettbewerb",
    golfTrip: "Golfreise",
    matchplayCompetition: "Match Play",
    ryderCupCompetition: "Ryder Cup / Teams",
    playerCountTitle: "Wie viele Spieler?",
    playerCountHelp: "Gib die Anzahl der Spieler ein.",
    players: "Spieler",
    playersTitle: "Spieler eingeben",
    playersHelp: "Gib Namen und Handicap-Index ein.",
    name: "Name",
    index: "Index",
    roundsTitle: "Wie viele Runden?",
    roundsHelp: "Wähle die Anzahl der Runden.",
    coursesTitle: "Golfplatz auswählen",
    coursesHelp: "Wähle Platz und Abschläge.",
    course: "Platz",
    tees: "Abschläge",
    formulaTitle: "Spielform",
    formulaHelp: "Wähle die Wertungsform.",
    formula: "Formel",
    scoringModeTitle: "Scoring-Modus",
    scoringModeHelp: "Wähle, wer Scores erfasst.",
    centralized: "Zentrales Scoring",
    centralizedHelp: "Eine Person erfasst alle Scores.",
    individual: "Individuelles Scoring",
    individualHelp: "Jeder Spieler erfasst nur eigene Scores.",
    marker: "Marker-Modus",
    markerHelp: "Jeder Spieler erfasst offizielle Karte und Kontrollkarte.",
    optionsTitle: "Optionen",
    optionsHelp: "Aktiviere nur, was nötig ist.",
    putts: "Putts erfassen",
    leaderboardVisible: "Live-Rangliste sichtbar",
    signature: "Prüfung und Signatur",
    score: "Score",
    cards: "Karten",
    ranking: "Rangliste",
    security: "Sicherheit",
  },
};

const players = [
  { name: "Sophie Martin", index: 12.4, club: "Paris Country Club", role: "Marqueur" },
  { name: "Thomas Keller", index: 8.7, club: "Geneva Links", role: "Joueur" },
  { name: "Ines Duarte", index: 18.1, club: "Estoril Golf", role: "Joueur" },
  { name: "Marc Lefevre", index: 21.8, club: "Lyon Salvagny", role: "Admin" },
];

const leaderboard = [
  { name: "Thomas Keller", hcp: 9, score: 56, toPar: "-6", thru: 15, pts: 36 },
  { name: "Sophie Martin", hcp: 12, score: 61, toPar: "-1", thru: 16, pts: 33 },
  { name: "Ines Duarte", hcp: 18, score: 62, toPar: "E", thru: 15, pts: 31 },
  { name: "Marc Lefevre", hcp: 22, score: 68, toPar: "+2", thru: 16, pts: 28 },
  { name: "Nora Silva", hcp: 15, score: 70, toPar: "+4", thru: 16, pts: 26 },
  { name: "Hugo Bernard", hcp: 11, score: 72, toPar: "+6", thru: 15, pts: 24 },
];

const statsByRange = {
  today: { label: "Aujourd'hui", rounds: 1, average: 88.0, best: 88, allTime: 78, distribution: [0, 6, 42, 33, 19], counts: [0, 0, 2, 8, 6, 2] },
  round: { label: "Tour en cours", rounds: 1, average: 88.0, best: 88, allTime: 78, distribution: [0, 11, 44, 28, 17], counts: [0, 0, 2, 7, 5, 3] },
  competition: { label: "Competition", rounds: 4, average: 91.5, best: 83, allTime: 78, distribution: [6, 11, 44, 28, 11], counts: [0, 0, 7, 34, 22, 9] },
  month: { label: "Mois", rounds: 8, average: 93.2, best: 82, allTime: 78, distribution: [4, 9, 41, 31, 15], counts: [0, 0, 18, 84, 64, 29] },
  year: { label: "Annee", rounds: 20, average: 94.86, best: 83, allTime: 78, distribution: [6, 11, 44, 28, 11], counts: [0, 0, 84, 702, 1096, 495] },
  all: { label: "Depuis le debut", rounds: 52, average: 95.4, best: 78, allTime: 78, distribution: [5, 10, 40, 30, 15], counts: [1, 0, 221, 1820, 2460, 1040] },
};

const matchplayRows = [
  { red: "Sophie Martin", redHcp: 12, blue: "Thomas Keller", blueHcp: 9, status: "3 UP", thru: 8, side: "blue" },
  { red: "Ines Duarte", redHcp: 18, blue: "Marc Lefevre", blueHcp: 22, status: "1 UP", thru: 7, side: "red" },
  { red: "Nora Silva", redHcp: 15, blue: "Hugo Bernard", blueHcp: 11, status: "AS", thru: 5, side: "neutral" },
  { red: "Julia Moreau", redHcp: 20, blue: "Antoine Petit", blueHcp: 17, status: "2 UP", thru: 6, side: "blue" },
  { red: "Emma Parker", redHcp: 23, blue: "Tom Collins", blueHcp: 14, status: "AS", thru: "Final", side: "neutral" },
];

const flights = [
  { time: "09:10", marker: "Sophie", names: "Sophie, Thomas, Ines", status: "En cours" },
  { time: "09:20", marker: "Marc", names: "Marc, Julia, Antoine", status: "T6" },
  { time: "09:30", marker: "Nora", names: "Nora, Hugo, Samir", status: "Depart pret" },
];

const sampleScorecard = {
  player: "Thomas Keller",
  marker: "Sophie Martin",
  handicap: 22,
  course: "Golf de Chantilly - Vineuil",
  tee: "Jaunes",
  rating: 70.8,
  slope: 132,
  holes: [
    { hole: 1, par: 4, strokeIndex: 7, gross: 5, checkGross: 5 },
    { hole: 2, par: 5, strokeIndex: 3, gross: 6, checkGross: 6 },
    { hole: 3, par: 3, strokeIndex: 15, gross: 4, checkGross: 4 },
    { hole: 4, par: 4, strokeIndex: 1, gross: 5, checkGross: 5 },
    { hole: 5, par: 4, strokeIndex: 11, gross: 5, checkGross: 5 },
    { hole: 6, par: 4, strokeIndex: 5, gross: 4, checkGross: 5 },
    { hole: 7, par: 5, strokeIndex: 9, gross: 6, checkGross: 6 },
    { hole: 8, par: 3, strokeIndex: 17, gross: 4, checkGross: 4 },
    { hole: 9, par: 4, strokeIndex: 13, gross: 5, checkGross: 5 },
    { hole: 10, par: 4, strokeIndex: 8, gross: 5, checkGross: 5 },
    { hole: 11, par: 5, strokeIndex: 2, gross: 7, checkGross: 7 },
    { hole: 12, par: 3, strokeIndex: 18, gross: 4, checkGross: 4 },
    { hole: 13, par: 4, strokeIndex: 4, gross: 5, checkGross: 5 },
    { hole: 14, par: 4, strokeIndex: 14, gross: 6, checkGross: 6 },
    { hole: 15, par: 5, strokeIndex: 6, gross: 6, checkGross: 6 },
    { hole: 16, par: 4, strokeIndex: 12, gross: 5, checkGross: 5 },
    { hole: 17, par: 3, strokeIndex: 16, gross: 4, checkGross: 4 },
    { hole: 18, par: 4, strokeIndex: 10, gross: 5, checkGross: 5 },
  ],
};

function icon(name) {
  return `<span class="icon" aria-hidden="true">${icons[name]}</span>`;
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function t(key) {
  return translations[state.language]?.[key] || translations.FR[key] || key;
}

function getSupabaseConfig() {
  if (typeof window === "undefined") return null;
  return window.FRIENDS_GOLF_LIVE_SUPABASE || null;
}

function getSupabaseStatus() {
  const config = getSupabaseConfig();
  if (!config?.url || !config?.publishableKey) return { label: "Non configuree", detail: "Ajoutez l'URL Supabase et la cle publique.", ready: false };
  if (typeof window !== "undefined" && window.supabase?.createClient) {
    return { label: "Configuration prete", detail: config.url, ready: true };
  }
  return { label: "Configuration trouvee", detail: "Le client Supabase sera charge en ligne.", ready: true };
}

function getSupabaseClient() {
  if (typeof window === "undefined") return null;
  const config = getSupabaseConfig();
  if (!config?.url || !config?.publishableKey || !window.supabase?.createClient) return null;
  if (!window.friendsGolfLiveSupabase) {
    window.friendsGolfLiveSupabase = window.supabase.createClient(config.url, config.publishableKey);
  }
  return window.friendsGolfLiveSupabase;
}

function getSupabaseFunctionUrl(functionName) {
  const config = getSupabaseConfig();
  if (!config?.url) return null;
  return `${config.url.replace(/\/$/, "")}/functions/v1/${functionName}`;
}

function strokesReceivedForHole(playingHandicap, strokeIndex) {
  const handicap = Math.max(0, Number(playingHandicap) || 0);
  const base = Math.floor(handicap / 18);
  const remainder = handicap % 18;
  return base + (strokeIndex <= remainder ? 1 : 0);
}

function stablefordPoints(score, par) {
  if (score === "X" || score === "" || score === null || score === undefined) return 0;
  const numericScore = Number(score);
  if (!Number.isFinite(numericScore)) return 0;
  return Math.max(0, par + 2 - numericScore);
}

function scorecardRows(card = sampleScorecard) {
  return card.holes.map((hole) => {
    const strokes = strokesReceivedForHole(card.handicap, hole.strokeIndex);
    const netScore = Number(hole.gross) - strokes;
    return {
      ...hole,
      strokes,
      netScore,
      grossPoints: stablefordPoints(hole.gross, hole.par),
      netPoints: stablefordPoints(netScore, hole.par),
      mismatch: hole.gross !== hole.checkGross,
    };
  });
}

function scorecardTotals(rows) {
  return rows.reduce(
    (total, row) => ({
      par: total.par + row.par,
      gross: total.gross + Number(row.gross || 0),
      checkGross: total.checkGross + Number(row.checkGross || 0),
      strokes: total.strokes + row.strokes,
      grossPoints: total.grossPoints + row.grossPoints,
      netPoints: total.netPoints + row.netPoints,
    }),
    { par: 0, gross: 0, checkGross: 0, strokes: 0, grossPoints: 0, netPoints: 0 }
  );
}

function setView(view) {
  state.view = view;
  render();
}

function setFormat(format) {
  state.format = format;
  render();
}

function setStatsRange(range) {
  state.statsRange = range;
  render();
}

function setLeaderboardRound(round) {
  state.leaderboardRound = Math.max(1, Math.min(Number(state.setup.roundCount) || 1, Number(round) || 1));
  render();
}

function isRyderCupMode() {
  return state.setup.gameFormula === "ryder-cup";
}

function isMatchplayLeaderboardMode() {
  return ["match-play", "ryder-cup"].includes(state.setup.gameFormula);
}

function allRoundCoursesSelected() {
  normalizeRoundCourses();
  return state.roundCourses.every((course) => Boolean(course.selectedCourseId && course.courseName));
}

function setLanguage(language) {
  state.language = language;
  state.languageMenuOpen = false;
  render();
}

function toggleLanguageMenu() {
  state.languageMenuOpen = !state.languageMenuOpen;
  render();
}

function openWizard() {
  state.wizardOpen = true;
  state.wizardStep = 0;
  render();
}

function closeWizard() {
  state.wizardOpen = false;
  render();
}

function setWizardStep(step) {
  const steps = getWizardSteps();
  state.wizardStep = Math.max(0, Math.min(steps.length - 1, step));
  render();
}

function updateSetup(field, value) {
  state.setup[field] = value;
  if (field === "competitionType") {
    state.setup.competitionType = value;
  }
  if (field === "gameFormula") {
    if (value === "match-play") {
      state.setup.playerCount = 2;
      state.setup.groupSize = 2;
    }
  }
  if (field === "playerCount") {
    normalizeSetupPlayers();
    state.groupsGeneratedForCount = 0;
  }
  if (["competitionType", "gameFormula"].includes(field)) {
    normalizeSetupPlayers();
    state.groupsGeneratedForCount = 0;
  }
  if (field === "roundCount") normalizeRoundCourses();
}

function normalizeSetupPlayers() {
  const target = Math.max(1, Math.min(120, Number(state.setup.playerCount) || 1));
  state.setup.playerCount = target;
  while (state.setupPlayers.length < target) {
    state.setupPlayers.push({ name: "", index: "" });
  }
  state.setupPlayers = state.setupPlayers.slice(0, target);
}

function normalizeRoundCourses() {
  const target = Math.max(1, Math.min(4, Number(state.setup.roundCount) || 1));
  while (state.roundCourses.length < target) {
    state.roundCourses.push({ courseName: "", tees: "Jaunes", selectedCourseId: "" });
  }
  state.roundCourses = state.roundCourses.slice(0, target);
}

function playerName(playerIndex) {
  return state.setupPlayers[playerIndex]?.name || `${t("players")} ${playerIndex + 1}`;
}

function buildMarkerAssignments(playerIndexes) {
  return playerIndexes.map((playerIndex, position) => ({
    playerIndex,
    marksIndex: playerIndexes.length > 1 ? playerIndexes[(position + 1) % playerIndexes.length] : playerIndex,
  }));
}

function syncGroupMarkerAssignments(group) {
  const players = group.playerIndexes;
  const existing = Array.isArray(group.markerAssignments) ? group.markerAssignments : [];
  group.markerAssignments = players.map((playerIndex, position) => {
    const previous = existing.find((item) => item.playerIndex === playerIndex);
    const fallback = players.length > 1 ? players[(position + 1) % players.length] : playerIndex;
    return {
      playerIndex,
      marksIndex: players.includes(Number(previous?.marksIndex)) ? Number(previous.marksIndex) : fallback,
    };
  });
}

function syncFlatMarkerAssignments() {
  state.markerAssignments = state.groups.flatMap((group) => group.markerAssignments || []);
}

function teeTimeForGroup(groupIndex) {
  const minutes = 9 * 60 + 10 + groupIndex * 10;
  const hour = String(Math.floor(minutes / 60)).padStart(2, "0");
  const minute = String(minutes % 60).padStart(2, "0");
  return `${hour}:${minute}`;
}

function seededShuffle(items, seed) {
  return [...items]
    .map((item, index) => ({ item, weight: Math.sin((index + 1) * 999 + seed * 37) }))
    .sort((a, b) => a.weight - b.weight)
    .map((entry) => entry.item);
}

function pairKey(a, b) {
  return [Math.min(a, b), Math.max(a, b)].join("-");
}

function generateBalancedRoundGroups(indexes, size, roundCount) {
  const pairCounts = new Map();
  const rounds = [];
  for (let roundIndex = 0; roundIndex < roundCount; roundIndex += 1) {
    const available = seededShuffle(indexes, roundIndex + 1);
    const roundGroups = [];
    while (available.length) {
      const group = [available.shift()];
      while (group.length < size && available.length) {
        let bestPosition = 0;
        let bestScore = Infinity;
        available.forEach((candidate, position) => {
          const score = group.reduce((sum, playerIndex) => sum + (pairCounts.get(pairKey(candidate, playerIndex)) || 0), 0);
          if (score < bestScore) {
            bestScore = score;
            bestPosition = position;
          }
        });
        group.push(available.splice(bestPosition, 1)[0]);
      }
      roundGroups.push(group);
      group.forEach((playerIndex, firstIndex) => {
        group.slice(firstIndex + 1).forEach((otherIndex) => {
          const key = pairKey(playerIndex, otherIndex);
          pairCounts.set(key, (pairCounts.get(key) || 0) + 1);
        });
      });
    }
    rounds.push(roundGroups);
  }
  return rounds;
}

function applyGeneratedRoundGroups(roundGroups) {
  state.roundGroups = roundGroups.map((round, roundIndex) =>
    round.map((playerIndexes, groupIndex) => ({
      id: `r${roundIndex + 1}-g${groupIndex + 1}`,
      name: `${t("group")} ${groupIndex + 1}`,
      playerIndexes,
      teeTime: teeTimeForGroup(groupIndex),
      markerAssignments: buildMarkerAssignments(playerIndexes),
    }))
  );
  state.groups = state.roundGroups[0] || [];
  state.groupsGeneratedForCount = state.setupPlayers.length;
  syncFlatMarkerAssignments();
}

function normalizeGroups() {
  normalizeSetupPlayers();
  const filledIndexes = state.setupPlayers.map((_, index) => index);
  if (!state.groups.length) state.groups = [{ id: "g1", name: `${t("group")} 1`, playerIndexes: filledIndexes.slice(0, 4), teeTime: "09:10", markerAssignments: [] }];
  const assigned = new Set(state.groups.flatMap((group) => group.playerIndexes));
  filledIndexes.forEach((index) => {
    if (!assigned.has(index)) {
      const group = state.groups[state.groups.length - 1] || state.groups[0];
      group.playerIndexes.push(index);
    }
  });
  state.groups = state.groups
    .map((group, index) => ({
      ...group,
      name: group.name || `${t("group")} ${index + 1}`,
      teeTime: group.teeTime || teeTimeForGroup(index),
      playerIndexes: [...new Set(group.playerIndexes.filter((playerIndex) => filledIndexes.includes(playerIndex)))],
    }))
    .filter((group) => group.playerIndexes.length || state.groups.length === 1);
  state.groups.forEach(syncGroupMarkerAssignments);
  syncFlatMarkerAssignments();
}

function setGroupSize(size) {
  state.setup.groupSize = Math.max(2, Math.min(4, Number(size) || 3));
  state.groupsGeneratedForCount = 0;
  render();
}

function generateGroupsBySize() {
  normalizeSetupPlayers();
  const size = Math.max(2, Math.min(4, Number(state.setup.groupSize) || 3));
  const indexes = state.setupPlayers.map((_, index) => index);
  applyGeneratedRoundGroups(generateBalancedRoundGroups(indexes, size, Number(state.setup.roundCount) || 1));
  render();
}

function ensureGroupsMatchPlayers() {
  normalizeSetupPlayers();
  const shouldRegenerate = state.groupsGeneratedForCount !== state.setupPlayers.length || !state.groups.length;
  if (!shouldRegenerate) return;
  const size = Math.max(2, Math.min(4, Number(state.setup.groupSize) || 3));
  const indexes = state.setupPlayers.map((_, index) => index);
  applyGeneratedRoundGroups(generateBalancedRoundGroups(indexes, size, Number(state.setup.roundCount) || 1));
}

function normalizeTeams() {
  normalizeSetupPlayers();
  if (isRyderCupMode()) {
    const indexes = state.setupPlayers.map((_, index) => index);
    const split = Math.ceil(indexes.length / 2);
    const previous = Array.isArray(state.teams) ? state.teams : [];
    state.teams = [
      { id: "red", name: previous[0]?.name || "Team Reds", playerIndexes: previous[0]?.playerIndexes?.length ? previous[0].playerIndexes.filter((item) => indexes.includes(item)) : indexes.slice(0, split) },
      { id: "blue", name: previous[1]?.name || "Team Blues", playerIndexes: previous[1]?.playerIndexes?.length ? previous[1].playerIndexes.filter((item) => indexes.includes(item)) : indexes.slice(split) },
    ];
    return;
  }
  const size = Number(state.setup.scrambleSize) || 2;
  const indexes = state.setupPlayers.map((_, index) => index);
  const previous = Array.isArray(state.teams) ? state.teams : [];
  state.teams = [];
  for (let index = 0; index < indexes.length; index += size) {
    const previousTeam = previous[state.teams.length];
    state.teams.push({ id: `t${state.teams.length + 1}`, name: previousTeam?.name || `${t("team")} ${state.teams.length + 1}`, playerIndexes: previousTeam?.playerIndexes?.length ? previousTeam.playerIndexes.filter((item) => indexes.includes(item)).slice(0, size) : indexes.slice(index, index + size) });
  }
}

function normalizeMarkerAssignments() {
  normalizeGroups();
}

function updatePlayerSetup(index, field, value) {
  normalizeSetupPlayers();
  state.setupPlayers[index][field] = value;
}

function updateRoundCourse(index, field, value) {
  normalizeRoundCourses();
  state.roundCourses[index][field] = value;
  if (field === "courseName") {
    state.courseSearchDrafts[index] = value;
    state.roundCourses[index].selectedCourseId = "";
  }
}

function selectCourseForRound(index, courseId) {
  normalizeRoundCourses();
  const course = [...golfSuggestions, ...(state.courseSearchResults[index] || [])].find((item) => item.id === courseId);
  if (!course) return;
  state.roundCourses[index].selectedCourseId = course.id;
  state.roundCourses[index].courseName = course.name;
  if (course.tees?.length) state.roundCourses[index].availableTees = course.tees;
  if (course.rawData) state.roundCourses[index].rawData = course.rawData;
}

function defaultManualCourseForm(index) {
  const current = state.roundCourses[index] || {};
  return {
    courseName: current.courseName || "",
    city: "",
    country: "France",
    tee: current.tees || "Jaunes",
    rating: "",
    slope: "",
    pars: "4,5,3,4,4,4,5,3,4,4,5,3,4,4,5,4,3,4",
    indexes: "7,3,15,1,11,5,9,17,13,8,2,18,4,14,6,12,16,10",
  };
}

function toggleManualCourseForm(index) {
  state.manualCourseOpen[index] = !state.manualCourseOpen[index];
  if (!state.manualCourseForms[index]) state.manualCourseForms[index] = defaultManualCourseForm(index);
  render();
}

function updateManualCourseForm(index, field, value) {
  if (!state.manualCourseForms[index]) state.manualCourseForms[index] = defaultManualCourseForm(index);
  state.manualCourseForms[index][field] = value;
}

function parseNumberList(value, fallback) {
  const parsed = String(value || "")
    .split(",")
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item));
  return parsed.length === 18 ? parsed : fallback;
}

async function saveManualCourse(index) {
  const form = state.manualCourseForms[index] || defaultManualCourseForm(index);
  const pars = parseNumberList(form.pars, [4, 5, 3, 4, 4, 4, 5, 3, 4, 4, 5, 3, 4, 4, 5, 4, 3, 4]);
  const strokeIndexes = parseNumberList(form.indexes, [7, 3, 15, 1, 11, 5, 9, 17, 13, 8, 2, 18, 4, 14, 6, 12, 16, 10]);
  const manualId = `manual-${Date.now()}`;
  const course = {
    id: manualId,
    providerId: manualId,
    name: form.courseName || "Golf manuel",
    clubName: form.courseName || "Golf manuel",
    location: [form.city, form.country].filter(Boolean).join(", ") || "Ajoute manuellement",
    par: pars.reduce((sum, par) => sum + par, 0),
    rating: form.rating ? Number(form.rating) : null,
    slope: form.slope ? Number(form.slope) : null,
    distance: "Base interne",
    tees: [{ name: form.tee, rating: form.rating, slope: form.slope }],
    rawData: { manual: true, pars, strokeIndexes },
  };

  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from("courses")
        .insert({
          provider: "manual",
          provider_course_id: manualId,
          club_name: course.clubName,
          course_name: course.name,
          city: form.city || null,
          country: form.country || null,
          par: course.par,
          rating: course.rating,
          slope: course.slope,
          tees: course.tees,
          raw_data: course.rawData,
        })
        .select("id")
        .single();
      if (error) throw error;
      const holes = pars.map((par, holeIndex) => ({
        course_id: data.id,
        hole_number: holeIndex + 1,
        par,
        stroke_index: strokeIndexes[holeIndex],
      }));
      const { error: holesError } = await client.from("course_holes").insert(holes);
      if (holesError) throw holesError;
      course.id = `manual-${data.id}`;
      course.providerId = data.id;
      state.courseApiStatus[index] = "Golf ajoute dans la base Supabase.";
    } catch (error) {
      state.courseApiStatus[index] = `Sauvegarde Supabase impossible : ${error.message || "erreur"}. Golf garde localement.`;
    }
  } else {
    state.courseApiStatus[index] = "Supabase indisponible. Golf garde localement pour cette session.";
  }

  golfSuggestions.push(course);
  state.courseSearchResults[index] = [course];
  state.roundCourses[index].selectedCourseId = course.id;
  state.roundCourses[index].courseName = course.name;
  state.roundCourses[index].tees = form.tee;
  state.manualCourseOpen[index] = false;
  render();
}

function requestLocationCourses() {
  state.locationPermission = "granted";
  render();
}

function searchCourseInput(index, value) {
  updateRoundCourse(index, "courseName", value);
  const card = document.querySelector(`[data-course-card="${index}"]`);
  if (!card) return;
  const target = card.querySelector("[data-course-suggestions]");
  const status = card.querySelector("[data-course-api-status]");
  if (target) target.innerHTML = renderCourseSuggestions(index);
  if (status) status.textContent = "Recherche locale, puis API...";
  clearTimeout(state.courseSearchTimers[index]);
  state.courseSearchTimers[index] = setTimeout(() => loadGolfApiResults(index, value), 450);
}

function courseMatches(index) {
  const apiResults = state.courseSearchResults[index] || [];
  if (apiResults.length) return apiResults;
  return [];
}

function renderCourseSuggestions(index) {
  return courseMatches(index).map((course) => `
    <button class="course-option ${state.roundCourses[index].selectedCourseId === course.id ? "active" : ""}" onclick="selectCourseForRound(${index}, '${course.id}'); render();">
      <strong>${course.name}</strong>
      <span>${course.location} · Par ${course.par || "-"} · ${course.distance || "API"}</span>
    </button>
  `).join("");
}

async function loadGolfApiResults(index, value) {
  const query = String(value || "").trim();
  const status = document.querySelector(`[data-course-card="${index}"] [data-course-api-status]`);
  if (query.length < 2) {
    state.courseApiStatus[index] = "Tapez au moins 2 lettres pour interroger l'API.";
    if (status) status.textContent = state.courseApiStatus[index];
    return;
  }
  const functionName = getSupabaseConfig()?.golfSearchFunction || "search-golf-courses";
  const functionUrl = getSupabaseFunctionUrl(functionName);
  const config = getSupabaseConfig();
  const localCourses = await loadManualCoursesFromSupabase(query);
  if (localCourses.length) {
    state.courseSearchResults[index] = localCourses;
    state.courseApiStatus[index] = "Resultats de votre base Supabase.";
    const card = document.querySelector(`[data-course-card="${index}"]`);
    const target = card?.querySelector("[data-course-suggestions]");
    const nextStatus = card?.querySelector("[data-course-api-status]");
    if (target) target.innerHTML = renderCourseSuggestions(index);
    if (nextStatus) nextStatus.textContent = state.courseApiStatus[index];
    return;
  }
  if (!functionUrl || !config?.publishableKey) {
    state.courseApiStatus[index] = "Fonction API golf non configuree.";
    if (status) status.textContent = state.courseApiStatus[index];
    return;
  }
  state.courseApiStatus[index] = "Recherche API golf...";
  if (status) status.textContent = state.courseApiStatus[index];
  try {
    const response = await fetch(`${functionUrl}?query=${encodeURIComponent(query)}`, {
      headers: {
        apikey: config.publishableKey,
        Authorization: `Bearer ${config.publishableKey}`,
      },
    });
    if (!response.ok) throw new Error(`API ${response.status}`);
    const payload = await response.json();
    state.courseSearchResults[index] = Array.isArray(payload.courses) ? payload.courses : [];
    state.courseApiStatus[index] = state.courseSearchResults[index].length ? "Resultats GolfCourseAPI" : "Aucun golf trouve dans l'API.";
  } catch (error) {
    state.courseSearchResults[index] = [];
    state.courseApiStatus[index] = "API golf indisponible ou aucun resultat. Essayez un nom plus precis ou scannez une carte de score.";
  }
  const card = document.querySelector(`[data-course-card="${index}"]`);
  const target = card?.querySelector("[data-course-suggestions]");
  const nextStatus = card?.querySelector("[data-course-api-status]");
  if (target) target.innerHTML = renderCourseSuggestions(index);
  if (nextStatus) nextStatus.textContent = state.courseApiStatus[index];
}

function handleScorecardPhoto(index, input) {
  const file = input.files?.[0];
  if (!file) return;
  state.scorecardScanStatus[index] = `Photo recue : ${file.name}. Analyse automatique a connecter au service OCR/vision.`;
  state.courseApiStatus[index] = "Carte de score importee. Prochaine etape : extraction automatique par OCR/vision.";
  render();
}

async function loadManualCoursesFromSupabase(query) {
  const client = getSupabaseClient();
  if (!client) return [];
  const { data, error } = await client
    .from("courses")
    .select("id, club_name, course_name, city, country, par, rating, slope, tees, raw_data")
    .or(`course_name.ilike.%${query}%,club_name.ilike.%${query}%,city.ilike.%${query}%,country.ilike.%${query}%`)
    .limit(8);
  if (error || !Array.isArray(data)) return [];
  return data.map((course) => ({
    id: `manual-${course.id}`,
    providerId: course.id,
    name: course.course_name,
    clubName: course.club_name || course.course_name,
    location: [course.city, course.country].filter(Boolean).join(", ") || "Base Supabase",
    par: course.par,
    rating: course.rating,
    slope: course.slope,
    distance: "Base interne",
    tees: course.tees || [],
    rawData: course.raw_data || {},
  }));
}

function toggleGroupPlayer(groupIndex, playerIndex) {
  normalizeGroups();
  const group = state.groups[groupIndex];
  if (!group) return;
  if (group.playerIndexes.includes(playerIndex)) {
    group.playerIndexes = group.playerIndexes.filter((item) => item !== playerIndex);
  } else {
    state.groups.forEach((item, index) => {
      if (index !== groupIndex) item.playerIndexes = item.playerIndexes.filter((candidate) => candidate !== playerIndex);
    });
    group.playerIndexes.push(playerIndex);
  }
  state.groups.forEach(syncGroupMarkerAssignments);
  syncGroupMarkerAssignments(group);
  syncFlatMarkerAssignments();
  render();
}

function updateGroup(groupIndex, field, value) {
  normalizeGroups();
  state.groups[groupIndex][field] = value;
}

function updateGroupPlayerSlot(groupIndex, slotIndex, playerIndex) {
  normalizeGroups();
  const group = state.groups[groupIndex];
  if (!group) return;
  const numericPlayerIndex = Number(playerIndex);
  state.groups.forEach((candidateGroup) => {
    candidateGroup.playerIndexes = candidateGroup.playerIndexes.filter((existing) => existing !== numericPlayerIndex);
  });
  group.playerIndexes[slotIndex] = numericPlayerIndex;
  group.playerIndexes = [...new Set(group.playerIndexes)].filter((item) => Number.isFinite(item));
  syncGroupMarkerAssignments(group);
  syncFlatMarkerAssignments();
  render();
}

function addGroup() {
  state.groups.push({ id: `g${Date.now()}`, name: `${t("group")} ${state.groups.length + 1}`, playerIndexes: [], teeTime: teeTimeForGroup(state.groups.length), markerAssignments: [] });
  render();
}

function setScrambleSize(size) {
  state.setup.scrambleSize = size;
  normalizeTeams();
  render();
}

function updateTeamName(teamIndex, value) {
  normalizeTeams();
  if (state.teams[teamIndex]) state.teams[teamIndex].name = value;
  render();
}

function updateTeamPlayer(teamIndex, slotIndex, playerIndex) {
  normalizeTeams();
  state.teams[teamIndex].playerIndexes[slotIndex] = Number(playerIndex);
  render();
}

function updateAccount(field, value) {
  state.account[field] = value;
}

function createAccount() {
  const required = ["firstName", "lastName", "email", "country", "password"];
  const missing = required.filter((field) => !String(state.account[field] || "").trim());
  if (missing.length) {
    state.saveStatus = { type: "warning", message: "Completez prenom, nom, email, pays et mot de passe pour creer le compte." };
    render();
    return;
  }
  state.account.signedIn = true;
  state.saveStatus = { type: "success", message: "Compte cree localement. Prochaine etape : branchement Supabase Auth securise." };
  render();
}

function updateMarkerAssignment(groupIndex, playerIndex, marksIndex) {
  normalizeMarkerAssignments();
  const group = state.groups[groupIndex];
  const assignment = group?.markerAssignments?.find((item) => item.playerIndex === playerIndex);
  if (assignment) assignment.marksIndex = Number(marksIndex);
  syncFlatMarkerAssignments();
}

async function saveCompetitionToSupabase() {
  const client = getSupabaseClient();
  if (!client) {
    state.saveStatus = { type: "warning", message: "Supabase n'est pas encore disponible. La partie reste locale pour l'instant." };
    return false;
  }

  state.savingSetup = true;
  state.saveStatus = { type: "info", message: "Sauvegarde Supabase en cours..." };
  render();

  try {
    const competitionPayload = {
      name: state.setup.competitionName || "Friends Golf Live",
      competition_type: state.setup.competitionType || "friends",
      starts_on: state.setup.startDate || null,
      ends_on: state.setup.endDate || null,
      game_formula: state.setup.gameFormula || "stableford-net",
      scoring_mode: state.scoringMode || "marker",
      putts_enabled: Boolean(state.puttsEnabled),
    };
    const { data: competition, error: competitionError } = await client
      .from("competitions")
      .insert(competitionPayload)
      .select("id")
      .single();
    if (competitionError) throw competitionError;

    const playerPayloads = state.setupPlayers.map((player, index) => ({
      competition_id: competition.id,
      display_name: player.name || `${t("players")} ${index + 1}`,
      playing_index: player.index === "" ? null : Number(player.index),
    }));
    const { data: players, error: playersError } = await client
      .from("players")
      .insert(playerPayloads)
      .select("id");
    if (playersError) throw playersError;

    const roundPayloads = state.roundCourses.map((course, index) => ({
      competition_id: competition.id,
      round_number: index + 1,
      course_name: course.courseName || state.setup.courseName || null,
      tees: course.tees || state.setup.tees || null,
    }));
    const { data: rounds, error: roundsError } = await client
      .from("rounds")
      .insert(roundPayloads)
      .select("id, round_number");
    if (roundsError) throw roundsError;

    const firstRound = rounds.find((round) => Number(round.round_number) === 1) || rounds[0];
    const groupPayloads = state.groups.map((group) => ({
      competition_id: competition.id,
      round_id: firstRound?.id || null,
      name: group.name,
      tee_time: group.teeTime || null,
    }));
    const { data: groups, error: groupsError } = await client
      .from("groups")
      .insert(groupPayloads)
      .select("id");
    if (groupsError) throw groupsError;

    const groupPlayerPayloads = state.groups.flatMap((group, groupIndex) =>
      group.playerIndexes.map((playerIndex, position) => ({
        group_id: groups[groupIndex].id,
        player_id: players[playerIndex].id,
        position: position + 1,
      }))
    );
    if (groupPlayerPayloads.length) {
      const { error: groupPlayersError } = await client.from("group_players").insert(groupPlayerPayloads);
      if (groupPlayersError) throw groupPlayersError;
    }

    const markerPayloads = state.groups.flatMap((group, groupIndex) =>
      (group.markerAssignments || []).map((assignment) => ({
        competition_id: competition.id,
        round_id: firstRound?.id || null,
        group_id: groups[groupIndex].id,
        marker_player_id: players[assignment.playerIndex].id,
        marked_player_id: players[assignment.marksIndex].id,
      }))
    );
    if (markerPayloads.length) {
      const { error: markersError } = await client.from("marker_assignments").insert(markerPayloads);
      if (markersError) throw markersError;
    }

    state.supabaseIds = {
      competitionId: competition.id,
      playerIds: players.map((player) => player.id),
      roundIds: rounds.map((round) => round.id),
      groupIds: groups.map((group) => group.id),
    };
    state.saveStatus = { type: "success", message: "Partie sauvegardee dans Supabase." };
    return true;
  } catch (error) {
    state.saveStatus = { type: "warning", message: `Erreur Supabase : ${error.message || "sauvegarde impossible"}` };
    return false;
  } finally {
    state.savingSetup = false;
    render();
  }
}

async function nextWizardStep() {
  normalizeSetupPlayers();
  normalizeRoundCourses();
  normalizeGroups();
  if (String(state.setup.gameFormula).includes("scramble") || isRyderCupMode()) normalizeTeams();
  if (state.scoringMode === "marker") normalizeMarkerAssignments();
  const steps = getWizardSteps();
  const currentStep = steps[state.wizardStep];
  if (currentStep === "course" && !allRoundCoursesSelected()) {
    state.saveStatus = { type: "warning", message: "Selectionnez un parcours dans les resultats pour chaque tour avant de continuer." };
    render();
    return;
  }
  if (state.wizardStep === steps.length - 1) {
    await saveCompetitionToSupabase();
    state.wizardOpen = false;
    state.view = "score";
  } else {
    state.wizardStep += 1;
  }
  render();
}

function setScoringMode(scoringMode) {
  state.scoringMode = scoringMode;
  render();
}

function setPuttsEnabled(enabled) {
  state.puttsEnabled = enabled;
  if (!enabled && state.activeScore?.field === "putts") {
    state.activeScore = { playerKey: state.activeScore.playerKey, field: "gross" };
  }
  render();
}

function visibleScoreEntries() {
  const entries = Object.entries(state.scores);
  if (state.scoringMode === "centralized") return entries;
  if (state.scoringMode === "individual") return entries.filter(([, item]) => item.cardRole === "verification");
  return entries
    .filter(([, item]) => ["official", "verification"].includes(item.cardRole))
    .sort(([, a], [, b]) => (a.cardRole === "official" ? -1 : 0) - (b.cardRole === "official" ? -1 : 0));
}

function scoreKeys() {
  const visibleKeys = visibleScoreEntries().map(([key]) => key);
  return visibleKeys.length ? visibleKeys : Object.keys(state.scores);
}

function isActiveScore(playerKey, field) {
  return state.activeScore?.playerKey === playerKey && state.activeScore?.field === field;
}

function setActiveScore(playerKey, field) {
  state.activeScore = { playerKey, field };
  render();
}

function updatePlayerPoints(playerKey) {
  const gross = state.scores[playerKey].gross;
  state.scores[playerKey].points = Number.isFinite(gross) ? Math.max(0, 9 - gross) : 0;
}

function recordScoreEvent(type, playerKey, field, previousValue, nextValue) {
  state.scoreEvents.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    at: new Date().toISOString(),
    type,
    playerKey,
    playerName: state.scores[playerKey]?.name || playerKey,
    field,
    previousValue,
    nextValue,
    hole: state.hole,
    source: "local-device",
  });
  state.scoreEvents = state.scoreEvents.slice(0, 20);
}

function advanceActiveScore() {
  const active = state.activeScore;
  if (!active) return;
  if (active.field === "gross" && state.puttsEnabled) {
    state.activeScore = { playerKey: active.playerKey, field: "putts" };
    return;
  }
  const keys = scoreKeys();
  const currentIndex = keys.indexOf(active.playerKey);
  const nextKey = keys[currentIndex + 1];
  state.activeScore = nextKey ? { playerKey: nextKey, field: "gross" } : { playerKey: keys[0], field: "gross" };
}

function keypadScore(value) {
  const active = state.activeScore;
  if (!active) return;
  if (active.field === "gross" && value === 0) return;
  const previousValue = state.scores[active.playerKey][active.field];
  state.scores[active.playerKey][active.field] = value;
  recordScoreEvent("score_update", active.playerKey, active.field, previousValue, value);
  updatePlayerPoints(active.playerKey);
  advanceActiveScore();
  render();
}

function abandonActiveScore() {
  const active = state.activeScore;
  if (!active || active.field !== "gross") return;
  const previousValue = state.scores[active.playerKey].gross;
  state.scores[active.playerKey].gross = "X";
  state.scores[active.playerKey].putts = 0;
  state.scores[active.playerKey].points = 0;
  recordScoreEvent("abandon", active.playerKey, "gross", previousValue, "X");
  const keys = scoreKeys();
  const currentIndex = keys.indexOf(active.playerKey);
  const nextKey = keys[currentIndex + 1];
  state.activeScore = nextKey ? { playerKey: nextKey, field: "gross" } : { playerKey: keys[0], field: "gross" };
  render();
}

function clearActiveScore() {
  const active = state.activeScore;
  if (!active) return;
  const previousValue = state.scores[active.playerKey][active.field];
  state.scores[active.playerKey][active.field] = active.field === "gross" ? "" : 0;
  recordScoreEvent("score_clear", active.playerKey, active.field, previousValue, state.scores[active.playerKey][active.field]);
  updatePlayerPoints(active.playerKey);
  render();
}

function scoreEntryContext() {
  normalizeGroups();
  normalizeRoundCourses();
  const roundIndex = 0;
  const course = state.roundCourses[roundIndex] || { courseName: state.setup.courseName, tees: state.setup.tees };
  const group = state.groups.find((item) => item.playerIndexes.length) || state.groups[0];
  const assignment = group?.markerAssignments?.[0];
  const marker = assignment ? playerName(assignment.playerIndex) : state.scores.sophie.name;
  const marked = assignment ? playerName(assignment.marksIndex) : state.scores.thomas.name;
  const groupPlayers = group?.playerIndexes?.length ? group.playerIndexes.map(playerName) : Object.values(state.scores).map((item) => item.name);
  return {
    roundNumber: roundIndex + 1,
    roundCount: Math.max(1, Number(state.setup.roundCount) || 1),
    courseName: course.courseName || state.setup.courseName || "Golf a selectionner",
    teeName: course.tees || state.setup.tees || "Depart",
    groupName: group?.name || "Partie 1",
    marker,
    marked,
    groupPlayers,
  };
}

function validateHoleAndAdvance() {
  const active = state.activeScore || { playerKey: scoreKeys()[0], field: "gross" };
  recordScoreEvent("hole_validate", active.playerKey, active.field, state.hole, state.hole);
  state.roundValidated = false;
  if (state.hole >= 18) {
    validateRound();
    return;
  }
  state.hole += 1;
  state.activeScore = { playerKey: scoreKeys()[0], field: "gross" };
  render();
}

function validateRound() {
  const active = state.activeScore || { playerKey: scoreKeys()[0], field: "gross" };
  recordScoreEvent("round_validate", active.playerKey, active.field, state.hole, "Tour valide");
  state.roundValidated = true;
  state.saveStatus = { type: "success", message: "Tour valide. Le leaderboard et l'historique sont mis a jour." };
  render();
}

function renderTopbar() {
  const activeLanguage = languages.find((language) => language.code === state.language) || languages[0];
  return `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <div class="brand-mark logo-mark"><img src="fgl-logo-cutout.png" alt="FGL" /></div>
          <div>
            <h1>Friends Golf Live</h1>
            <span>${t("tagline")}</span>
          </div>
        </div>
        <div class="status">
          <div class="language-menu" aria-label="Langue">
            <button class="language-current" title="${activeLanguage.label}" onclick="toggleLanguageMenu()">${activeLanguage.flag}</button>
            <div class="language-options ${state.languageMenuOpen ? "open" : ""}">
              ${languages.map((language) => `
                <button class="${state.language === language.code ? "active" : ""}" title="${language.label}" onclick="setLanguage('${language.code}')">
                  <span>${language.flag}</span>
                  <strong>${language.code}</strong>
                </button>
              `).join("")}
            </div>
          </div>
          <span class="pill blue">Staging</span>
          <span class="pill">${t("synced")}</span>
        </div>
      </div>
    </header>
  `;
}

function renderDashboard() {
  return `
    <section class="hero home-single">
      <div class="hero-main">
        <div></div>
      </div>
      <div class="home-action-panel">
        <img class="home-logo" src="fgl-logo-cutout.png" alt="Friends Golf Live - FGL" />
        <p>${t("heroText")}</p>
        <button class="button primary hero-cta" onclick="openWizard()">${icon("plus")}${t("createNewGame")}</button>
      </div>
    </section>
  `;
}

function getWizardSteps() {
  const steps = ["competition", "rounds", "course", "formula", "playerCount", "players"];
  if (String(state.setup.gameFormula).includes("scramble") || isRyderCupMode()) steps.push("teams");
  steps.push("groups", "scoringMode");
  if (state.scoringMode === "marker") steps.push("markerAssign");
  steps.push("options");
  return steps;
}

const gameFormulas = [
  ["stableford-net", "Stableford net"],
  ["stableford-gross", "Stableford brut"],
  ["stroke-net", "Stroke play net"],
  ["stroke-gross", "Stroke play brut"],
  ["match-play", "Match play"],
  ["ryder-cup", "Ryder Cup - equipes"],
  ["chouette", "Chouette - 3 joueurs / 6 points"],
  ["skins", "Skins game"],
  ["scramble", "Scramble"],
  ["best-ball", "Best ball"],
  ["greensome", "Greensome"],
  ["foursome", "Foursome"],
  ["custom-points", "Classement par points maison"],
];

const formulaDescriptions = {
  "stableford-net": "Stableford net : les points sont calcules apres application des coups rendus trou par trou.",
  "stableford-gross": "Stableford brut : les points sont calcules uniquement avec le score joue, sans coups rendus.",
  "stroke-net": "Stroke play net : total des coups joues moins les coups rendus.",
  "stroke-gross": "Stroke play brut : total des coups joues, sans correction d'index.",
  "match-play": "Match play : chaque trou se gagne, se perd ou se partage. Le score se compte en trous.",
  "ryder-cup": "Ryder Cup : deux equipes s'affrontent en plusieurs matchs, souvent sur 3 tours. Le classement affiche les matchs, le tour selectionne et le score cumule par equipe.",
  chouette: "Chouette : partie a 3 joueurs, 6 points par trou selon les scores compares.",
  skins: "Skins game : chaque trou vaut un enjeu. En cas d'egalite, l'enjeu peut etre reporte.",
  scramble: "Scramble : chaque joueur joue, l'equipe choisit la meilleure balle, puis tous rejouent de cet endroit.",
  "best-ball": "Best ball : chaque joueur joue sa balle, le meilleur score de l'equipe compte.",
  greensome: "Greensome : les deux joueurs prennent le depart, choisissent une balle, puis jouent alternativement.",
  foursome: "Foursome : une seule balle par equipe, les joueurs jouent alternativement les coups.",
  "custom-points": "Classement maison : permet de definir un barème de points specifique a votre competition.",
};

function openLeaderboardPopup() {
  state.leaderboardOpen = true;
  render();
}

function closeLeaderboardPopup() {
  state.leaderboardOpen = false;
  render();
}

function openPlayerScorecard(playerName) {
  sampleScorecard.player = playerName || sampleScorecard.player;
  state.view = "cards";
  state.leaderboardOpen = false;
  render();
}

function renderWizard() {
  if (!state.wizardOpen) return "";
  const steps = getWizardSteps();
  const current = steps[state.wizardStep];
  return `
    <div class="wizard-backdrop" role="dialog" aria-modal="true">
      <section class="wizard-panel">
        <header class="wizard-head">
          <span class="pill blue">${t("step")} ${state.wizardStep + 1}/${steps.length}</span>
          <button class="button small" onclick="closeWizard()">${t("close")}</button>
        </header>
        ${renderWizardStep(current)}
        ${state.saveStatus ? `<div class="wizard-status ${state.saveStatus.type}">${state.saveStatus.message}</div>` : ""}
        <footer class="wizard-actions">
          <button class="button" onclick="setWizardStep(${state.wizardStep - 1})" ${state.wizardStep === 0 ? "disabled" : ""}>${t("back")}</button>
          <button class="button primary" onclick="nextWizardStep()" ${state.savingSetup ? "disabled" : ""}>${state.savingSetup ? "Sauvegarde..." : state.wizardStep === steps.length - 1 ? t("startScoring") : t("next")}</button>
        </footer>
      </section>
    </div>
  `;
}

function renderWizardStep(step) {
  if (step === "competition") return `
    <div class="wizard-body">
      <h2>${t("competitionTypeTitle")}</h2>
      <p>${t("competitionTypeHelp")}</p>
      <div class="form-grid">
        <div class="field full">
          <label>${t("type")}</label>
          <select onchange="updateSetup('competitionType', this.value)">
            <option value="friends" ${state.setup.competitionType === "friends" ? "selected" : ""}>${t("friendsCompetition")}</option>
            <option value="private" ${state.setup.competitionType === "private" ? "selected" : ""}>${t("privateCompetition")}</option>
            <option value="trip" ${state.setup.competitionType === "trip" ? "selected" : ""}>${t("golfTrip")}</option>
          </select>
        </div>
        <div class="field full"><label>${t("competitionName")}</label><input value="${state.setup.competitionName}" oninput="updateSetup('competitionName', this.value)" /></div>
        <div class="field"><label>${t("startDate")}</label><input type="date" value="${state.setup.startDate}" oninput="updateSetup('startDate', this.value)" /></div>
        <div class="field"><label>${t("endDate")}</label><input type="date" value="${state.setup.endDate}" oninput="updateSetup('endDate', this.value)" /></div>
      </div>
    </div>
  `;
  if (step === "playerCount") return `
    <div class="wizard-body">
      <h2>${t("playerCountTitle")}</h2>
      <p>${t("playerCountHelp")}</p>
      <div class="participant-control large">
        <label for="wizard-player-count">${t("players")}</label>
        <input id="wizard-player-count" type="number" min="1" max="120" step="1" value="${state.setup.playerCount}" inputmode="numeric" oninput="updateSetup('playerCount', this.value)" />
      </div>
    </div>
  `;
  if (step === "players") {
    normalizeSetupPlayers();
    return `
      <div class="wizard-body">
        <h2>${t("playersTitle")}</h2>
        <p>${t("playersHelp")}</p>
        <div class="player-editor">
          ${state.setupPlayers.map((player, index) => `
            <div class="player-edit-row">
              <span class="rank">${index + 1}</span>
              <input aria-label="${t("name")} ${index + 1}" placeholder="${t("name")}" value="${player.name}" oninput="updatePlayerSetup(${index}, 'name', this.value)" />
              <input aria-label="${t("index")} ${index + 1}" placeholder="${t("index")}" type="number" step="0.1" value="${player.index}" oninput="updatePlayerSetup(${index}, 'index', this.value)" />
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
  if (step === "rounds") return `
    <div class="wizard-body">
      <h2>${t("roundsTitle")}</h2>
      <p>${t("roundsHelp")}</p>
      <div class="round-choice">
        ${[1, 2, 3, 4].map((round) => `<button class="choice ${Number(state.setup.roundCount) === round ? "active" : ""}" onclick="updateSetup('roundCount', ${round}); render();">${round}</button>`).join("")}
      </div>
    </div>
  `;
  if (step === "course") return `
    <div class="wizard-body">
      <h2>${t("coursesTitle")}</h2>
      <p>Tapez le nom du golf. L'API doit recuperer le parcours, les tees, le slope/rating et la carte de score.</p>
      <button class="button primary setup-start" onclick="requestLocationCourses()">${icon("flag")}${t("useLocation")}</button>
      <div class="empty-note">${t("locationHelp")} ${state.locationPermission === "granted" ? "Autorisation accordee - propositions proches affichees." : ""}</div>
      <div class="round-course-list">
        ${renderRoundCoursePickers()}
      </div>
    </div>
  `;
  if (step === "formula") return `
    <div class="wizard-body">
      <h2>${t("formulaTitle")}</h2>
      <p>${t("formulaHelp")}</p>
      <div class="field full"><label>${t("formula")}</label><select onchange="updateSetup('gameFormula', this.value); render();">${gameFormulas.map(([value, label]) => `<option value="${value}" ${state.setup.gameFormula === value ? "selected" : ""}>${label}</option>`).join("")}</select></div>
      <div class="formula-explanation">${formulaDescriptions[state.setup.gameFormula] || formulaDescriptions["stableford-net"]}</div>
      ${state.setup.gameFormula === "chouette" ? `<div class="empty-note">${t("chouetteHelp")}</div>` : ""}
    </div>
  `;
  if (step === "groups") {
    ensureGroupsMatchPlayers();
    return `
      <div class="wizard-body">
        <h2>${t("groupsTitle")}</h2>
        <p>${t("groupsHelp")}</p>
        <div class="setup-flow">
          <div class="field">
            <label>${t("groupSize")}</label>
            <div class="choice-row">
              <button class="choice ${Number(state.setup.groupSize) === 2 ? "active" : ""}" onclick="setGroupSize(2)">${t("groupsOf")} 2</button>
              <button class="choice ${Number(state.setup.groupSize) === 3 ? "active" : ""}" onclick="setGroupSize(3)">${t("groupsOf")} 3</button>
              <button class="choice ${Number(state.setup.groupSize) === 4 ? "active" : ""}" onclick="setGroupSize(4)">${t("groupsOf")} 4</button>
            </div>
          </div>
          <button class="button primary setup-start" onclick="generateGroupsBySize()">${icon("users")}${t("generateGroups")}</button>
        </div>
        <div class="group-builder">
          ${state.groups.map((group, groupIndex) => `
            <div class="builder-card">
              <div class="form-grid">
                <div class="field"><label>${t("group")}</label><input value="${group.name}" oninput="updateGroup(${groupIndex}, 'name', this.value)" /></div>
              </div>
              <div class="form-grid group-select-grid">
                ${Array.from({ length: Number(state.setup.groupSize) || 3 }).map((_, slotIndex) => renderGroupPlayerSelect(group, groupIndex, slotIndex)).join("")}
              </div>
            </div>
          `).join("")}
        </div>
        <button class="button setup-start" onclick="addGroup()">${icon("plus")}${t("group")}</button>
        <strong class="mini-title">Plan des tours generes</strong>
        ${renderRoundGroupsPreview()}
      </div>
    `;
  }
  if (step === "teams") {
    normalizeTeams();
    const teamSlots = isRyderCupMode() ? Math.ceil((Number(state.setup.playerCount) || state.setupPlayers.length || 2) / 2) : Number(state.setup.scrambleSize) || 2;
    return `
      <div class="wizard-body">
        <h2>${t("teamsTitle")}</h2>
        <p>${isRyderCupMode() ? "Creez deux equipes qui s'affrontent sur les matchs." : t("teamsHelp")}</p>
        ${isRyderCupMode() ? `<div class="empty-note">Ryder Cup : les joueurs sont repartis en deux equipes. Vous pourrez ensuite ajuster les matchs dans le classement.</div>` : `<div class="choice-row">
          <button class="choice ${Number(state.setup.scrambleSize) === 2 ? "active" : ""}" onclick="setScrambleSize(2)">${t("scrambleSize")} 2</button>
          <button class="choice ${Number(state.setup.scrambleSize) === 4 ? "active" : ""}" onclick="setScrambleSize(4)">${t("scrambleSize")} 4</button>
        </div>`}
        <div class="team-list">
          ${state.teams.map((team, teamIndex) => `
            <div class="builder-card">
              <div class="field">
                <label>Nom de l'equipe</label>
                <input value="${team.name}" oninput="updateTeamName(${teamIndex}, this.value)" />
              </div>
              ${Array.from({ length: teamSlots }).map((_, slotIndex) => `
                <div class="field">
                  <label>${t("players")} ${slotIndex + 1}</label>
                  <select onchange="updateTeamPlayer(${teamIndex}, ${slotIndex}, this.value)">
                    <option value="">Selectionner</option>
                    ${state.setupPlayers.map((player, playerIndex) => `<option value="${playerIndex}" ${team.playerIndexes[slotIndex] === playerIndex ? "selected" : ""}>${player.name || `${t("players")} ${playerIndex + 1}`}</option>`).join("")}
                  </select>
                </div>
              `).join("")}
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
  if (step === "scoringMode") return `
    <div class="wizard-body">
      <h2>${t("scoringModeTitle")}</h2>
      <p>${t("scoringModeHelp")}</p>
      <div class="mode-list">
        <button class="mode-card ${state.scoringMode === "centralized" ? "active" : ""}" onclick="setScoringMode('centralized')"><strong>${t("centralized")}</strong><span>${t("centralizedHelp")}</span></button>
        <button class="mode-card ${state.scoringMode === "individual" ? "active" : ""}" onclick="setScoringMode('individual')"><strong>${t("individual")}</strong><span>${t("individualHelp")}</span></button>
        <button class="mode-card ${state.scoringMode === "marker" ? "active" : ""}" onclick="setScoringMode('marker')"><strong>${t("marker")}</strong><span>${t("markerHelp")}</span></button>
      </div>
    </div>
  `;
  if (step === "markerAssign") {
    normalizeMarkerAssignments();
    return `
      <div class="wizard-body">
        <h2>${t("markerAssignTitle")}</h2>
        <p>${t("markerAssignHelp")}</p>
        <div class="marker-list">
          ${state.groups.map((group, groupIndex) => `
            <div class="builder-card">
              <strong>${t("markerByGroup")} - ${group.name}</strong>
              ${(group.markerAssignments || []).map((assignment) => `
                <div class="marker-row">
                  <strong>${playerName(assignment.playerIndex)}</strong>
                  <span>${t("marks")}</span>
                  <select onchange="updateMarkerAssignment(${groupIndex}, ${assignment.playerIndex}, this.value)">
                    ${group.playerIndexes.map((candidateIndex) => `<option value="${candidateIndex}" ${assignment.marksIndex === candidateIndex ? "selected" : ""}>${playerName(candidateIndex)}</option>`).join("")}
                  </select>
                </div>
              `).join("")}
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
  return `
    <div class="wizard-body">
      <h2>${t("optionsTitle")}</h2>
      <p>${t("optionsHelp")}</p>
      <div class="switches">
        <label class="switch"><span>${t("putts")}</span><input type="checkbox" ${state.puttsEnabled ? "checked" : ""} onchange="setPuttsEnabled(this.checked)" /></label>
        <label class="switch"><span>${t("leaderboardVisible")}</span><input type="checkbox" ${state.setup.liveLeaderboard ? "checked" : ""} onchange="updateSetup('liveLeaderboard', this.checked)" /></label>
        <label class="switch"><span>${t("signature")}</span><input type="checkbox" ${state.setup.cardSignature ? "checked" : ""} onchange="updateSetup('cardSignature', this.checked)" /></label>
      </div>
    </div>
  `;
}

function renderRoundCoursePickers() {
  normalizeRoundCourses();
  return state.roundCourses.map((roundCourse, index) => {
    return `
      <div class="round-course-card" data-course-card="${index}">
        <div class="section-title">
          <div><h3>${t("round")} ${index + 1}</h3><span>${roundCourse.selectedCourseId ? `Parcours selectionne : ${roundCourse.courseName}` : "Selection obligatoire du parcours"}</span></div>
          <span class="pill ${roundCourse.selectedCourseId ? "blue" : "warning"}">${roundCourse.selectedCourseId ? "OK" : "A choisir"}</span>
        </div>
        <div class="form-grid">
          <div class="field full"><label>${t("searchGolf")}</label><input placeholder="Ex. Chantilly, Saint-Cloud, Golf National..." value="${roundCourse.courseName}" oninput="searchCourseInput(${index}, this.value)" /></div>
          <div class="field"><label>${t("tees")}</label><select onchange="updateRoundCourse(${index}, 'tees', this.value)"><option>Jaunes</option><option>Blancs</option><option>Bleus</option><option>Rouges</option></select></div>
        </div>
        <div class="empty-note" data-course-api-status>${state.courseApiStatus[index] || "Tapez au moins 2 lettres pour lancer la recherche API."}</div>
        <div class="course-suggestions" data-course-suggestions>
          ${renderCourseSuggestions(index)}
        </div>
        ${roundCourse.selectedCourseId ? `<div class="selected-course-note">${icon("flag")}<strong>${roundCourse.courseName}</strong><span>${roundCourse.tees || state.setup.tees}</span></div>` : `<div class="empty-note">Vous devez choisir un parcours dans les resultats afin de recuperer les tees, slope/rating et la carte de score.</div>`}
        <label class="button setup-start camera-upload">
          ${icon("score")}Scanner une carte de score
          <input type="file" accept="image/*" capture="environment" onchange="handleScorecardPhoto(${index}, this)" />
        </label>
        ${state.scorecardScanStatus[index] ? `<div class="empty-note">${state.scorecardScanStatus[index]}</div>` : ""}
      </div>
    `;
  }).join("");
}

function renderManualCourseForm(index) {
  if (!state.manualCourseOpen[index]) return "";
  const form = state.manualCourseForms[index] || defaultManualCourseForm(index);
  return `
    <div class="manual-course-form">
      <div class="form-grid">
        <div class="field full"><label>Nom du golf / parcours</label><input value="${form.courseName}" oninput="updateManualCourseForm(${index}, 'courseName', this.value)" /></div>
        <div class="field"><label>Ville</label><input value="${form.city}" oninput="updateManualCourseForm(${index}, 'city', this.value)" /></div>
        <div class="field"><label>Pays</label><input value="${form.country}" oninput="updateManualCourseForm(${index}, 'country', this.value)" /></div>
        <div class="field"><label>Tee</label><input value="${form.tee}" oninput="updateManualCourseForm(${index}, 'tee', this.value)" /></div>
        <div class="field"><label>Rating</label><input type="number" step="0.1" value="${form.rating}" oninput="updateManualCourseForm(${index}, 'rating', this.value)" /></div>
        <div class="field"><label>Slope</label><input type="number" step="1" value="${form.slope}" oninput="updateManualCourseForm(${index}, 'slope', this.value)" /></div>
        <div class="field full"><label>Pars des 18 trous</label><input value="${form.pars}" oninput="updateManualCourseForm(${index}, 'pars', this.value)" /></div>
        <div class="field full"><label>Index des 18 trous</label><input value="${form.indexes}" oninput="updateManualCourseForm(${index}, 'indexes', this.value)" /></div>
      </div>
      <button class="button primary setup-start" onclick="saveManualCourse(${index})">${icon("flag")}Enregistrer ce golf</button>
    </div>
  `;
}

function renderGroupPlayerSelect(group, groupIndex, slotIndex) {
  const selected = group.playerIndexes[slotIndex];
  return `
    <div class="field">
      <label>${t("players")} ${slotIndex + 1}</label>
      <select onchange="updateGroupPlayerSlot(${groupIndex}, ${slotIndex}, this.value)">
        <option value="">Selectionner</option>
        ${state.setupPlayers.map((player, playerIndex) => `<option value="${playerIndex}" ${selected === playerIndex ? "selected" : ""}>${player.name || `${t("players")} ${playerIndex + 1}`}</option>`).join("")}
      </select>
    </div>
  `;
}

function renderRoundGroupsPreview() {
  if (!state.roundGroups.length) return "";
  return `
    <div class="round-groups-preview">
      ${state.roundGroups.map((round, roundIndex) => `
        <div class="builder-card compact-round">
          <strong>${t("round")} ${roundIndex + 1}</strong>
          ${round.map((group) => `
            <div class="compact-row">
              <span class="pill">${group.name}</span>
              <span>${group.playerIndexes.map(playerName).join(" · ")}</span>
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `;
}

function renderCreate() {
  return `
    <div class="section-title">
      <div>
        <h3>${t("createNewGame")}</h3>
        <span>${t("heroText")}</span>
      </div>
      <button class="button primary small" onclick="openWizard()">${icon("plus")}${t("createNewGame")}</button>
    </div>
    <div class="panel pad"><button class="button primary setup-start" onclick="openWizard()">${icon("plus")}${t("createNewGame")}</button></div>
  `;
}

function renderScore() {
  const context = scoreEntryContext();
  const entries = visibleScoreEntries();
  const currentHole = sampleScorecard.holes[state.hole - 1] || { par: 4, strokeIndex: state.hole };
  const currentPar = currentHole.par || 4;
  const currentIndex = currentHole.strokeIndex || state.hole;
  const active = state.activeScore;
  const activeItem = active ? state.scores[active.playerKey] : null;
  const activeLabel = activeItem ? `${activeItem.name} - ${active.field === "gross" ? "score" : "putts"}` : "Selectionner une cellule";
  const rows = entries
    .map(([key, item]) => `
      <div class="score-entry-row ${state.puttsEnabled ? "" : "putts-off"}">
        <div>
          <div class="name">${item.name}</div>
          <span>${stablefordPoints(item.gross, currentPar)} pts · +${strokesReceivedForHole(sampleScorecard.handicap, currentIndex)} rendu</span>
        </div>
        ${renderScoreCell(key, "gross", "Score", item.gross)}
        ${state.puttsEnabled ? renderScoreCell(key, "putts", "P", item.putts) : ""}
      </div>
    `)
    .join("");

  return `
    <div class="section-title">
      <div>
        <h3>Saisie des scores</h3>
        <span>Tour ${context.roundNumber} · ${context.courseName}</span>
      </div>
      <span class="pill ${state.roundValidated ? "blue" : ""}">${state.roundValidated ? "Tour valide" : "En direct"}</span>
    </div>
    <section class="score-page">
      <div class="panel pad scorecard">
        ${renderRoundScorecard(entries, context)}
        <div class="hole-entry-card">
          <div class="hole-nav">
            <button class="button score-nav-button" onclick="state.hole = Math.max(1, state.hole - 1); state.roundValidated = false; render();">Precedent</button>
            <div class="hole-title">
              <strong>Trou ${state.hole}</strong>
              <span>Par ${currentPar} · HCP ${currentIndex}</span>
            </div>
            <button class="button score-nav-button" onclick="validateHoleAndAdvance()">Suivant</button>
          </div>
          <div class="score-inputs score-entry-list">${rows}</div>
          ${renderMobileKeypad(activeLabel)}
        </div>
      </div>
    </section>
    ${renderLeaderboardPopup()}
  `;
}

function scoreRoleLabel(role, points) {
  if (role === "official") return t("officialCard");
  if (role === "verification") return t("checkCard");
  return `${points} pts calcules`;
}

function renderRoundScorecard(entries, context) {
  const visiblePlayers = entries.map(([, item]) => item.name);
  const groupPlayers = context.groupPlayers.filter((name) => !visiblePlayers.includes(name)).slice(0, Math.max(0, 4 - visiblePlayers.length));
  const names = [...visiblePlayers, ...groupPlayers].slice(0, 4);
  return `
    <div class="round-scorecard-wrap">
      <div class="round-scorecard-head">
        <strong>Carte de score de la partie</strong>
        <span>${context.groupName} · ${context.teeName}</span>
      </div>
      <div class="party-scorecards">
        ${names.map((name, playerIndex) => {
          const match = entries.find(([, item]) => item.name === name)?.[1] || {};
          const strokes = [24, 16, 28, 20][playerIndex] || sampleScorecard.handicap;
          const holesPlayed = Math.max(1, state.hole - (playerIndex % 2));
          const gross = Number(match.gross) ? Number(match.gross) + 11 * holesPlayed + playerIndex * 2 : 82 + playerIndex * 5;
          const points = match.points || 35 + playerIndex * 2;
          const putts = Number(match.putts) ? Number(match.putts) + Math.max(0, holesPlayed - 1) : 10 + playerIndex * 4;
          return `
            <div class="party-scorecard">
              <strong>${name}</strong>
              <span>${strokes} coups rendus</span>
              <span>${holesPlayed}/18 trous</span>
              <span>Brut ${gross}</span>
              <span>${points} pts</span>
              ${state.puttsEnabled ? `<span>Putts ${putts}</span>` : ""}
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderScoreCell(key, field, label, value) {
  const active = isActiveScore(key, field);
  return `
    <button class="score-cell ${active ? "active" : ""}" onclick="setActiveScore('${key}', '${field}')" aria-label="${label} ${state.scores[key].name}">
      <span>${label}</span>
      <b>${value === "" ? "-" : value}</b>
    </button>
  `;
}

function renderMobileKeypad(activeLabel) {
  return `
    <div class="mobile-keypad-wrap">
      <div class="keypad-status">
        <span class="pill blue">${activeLabel}</span>
        <button class="button small" onclick="clearActiveScore()">Effacer</button>
      </div>
      <div class="mobile-keypad">
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((value) => `
          <button class="keypad-key" onclick="keypadScore(${value})">${value}</button>
        `).join("")}
        <button class="keypad-key danger-key" onclick="abandonActiveScore()">X</button>
      </div>
    </div>
  `;
}

function renderLeaderboard() {
  const teamMode = isMatchplayLeaderboardMode();
  const teamModeLabel = state.setup.gameFormula === "ryder-cup" ? "Ryder Cup" : "Match play";
  return `
    <div class="section-title">
      <div>
        <h3>Leaderboard</h3>
        <span>${teamMode ? "Matchs, equipes et score projete" : "Score brut, ecart au par, trou joue et points Stableford"}</span>
      </div>
      ${teamMode ? `<span class="pill blue">${teamModeLabel}</span>` : `<div class="segmented">
        <button class="${state.format === "stableford" ? "active" : ""}" onclick="setFormat('stableford')">Pts</button>
        <button class="${state.format === "net" ? "active" : ""}" onclick="setFormat('net')">Net</button>
        <button class="${state.format === "brut" ? "active" : ""}" onclick="setFormat('brut')">Brut</button>
      </div>`}
    </div>
    ${teamMode ? renderMatchplay(false) : renderLeaderboardPanel(false)}
    ${teamMode ? "" : renderLeaderboardPopup()}
  `;
}

function renderStats() {
  const stats = statsByRange[state.statsRange] || statsByRange.competition;
  const bars = [
    ["Eagle", stats.distribution[0], "eagle"],
    ["Birdie", stats.distribution[1], "birdie"],
    ["Par", stats.distribution[2], "par"],
    ["Bogey", stats.distribution[3], "bogey"],
    ["D.Bogey", stats.distribution[4], "double"],
  ];
  const counts = [
    ["HIO", stats.counts[0]],
    ["Better", stats.counts[1]],
    ["Birdie", stats.counts[2]],
    ["Par", stats.counts[3]],
    ["Bogey", stats.counts[4]],
    ["Worse", stats.counts[5]],
  ];
  return `
    <div class="section-title">
      <div>
        <h3>Statistiques</h3>
        <span>Lecture par jour, tour, competition, mois, annee ou depuis le debut</span>
      </div>
      <div class="segmented stats-ranges">
        ${Object.entries(statsByRange).map(([key, item]) => `
          <button class="${state.statsRange === key ? "active" : ""}" onclick="setStatsRange('${key}')">${item.label}</button>
        `).join("")}
      </div>
    </div>
    <section class="panel stats-panel">
      <div class="stats-head">
        <strong>Scores</strong>
        <span>${stats.label}</span>
      </div>
      <div class="stats-grid">
        <div><span>Parties</span><strong>${stats.rounds}</strong></div>
        <div><span>Moyenne coups</span><strong>${stats.average}</strong></div>
        <div><span>Meilleur score</span><strong>${stats.best}</strong></div>
        <div><span>Record</span><strong>${stats.allTime}</strong></div>
      </div>
      <div class="result-bars">
        ${bars.map(([label, value, type]) => `
          <div class="result-bar ${type}">
            <strong>${value}%</strong>
            <span style="height:${Math.max(20, value * 2)}px"></span>
            <em>${label}</em>
          </div>
        `).join("")}
      </div>
      <div class="stat-counts">
        ${counts.map(([label, value]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}
      </div>
    </section>
  `;
}

function renderMatchplay(showTitle = true) {
  const ryderMode = isRyderCupMode();
  const round = Math.max(1, Math.min(Number(state.setup.roundCount) || 1, Number(state.leaderboardRound) || 1));
  const course = state.roundCourses[round - 1]?.courseName || state.setup.courseName || "Parcours a selectionner";
  const redTeam = state.teams[0]?.name || "Equipe 1";
  const blueTeam = state.teams[1]?.name || "Equipe 2";
  const roundSelector = Number(state.setup.roundCount) > 1 ? `
    <div class="segmented match-rounds">
      ${Array.from({ length: Number(state.setup.roundCount) || 1 }, (_, index) => `<button class="${round === index + 1 ? "active" : ""}" onclick="setLeaderboardRound(${index + 1})">Tour ${index + 1}</button>`).join("")}
    </div>
  ` : "";
  return `
    ${showTitle ? `<div class="section-title">
      <div>
        <h3>Matchplay equipes</h3>
        <span>Suivi Ryder Cup : match par match, score projete et avance au trou</span>
      </div>
      <span class="pill blue">Stableford NET</span>
    </div>` : ""}
    <section class="matchplay-board">
      <div class="matchplay-header">
        <strong>${state.setup.competitionName}</strong>
        <span>${course} · Tour ${round}</span>
      </div>
      ${roundSelector}
      ${ryderMode ? `
        <div class="team-score">
          <span class="red">${redTeam}</span>
          <strong class="red-box">${round === 1 ? "2½" : round === 2 ? "5" : "7½"}</strong>
          <strong class="blue-box">${round === 1 ? "3½" : round === 2 ? "5" : "8½"}</strong>
          <span class="blue">${blueTeam}</span>
        </div>
        <div class="projected-score">
          <strong class="red">${round === 1 ? "4" : "8"}</strong>
          <span>Projete cumule</span>
          <strong class="blue">${round === 1 ? "6" : "10"}</strong>
        </div>
      ` : `
        <div class="single-match-head">
          <span>${matchplayRows[0].red}</span>
          <strong>${matchplayRows[0].status}</strong>
          <span>${matchplayRows[0].blue}</span>
        </div>
      `}
      <div class="match-list">
        ${(ryderMode ? matchplayRows : matchplayRows.slice(0, 1)).map((row) => `
          <div class="match-row ${row.side}">
            <button class="match-player" onclick="openPlayerScorecard('${row.red}')"><strong>${row.red}</strong><span>HCP ${row.redHcp}</span></button>
            <div class="match-status"><strong>${row.status}</strong><span>${row.thru === "Final" ? "Final" : `Thru ${row.thru}`}</span></div>
            <button class="match-player right" onclick="openPlayerScorecard('${row.blue}')"><strong>${row.blue}</strong><span>HCP ${row.blueHcp}</span></button>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSecurity() {
  const supabaseStatus = getSupabaseStatus();
  const historyRows = state.scoreEvents.length ? state.scoreEvents.map((event, index) => `
    <div class="audit-item">
      <span class="rank">${index + 1}</span>
      <div><strong>${event.playerName} - ${event.field === "gross" ? "score" : "putts"}</strong><span>Trou ${event.hole}, ${event.previousValue || "-"} vers ${event.nextValue || "-"} · ${event.type}</span></div>
      <span class="pill">Log</span>
    </div>
  `).join("") : `
    <div class="audit-item"><span class="rank">1</span><div><strong>Aucun changement local</strong><span>Le journal se remplit a chaque saisie, effacement ou abandon.</span></div><span class="pill blue">Pret</span></div>
  `;
  return `
    <div class="section-title">
      <div>
        <h3>Securisation</h3>
        <span>Les garde-fous tires du retour d'experience Open de Panse</span>
      </div>
      <button class="button primary small">${icon("download")}Exporter</button>
    </div>
    ${renderSecurityPanel(false)}
    <section class="grid two" style="margin-top:14px">
      <div class="panel">
        <div class="panel-head"><div><h3>Journal</h3><span>Historique des modifications</span></div></div>
        <div class="panel pad audit-list">
          ${historyRows}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h3>Exports</h3><span>Avant, pendant et apres competition</span></div></div>
        <div class="panel pad switches">
          <label class="switch"><span>Supabase</span><span class="pill ${supabaseStatus.ready ? "blue" : "warning"}">${supabaseStatus.label}</span></label>
          <div class="empty-note">${supabaseStatus.detail}</div>
          <label class="switch"><span>Export CSV scores complets</span><button class="button small">${icon("download")}CSV</button></label>
          <label class="switch"><span>Archive JSON competition</span><button class="button small">${icon("download")}JSON</button></label>
          <label class="switch"><span>Recapitulatif PDF final</span><button class="button small">${icon("download")}PDF</button></label>
        </div>
      </div>
    </section>
  `;
}

function renderProfile() {
  const account = state.account;
  return `
    <div class="section-title">
      <div>
        <h3>Profil</h3>
        <span>Compte joueur, licence, handicap et droits organisateur</span>
      </div>
      <span class="pill ${account.signedIn ? "blue" : "warning"}">${account.signedIn ? "Connecte" : "Compte local"}</span>
    </div>
    <section class="grid two">
      <div class="panel pad account-panel">
        <div class="panel-head clean"><div><h3>Creer mon compte</h3><span>Ces champs serviront ensuite a Supabase Auth et au profil joueur.</span></div></div>
        <div class="form-grid">
          <div class="field"><label>Prenom</label><input value="${account.firstName}" oninput="updateAccount('firstName', this.value)" /></div>
          <div class="field"><label>Nom</label><input value="${account.lastName}" oninput="updateAccount('lastName', this.value)" /></div>
          <div class="field full"><label>Email</label><input type="email" value="${account.email}" oninput="updateAccount('email', this.value)" /></div>
          <div class="field"><label>Pays</label><select onchange="updateAccount('country', this.value)">
            ${["France", "Belgique", "Suisse", "Espagne", "Italie", "Allemagne", "Royaume-Uni", "Autre"].map((country) => `<option ${account.country === country ? "selected" : ""}>${country}</option>`).join("")}
          </select></div>
          <div class="field"><label>Handicap / Index</label><input type="number" step="0.1" value="${account.handicap}" oninput="updateAccount('handicap', this.value)" /></div>
          <div class="field"><label>Numero de licence</label><input value="${account.licenseNumber}" placeholder="Selon le pays" oninput="updateAccount('licenseNumber', this.value)" /></div>
          <div class="field"><label>Role</label><select onchange="updateAccount('role', this.value)">
            <option ${account.role === "Joueur" ? "selected" : ""}>Joueur</option>
            <option ${account.role === "Organisateur" ? "selected" : ""}>Organisateur</option>
          </select></div>
          <div class="field full"><label>Mot de passe</label><input type="password" value="${account.password}" placeholder="Minimum 8 caracteres" oninput="updateAccount('password', this.value)" /></div>
        </div>
        <button class="button primary setup-start" onclick="createAccount()">${icon("shield")}Creer / mettre a jour le compte</button>
        ${state.saveStatus ? `<div class="wizard-status ${state.saveStatus.type}">${state.saveStatus.message}</div>` : ""}
      </div>
      <div class="panel pad role-panel">
        <div class="profile-card">
          <span class="avatar">${initials(`${account.firstName} ${account.lastName}`)}</span>
          <div>
            <strong>${account.firstName} ${account.lastName}</strong>
            <span>${account.email}</span>
          </div>
        </div>
        <div class="security-band account-rights">
          <div class="security-item">${icon("score")}<strong>Joueur</strong><span>Acces a son profil, ses cartes, ses historiques et ses signatures.</span></div>
          <div class="security-item">${icon("trophy")}<strong>Organisateur</strong><span>Creation de competitions, gestion des joueurs, groupes, parcours et classements.</span></div>
          <div class="security-item">${icon("shield")}<strong>Securite</strong><span>Mot de passe gere par Supabase Auth, donnees separees par utilisateur et competition.</span></div>
          <div class="security-item">${icon("flag")}<strong>International</strong><span>Pays et numero de licence adaptables selon federation.</span></div>
        </div>
      </div>
    </section>
  `;
}

function renderCards() {
  const rows = scorecardRows();
  const totals = scorecardTotals(rows);
  const cells = (field, formatter = (value) => value) => rows.map((row) => `<td class="${row.mismatch && ["gross", "checkGross"].includes(field) ? "mismatch-cell" : ""}">${formatter(row[field], row)}</td>`).join("");
  return `
    <div class="section-title">
      <div>
        <h3>${t("digitalScorecard")}</h3>
        <span>Comparer, corriger, calculer les points bruts et nets, puis signer</span>
      </div>
      <span class="pill warning">2 ecarts</span>
    </div>
    <section class="grid two">
      <div class="panel digital-card">
        <div class="panel-head">
          <div>
            <h3>${sampleScorecard.player}</h3>
            <span>${sampleScorecard.course} · ${sampleScorecard.tee} · Hcp ${sampleScorecard.handicap} · Slope ${sampleScorecard.slope}</span>
          </div>
        </div>
        <div class="scorecard-table-wrap">
          <table class="scorecard-table">
            <thead><tr><th>Trou</th>${rows.map((row) => `<th>${row.hole}</th>`).join("")}<th>Total</th></tr></thead>
            <tbody>
              <tr><td>Par</td>${cells("par")}<td>${totals.par}</td></tr>
              <tr><td>Index</td>${cells("strokeIndex")}<td>-</td></tr>
              <tr><td>${t("officialCard")}</td>${cells("gross")}<td>${totals.gross}</td></tr>
              <tr><td>${t("checkCard")}</td>${cells("checkGross")}<td>${totals.checkGross}</td></tr>
              <tr><td>Coups rendus</td>${cells("strokes", (value) => value ? `+${value}` : "-")}<td>${totals.strokes}</td></tr>
              <tr><td>Points bruts</td>${cells("grossPoints")}<td>${totals.grossPoints}</td></tr>
              <tr><td>Points nets</td>${cells("netPoints")}<td>${totals.netPoints}</td></tr>
            </tbody>
          </table>
        </div>
        <div class="score-summary">
          <span class="pill blue">Brut ${totals.grossPoints} pts</span>
          <span class="pill">Net ${totals.netPoints} pts</span>
          <span class="pill warning">${totals.strokes} coups rendus</span>
        </div>
        <div class="signature-strip">
          <button class="button primary">${t("signCard")}</button>
          <button class="button">${t("signature")}</button>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h3>Calcul net</h3><span>Repartition des coups rendus par index de trou</span></div></div>
        <div class="panel pad signature-list">
          <div class="signature-row"><div><strong>Handicap ${sampleScorecard.handicap}</strong><span>1 coup rendu sur les 18 trous, puis un 2e coup sur les 4 trous les plus difficiles.</span></div><span class="pill">${totals.strokes}</span></div>
          <div class="signature-row"><div><strong>Points bruts</strong><span>Calcul Stableford sans coups rendus.</span></div><span class="pill blue">${totals.grossPoints}</span></div>
          <div class="signature-row"><div><strong>Points nets</strong><span>Calcul Stableford apres deduction des coups rendus.</span></div><span class="pill warning">${totals.netPoints}</span></div>
          <div class="signature-row"><div><strong>Signature joueur</strong><span>Thomas confirme sa carte apres correction.</span></div><button class="button small primary">Signer</button></div>
          <div class="signature-row"><div><strong>Signature marqueur</strong><span>${sampleScorecard.marker} confirme les scores officiels saisis.</span></div><button class="button small">En attente</button></div>
        </div>
      </div>
    </section>
  `;
}

function renderPlayersPanel() {
  return `
    <div class="panel">
      <div class="panel-head">
        <div><h3>Joueurs</h3><span>Invitations, roles et index</span></div>
        <button class="button small">${icon("plus")}Inviter</button>
      </div>
      <div class="panel pad player-list">
        ${players.map((player) => `
          <div class="player-row">
            <span class="avatar">${initials(player.name)}</span>
            <div><strong>${player.name}</strong><span>${player.club} - index ${player.index}</span></div>
            <span class="pill ${player.role === "Admin" ? "warning" : ""}">${player.role}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderPlayersCompact() {
  return `
    <div class="compact-list">
      ${players.slice(0, 4).map((player) => `
        <div class="compact-row">
          <span class="avatar">${initials(player.name)}</span>
          <div><strong>${player.name}</strong><span>Index ${player.index}</span></div>
          <span class="pill ${player.role === "Admin" ? "warning" : ""}">${player.role}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderFlightsPanel() {
  return `
    <div class="panel">
      <div class="panel-head">
        <div><h3>Parties</h3><span>Departs et marqueurs</span></div>
        <button class="button small">${icon("users")}Composer</button>
      </div>
      <div class="panel pad flights">
        ${flights.map((flight) => `
          <div class="flight">
            <span class="rank">${flight.time.slice(3)}</span>
            <div><strong>${flight.time} - ${flight.marker}</strong><span>${flight.names}</span></div>
            <span class="pill ${flight.status === "En cours" ? "warning" : ""}">${flight.status}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderFlightsCompact() {
  return `
    <div class="compact-list">
      ${flights.map((flight) => `
        <div class="compact-row">
          <span class="rank">${flight.time.slice(3)}</span>
          <div><strong>${flight.time} - ${flight.marker}</strong><span>${flight.names}</span></div>
          <span class="pill ${flight.status === "En cours" ? "warning" : ""}">${flight.status}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderLeaderboardPanel(compact = true) {
  return `
    <div class="panel leaderboard-card">
      <div class="panel-head">
        <div><h3>Leaderboard</h3><span>${compact ? "Top actuel" : "Classement complet"}</span></div>
        <button class="button small" onclick="openLeaderboardPopup()">${icon("trophy")}Voir</button>
      </div>
      <div class="leaderboard-table">
        <div class="leaderboard-head"><span>#</span><span>Nom</span><span>Score</span><span>Par</span><span>Thru</span><span>Pts</span></div>
        ${leaderboard.map((row, index) => `
          <div class="leaderboard-line ${index === 0 ? "leader" : ""}">
            <span>${index + 1}</span>
            <button class="leader-player-button" onclick="openPlayerScorecard('${row.name}')"><strong>${row.name}</strong><em>HCP ${row.hcp}</em></button>
            <strong>${row.score}</strong>
            <strong class="${String(row.toPar).startsWith("-") ? "under-par" : String(row.toPar).startsWith("+") ? "over-par" : ""}">${row.toPar}</strong>
            <span>${row.thru}</span>
            <strong>${row.pts}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderLeaderboardPopup() {
  if (!state.leaderboardOpen) return "";
  return `
    <div class="leaderboard-modal-backdrop" role="dialog" aria-modal="true">
      <section class="leaderboard-modal">
        <header>
          <div>
            <span>Friends Golf Live</span>
            <h3>Leaderboard</h3>
          </div>
          <button class="button small" onclick="closeLeaderboardPopup()">Fermer</button>
        </header>
        <div class="augusta-board">
          <div class="augusta-row header"><span>#</span><span>Joueur</span><span>Score</span><span>Par</span><span>Pts</span></div>
          ${leaderboard.map((row, index) => `
            <div class="augusta-row">
              <span>${index + 1}</span>
              <button class="augusta-player-button" onclick="openPlayerScorecard('${row.name}')">${row.name}</button>
              <span>${row.score}</span>
              <span>${row.toPar}</span>
              <span>${row.pts}</span>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderSecurityPanel(compact) {
  const content = `
    <div class="security-band">
      <div class="security-item">${icon("shield")}<strong>Scores separes</strong><span>Chaque score est pense comme une ligne independante, pas un gros bloc JSON.</span></div>
      <div class="security-item">${icon("download")}<strong>Sauvegardes</strong><span>Export automatique avant validation et actions massives.</span></div>
      <div class="security-item">${icon("users")}<strong>Roles</strong><span>Admin, marqueur, joueur et spectateur avec droits lisibles.</span></div>
      <div class="security-item">${icon("flag")}<strong>Environnements</strong><span>Dev, staging et production clairement separes.</span></div>
    </div>
  `;

  if (!compact) return `<div class="panel pad">${content}</div>`;
  return `
    <div class="panel">
      <div class="panel-head"><div><h3>Securite</h3><span>Garde-fous MVP</span></div></div>
      <div class="panel pad">${content}</div>
    </div>
  `;
}

function renderTabs() {
  const tabs = [
    ["dashboard", "home", t("home")],
    ["create", "plus", t("create")],
    ["score", "score", t("score")],
    ["cards", "shield", t("cards")],
    ["leaderboard", "trophy", t("ranking")],
    ["stats", "score", "Stats"],
    ["profile", "users", "Profil"],
    ["security", "shield", t("security")],
  ];

  return `
    <nav class="tabs" aria-label="Navigation">
      <div class="tabs-inner">
        ${tabs.map(([view, iconName, label]) => `
          <button class="tab ${state.view === view ? "active" : ""}" onclick="setView('${view}')">
            ${icon(iconName)}
            <span>${label}</span>
          </button>
        `).join("")}
      </div>
    </nav>
  `;
}

function renderCurrentView() {
  if (state.view === "create") return renderCreate();
  if (state.view === "score") return renderScore();
  if (state.view === "cards") return renderCards();
  if (state.view === "leaderboard") return renderLeaderboard();
  if (state.view === "stats") return renderStats();
  if (state.view === "profile") return renderProfile();
  if (state.view === "security") return renderSecurity();
  return renderDashboard();
}

function render() {
  if (typeof document === "undefined") return;
  window.__friendsGolfLiveState = {
    saveStatus: state.saveStatus,
    supabaseIds: state.supabaseIds,
  };
  document.getElementById("app").innerHTML = `
    <div class="shell">
      ${renderTopbar()}
      <main class="container">
        ${renderCurrentView()}
      </main>
      ${renderTabs()}
      ${renderWizard()}
    </div>
  `;
}

if (typeof document !== "undefined") {
  render();
}

if (typeof module !== "undefined") {
  module.exports = {
    state,
    setPuttsEnabled,
    setGroupSize,
    generateGroupsBySize,
    ensureGroupsMatchPlayers,
    searchCourseInput,
    normalizeGroups,
    strokesReceivedForHole,
    stablefordPoints,
    scorecardRows,
    scorecardTotals,
    generateBalancedRoundGroups,
    setActiveScore,
    keypadScore,
    clearActiveScore,
    abandonActiveScore,
    recordScoreEvent,
    scoreKeys,
  };
}
