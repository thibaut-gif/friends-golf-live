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
  scoringMode: "marker",
  hole: 7,
  puttsEnabled: false,
  activeScore: { playerKey: "sophie", field: "gross" },
  scoreEvents: [],
  scores: {
    sophie: { name: "Sophie", gross: 5, putts: 2, points: 3 },
    thomas: { name: "Thomas", gross: 4, putts: 1, points: 4 },
    ines: { name: "Ines", gross: 6, putts: 2, points: 2 },
  },
};

const languages = [
  { code: "FR", label: "Francais", flag: "🇫🇷" },
  { code: "EN", label: "English", flag: "🇬🇧" },
  { code: "ES", label: "Espanol", flag: "🇪🇸" },
  { code: "IT", label: "Italiano", flag: "🇮🇹" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
];

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
            <span>Play with friends. Score live.</span>
          </div>
        </div>
        <div class="status">
          <div class="language-menu" aria-label="Langue">
            <button class="language-current" title="${activeLanguage.label}">${activeLanguage.flag}</button>
            <div class="language-options">
              ${languages.map((language) => `
                <button class="${state.language === language.code ? "active" : ""}" title="${language.label}" onclick="setLanguage('${language.code}')">
                  <span>${language.flag}</span>
                  <strong>${language.code}</strong>
                </button>
              `).join("")}
            </div>
          </div>
          <span class="pill blue">Staging</span>
          <span class="pill">Synchronise</span>
        </div>
      </div>
    </header>
  `;
}

function renderDashboard() {
  return `
    <section class="hero">
      <div class="hero-main">
        <div>
          <span class="pill">Nouvelle partie entre amis</span>
          <h2>Friends Golf Live</h2>
          <p>Creer une partie, choisir les amis, les golfs et la formule, puis saisir les scores en direct sans complexite.</p>
          <div class="hero-actions">
            <button class="button primary" onclick="setView('create')">${icon("plus")}Creer une partie</button>
            <button class="button dark" onclick="setView('score')">${icon("score")}Reprendre une saisie</button>
          </div>
        </div>
        <div class="metric-grid">
          <div class="metric"><strong>1</strong><span>partie a creer</span></div>
          <div class="metric"><strong>3 min</strong><span>pour demarrer</span></div>
          <div class="metric"><strong>Live</strong><span>score et classement</span></div>
        </div>
      </div>
      <aside class="panel pad">
        <div class="section-title">
          <div>
            <h3>Parcours simple</h3>
            <span>Dans l'ordre naturel avant le depart</span>
          </div>
        </div>
        <div class="timeline">
          <div class="step"><span class="step-number">1</span><div><strong>Qui joue ?</strong><span>Nombre d'amis et invitations</span></div><span class="pill">Simple</span></div>
          <div class="step"><span class="step-number">2</span><div><strong>Ou et comment ?</strong><span>Golfs, tours et formule de calcul</span></div><span class="pill">Guide</span></div>
          <div class="step"><span class="step-number">3</span><div><strong>On lance</strong><span>Mode de saisie, putts et signature</span></div><span class="pill warning">Live</span></div>
        </div>
      </aside>
    </section>
    <section class="grid three">
      ${renderLeaderboardPanel()}
      ${renderFlightsPanel()}
      ${renderSecurityPanel(true)}
    </section>
  `;
}

function renderCreate() {
  return `
    <div class="section-title">
      <div>
        <h3>Creer une partie</h3>
        <span>Un assistant court, dans l'ordre ou on se pose les questions</span>
      </div>
      <button class="button primary small" onclick="setView('score')">${icon("flag")}Demarrer</button>
    </div>
    <section class="setup-flow">
      <div class="setup-card">
        <span class="step-number">1</span>
        <div>
          <h3>Nouvelle partie ou competition</h3>
          <p>Donne un nom clair a l'evenement pour que les amis le reconnaissent.</p>
          <div class="form-grid">
            <div class="field full"><label>Nom</label><input value="Friends Invitational 2026" /></div>
            <div class="field"><label>Type</label><select><option>Partie entre amis</option><option>Competition privee</option><option>Sejour golfique</option></select></div>
            <div class="field"><label>Date</label><input type="date" value="2026-06-18" /></div>
          </div>
        </div>
      </div>
      <div class="setup-card">
        <span class="step-number">2</span>
        <div>
          <h3>Combien d'amis ?</h3>
          <p>Saisis simplement le nombre de joueurs qui participent.</p>
          <div class="participant-control">
            <label for="participants-count">Joueurs</label>
            <input id="participants-count" type="number" min="1" max="120" step="1" value="4" inputmode="numeric" />
          </div>
          ${renderPlayersCompact()}
        </div>
      </div>
      <div class="setup-card">
        <span class="step-number">3</span>
        <div>
          <h3>Combien de tours ?</h3>
          <p>Un tour pour une partie simple, plusieurs tours pour un week-end ou un petit tournoi.</p>
          <div class="choice-row">
            <button class="choice active">1 tour</button>
            <button class="choice">2 tours</button>
            <button class="choice">3 tours</button>
            <button class="choice">4 tours</button>
          </div>
        </div>
      </div>
      <div class="setup-card">
        <span class="step-number">4</span>
        <div>
          <h3>Selectionner les golfs</h3>
          <p>Choisis les parcours et valide la carte avant le depart.</p>
          <div class="form-grid">
            <div class="field"><label>Tour 1</label><input value="Golf de Chantilly - Vineuil" /></div>
            <div class="field"><label>Departs</label><select><option>Jaunes</option><option>Blancs</option><option>Bleus</option><option>Rouges</option></select></div>
          </div>
        </div>
      </div>
      <div class="setup-card">
        <span class="step-number">5</span>
        <div>
          <h3>Formule de calcul</h3>
          <p>L'app calcule le classement automatiquement selon la formule choisie.</p>
          <div class="choice-row">
            <button class="choice active" onclick="setFormat('stableford')">Stableford net</button>
            <button class="choice" onclick="setFormat('net')">Stroke net</button>
            <button class="choice" onclick="setFormat('brut')">Stroke brut</button>
          </div>
        </div>
      </div>
      <div class="setup-card">
        <span class="step-number">6</span>
        <div>
          <h3>Mode de saisie</h3>
          <p>Choisis qui saisit les scores pendant la partie.</p>
          <div class="mode-list">
            <button class="mode-card ${state.scoringMode === "centralized" ? "active" : ""}" onclick="setScoringMode('centralized')">
              <strong>Saisie centralisee</strong>
              <span>Une personne saisit tous les scores de la partie.</span>
            </button>
            <button class="mode-card ${state.scoringMode === "individual" ? "active" : ""}" onclick="setScoringMode('individual')">
              <strong>Saisie individuelle</strong>
              <span>Chaque joueur saisit uniquement ses propres scores.</span>
            </button>
            <button class="mode-card ${state.scoringMode === "marker" ? "active" : ""}" onclick="setScoringMode('marker')">
              <strong>Carteur / marqueur</strong>
              <span>Chaque joueur saisit sa carte officielle et sa carte de verification.</span>
            </button>
          </div>
        </div>
      </div>
      <div class="setup-card">
        <span class="step-number">7</span>
        <div>
          <h3>Lancer la partie</h3>
          <p>Compose les equipes, choisis le marqueur, active les putts si besoin et prevois la signature des cartes.</p>
          <div class="switches">
            <label class="switch"><span>Saisie des putts</span><input type="checkbox" ${state.puttsEnabled ? "checked" : ""} onchange="setPuttsEnabled(this.checked)" /></label>
            <label class="switch"><span>Classement visible en direct</span><input type="checkbox" checked /></label>
            <label class="switch"><span>Verification croisee et signature</span><input type="checkbox" checked /></label>
          </div>
          ${renderFlightsCompact()}
          <button class="button primary setup-start" onclick="setView('score')">${icon("flag")}Demarrer la saisie</button>
        </div>
      </div>
    </section>
  `;
}

function renderScore() {
  const rows = Object.entries(state.scores)
    .map(([key, item]) => `
      <div class="score-line ${state.puttsEnabled ? "" : "putts-off"}">
        <div>
          <div class="name">${item.name}</div>
          <span class="pill blue">${item.points} pts calcules</span>
        </div>
        ${renderScoreCell(key, "gross", "Score", item.gross)}
        ${state.puttsEnabled ? renderScoreCell(key, "putts", "Putts", item.putts) : ""}
      </div>
    `)
    .join("");
  const active = state.activeScore;
  const activeItem = active ? state.scores[active.playerKey] : null;
  const activeLabel = activeItem ? `${activeItem.name} - ${active.field === "gross" ? "score" : "putts"}` : "Selectionner une cellule";

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
        <div class="empty-note">En mode carteur, chaque joueur saisit la carte officielle de son marqueur et sa propre carte de verification.</div>
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
          <label class="switch"><span>Export CSV scores complets</span><button class="button small">${icon("download")}CSV</button></label>
          <label class="switch"><span>Archive JSON competition</span><button class="button small">${icon("download")}JSON</button></label>
          <label class="switch"><span>Recapitulatif PDF final</span><button class="button small">${icon("download")}PDF</button></label>
        </div>
      </div>
    </section>
  `;
}

function renderCards() {
  return `
    <div class="section-title">
      <div>
        <h3>Verification des cartes</h3>
        <span>Comparer, corriger, signer, puis verrouiller les scores</span>
      </div>
      <span class="pill warning">2 ecarts</span>
    </div>
    <section class="grid two">
      <div class="panel">
        <div class="panel-head"><div><h3>Controle croise</h3><span>Carte officielle vs verification joueur</span></div></div>
        <div class="panel pad card-check-list">
          <div class="card-check-row">
            <span class="avatar">SM</span>
            <div><strong>Sophie Martin</strong><span>Officiel marqueur: 43 · joueur: 43</span></div>
            <span class="pill">OK</span>
          </div>
          <div class="card-check-row mismatch">
            <span class="avatar">TK</span>
            <div><strong>Thomas Keller</strong><span>Officiel marqueur: 39 · joueur: 40 · trou 6 a verifier</span></div>
            <span class="pill warning">Ecart</span>
          </div>
          <div class="card-check-row">
            <span class="avatar">ID</span>
            <div><strong>Ines Duarte</strong><span>Officiel marqueur: 48 · joueur: 48</span></div>
            <span class="pill">OK</span>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h3>Signature</h3><span>Validation numerique horodatee</span></div></div>
        <div class="panel pad signature-list">
          <div class="signature-row"><div><strong>Signature joueur</strong><span>Thomas confirme sa carte apres correction.</span></div><button class="button small primary">Signer</button></div>
          <div class="signature-row"><div><strong>Signature marqueur</strong><span>Sophie confirme les scores officiels saisis.</span></div><button class="button small">En attente</button></div>
          <div class="signature-row locked"><div><strong>Verrouillage</strong><span>La carte devient officielle apres les deux signatures.</span></div><span class="pill blue">Pret</span></div>
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
    ["dashboard", "home", "Accueil"],
    ["create", "plus", "Creer"],
    ["score", "score", "Score"],
    ["cards", "shield", "Cartes"],
    ["leaderboard", "trophy", "Classement"],
    ["security", "shield", "Securite"],
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
  document.getElementById("app").innerHTML = `
    <div class="shell">
      ${renderTopbar()}
      <main class="container">
        ${renderCurrentView()}
      </main>
      ${renderTabs()}
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
    setActiveScore,
    keypadScore,
    clearActiveScore,
    abandonActiveScore,
    recordScoreEvent,
    scoreKeys,
  };
}
