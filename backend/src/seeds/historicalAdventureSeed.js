// Sample historical adventure seed data
// COMPREHENSIVE HISTORICAL ADVENTURES - ALL GRADE LEVELS (K-6) WITH GRADE-APPROPRIATE CONTENT

const historicalAdventures = [
  // ==================== KINDERGARTEN (K) ====================
  {
    title: 'The First Thanksgiving: Friends Share Food',
    description: 'Learn about the Pilgrims and Native Americans sharing a meal!',
    era: 'Ancient',
    gradeLevel: 'K',
    difficulty: 'Easy',
    estimatedTime: 10,
    scenarios: [
      {
        title: 'Meeting New Friends',
        description: 'You are with the Pilgrims who just arrived in America. The Native Americans want to help you learn about the land. What do you do?',
        backgroundImage: 'pilgrim_village.jpg',
        choices: [
          {
            text: 'Be friendly and learn from them',
            nextScenarioId: 'friendship',
            outcome: 'You make friends and learn to grow corn!',
            isHistoricallyAccurate: true,
            learningPoint: 'The Pilgrims and Native Americans worked together and became friends.'
          },
          {
            text: 'Hide and don\'t talk to anyone',
            nextScenarioId: 'lonely',
            outcome: 'You don\'t learn how to grow food and go hungry.',
            isHistoricallyAccurate: false,
            learningPoint: 'Working together helped both groups survive.'
          }
        ],
        characters: [
          {
            name: 'Squanto',
            role: 'Native American Helper',
            imageUrl: 'squanto.jpg',
            dialogues: [
              {
                text: 'I will teach you how to plant corn!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'Native Americans taught the Pilgrims how to grow corn and catch fish.',
            source: 'American History for Kids'
          }
        ]
      }
    ],
    learningObjectives: [
      'Learn about sharing and helping others',
      'Understand that different people can work together',
      'Discover the history of Thanksgiving'
    ],
    isActive: true
  },
  {
    title: 'The First Americans: Native American Life',
    description: 'Learn how Native Americans lived long ago!',
    era: 'Ancient',
    gradeLevel: 'K',
    difficulty: 'Easy',
    estimatedTime: 10,
    scenarios: [
      {
        title: 'Life in the Village',
        description: 'You are visiting a Native American village. They show you how they live. What do you learn about?',
        backgroundImage: 'native_village.jpg',
        choices: [
          {
            text: 'Learn how they hunt and gather food',
            nextScenarioId: 'hunting',
            outcome: 'You learn how they respect nature and only take what they need!',
            isHistoricallyAccurate: true,
            learningPoint: 'Native Americans lived in harmony with nature and used everything they hunted.'
          },
          {
            text: 'Learn how they build homes',
            nextScenarioId: 'building',
            outcome: 'You see how they build different types of homes for different places!',
            isHistoricallyAccurate: true,
            learningPoint: 'Different tribes built different homes: tepees, longhouses, and pueblos.'
          }
        ],
        characters: [
          {
            name: 'Chief',
            role: 'Village Leader',
            imageUrl: 'chief.jpg',
            dialogues: [
              {
                text: 'We respect the land and all living things!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'Native Americans were the first people to live in North America, thousands of years before others arrived.',
            source: 'Native American History'
          }
        ]
      }
    ],
    learningObjectives: [
      'Learn about Native American culture',
      'Understand respect for nature',
      'Discover early American history'
    ],
    isActive: true
  },

  // ==================== GRADE 1 ====================
  {
    title: 'George Washington: Our First President',
    description: 'Meet George Washington and learn about being a leader!',
    era: 'Industrial Revolution',
    gradeLevel: '1',
    difficulty: 'Easy',
    estimatedTime: 10,
    scenarios: [
      {
        title: 'Leading the Way',
        description: 'You are helping George Washington lead the new country. What do you think is most important for a leader to do?',
        backgroundImage: 'washington_dc.jpg',
        choices: [
          {
            text: 'Listen to people and be fair',
            nextScenarioId: 'good_leader',
            outcome: 'People trust you and the country grows strong!',
            isHistoricallyAccurate: true,
            learningPoint: 'George Washington was known for being fair and honest.'
          },
          {
            text: 'Only do what you want',
            nextScenarioId: 'bad_leader',
            outcome: 'People are unhappy and don\'t follow you.',
            isHistoricallyAccurate: false,
            learningPoint: 'Good leaders listen to others and make fair decisions.'
          }
        ],
        characters: [
          {
            name: 'George Washington',
            role: 'First President',
            imageUrl: 'washington.jpg',
            dialogues: [
              {
                text: 'A good leader must be honest and fair to everyone.',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'George Washington was the first President of the United States.',
            source: 'American History'
          }
        ]
      }
    ],
    learningObjectives: [
      'Learn about George Washington',
      'Understand what makes a good leader',
      'Discover the importance of fairness'
    ],
    isActive: true
  },
  {
    title: 'The American Flag: Stars and Stripes',
    description: 'Learn about the American flag!',
    era: 'Industrial Revolution',
    gradeLevel: '1',
    difficulty: 'Easy',
    estimatedTime: 10,
    scenarios: [
      {
        title: 'Making the Flag',
        description: 'You help make the first American flag! It has stars and stripes. What do they mean?',
        backgroundImage: 'flag_making.jpg',
        choices: [
          {
            text: 'The stars represent the states',
            nextScenarioId: 'stars',
            outcome: 'Yes! Each star is for one state in America!',
            isHistoricallyAccurate: true,
            learningPoint: 'The 50 stars on the flag represent the 50 states in the United States.'
          },
          {
            text: 'The stripes represent the original colonies',
            nextScenarioId: 'stripes',
            outcome: 'Correct! The 13 stripes are for the first 13 colonies!',
            isHistoricallyAccurate: true,
            learningPoint: 'The 13 stripes represent the original 13 American colonies.'
          }
        ],
        characters: [
          {
            name: 'Betsy Ross',
            role: 'Flag Maker',
            imageUrl: 'betsy_ross.jpg',
            dialogues: [
              {
                text: 'This flag will represent our new country!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The American flag has changed 27 times as more states joined the country!',
            source: 'American Flag History'
          }
        ]
      }
    ],
    learningObjectives: [
      'Learn about the American flag',
      'Understand American symbols',
      'Discover what the flag represents'
    ],
    isActive: true
  },

  // ==================== GRADE 2 ====================
  {
    title: 'The Liberty Bell: Symbol of Freedom',
    description: 'Discover the story of the Liberty Bell!',
    era: 'Industrial Revolution',
    gradeLevel: '2',
    difficulty: 'Easy',
    estimatedTime: 12,
    scenarios: [
      {
        title: 'Ringing for Freedom',
        description: 'You are in Philadelphia when the Liberty Bell rings to announce independence! What does freedom mean to you?',
        backgroundImage: 'liberty_bell.jpg',
        choices: [
          {
            text: 'Freedom means everyone should be treated fairly',
            nextScenarioId: 'celebrate_freedom',
            outcome: 'You celebrate with others and learn about American freedom!',
            isHistoricallyAccurate: true,
            learningPoint: 'The Liberty Bell became a symbol of freedom and justice for all people.'
          },
          {
            text: 'Freedom only matters for some people',
            nextScenarioId: 'unfair',
            outcome: 'You realize that real freedom means fairness for everyone.',
            isHistoricallyAccurate: false,
            learningPoint: 'True freedom and justice should be for all people.'
          }
        ],
        characters: [
          {
            name: 'Town Crier',
            role: 'News Announcer',
            imageUrl: 'town_crier.jpg',
            dialogues: [
              {
                text: 'Hear ye! The Liberty Bell rings for freedom!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The Liberty Bell is a symbol of American independence and freedom.',
            source: 'American History Records'
          }
        ]
      }
    ],
    learningObjectives: [
      'Learn about the Liberty Bell',
      'Understand the concept of freedom',
      'Discover American symbols'
    ],
    isActive: true
  },
  {
    title: 'Abraham Lincoln: Honest Abe',
    description: 'Learn about President Abraham Lincoln!',
    era: 'Industrial Revolution',
    gradeLevel: '2',
    difficulty: 'Easy',
    estimatedTime: 12,
    scenarios: [
      {
        title: 'Being Honest',
        description: 'Young Abraham Lincoln works at a store. A customer leaves and Abraham realizes he gave them the wrong change. What should he do?',
        backgroundImage: 'lincoln_store.jpg',
        choices: [
          {
            text: 'Walk many miles to return the correct change',
            nextScenarioId: 'honest',
            outcome: 'Abraham walks miles to return the money. The customer is so happy about his honesty!',
            isHistoricallyAccurate: true,
            learningPoint: 'Abraham Lincoln was known as "Honest Abe" because he always told the truth, even when it was hard.'
          },
          {
            text: 'Keep the extra money',
            nextScenarioId: 'dishonest',
            outcome: 'Abraham feels bad and realizes honesty is always best!',
            isHistoricallyAccurate: false,
            learningPoint: 'Being honest builds trust and makes you a better person.'
          }
        ],
        characters: [
          {
            name: 'Young Abraham Lincoln',
            role: 'Store Worker',
            imageUrl: 'young_lincoln.jpg',
            dialogues: [
              {
                text: 'I must always be honest, no matter what!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'Abraham Lincoln became the 16th President of the United States and helped end slavery.',
            source: 'American Presidential History'
          }
        ]
      }
    ],
    learningObjectives: [
      'Learn about Abraham Lincoln',
      'Understand the importance of honesty',
      'Discover how honesty makes you a good leader'
    ],
    isActive: true
  },

  // ==================== GRADE 3 ====================
  {
    title: 'The Oregon Trail: Journey to the West',
    description: 'Travel with pioneers on the Oregon Trail!',
    era: 'Industrial Revolution',
    gradeLevel: '3',
    difficulty: 'Easy',
    estimatedTime: 15,
    scenarios: [
      {
        title: 'Starting the Long Journey',
        description: 'Your family is preparing to travel west on the Oregon Trail. It will take months! What will you pack?',
        backgroundImage: 'oregon_trail.jpg',
        choices: [
          {
            text: 'Pack food, water, and warm clothes',
            nextScenarioId: 'good_preparation',
            outcome: 'Your family stays healthy and safe on the journey!',
            isHistoricallyAccurate: true,
            learningPoint: 'Pioneers needed to pack carefully for the long, difficult journey.'
          },
          {
            text: 'Pack only toys and games',
            nextScenarioId: 'poor_planning',
            outcome: 'Your family runs out of food and water.',
            isHistoricallyAccurate: false,
            learningPoint: 'Survival supplies were most important for the journey west.'
          }
        ],
        characters: [
          {
            name: 'Wagon Master',
            role: 'Guide',
            imageUrl: 'wagon_master.jpg',
            dialogues: [
              {
                text: 'Pack smart! This journey is 2,000 miles long!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The Oregon Trail was 2,000 miles long and took 4-6 months to travel.',
            source: 'American Western Expansion History'
          }
        ]
      }
    ],
    learningObjectives: [
      'Learn about westward expansion',
      'Understand pioneer challenges',
      'Discover life in the 1800s'
    ],
    isActive: true
  },
  {
    title: 'The California Gold Rush',
    description: 'Join the adventure to find gold in California!',
    era: 'Industrial Revolution',
    gradeLevel: '3',
    difficulty: 'Easy',
    estimatedTime: 15,
    scenarios: [
      {
        title: 'Discovering Gold',
        description: 'It\'s 1849! Gold has been discovered in California. Many people are rushing there to find gold. Will you join them?',
        backgroundImage: 'gold_rush.jpg',
        choices: [
          {
            text: 'Go to California to search for gold',
            nextScenarioId: 'gold_search',
            outcome: 'You travel to California and try your luck at finding gold!',
            isHistoricallyAccurate: true,
            learningPoint: 'Many people called "forty-niners" traveled to California in 1849 hoping to find gold and get rich.'
          },
          {
            text: 'Start a business selling supplies to miners',
            nextScenarioId: 'business',
            outcome: 'Smart choice! Many people made more money selling supplies than finding gold!',
            isHistoricallyAccurate: true,
            learningPoint: 'Some clever people made fortunes by selling tools, food, and supplies to gold miners instead of mining themselves.'
          }
        ],
        characters: [
          {
            name: 'Prospector',
            role: 'Gold Miner',
            imageUrl: 'prospector.jpg',
            dialogues: [
              {
                text: 'There\'s gold in them hills!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The California Gold Rush brought over 300,000 people to California between 1848 and 1855!',
            source: 'American Western History'
          }
        ]
      }
    ],
    learningObjectives: [
      'Learn about the California Gold Rush',
      'Understand westward expansion',
      'Discover how the Gold Rush changed California'
    ],
    isActive: true
  },

  // ==================== GRADE 4 ====================
  {
    title: 'American Revolution: Boston Tea Party',
    description: 'Take part in the famous Boston Tea Party!',
    era: 'Industrial Revolution',
    gradeLevel: '4',
    difficulty: 'Medium',
    estimatedTime: 15,
    scenarios: [
      {
        title: 'The Secret Meeting',
        description: 'Boston, December 16, 1773. Colonists are angry about the tea tax. Samuel Adams is organizing a protest. What will you do?',
        backgroundImage: 'boston_meeting_house.jpg',
        choices: [
          {
            text: 'Join the protest at the harbor',
            nextScenarioId: 'boston_harbor',
            outcome: 'You dress as a Mohawk Indian and dump tea in the harbor!',
            isHistoricallyAccurate: true,
            learningPoint: 'The Boston Tea Party was a protest against taxation without representation.'
          },
          {
            text: 'Stay loyal to the British',
            nextScenarioId: 'loyalist',
            outcome: 'You watch as history unfolds without you.',
            isHistoricallyAccurate: true,
            learningPoint: 'Not all colonists supported independence; some remained loyal to Britain.'
          }
        ],
        characters: [
          {
            name: 'Samuel Adams',
            role: 'Patriot Leader',
            imageUrl: 'samuel_adams.jpg',
            dialogues: [
              {
                text: 'No taxation without representation!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The Boston Tea Party happened on December 16, 1773.',
            source: 'American Revolutionary History'
          }
        ]
      }
    ],
    learningObjectives: [
      'Understand the causes of the American Revolution',
      'Learn about colonial protests',
      'Explore taxation without representation'
    ],
    isActive: true
  },
  {
    title: 'Medieval Europe: The Knight\'s Quest',
    description: 'Become a knight in medieval Europe!',
    era: 'Ancient',
    gradeLevel: '4',
    difficulty: 'Medium',
    estimatedTime: 15,
    scenarios: [
      {
        title: 'The King\'s Tournament',
        description: 'You are a young knight competing in the king\'s tournament. How will you prove your worth?',
        backgroundImage: 'medieval_tournament.jpg',
        choices: [
          {
            text: 'Fight with honor following the code of chivalry',
            nextScenarioId: 'honorable_victory',
            outcome: 'You win the tournament fairly and earn the king\'s respect!',
            isHistoricallyAccurate: true,
            learningPoint: 'Knights followed a code of chivalry emphasizing honor and courage.'
          },
          {
            text: 'Cheat to win the tournament',
            nextScenarioId: 'disgrace',
            outcome: 'You are caught and lose your title as a knight.',
            isHistoricallyAccurate: false,
            learningPoint: 'A knight who broke the code of chivalry could lose their title.'
          }
        ],
        characters: [
          {
            name: 'King Edward',
            role: 'Monarch',
            imageUrl: 'king_edward.jpg',
            dialogues: [
              {
                text: 'Show me your skill and honor, brave knight!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'Knights followed a code of chivalry that emphasized honor and loyalty.',
            source: 'Medieval European History'
          }
        ]
      }
    ],
    learningObjectives: [
      'Understand medieval feudalism',
      'Learn about the code of chivalry',
      'Explore life in medieval castles'
    ],
    isActive: true
  },

  // ==================== GRADE 5 ====================
  {
    title: 'Ancient Egypt: Building the Pyramids',
    description: 'Experience life as a builder during pyramid construction!',
    era: 'Ancient',
    gradeLevel: '5',
    difficulty: 'Medium',
    estimatedTime: 20,
    scenarios: [
      {
        title: 'The Call to Build',
        description: 'You are a skilled builder in ancient Egypt. The Pharaoh has ordered the construction of a massive pyramid. What will you do?',
        backgroundImage: 'egypt_village.jpg',
        choices: [
          {
            text: 'Accept the honor and join the construction team',
            nextScenarioId: 'pyramid_site',
            outcome: 'You journey to Giza to join thousands of other workers.',
            isHistoricallyAccurate: true,
            learningPoint: 'Pyramids were built by paid workers who considered it an honor, not slaves.'
          },
          {
            text: 'Refuse and try to escape',
            nextScenarioId: 'escape_attempt',
            outcome: 'You attempt to flee but are caught.',
            isHistoricallyAccurate: false,
            learningPoint: 'Workers were actually well-treated, fed, and housed during construction.'
          }
        ],
        characters: [
          {
            name: 'Village Elder',
            role: 'Advisor',
            imageUrl: 'village_elder.jpg',
            dialogues: [
              {
                text: 'This is a great honor! You will be well fed and housed.',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The Great Pyramid of Giza was built around 2560 BCE for Pharaoh Khufu.',
            source: 'Ancient Egyptian Historical Records'
          }
        ]
      }
    ],
    learningObjectives: [
      'Understand how pyramids were actually built',
      'Learn about daily life in ancient Egypt',
      'Explore Egyptian social structure'
    ],
    isActive: true
  },
  {
    title: 'Ancient Greece: The Olympic Games',
    description: 'Compete in the original Olympic Games!',
    era: 'Ancient',
    gradeLevel: '5',
    difficulty: 'Medium',
    estimatedTime: 15,
    scenarios: [
      {
        title: 'Arrival at Olympia',
        description: 'You are an athlete arriving at Olympia for the ancient Olympic Games. How will you prepare?',
        backgroundImage: 'ancient_olympia.jpg',
        choices: [
          {
            text: 'Train honorably and represent your city-state',
            nextScenarioId: 'olympic_competition',
            outcome: 'You compete fairly and earn respect from athletes across Greece!',
            isHistoricallyAccurate: true,
            learningPoint: 'Ancient Olympics were held every four years to honor Zeus.'
          },
          {
            text: 'Try to sabotage other athletes',
            nextScenarioId: 'disqualification',
            outcome: 'You are caught and banned from the Games permanently.',
            isHistoricallyAccurate: false,
            learningPoint: 'Cheating was severely punished in ancient Olympics.'
          }
        ],
        characters: [
          {
            name: 'Olympic Judge',
            role: 'Official',
            imageUrl: 'greek_judge.jpg',
            dialogues: [
              {
                text: 'All athletes must swear to compete fairly!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The ancient Olympic Games began in 776 BCE in Olympia, Greece.',
            source: 'Ancient Greek History'
          }
        ]
      }
    ],
    learningObjectives: [
      'Learn about ancient Greek culture',
      'Understand the origins of the Olympics',
      'Explore ancient Greek values'
    ],
    isActive: true
  },

  // ==================== GRADE 6 ====================
  {
    title: 'Civil Rights Movement: The Montgomery Bus Boycott',
    description: 'Experience the fight for equality!',
    era: 'Modern',
    gradeLevel: '6',
    difficulty: 'Hard',
    estimatedTime: 20,
    scenarios: [
      {
        title: 'A Stand for Justice',
        description: 'Montgomery, Alabama, 1955. Rosa Parks has refused to give up her seat. The African American community is organizing a boycott. What will you do?',
        backgroundImage: 'montgomery_bus.jpg',
        choices: [
          {
            text: 'Join the boycott and walk to work every day',
            nextScenarioId: 'boycott_support',
            outcome: 'You walk miles each day, showing solidarity for equality.',
            isHistoricallyAccurate: true,
            learningPoint: 'The Montgomery Bus Boycott lasted 381 days and led to desegregation.'
          },
          {
            text: 'Continue riding the bus',
            nextScenarioId: 'maintain_status_quo',
            outcome: 'You feel conflicted about not supporting the cause.',
            isHistoricallyAccurate: false,
            learningPoint: 'Success depended on widespread community participation.'
          }
        ],
        characters: [
          {
            name: 'Dr. Martin Luther King Jr.',
            role: 'Movement Leader',
            imageUrl: 'mlk.jpg',
            dialogues: [
              {
                text: 'We must use nonviolent resistance to fight injustice.',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The Montgomery Bus Boycott began on December 5, 1955.',
            source: 'Civil Rights Movement Archives'
          }
        ]
      }
    ],
    learningObjectives: [
      'Understand the Civil Rights Movement',
      'Learn about nonviolent resistance',
      'Explore the fight for equality'
    ],
    isActive: true
  },
  {
    title: 'World War II: D-Day Invasion',
    description: 'Experience the historic D-Day invasion!',
    era: 'Modern',
    gradeLevel: '6',
    difficulty: 'Hard',
    estimatedTime: 20,
    scenarios: [
      {
        title: 'Operation Overlord',
        description: 'June 6, 1944. You are part of the Allied forces preparing to land on Normandy beaches. This mission will help liberate Europe.',
        backgroundImage: 'normandy_beach.jpg',
        choices: [
          {
            text: 'Follow orders and advance with your unit',
            nextScenarioId: 'beach_landing',
            outcome: 'You land on Omaha Beach and work to secure the beachhead.',
            isHistoricallyAccurate: true,
            learningPoint: 'D-Day involved over 150,000 Allied troops and was a turning point in WWII.'
          },
          {
            text: 'Stay on the ship',
            nextScenarioId: 'mission_failure',
            outcome: 'The mission struggles without full troop support.',
            isHistoricallyAccurate: false,
            learningPoint: 'Success depended on the courage and sacrifice of thousands of soldiers.'
          }
        ],
        characters: [
          {
            name: 'General Dwight D. Eisenhower',
            role: 'Supreme Commander',
            imageUrl: 'eisenhower.jpg',
            dialogues: [
              {
                text: 'The eyes of the world are upon you. Good luck!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'D-Day, June 6, 1944, was the largest amphibious invasion in history.',
            source: 'World War II Historical Archives'
          }
        ]
      }
    ],
    learningObjectives: [
      'Understand World War II',
      'Learn about the D-Day invasion',
      'Explore the Allied effort against Nazi Germany'
    ],
    isActive: true
  },
];

module.exports = { historicalAdventures };
