const FR_MODE=(localStorage.getItem('france_lang')||'en')==='fr';
const BILINGUAL_QUIZ=[
  {
    "en": {
      "question": "Who captained France to the 1998 World Cup title?",
      "options": [
        "Didier Deschamps",
        "Zinedine Zidane",
        "Marcel Desailly",
        "Laurent Blanc"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Didier Deschamps captained France in 1998."
    },
    "fr": {
      "question": "Qui était le capitaine de la France lors du titre mondial de 1998 ?",
      "options": [
        "Didier Deschamps",
        "Zinédine Zidane",
        "Marcel Desailly",
        "Laurent Blanc"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Didier Deschamps portait le brassard en 1998."
    }
  },
  {
    "en": {
      "question": "Which team did France beat in the 1998 World Cup final?",
      "options": [
        "Brazil",
        "Croatia",
        "Italy",
        "Germany"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "France beat Brazil 3–0."
    },
    "fr": {
      "question": "Quelle équipe la France a-t-elle battue en finale de la Coupe du monde 1998 ?",
      "options": [
        "Brésil",
        "Croatie",
        "Italie",
        "Allemagne"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "La France a battu le Brésil 3-0."
    }
  },
  {
    "en": {
      "question": "Who scored twice in the 1998 World Cup final?",
      "options": [
        "Zinedine Zidane",
        "Thierry Henry",
        "Youri Djorkaeff",
        "Emmanuel Petit"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Zidane scored two headers."
    },
    "fr": {
      "question": "Qui a marqué deux buts en finale de la Coupe du monde 1998 ?",
      "options": [
        "Zinédine Zidane",
        "Thierry Henry",
        "Youri Djorkaeff",
        "Emmanuel Petit"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Zinédine Zidane a marqué deux fois de la tête."
    }
  },
  {
    "en": {
      "question": "Who scored France’s third goal in the 1998 final?",
      "options": [
        "Emmanuel Petit",
        "Patrick Vieira",
        "Robert Pirès",
        "Christophe Dugarry"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Petit scored in stoppage time."
    },
    "fr": {
      "question": "Qui a inscrit le troisième but français en finale de 1998 ?",
      "options": [
        "Emmanuel Petit",
        "Patrick Vieira",
        "Robert Pirès",
        "Christophe Dugarry"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Emmanuel Petit a marqué dans le temps additionnel."
    }
  },
  {
    "en": {
      "question": "Which defender scored twice against Croatia in the 1998 semi-final?",
      "options": [
        "Lilian Thuram",
        "Laurent Blanc",
        "Bixente Lizarazu",
        "Marcel Desailly"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Thuram scored both French goals."
    },
    "fr": {
      "question": "Quel défenseur a marqué deux fois contre la Croatie en demi-finale de 1998 ?",
      "options": [
        "Lilian Thuram",
        "Laurent Blanc",
        "Bixente Lizarazu",
        "Marcel Desailly"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Lilian Thuram a inscrit les deux buts français."
    }
  },
  {
    "en": {
      "question": "Who scored the golden goal against Paraguay in 1998?",
      "options": [
        "Laurent Blanc",
        "Thierry Henry",
        "David Trezeguet",
        "Zinedine Zidane"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Blanc scored the first golden goal in World Cup history."
    },
    "fr": {
      "question": "Qui a marqué le but en or contre le Paraguay en 1998 ?",
      "options": [
        "Laurent Blanc",
        "Thierry Henry",
        "David Trezeguet",
        "Zinédine Zidane"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Laurent Blanc a inscrit le premier but en or de l’histoire de la Coupe du monde."
    }
  },
  {
    "en": {
      "question": "Which team did France eliminate on penalties in the 1998 quarter-final?",
      "options": [
        "Italy",
        "Germany",
        "Netherlands",
        "Argentina"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "France eliminated Italy after a 0–0 draw."
    },
    "fr": {
      "question": "Quelle équipe la France a-t-elle éliminée aux tirs au but en quart de finale en 1998 ?",
      "options": [
        "Italie",
        "Allemagne",
        "Pays-Bas",
        "Argentine"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "La France a éliminé l’Italie après un match nul 0-0."
    }
  },
  {
    "en": {
      "question": "How many men’s World Cups had France won before 2026?",
      "options": [
        "Two",
        "One",
        "Three",
        "Four"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "France won in 1998 and 2018."
    },
    "fr": {
      "question": "Combien de Coupes du monde masculines la France avait-elle remportées avant 2026 ?",
      "options": [
        "Deux",
        "Une",
        "Trois",
        "Quatre"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "La France a été championne en 1998 et en 2018."
    }
  },
  {
    "en": {
      "question": "Which team did France beat in the 2018 World Cup final?",
      "options": [
        "Croatia",
        "Belgium",
        "Argentina",
        "Uruguay"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "France beat Croatia 4–2."
    },
    "fr": {
      "question": "Quelle équipe la France a-t-elle battue en finale de la Coupe du monde 2018 ?",
      "options": [
        "Croatie",
        "Belgique",
        "Argentine",
        "Uruguay"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "La France a battu la Croatie 4-2."
    }
  },
  {
    "en": {
      "question": "Who coached France to the 2018 World Cup title?",
      "options": [
        "Didier Deschamps",
        "Laurent Blanc",
        "Raymond Domenech",
        "Aimé Jacquet"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Didier Deschamps was the coach."
    },
    "fr": {
      "question": "Qui était le sélectionneur de la France lors du titre mondial de 2018 ?",
      "options": [
        "Didier Deschamps",
        "Laurent Blanc",
        "Raymond Domenech",
        "Aimé Jacquet"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Didier Deschamps était le sélectionneur."
    }
  },
  {
    "en": {
      "question": "Who scored France’s fourth goal in the 2018 World Cup final?",
      "options": [
        "Kylian Mbappé",
        "Paul Pogba",
        "Antoine Griezmann",
        "Olivier Giroud"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Mbappé made the score 4–1."
    },
    "fr": {
      "question": "Qui a inscrit le quatrième but français en finale de la Coupe du monde 2018 ?",
      "options": [
        "Kylian Mbappé",
        "Paul Pogba",
        "Antoine Griezmann",
        "Olivier Giroud"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Kylian Mbappé a porté le score à 4-1."
    }
  },
  {
    "en": {
      "question": "Who won the Best Young Player award at the 2018 World Cup?",
      "options": [
        "Kylian Mbappé",
        "Benjamin Pavard",
        "Lucas Hernandez",
        "Ousmane Dembélé"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Mbappé won the award aged 19."
    },
    "fr": {
      "question": "Qui a remporté le trophée du meilleur jeune joueur de la Coupe du monde 2018 ?",
      "options": [
        "Kylian Mbappé",
        "Benjamin Pavard",
        "Lucas Hernandez",
        "Ousmane Dembélé"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Kylian Mbappé a remporté ce trophée à 19 ans."
    }
  },
  {
    "en": {
      "question": "Who scored France’s winner against Belgium in the 2018 semi-final?",
      "options": [
        "Samuel Umtiti",
        "Raphaël Varane",
        "Paul Pogba",
        "Antoine Griezmann"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Umtiti scored with a header."
    },
    "fr": {
      "question": "Qui a marqué le but de la victoire contre la Belgique en demi-finale en 2018 ?",
      "options": [
        "Samuel Umtiti",
        "Raphaël Varane",
        "Paul Pogba",
        "Antoine Griezmann"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Samuel Umtiti a marqué de la tête."
    }
  },
  {
    "en": {
      "question": "Who scored a famous long-range goal against Argentina in 2018?",
      "options": [
        "Benjamin Pavard",
        "N’Golo Kanté",
        "Blaise Matuidi",
        "Lucas Hernandez"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Pavard’s strike was voted goal of the tournament."
    },
    "fr": {
      "question": "Qui a marqué un célèbre but de loin contre l’Argentine en 2018 ?",
      "options": [
        "Benjamin Pavard",
        "N’Golo Kanté",
        "Blaise Matuidi",
        "Lucas Hernandez"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "La frappe de Benjamin Pavard a été élue plus beau but du tournoi."
    }
  },
  {
    "en": {
      "question": "Who scored a hat-trick for France in the 2022 World Cup final?",
      "options": [
        "Kylian Mbappé",
        "Olivier Giroud",
        "Antoine Griezmann",
        "Marcus Thuram"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Mbappé scored all three French goals."
    },
    "fr": {
      "question": "Qui a inscrit un triplé pour la France en finale de la Coupe du monde 2022 ?",
      "options": [
        "Kylian Mbappé",
        "Olivier Giroud",
        "Antoine Griezmann",
        "Marcus Thuram"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Kylian Mbappé a inscrit les trois buts français."
    }
  },
  {
    "en": {
      "question": "Which team beat France in the 2022 World Cup final?",
      "options": [
        "Argentina",
        "Brazil",
        "Spain",
        "Germany"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Argentina won on penalties after a 3–3 draw."
    },
    "fr": {
      "question": "Quelle équipe a battu la France en finale de la Coupe du monde 2022 ?",
      "options": [
        "Argentine",
        "Brésil",
        "Espagne",
        "Allemagne"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "L’Argentine s’est imposée aux tirs au but après un match nul 3-3."
    }
  },
  {
    "en": {
      "question": "Who became France’s record men’s goalscorer during the 2022 World Cup?",
      "options": [
        "Olivier Giroud",
        "Kylian Mbappé",
        "Thierry Henry",
        "Antoine Griezmann"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Giroud passed Thierry Henry during the tournament."
    },
    "fr": {
      "question": "Qui est devenu le meilleur buteur de l’histoire des Bleus pendant la Coupe du monde 2022 ?",
      "options": [
        "Olivier Giroud",
        "Kylian Mbappé",
        "Thierry Henry",
        "Antoine Griezmann"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Olivier Giroud a dépassé Thierry Henry pendant le tournoi."
    }
  },
  {
    "en": {
      "question": "Who holds the record for most goals at a single men’s World Cup?",
      "options": [
        "Just Fontaine",
        "Gerd Müller",
        "Ronaldo",
        "Kylian Mbappé"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Fontaine scored 13 goals in 1958."
    },
    "fr": {
      "question": "Qui détient le record de buts lors d’une seule Coupe du monde masculine ?",
      "options": [
        "Just Fontaine",
        "Gerd Müller",
        "Ronaldo",
        "Kylian Mbappé"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Just Fontaine a marqué 13 buts en 1958."
    }
  },
  {
    "en": {
      "question": "Who won the Ballon d’Or in 1958?",
      "options": [
        "Raymond Kopa",
        "Just Fontaine",
        "Michel Platini",
        "Jean-Pierre Papin"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Raymond Kopa won the award."
    },
    "fr": {
      "question": "Quel Français a remporté le Ballon d’Or en 1958 ?",
      "options": [
        "Raymond Kopa",
        "Just Fontaine",
        "Michel Platini",
        "Jean-Pierre Papin"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Raymond Kopa a remporté le trophée."
    }
  },
  {
    "en": {
      "question": "Who scored the golden goal in the Euro 2000 final?",
      "options": [
        "David Trezeguet",
        "Sylvain Wiltord",
        "Thierry Henry",
        "Zinedine Zidane"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Trezeguet scored against Italy."
    },
    "fr": {
      "question": "Qui a marqué le but en or en finale de l’Euro 2000 ?",
      "options": [
        "David Trezeguet",
        "Sylvain Wiltord",
        "Thierry Henry",
        "Zinédine Zidane"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "David Trezeguet a marqué contre l’Italie."
    }
  },
  {
    "en": {
      "question": "Who equalised for France late in the Euro 2000 final?",
      "options": [
        "Sylvain Wiltord",
        "David Trezeguet",
        "Robert Pirès",
        "Youri Djorkaeff"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Wiltord scored in stoppage time."
    },
    "fr": {
      "question": "Qui a égalisé pour la France en fin de finale de l’Euro 2000 ?",
      "options": [
        "Sylvain Wiltord",
        "David Trezeguet",
        "Robert Pirès",
        "Youri Djorkaeff"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Sylvain Wiltord a marqué dans le temps additionnel."
    }
  },
  {
    "en": {
      "question": "Who was France’s leading scorer at Euro 1984?",
      "options": [
        "Michel Platini",
        "Alain Giresse",
        "Jean Tigana",
        "Luis Fernandez"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Platini scored nine goals."
    },
    "fr": {
      "question": "Qui a été le meilleur buteur français à l’Euro 1984 ?",
      "options": [
        "Michel Platini",
        "Alain Giresse",
        "Jean Tigana",
        "Luis Fernandez"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Michel Platini a marqué neuf buts."
    }
  },
  {
    "en": {
      "question": "Which team did France beat in the Euro 1984 final?",
      "options": [
        "Spain",
        "Portugal",
        "West Germany",
        "Belgium"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "France beat Spain 2–0."
    },
    "fr": {
      "question": "Quelle équipe la France a-t-elle battue en finale de l’Euro 1984 ?",
      "options": [
        "Espagne",
        "Portugal",
        "Allemagne de l’Ouest",
        "Belgique"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "La France a battu l’Espagne 2-0."
    }
  },
  {
    "en": {
      "question": "Who captained France to the 2018 World Cup title?",
      "options": [
        "Hugo Lloris",
        "Raphaël Varane",
        "Paul Pogba",
        "Antoine Griezmann"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Hugo Lloris was captain."
    },
    "fr": {
      "question": "Qui était le capitaine de la France lors du titre mondial de 2018 ?",
      "options": [
        "Hugo Lloris",
        "Raphaël Varane",
        "Paul Pogba",
        "Antoine Griezmann"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Hugo Lloris était le capitaine."
    }
  },
  {
    "en": {
      "question": "Which country hosted the 1998 World Cup?",
      "options": [
        "France",
        "Germany",
        "Italy",
        "Spain"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "France hosted the tournament."
    },
    "fr": {
      "question": "Quel pays a organisé la Coupe du monde 1998 ?",
      "options": [
        "France",
        "Allemagne",
        "Italie",
        "Espagne"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "La France a organisé le tournoi."
    }
  },
  {
    "en": {
      "question": "Where was the 1998 World Cup final played?",
      "options": [
        "Stade de France",
        "Parc des Princes",
        "Stade Vélodrome",
        "Stade de Gerland"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "The final was played in Saint-Denis."
    },
    "fr": {
      "question": "Où s’est jouée la finale de la Coupe du monde 1998 ?",
      "options": [
        "Stade de France",
        "Parc des Princes",
        "Stade Vélodrome",
        "Stade de Gerland"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "La finale s’est jouée au Stade de France, à Saint-Denis."
    }
  },
  {
    "en": {
      "question": "Who coached France at the 1998 World Cup?",
      "options": [
        "Aimé Jacquet",
        "Roger Lemerre",
        "Michel Hidalgo",
        "Didier Deschamps"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Aimé Jacquet was the coach."
    },
    "fr": {
      "question": "Qui était le sélectionneur de la France à la Coupe du monde 1998 ?",
      "options": [
        "Aimé Jacquet",
        "Roger Lemerre",
        "Michel Hidalgo",
        "Didier Deschamps"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Aimé Jacquet était le sélectionneur."
    }
  },
  {
    "en": {
      "question": "Who scored the winning goal in the 2021 Nations League final?",
      "options": [
        "Kylian Mbappé",
        "Karim Benzema",
        "Antoine Griezmann",
        "Paul Pogba"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Mbappé scored France’s second goal against Spain."
    },
    "fr": {
      "question": "Qui a marqué le but de la victoire en finale de la Ligue des nations 2021 ?",
      "options": [
        "Kylian Mbappé",
        "Karim Benzema",
        "Antoine Griezmann",
        "Paul Pogba"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Kylian Mbappé a inscrit le deuxième but français contre l’Espagne."
    }
  },
  {
    "en": {
      "question": "Which team did France beat in the 2021 Nations League final?",
      "options": [
        "Spain",
        "Belgium",
        "Italy",
        "Portugal"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "France beat Spain 2–1."
    },
    "fr": {
      "question": "Quelle équipe la France a-t-elle battue en finale de la Ligue des nations 2021 ?",
      "options": [
        "Espagne",
        "Belgique",
        "Italie",
        "Portugal"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "La France a battu l’Espagne 2-1."
    }
  },
  {
    "en": {
      "question": "How many goals did Just Fontaine score at the 1958 World Cup?",
      "options": [
        "13",
        "11",
        "10",
        "9"
      ],
      "answer": 0,
      "difficulty": "Medium",
      "category": "France",
      "explanation": "Fontaine scored 13 goals."
    },
    "fr": {
      "question": "Combien de buts Just Fontaine a-t-il marqués à la Coupe du monde 1958 ?",
      "options": [
        "13",
        "11",
        "10",
        "9"
      ],
      "answer": 0,
      "difficulty": "Moyen",
      "category": "France",
      "explanation": "Just Fontaine a marqué 13 buts."
    }
  }
];
window.QUIZ_QUESTIONS=BILINGUAL_QUIZ.map(q=>FR_MODE?q.fr:q.en);
