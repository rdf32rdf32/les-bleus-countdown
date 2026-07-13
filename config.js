window.SITE_CONFIG = {
  match: {
    home: 'France',
    away: 'Spain',
    kickoff: '2026-07-14T15:00:00-04:00',
    venue: 'Atlanta Stadium',
    competition: 'World Cup semi-final',
    stage: 'Semi-final countdown',
    version: 'France edition 1.0',
    progress: 'Semi-final stage',
    road: [
      { label: 'Round of 32', detail: 'France 3–0 Sweden', status: 'done' },
      { label: 'Round of 16', detail: 'France 1–0 Paraguay', status: 'done' },
      { label: 'Quarter-final', detail: 'France 2–0 Morocco', meta: '9 July', status: 'done' },
      { label: 'Semi-final', detail: 'France v Spain', meta: 'Atlanta | 14 July | 21:00 France', status: 'live' },
      { label: 'Final', detail: 'England or Argentina', meta: 'New York/New Jersey | 19 July', status: 'future' }
    ],
    teamNews: [
      { status: 'green', icon: '🟢', title: 'Mbappé ready to lead the attack', text: 'France’s captain remains the central threat in the semi-final.' },
      { status: 'green', icon: '🟢', title: 'Midfield options available', text: 'France have strong alternatives in central and attacking midfield.' },
      { status: 'amber', icon: '🟡', title: 'Line-up not yet confirmed', text: 'The starting XI will only be official shortly before kick-off.' }
    ],
    weather: { latitude: 33.7554, longitude: -84.4008, label: 'Atlanta' },
    nextFixtures: [
      { opponent:'Spain', date:'14 July 2026 · 21:00 France', venue:'Atlanta Stadium', competition:'World Cup semi-final', conditional:false },
      { opponent:'England or Argentina', date:'19 July 2026', venue:'New York/New Jersey Stadium', competition:'World Cup final', conditional:true }
    ]
  }
};
