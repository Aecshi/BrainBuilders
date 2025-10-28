// Sample word challenge seed data
const wordChallenges = [
  {
    title: 'Spelling Challenge: Animals',
    description: 'Test your spelling skills with these animal words!',
    gradeLevel: '3',
    difficulty: 'Easy',
    type: 'Spelling',
    timeLimit: 5,
    words: [
      {
        word: 'elephant',
        hint: 'A large mammal with a long trunk and tusks.',
        points: 1
      },
      {
        word: 'giraffe',
        hint: 'An animal with a very long neck.',
        points: 1
      },
      {
        word: 'penguin',
        hint: 'A black and white flightless bird that lives in cold regions.',
        points: 1
      },
      {
        word: 'dolphin',
        hint: 'A smart aquatic mammal known for its playful behavior.',
        points: 1
      },
      {
        word: 'zebra',
        hint: 'An animal with black and white stripes.',
        points: 1
      }
    ],
    instructions: 'Listen to the word, then type the correct spelling in the box. Click "Check" to see if you got it right.',
    isActive: true
  },
  {
    title: 'Vocabulary Builder: Science Terms',
    description: 'Learn important science vocabulary words!',
    gradeLevel: '5',
    difficulty: 'Medium',
    type: 'Vocabulary',
    timeLimit: 8,
    words: [
      {
        word: 'evaporation',
        definition: 'The process by which a liquid changes into a gas.',
        sentence: 'The puddles disappeared due to evaporation from the hot sun.',
        points: 1
      },
      {
        word: 'photosynthesis',
        definition: 'The process by which green plants use sunlight to make food from carbon dioxide and water.',
        sentence: 'Plants need sunlight for photosynthesis.',
        points: 2
      },
      {
        word: 'gravity',
        definition: 'The force that attracts objects toward each other, especially the force that pulls objects toward the center of the Earth.',
        sentence: 'Gravity keeps us from floating off into space.',
        points: 1
      },
      {
        word: 'hibernation',
        definition: 'A state of minimal activity and metabolic depression in animals during winter.',
        sentence: 'Bears go into hibernation during the cold winter months.',
        points: 1
      },
      {
        word: 'ecosystem',
        definition: 'A biological community of interacting organisms and their physical environment.',
        sentence: 'The pond is a small ecosystem with many different plants and animals.',
        points: 1
      }
    ],
    instructions: 'Match each word with its correct definition. Drag and drop the words to their matching definitions.',
    isActive: true
  },
  {
    title: 'Grammar Challenge: Parts of Speech',
    description: 'Identify different parts of speech in sentences!',
    gradeLevel: '4',
    difficulty: 'Medium',
    type: 'Grammar',
    timeLimit: 6,
    words: [
      {
        word: 'quickly',
        definition: 'Adverb',
        sentence: 'She ran quickly to catch the bus.',
        points: 1
      },
      {
        word: 'beautiful',
        definition: 'Adjective',
        sentence: 'The garden has beautiful flowers.',
        points: 1
      },
      {
        word: 'jump',
        definition: 'Verb',
        sentence: 'The children jump with excitement.',
        points: 1
      },
      {
        word: 'playground',
        definition: 'Noun',
        sentence: 'We meet at the playground after school.',
        points: 1
      },
      {
        word: 'they',
        definition: 'Pronoun',
        sentence: 'They enjoy playing together.',
        points: 1
      }
    ],
    instructions: 'Identify which part of speech each underlined word is in the given sentences.',
    isActive: true
  }
];

module.exports = { wordChallenges };
