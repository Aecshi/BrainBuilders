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
  }
];

export { historicalAdventures };
