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
  setup: {
    competitionType: "friends",
    competitionName: "Friends Invitational 2026",
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
  markerAssignments: [
    { playerIndex: 0, marksIndex: 1 },
    { playerIndex: 1, marksIndex: 2 },
    { playerIndex: 2, marksIndex: 0 },
  ],
  hole: 7,
  puttsEnabled: false,
  activeScore: { playerKey: "sophie", field: "gross" },
  scoreEvents: [],
  scores: {
    sophie: { name: "Sophie", gross: 5, putts: 2, points: 3, cardRole: "verification" },
    thomas: { name: "Thomas", gross: 4, putts: 1, points: 4, cardRole: "official" },
    ines: { name: "Ines", gross: 6, putts: 2, points: 2, cardRole: "hidden" },
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
  { name: "Thomas Keller", thru: "T7", net: "-4", pts: 24 },
  { name: "Sophie Martin", thru: "T7", net: "-2", pts: 21 },
  { name: "Ines Duarte", thru: "T7", net: "E", pts: 18 },
  { name: "Marc Lefevre", thru: "T6", net: "+1", pts: 16 },
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
  if (field === "playerCount") {
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
  state.groups = [];
  for (let index = 0; index < indexes.length; index += size) {
    const playerIndexes = indexes.slice(index, index + size);
    state.groups.push({
      id: `g${state.groups.length + 1}`,
      name: `${t("group")} ${state.groups.length + 1}`,
      playerIndexes,
      teeTime: teeTimeForGroup(state.groups.length),
      markerAssignments: buildMarkerAssignments(playerIndexes),
    });
  }
  state.groupsGeneratedForCount = state.setupPlayers.length;
  syncFlatMarkerAssignments();
  render();
}

function ensureGroupsMatchPlayers() {
  normalizeSetupPlayers();
  const shouldRegenerate = state.groupsGeneratedForCount !== state.setupPlayers.length || !state.groups.length;
  if (!shouldRegenerate) return;
  const size = Math.max(2, Math.min(4, Number(state.setup.groupSize) || 3));
  const indexes = state.setupPlayers.map((_, index) => index);
  state.groups = [];
  for (let index = 0; index < indexes.length; index += size) {
    const playerIndexes = indexes.slice(index, index + size);
    state.groups.push({
      id: `g${state.groups.length + 1}`,
      name: `${t("group")} ${state.groups.length + 1}`,
      playerIndexes,
      teeTime: teeTimeForGroup(state.groups.length),
      markerAssignments: buildMarkerAssignments(playerIndexes),
    });
  }
  state.groupsGeneratedForCount = state.setupPlayers.length;
  syncFlatMarkerAssignments();
}

function normalizeTeams() {
  normalizeSetupPlayers();
  const size = Number(state.setup.scrambleSize) || 2;
  const indexes = state.setupPlayers.map((_, index) => index);
  state.teams = [];
  for (let index = 0; index < indexes.length; index += size) {
    state.teams.push({ id: `t${state.teams.length + 1}`, name: `${t("team")} ${state.teams.length + 1}`, playerIndexes: indexes.slice(index, index + size) });
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
  if (field === "courseName") state.courseSearchDrafts[index] = value;
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
  const roundCourse = state.roundCourses[index] || {};
  const query = String(roundCourse.courseName || "").toLowerCase();
  const apiResults = state.courseSearchResults[index] || [];
  if (apiResults.length) return apiResults;
  return golfSuggestions.filter((course) => !query || `${course.name} ${course.location}`.toLowerCase().includes(query)).slice(0, 4);
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
  if (!functionUrl || !config?.publishableKey) {
    state.courseApiStatus[index] = "Fonction API golf non configuree. Resultats de demonstration.";
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
    state.courseApiStatus[index] = "API golf indisponible pour le moment. Resultats de demonstration.";
  }
  const card = document.querySelector(`[data-course-card="${index}"]`);
  const target = card?.querySelector("[data-course-suggestions]");
  const nextStatus = card?.querySelector("[data-course-api-status]");
  if (target) target.innerHTML = renderCourseSuggestions(index);
  if (nextStatus) nextStatus.textContent = state.courseApiStatus[index];
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

function addGroup() {
  state.groups.push({ id: `g${Date.now()}`, name: `${t("group")} ${state.groups.length + 1}`, playerIndexes: [], teeTime: teeTimeForGroup(state.groups.length), markerAssignments: [] });
  render();
}

function setScrambleSize(size) {
  state.setup.scrambleSize = size;
  normalizeTeams();
  render();
}

function updateTeamPlayer(teamIndex, slotIndex, playerIndex) {
  normalizeTeams();
  state.teams[teamIndex].playerIndexes[slotIndex] = Number(playerIndex);
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
  if (String(state.setup.gameFormula).includes("scramble")) normalizeTeams();
  if (state.scoringMode === "marker") normalizeMarkerAssignments();
  const steps = getWizardSteps();
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

function scoreKeys() {
  return Object.keys(state.scores);
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

function renderTopbar() {
  const activeLanguage = languages.find((language) => language.code === state.language) || languages[0];
  return `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <div class="brand-mark">${icons.flag}</div>
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
        <div>
          <span class="pill">${t("homeBadge")}</span>
          <h2>${t("heroTitle")}</h2>
          <p>${t("heroText")}</p>
          <div class="hero-actions">
            <button class="button primary hero-cta" onclick="openWizard()">${icon("plus")}${t("createNewGame")}</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function getWizardSteps() {
  const steps = ["competition", "playerCount", "players", "rounds", "course", "formula"];
  if (String(state.setup.gameFormula).includes("scramble")) steps.push("teams");
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
  ["chouette", "Chouette - 3 joueurs / 6 points"],
  ["skins", "Skins game"],
  ["scramble", "Scramble"],
  ["best-ball", "Best ball"],
  ["greensome", "Greensome"],
  ["foursome", "Foursome"],
  ["custom-points", "Classement par points maison"],
];

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
      <p>${t("coursesHelp")}</p>
      <button class="button primary setup-start" onclick="requestLocationCourses()">${icon("flag")}${t("useLocation")}</button>
      <div class="empty-note">${t("locationHelp")} ${state.locationPermission === "granted" ? "Autorisation accordee - propositions proches affichees." : ""}</div>
      <div class="empty-note">La recherche interroge GolfCourseAPI via Supabase quand la fonction est deployee. Sinon, l'app garde une liste de secours.</div>
      <div class="round-course-list">
        ${renderRoundCoursePickers()}
      </div>
    </div>
  `;
  if (step === "formula") return `
    <div class="wizard-body">
      <h2>${t("formulaTitle")}</h2>
      <p>${t("formulaHelp")}</p>
      <div class="field full"><label>${t("formula")}</label><select onchange="updateSetup('gameFormula', this.value)">${gameFormulas.map(([value, label]) => `<option value="${value}" ${state.setup.gameFormula === value ? "selected" : ""}>${label}</option>`).join("")}</select></div>
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
                <div class="field"><label>${t("teeTime")}</label><input value="${group.teeTime}" oninput="updateGroup(${groupIndex}, 'teeTime', this.value)" /></div>
              </div>
              <strong class="mini-title">${t("manualPlayers")}</strong>
              <div class="player-chip-grid">
                ${state.setupPlayers.map((player, playerIndex) => `
                  <button class="choice ${group.playerIndexes.includes(playerIndex) ? "active" : ""}" onclick="toggleGroupPlayer(${groupIndex}, ${playerIndex})">${playerName(playerIndex)}</button>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
        <button class="button setup-start" onclick="addGroup()">${icon("plus")}${t("group")}</button>
      </div>
    `;
  }
  if (step === "teams") {
    normalizeTeams();
    return `
      <div class="wizard-body">
        <h2>${t("teamsTitle")}</h2>
        <p>${t("teamsHelp")}</p>
        <div class="choice-row">
          <button class="choice ${Number(state.setup.scrambleSize) === 2 ? "active" : ""}" onclick="setScrambleSize(2)">${t("scrambleSize")} 2</button>
          <button class="choice ${Number(state.setup.scrambleSize) === 4 ? "active" : ""}" onclick="setScrambleSize(4)">${t("scrambleSize")} 4</button>
        </div>
        <div class="team-list">
          ${state.teams.map((team, teamIndex) => `
            <div class="builder-card">
              <strong>${team.name}</strong>
              ${Array.from({ length: Number(state.setup.scrambleSize) || 2 }).map((_, slotIndex) => `
                <div class="field">
                  <label>${t("players")} ${slotIndex + 1}</label>
                  <select onchange="updateTeamPlayer(${teamIndex}, ${slotIndex}, this.value)">
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
          <div><h3>${t("round")} ${index + 1}</h3><span>${roundCourse.courseName || t("searchGolf")}</span></div>
        </div>
        <div class="form-grid">
          <div class="field"><label>${t("searchGolf")}</label><input value="${roundCourse.courseName}" oninput="searchCourseInput(${index}, this.value)" /></div>
          <div class="field"><label>${t("tees")}</label><select onchange="updateRoundCourse(${index}, 'tees', this.value)"><option>Jaunes</option><option>Blancs</option><option>Bleus</option><option>Rouges</option></select></div>
        </div>
        <div class="empty-note" data-course-api-status>${state.courseApiStatus[index] || "Recherche GolfCourseAPI en attente."}</div>
        <div class="course-suggestions" data-course-suggestions>
          ${renderCourseSuggestions(index)}
        </div>
      </div>
    `;
  }).join("");
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
  normalizeGroups();
  const entries = Object.entries(state.scores).filter(([, item]) => state.scoringMode !== "marker" || item.cardRole !== "hidden");
  const rows = entries
    .map(([key, item]) => `
      <div class="score-line ${state.puttsEnabled ? "" : "putts-off"}">
        <div>
          <div class="name">${item.name}</div>
          <span class="pill ${item.cardRole === "official" ? "warning" : "blue"}">${item.cardRole === "official" ? t("officialCard") : item.cardRole === "verification" ? t("checkCard") : `${item.points} pts calcules`}</span>
        </div>
        ${renderScoreCell(key, "gross", "Score", item.gross)}
        ${state.puttsEnabled ? renderScoreCell(key, "putts", "Putts", item.putts) : ""}
      </div>
    `)
    .join("");
  const active = state.activeScore;
  const activeItem = active ? state.scores[active.playerKey] : null;
  const activeLabel = activeItem ? `${activeItem.name} - ${active.field === "gross" ? "score" : "putts"}` : "Selectionner une cellule";
  const exampleGroup = state.groups.find((group) => group.playerIndexes.length) || state.groups[0];
  const exampleAssignment = exampleGroup?.markerAssignments?.[0];
  const examplePlayer = exampleAssignment ? playerName(exampleAssignment.playerIndex) : "Sophie";
  const exampleMarked = exampleAssignment ? playerName(exampleAssignment.marksIndex) : "Thomas";

  return `
    <div class="section-title">
      <div>
        <h3>Saisie mobile</h3>
        <span>Partie 1, trou courant avec sauvegarde automatique</span>
      </div>
      <span class="pill">Enregistre</span>
    </div>
    <section class="grid two">
      <div class="panel pad scorecard">
        <div class="hole-card">
          <div class="hole-top">
            <div><span class="pill blue">Par 4 - SI 3</span><strong>Trou ${state.hole}</strong></div>
            <button class="button icon-only" title="Notifications">${icon("bell")}</button>
          </div>
          <div class="score-inputs">${rows}</div>
        </div>
        ${renderMobileKeypad(activeLabel)}
        <button class="button primary" onclick="state.hole = Math.min(18, state.hole + 1); render();">${icon("flag")}Valider le trou</button>
        <div class="empty-note">${state.scoringMode === "marker" ? `Profil exemple : ${examplePlayer} voit seulement ${exampleMarked} à marquer officiellement et sa propre carte de vérification.` : "La saisie suit le mode choisi pendant la création."}</div>
      </div>
      ${renderLeaderboardPanel()}
    </section>
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
  return `
    <div class="section-title">
      <div>
        <h3>Leaderboard</h3>
        <span>Classements brut, net et Stableford</span>
      </div>
      <div class="segmented">
        <button class="${state.format === "stableford" ? "active" : ""}" onclick="setFormat('stableford')">Pts</button>
        <button class="${state.format === "net" ? "active" : ""}" onclick="setFormat('net')">Net</button>
        <button class="${state.format === "brut" ? "active" : ""}" onclick="setFormat('brut')">Brut</button>
      </div>
    </div>
    <section class="grid two">
      ${renderLeaderboardPanel(false)}
      <div class="panel">
        <div class="panel-head"><div><h3>Animations</h3><span>Evenements de competition</span></div></div>
        <div class="panel pad audit-list">
          <div class="audit-item"><span class="avatar">TK</span><div><strong>Nouveau leader</strong><span>Thomas passe devant au trou 7</span></div><span class="pill">Live</span></div>
          <div class="audit-item"><span class="avatar">SM</span><div><strong>Birdie</strong><span>Sophie marque 4 points Stableford</span></div><span class="pill blue">Notif</span></div>
          <div class="audit-item"><span class="avatar">ID</span><div><strong>Carte a verifier</strong><span>Score inconnu detecte au trou 5</span></div><span class="pill warning">Action</span></div>
        </div>
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
    <div class="panel">
      <div class="panel-head">
        <div><h3>Leaderboard</h3><span>${compact ? "Top actuel" : "Classement complet"}</span></div>
        <button class="button small" onclick="setView('leaderboard')">${icon("trophy")}Voir</button>
      </div>
      <div class="panel pad leaderboard">
        ${leaderboard.map((row, index) => `
          <div class="leader-row">
            <span class="rank">${index + 1}</span>
            <div><strong>${row.name}</strong><span>${row.thru} - net ${row.net}</span></div>
            <div class="score-value">${row.pts}<span>points</span></div>
          </div>
        `).join("")}
      </div>
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
    setActiveScore,
    keypadScore,
    clearActiveScore,
    abandonActiveScore,
    recordScoreEvent,
    scoreKeys,
  };
}
