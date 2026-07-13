window.SITE_CONFIG = {
  version: '3.0.0-france-bilingual',
  match: {
    competition: 'FIFA World Cup 2026 semi-final',
    home: 'France',
    away: 'Spain',
    dateISO: '2026-07-14T21:00:00+02:00',
    venue: 'Dallas Stadium, Arlington',
    stage: 'Semi-final',
    lineupStatus: 'predicted',
    lineupUpdated: 'Predicted line-up. Confirmed teams normally arrive around one hour before kick-off.',
    finalStatus: '',
    route: [
      { label: 'Round of 32', detail: 'France 3–0 Sweden', status: 'done' },
      { label: 'Round of 16', detail: 'France 1–0 Paraguay', status: 'done' },
      { label: 'Quarter-final', detail: 'France 2–0 Morocco', meta: '9 July', status: 'done' },
      { label: 'Semi-final', detail: 'France v Spain', meta: 'Dallas/Arlington | 14 July | 21:00 France', status: 'live' },
      { label: 'Final', detail: 'England or Argentina', meta: 'New York/New Jersey | 19 July', status: 'future' }
    ],
    teamNews: [
      { status: 'green', icon: '🟢', title: 'France reach another semi-final', text: 'Les Bleus progressed after a controlled 2–0 quarter-final victory over Morocco.' },
      { status: 'green', icon: '🟢', title: 'Mbappé leads the attack', text: 'France’s captain remains the main threat with his pace, movement and finishing.' },
      { status: 'amber', icon: '🟡', title: 'Selection remains predicted', text: 'The official starting XI should be confirmed around one hour before kick-off.' },
      { status: 'green', icon: '🟢', title: 'Defence in strong form', text: 'France have kept clean sheets in all three knockout matches.' }
    ],
    weather: { latitude: 32.7473, longitude: -97.0945, label: 'Dallas Stadium, Arlington' },
    nextFixtures: [
      { opponent:'Spain', date:'14 July 2026 · 21:00 France', venue:'Dallas Stadium, Arlington', competition:'World Cup semi-final', conditional:false },
      { opponent:'England or Argentina', date:'19 July 2026 · 21:00 France', venue:'New York/New Jersey Stadium', competition:'World Cup final', conditional:true }
    ],
    links: {
      france: 'https://www.fff.fr/equipe-nationale/',
      flashscore: 'https://www.flashscore.com/football/',
      fifa: 'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026'
    }
  }
};
