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
  },
  // Grade K-1 Word Challenges
  {
    title: 'Spelling Challenge: Colors',
    description: 'Learn to spell basic color words!',
    gradeLevel: 'K',
    difficulty: 'Easy',
    type: 'Spelling',
    timeLimit: 5,
    words: [
      {
        word: 'red',
        hint: 'The color of a fire truck or apple.',
        points: 1
      },
      {
        word: 'blue',
        hint: 'The color of the sky on a clear day.',
        points: 1
      },
      {
        word: 'yellow',
        hint: 'The color of the sun or a banana.',
        points: 1
      },
      {
        word: 'green',
        hint: 'The color of grass and leaves.',
        points: 1
      },
    ],
    instructions: 'Look at the hint and type the color word correctly!',
    isActive: true
  },
  {
    title: 'Spelling Challenge: Numbers',
    description: 'Practice spelling number words!',
    gradeLevel: '1',
    difficulty: 'Easy',
    type: 'Spelling',
    timeLimit: 5,
    words: [
      {
        word: 'one',
        hint: 'The first number.',
        points: 1
      },
      {
        word: 'two',
        hint: 'The number after one.',
        points: 1
      },
      {
        word: 'three',
        hint: 'The number of sides on a triangle.',
        points: 1
      },
      {
        word: 'four',
        hint: 'The number of legs on a dog.',
        points: 1
      },
      {
        word: 'five',
        hint: 'The number of fingers on one hand.',
        points: 1
      },
    ],
    instructions: 'Type the correct spelling of each number word!',
    isActive: true
  },
  // Grade 2-3 Word Challenges
  {
    title: 'Spelling Challenge: School Words',
    description: 'Spell important school vocabulary!',
    gradeLevel: '2',
    difficulty: 'Easy',
    type: 'Spelling',
    timeLimit: 6,
    words: [
      {
        word: 'teacher',
        hint: 'The person who helps you learn at school.',
        points: 1
      },
      {
        word: 'pencil',
        hint: 'You use this to write and draw.',
        points: 1
      },
      {
        word: 'book',
        hint: 'You read this to learn new things.',
        points: 1
      },
      {
        word: 'desk',
        hint: 'Where you sit to do your work at school.',
        points: 1
      },
      {
        word: 'friend',
        hint: 'Someone you like to play with.',
        points: 1
      },
    ],
    instructions: 'Spell these school-related words correctly!',
    isActive: true
  },
  {
    title: 'Spelling Challenge: Food Words',
    description: 'Learn to spell yummy food words!',
    gradeLevel: '3',
    difficulty: 'Easy',
    type: 'Spelling',
    timeLimit: 6,
    words: [
      {
        word: 'pizza',
        hint: 'A round food with cheese and toppings.',
        points: 1
      },
      {
        word: 'sandwich',
        hint: 'Bread with food in the middle.',
        points: 1
      },
      {
        word: 'banana',
        hint: 'A yellow fruit that monkeys love.',
        points: 1
      },
      {
        word: 'cookie',
        hint: 'A sweet baked treat.',
        points: 1
      },
      {
        word: 'chicken',
        hint: 'A type of meat that comes from a bird.',
        points: 1
      },
    ],
    instructions: 'Spell these delicious food words!',
    isActive: true
  },
  // Grade 4-5 Word Challenges
  {
    title: 'Vocabulary Builder: Weather Terms',
    description: 'Learn important weather vocabulary!',
    gradeLevel: '4',
    difficulty: 'Medium',
    type: 'Vocabulary',
    timeLimit: 8,
    words: [
      {
        word: 'temperature',
        definition: 'How hot or cold something is.',
        sentence: 'The temperature today is 75 degrees.',
        points: 1
      },
      {
        word: 'precipitation',
        definition: 'Water that falls from clouds, like rain or snow.',
        sentence: 'We had a lot of precipitation this week.',
        points: 2
      },
      {
        word: 'atmosphere',
        definition: 'The layer of gases surrounding Earth.',
        sentence: 'The atmosphere protects us from space.',
        points: 2
      },
      {
        word: 'humidity',
        definition: 'The amount of water vapor in the air.',
        sentence: 'The humidity makes it feel sticky outside.',
        points: 1
      },
    ],
    instructions: 'Match each weather word with its correct definition!',
    isActive: true
  },
  {
    title: 'Vocabulary Builder: History Terms',
    description: 'Master important historical vocabulary!',
    gradeLevel: '5',
    difficulty: 'Medium',
    type: 'Vocabulary',
    timeLimit: 8,
    words: [
      {
        word: 'revolution',
        definition: 'A complete change in government or way of doing things.',
        sentence: 'The American Revolution led to independence.',
        points: 2
      },
      {
        word: 'civilization',
        definition: 'An advanced society with cities, government, and culture.',
        sentence: 'Ancient Egypt was a great civilization.',
        points: 2
      },
      {
        word: 'democracy',
        definition: 'A government where people vote to make decisions.',
        sentence: 'The United States is a democracy.',
        points: 1
      },
      {
        word: 'artifact',
        definition: 'An old object made by humans long ago.',
        sentence: 'Archaeologists found ancient artifacts in the tomb.',
        points: 1
      },
    ],
    instructions: 'Learn these important history terms!',
    isActive: true
  },
  // Grade 6 Word Challenges
  {
    title: 'Vocabulary Builder: Advanced Science',
    description: 'Challenge yourself with complex science vocabulary!',
    gradeLevel: '6',
    difficulty: 'Hard',
    type: 'Vocabulary',
    timeLimit: 10,
    words: [
      {
        word: 'photosynthesis',
        definition: 'The process plants use to make food from sunlight.',
        sentence: 'Chlorophyll helps plants perform photosynthesis.',
        points: 2
      },
      {
        word: 'molecule',
        definition: 'The smallest unit of a chemical compound.',
        sentence: 'A water molecule contains two hydrogen atoms.',
        points: 2
      },
      {
        word: 'organism',
        definition: 'Any living thing.',
        sentence: 'Bacteria are single-celled organisms.',
        points: 1
      },
      {
        word: 'chromosome',
        definition: 'A structure in cells that carries genetic information.',
        sentence: 'Humans have 46 chromosomes in most cells.',
        points: 2
      },
      {
        word: 'hypothesis',
        definition: 'An educated guess that can be tested.',
        sentence: 'Scientists test their hypothesis through experiments.',
        points: 1
      },
    ],
    instructions: 'Master these advanced scientific terms!',
    isActive: true
  },
  {
    title: 'Grammar Challenge: Complex Sentences',
    description: 'Identify parts of complex sentences!',
    gradeLevel: '6',
    difficulty: 'Hard',
    type: 'Grammar',
    timeLimit: 8,
    words: [
      {
        word: 'although',
        definition: 'Conjunction',
        sentence: 'Although it rained, we still played outside.',
        points: 1
      },
      {
        word: 'independent',
        definition: 'Adjective',
        sentence: 'She is an independent thinker.',
        points: 1
      },
      {
        word: 'gracefully',
        definition: 'Adverb',
        sentence: 'The dancer moved gracefully across the stage.',
        points: 1
      },
      {
        word: 'because',
        definition: 'Conjunction',
        sentence: 'We stayed inside because it was storming.',
        points: 1
      },
      {
        word: 'extraordinary',
        definition: 'Adjective',
        sentence: 'She has extraordinary talent.',
        points: 1
      },
    ],
    instructions: 'Identify the part of speech for each underlined word!',
    isActive: true
  },
  {
    title: 'Spelling Challenge: Nature Words',
    description: 'Spell advanced nature vocabulary!',
    gradeLevel: '5',
    difficulty: 'Medium',
    type: 'Spelling',
    timeLimit: 7,
    words: [
      {
        word: 'butterfly',
        hint: 'A colorful insect with wings.',
        points: 1
      },
      {
        word: 'mountain',
        hint: 'A very tall landform.',
        points: 1
      },
      {
        word: 'waterfall',
        hint: 'Water falling from a high place.',
        points: 1
      },
      {
        word: 'forest',
        hint: 'A large area filled with trees.',
        points: 1
      },
      {
        word: 'thunder',
        hint: 'The loud sound during a storm.',
        points: 1
      },
    ],
    instructions: 'Spell these nature words correctly!',
    isActive: true
  },
];

module.exports = { wordChallenges };
