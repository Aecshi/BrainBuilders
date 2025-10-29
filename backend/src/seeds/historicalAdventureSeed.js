// Sample historical adventure seed data
const historicalAdventures = [
  {
    title: 'Ancient Egypt: Building the Pyramids',
    description: 'Experience life as a builder during the construction of the Great Pyramids of Giza!',
    era: 'Ancient',
    gradeLevel: '5',
    difficulty: 'Medium',
    estimatedTime: 20,
    scenarios: [
      {
        title: 'The Call to Build',
        description: 'You are a skilled builder living in ancient Egypt. The Pharaoh has ordered the construction of a massive pyramid, and you have been selected to join the workforce. What will you do?',
        backgroundImage: 'egypt_village.jpg',
        choices: [
          {
            text: 'Accept the honor and join the construction team',
            nextScenarioId: 'pyramid_site',
            outcome: 'You journey to Giza to join thousands of other workers.',
            isHistoricallyAccurate: true,
            learningPoint: 'Contrary to popular belief, the pyramids were not built by slaves but by paid workers who considered it an honor to work on the Pharaoh\'s tomb.'
          },
          {
            text: 'Refuse and try to escape to another kingdom',
            nextScenarioId: 'escape_attempt',
            outcome: 'You attempt to flee but are caught by the Pharaoh\'s guards.',
            isHistoricallyAccurate: false,
            learningPoint: 'Workers on the pyramids were actually well-treated, fed, and housed. They were not forced laborers as commonly depicted.'
          }
        ],
        characters: [
          {
            name: 'Village Elder',
            role: 'Advisor',
            imageUrl: 'village_elder.jpg',
            dialogues: [
              {
                text: 'The Pharaoh has chosen our village to send skilled builders. This is a great honor!',
                order: 1
              },
              {
                text: 'You will be well fed and housed during your time there. Your family will be taken care of in your absence.',
                order: 2
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The Great Pyramid of Giza was built around 2560 BCE for Pharaoh Khufu.',
            source: 'Ancient Egyptian Historical Records'
          },
          {
            fact: 'It took approximately 20 years to build the Great Pyramid.',
            source: 'Archaeological evidence and historical records'
          }
        ]
      }
    ],
    learningObjectives: [
      'Understand how the pyramids were actually built',
      'Learn about daily life in ancient Egypt',
      'Explore the social structure and labor organization of ancient Egyptian society'
    ],
    isActive: true
  },
  {
    title: 'American Revolution: Boston Tea Party',
    description: 'Take part in the famous Boston Tea Party that sparked the American Revolution!',
    era: 'Industrial Revolution',
    gradeLevel: '4',
    difficulty: 'Medium',
    estimatedTime: 15,
    scenarios: [
      {
        title: 'The Secret Meeting',
        description: 'Boston, December 16, 1773. You are attending a secret meeting at the Old South Meeting House. The colonists are angry about the tea tax imposed by the British. Samuel Adams is speaking about taking action.',
        backgroundImage: 'boston_meeting_house.jpg',
        choices: [
          {
            text: 'Volunteer to join the protest at the harbor',
            nextScenarioId: 'boston_harbor',
            outcome: 'You join a group disguised as Mohawk Indians headed to Griffin\'s Wharf.',
            isHistoricallyAccurate: true,
            learningPoint: 'The Boston Tea Party protesters disguised themselves as Native Americans to hide their identities.'
          },
          {
            text: 'Stay behind to help spread the news',
            nextScenarioId: 'spread_news',
            outcome: 'You remain at the meeting house to help organize and spread the word about what happens.',
            isHistoricallyAccurate: true,
            learningPoint: 'While some colonists took direct action, others helped by spreading news and rallying support.'
          }
        ],
        characters: [
          {
            name: 'Samuel Adams',
            role: 'Patriot Leader',
            imageUrl: 'samuel_adams.jpg',
            dialogues: [
              {
                text: 'This tea tax is just another way for King George to control us without our consent!',
                order: 1
              },
              {
                text: 'Tonight, we will show the British that we will not stand for taxation without representation!',
                order: 2
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The Boston Tea Party took place on December 16, 1773.',
            source: 'American Historical Archives'
          },
          {
            fact: 'The protesters destroyed 342 chests of tea, worth about $1.7 million in today\'s currency.',
            source: 'Boston Historical Society Records'
          }
        ]
      }
    ],
    learningObjectives: [
      'Understand the causes of the American Revolution',
      'Learn about colonial resistance to British taxation',
      'Explore the concept of "taxation without representation"'
    ],
    isActive: true
  },
  {
    title: 'Medieval Europe: The Knight\'s Quest',
    description: 'Become a knight in medieval Europe and learn about chivalry and feudalism!',
    era: 'Ancient',
    gradeLevel: '4',
    difficulty: 'Medium',
    estimatedTime: 15,
    scenarios: [
      {
        title: 'The King\'s Tournament',
        description: 'You are a young knight competing in the king\'s tournament. The king is watching from his throne. How will you prove your worth?',
        backgroundImage: 'medieval_tournament.jpg',
        choices: [
          {
            text: 'Follow the code of chivalry and fight honorably',
            nextScenarioId: 'honorable_victory',
            outcome: 'You win the tournament fairly and earn the king\'s respect.',
            isHistoricallyAccurate: true,
            learningPoint: 'Knights followed a code of chivalry that emphasized honor, courage, and protecting the weak.'
          },
          {
            text: 'Cheat to win the tournament',
            nextScenarioId: 'disgrace',
            outcome: 'You are caught cheating and lose your title as a knight.',
            isHistoricallyAccurate: false,
            learningPoint: 'A knight who broke the code of chivalry could lose their title and honor.'
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
            fact: 'Knights in medieval Europe followed a code of chivalry that emphasized honor, bravery, and loyalty.',
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
  {
    title: 'Civil Rights Movement: The Montgomery Bus Boycott',
    description: 'Experience the fight for equality during the Civil Rights Movement!',
    era: 'Modern',
    gradeLevel: '6',
    difficulty: 'Hard',
    estimatedTime: 20,
    scenarios: [
      {
        title: 'A Stand for Justice',
        description: 'Montgomery, Alabama, 1955. Rosa Parks has refused to give up her seat on a bus. The African American community is organizing a boycott. What will you do?',
        backgroundImage: 'montgomery_bus.jpg',
        choices: [
          {
            text: 'Join the boycott and walk to work every day',
            nextScenarioId: 'boycott_support',
            outcome: 'You walk miles each day, showing solidarity with the movement for equality.',
            isHistoricallyAccurate: true,
            learningPoint: 'The Montgomery Bus Boycott lasted 381 days, with African Americans walking, carpooling, and organizing rides instead of using segregated buses.'
          },
          {
            text: 'Continue riding the bus to avoid trouble',
            nextScenarioId: 'maintain_status_quo',
            outcome: 'You continue riding, but feel conflicted about not supporting the cause.',
            isHistoricallyAccurate: false,
            learningPoint: 'The success of the Montgomery Bus Boycott depended on widespread community participation and sacrifice.'
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
              },
              {
                text: 'Together, we can change the world.',
                order: 2
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The Montgomery Bus Boycott began on December 5, 1955, after Rosa Parks was arrested.',
            source: 'Civil Rights Movement Historical Archives'
          },
          {
            fact: 'The boycott lasted 381 days and led to the Supreme Court ruling that segregation on buses was unconstitutional.',
            source: 'US History Records'
          }
        ]
      }
    ],
    learningObjectives: [
      'Understand the Civil Rights Movement',
      'Learn about nonviolent resistance',
      'Explore the fight for equality in America'
    ],
    isActive: true
  },
  {
    title: 'Ancient Greece: The Olympic Games',
    description: 'Travel to ancient Greece and compete in the original Olympic Games!',
    era: 'Ancient',
    gradeLevel: '5',
    difficulty: 'Medium',
    estimatedTime: 15,
    scenarios: [
      {
        title: 'Arrival at Olympia',
        description: 'You are an athlete arriving at Olympia for the ancient Olympic Games. Athletes from all Greek city-states are here. How will you prepare?',
        backgroundImage: 'ancient_olympia.jpg',
        choices: [
          {
            text: 'Train honorably and represent your city-state with pride',
            nextScenarioId: 'olympic_competition',
            outcome: 'You compete fairly and earn respect from athletes across Greece.',
            isHistoricallyAccurate: true,
            learningPoint: 'The ancient Olympics were held every four years to honor Zeus, and athletes competed for glory, not prizes.'
          },
          {
            text: 'Try to sabotage other athletes to win',
            nextScenarioId: 'disqualification',
            outcome: 'You are caught and banned from the Games permanently.',
            isHistoricallyAccurate: false,
            learningPoint: 'Cheating in the ancient Olympics was severely punished, and athletes took an oath to compete fairly.'
          }
        ],
        characters: [
          {
            name: 'Olympic Judge',
            role: 'Official',
            imageUrl: 'greek_judge.jpg',
            dialogues: [
              {
                text: 'All athletes must swear to compete fairly and honor Zeus.',
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
          },
          {
            fact: 'Only free Greek men could compete, and women were not allowed to watch.',
            source: 'Olympic Historical Records'
          }
        ]
      }
    ],
    learningObjectives: [
      'Learn about ancient Greek culture',
      'Understand the origins of the Olympics',
      'Explore ancient Greek values and traditions'
    ],
    isActive: true
  },
  {
    title: 'World War II: D-Day Invasion',
    description: 'Experience the historic D-Day invasion of Normandy!',
    era: 'Modern',
    gradeLevel: '6',
    difficulty: 'Hard',
    estimatedTime: 20,
    scenarios: [
      {
        title: 'Operation Overlord',
        description: 'June 6, 1944. You are part of the Allied forces preparing to land on the beaches of Normandy, France. This is a critical mission to liberate Europe from Nazi control.',
        backgroundImage: 'normandy_beach.jpg',
        choices: [
          {
            text: 'Follow orders and advance with your unit onto the beach',
            nextScenarioId: 'beach_landing',
            outcome: 'You land on Omaha Beach and work with your fellow soldiers to secure the beachhead.',
            isHistoricallyAccurate: true,
            learningPoint: 'D-Day involved over 150,000 Allied troops landing on five beaches in Normandy. It was a turning point in WWII.'
          },
          {
            text: 'Stay on the ship to avoid danger',
            nextScenarioId: 'mission_failure',
            outcome: 'The mission fails without full troop support.',
            isHistoricallyAccurate: false,
            learningPoint: 'The success of D-Day depended on the courage and sacrifice of thousands of soldiers who faced extreme danger.'
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
          },
          {
            fact: 'Over 4,000 Allied soldiers died on D-Day, but their sacrifice helped liberate Europe.',
            source: 'WWII Military Records'
          }
        ]
      }
    ],
    learningObjectives: [
      'Understand World War II',
      'Learn about the D-Day invasion',
      'Explore the Allied effort to defeat Nazi Germany'
    ],
    isActive: true
  },
  {
    title: 'The Oregon Trail: Journey West',
    description: 'Join pioneers traveling west on the Oregon Trail in the 1800s!',
    era: 'Industrial Revolution',
    gradeLevel: '4',
    difficulty: 'Medium',
    estimatedTime: 15,
    scenarios: [
      {
        title: 'Starting the Journey',
        description: 'Independence, Missouri, 1848. Your family is preparing for the long journey to Oregon. You need to pack supplies for the 2,000-mile trip. What will you prioritize?',
        backgroundImage: 'oregon_trail_start.jpg',
        choices: [
          {
            text: 'Pack essential supplies: food, water, medicine, and tools',
            nextScenarioId: 'successful_preparation',
            outcome: 'Your careful planning helps your family survive the journey.',
            isHistoricallyAccurate: true,
            learningPoint: 'Pioneers on the Oregon Trail had to carefully plan what to bring. Too much weight could slow down wagons, but too little could mean starvation.'
          },
          {
            text: 'Pack only luxury items to sell in Oregon',
            nextScenarioId: 'poor_planning',
            outcome: 'Your family runs out of food and water halfway through the journey.',
            isHistoricallyAccurate: false,
            learningPoint: 'Many pioneers died on the Oregon Trail due to disease, accidents, and lack of supplies. Proper preparation was crucial.'
          }
        ],
        characters: [
          {
            name: 'Wagon Master',
            role: 'Trail Guide',
            imageUrl: 'wagon_master.jpg',
            dialogues: [
              {
                text: 'The trail is long and dangerous. Pack wisely!',
                order: 1
              }
            ]
          }
        ],
        isEnding: false,
        historicalFacts: [
          {
            fact: 'The Oregon Trail was a 2,000-mile route used by pioneers to travel west from 1840-1860.',
            source: 'American Western Expansion History'
          },
          {
            fact: 'About 1 in 10 pioneers died on the Oregon Trail, mostly from disease.',
            source: 'Pioneer Historical Records'
          }
        ]
      }
    ],
    learningObjectives: [
      'Understand westward expansion in America',
      'Learn about pioneer life',
      'Explore the challenges of the Oregon Trail'
    ],
    isActive: true
  },
];

module.exports = { historicalAdventures };
