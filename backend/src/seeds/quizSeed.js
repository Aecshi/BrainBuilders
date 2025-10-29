// src/seeds/quizSeed.js

const quizzes = [
  {
    title: "Basic English Grammar",
    description: "Test your knowledge of basic English grammar rules!",
    subject: "English",
    gradeLevel: "3",
    difficulty: "Easy",
    timeLimit: 15,
    questions: [
      {
        questionText:
          'Which word is a noun in the following sentence: "The cat ran quickly across the yard."?',
        options: [
          { text: "ran", isCorrect: false },
          { text: "cat", isCorrect: true },
          { text: "quickly", isCorrect: false },
          { text: "across", isCorrect: false },
        ],
        explanation:
          'A noun is a person, place, thing, or idea. In this sentence, "cat" and "yard" are nouns.',
        points: 1,
      },
      {
        questionText: "Which of these sentences uses the correct form of the verb?",
        options: [
          { text: "She were going to the store.", isCorrect: false },
          { text: "They was happy about the news.", isCorrect: false },
          { text: "He is playing with his friends.", isCorrect: true },
          { text: "I are excited for the party.", isCorrect: false },
        ],
        explanation:
          'The verb should agree with the subject in number. "He" is singular, so we use "is".',
        points: 1,
      },
      {
        questionText: "Which punctuation mark ends an exclamatory sentence?",
        options: [
          { text: "Period (.)", isCorrect: false },
          { text: "Question mark (?)", isCorrect: false },
          { text: "Exclamation point (!)", isCorrect: true },
          { text: "Comma (,)", isCorrect: false },
        ],
        explanation:
          "An exclamation point (!) is used to end exclamatory sentences that express strong emotion.",
        points: 1,
      },
      {
        questionText: 'What is a verb?',
        options: [
          { text: "A person, place, or thing", isCorrect: false },
          { text: "An action word", isCorrect: true },
          { text: "A describing word", isCorrect: false },
          { text: "A connecting word", isCorrect: false },
        ],
        explanation: "A verb is an action word like run, jump, think, or eat.",
        points: 1,
      },
      {
        questionText: 'Which word is an adjective in this sentence: "The big dog barked loudly."?',
        options: [
          { text: "dog", isCorrect: false },
          { text: "big", isCorrect: true },
          { text: "barked", isCorrect: false },
          { text: "loudly", isCorrect: false },
        ],
        explanation: "An adjective describes a noun. 'Big' describes the dog.",
        points: 1,
      },
      {
        questionText: "What is a complete sentence?",
        options: [
          { text: "Running fast", isCorrect: false },
          { text: "The boy.", isCorrect: false },
          { text: "The boy runs fast.", isCorrect: true },
          { text: "Fast and quick", isCorrect: false },
        ],
        explanation: "A complete sentence has a subject (who) and a predicate (what they do).",
        points: 1,
      },
      {
        questionText: "Which word should be capitalized?",
        options: [
          { text: "school", isCorrect: false },
          { text: "tuesday", isCorrect: true },
          { text: "happy", isCorrect: false },
          { text: "running", isCorrect: false },
        ],
        explanation: "Days of the week like Tuesday should always be capitalized.",
        points: 1,
      },
    ],
    isActive: true,
  },
  {
    title: "World History: Ancient Civilizations",
    description: "Explore the fascinating world of ancient civilizations!",
    subject: "History",
    gradeLevel: "4",
    difficulty: "Medium",
    timeLimit: 15,
    questions: [
      {
        questionText: "Which ancient civilization built the pyramids?",
        options: [
          { text: "Romans", isCorrect: false },
          { text: "Greeks", isCorrect: false },
          { text: "Egyptians", isCorrect: true },
          { text: "Mayans", isCorrect: false },
        ],
        explanation: "The ancient Egyptians built the famous pyramids as tombs for their pharaohs.",
        points: 1,
      },
      {
        questionText: "What was the primary language of the Roman Empire?",
        options: [
          { text: "Greek", isCorrect: false },
          { text: "Latin", isCorrect: true },
          { text: "Hebrew", isCorrect: false },
          { text: "Arabic", isCorrect: false },
        ],
        explanation: "Latin was the official language of ancient Rome and the Roman Empire.",
        points: 1,
      },
      {
        questionText: "Which civilization invented the wheel?",
        options: [
          { text: "Mesopotamians", isCorrect: true },
          { text: "Egyptians", isCorrect: false },
          { text: "Chinese", isCorrect: false },
          { text: "Indians", isCorrect: false },
        ],
        explanation: "The wheel was invented by the Mesopotamians around 3500 BCE.",
        points: 1,
      },
    ],
    isActive: true,
  },
  {
    title: "Fun with Science",
    description: "Test your general knowledge about science!",
    subject: "General Knowledge",
    gradeLevel: "3",
    difficulty: "Easy",
    timeLimit: 12,
    questions: [
      {
        questionText: "What is the largest planet in our solar system?",
        options: [
          { text: "Earth", isCorrect: false },
          { text: "Mars", isCorrect: false },
          { text: "Jupiter", isCorrect: true },
          { text: "Saturn", isCorrect: false },
        ],
        explanation: "Jupiter is the largest planet in our solar system, even bigger than all other planets combined!",
        points: 1,
      },
      {
        questionText: "How many legs does a spider have?",
        options: [
          { text: "6", isCorrect: false },
          { text: "8", isCorrect: true },
          { text: "10", isCorrect: false },
          { text: "12", isCorrect: false },
        ],
        explanation: "All spiders have 8 legs, which helps distinguish them from insects that have 6 legs.",
        points: 1,
      },
      {
        questionText: "What do plants need to make their own food?",
        options: [
          { text: "Sunlight and water", isCorrect: true },
          { text: "Soil and rocks", isCorrect: false },
          { text: "Air and fire", isCorrect: false },
          { text: "Wind and rain", isCorrect: false },
        ],
        explanation: "Plants use sunlight, water, and carbon dioxide to make food through photosynthesis.",
        points: 1,
      },
    ],
    isActive: true,
  },
  // Grade K-1 Quizzes
  {
    title: "Colors and Shapes",
    description: "Learn about basic colors and shapes!",
    subject: "General Knowledge",
    gradeLevel: "K",
    difficulty: "Easy",
    timeLimit: 8,
    questions: [
      {
        questionText: "What color is the sky on a sunny day?",
        options: [
          { text: "Green", isCorrect: false },
          { text: "Blue", isCorrect: true },
          { text: "Red", isCorrect: false },
          { text: "Yellow", isCorrect: false },
        ],
        explanation: "The sky appears blue on a sunny day because of how sunlight interacts with air molecules.",
        points: 1,
      },
      {
        questionText: "How many sides does a triangle have?",
        options: [
          { text: "2", isCorrect: false },
          { text: "3", isCorrect: true },
          { text: "4", isCorrect: false },
          { text: "5", isCorrect: false },
        ],
        explanation: "A triangle always has 3 sides and 3 corners.",
        points: 1,
      },
      {
        questionText: "What shape is a ball?",
        options: [
          { text: "Square", isCorrect: false },
          { text: "Triangle", isCorrect: false },
          { text: "Circle", isCorrect: true },
          { text: "Rectangle", isCorrect: false },
        ],
        explanation: "A ball is round like a circle or sphere!",
        points: 1,
      },
    ],
    isActive: true,
  },
  {
    title: "Counting and Numbers",
    description: "Practice counting and basic numbers!",
    subject: "General Knowledge",
    gradeLevel: "1",
    difficulty: "Easy",
    timeLimit: 10,
    questions: [
      {
        questionText: "What number comes after 5?",
        options: [
          { text: "4", isCorrect: false },
          { text: "6", isCorrect: true },
          { text: "7", isCorrect: false },
          { text: "3", isCorrect: false },
        ],
        explanation: "The counting order is: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.",
        points: 1,
      },
      {
        questionText: "If you have 3 apples and get 2 more, how many do you have?",
        options: [
          { text: "4", isCorrect: false },
          { text: "5", isCorrect: true },
          { text: "6", isCorrect: false },
          { text: "1", isCorrect: false },
        ],
        explanation: "3 + 2 = 5. When you add, the number gets bigger!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // Grade 2 Quizzes
  {
    title: "Animal Habitats",
    description: "Learn where different animals live!",
    subject: "General Knowledge",
    gradeLevel: "2",
    difficulty: "Easy",
    timeLimit: 10,
    questions: [
      {
        questionText: "Where do polar bears live?",
        options: [
          { text: "Desert", isCorrect: false },
          { text: "Jungle", isCorrect: false },
          { text: "Arctic", isCorrect: true },
          { text: "Ocean", isCorrect: false },
        ],
        explanation: "Polar bears live in the Arctic, where it's very cold and icy.",
        points: 1,
      },
      {
        questionText: "Which animal lives in water and has gills?",
        options: [
          { text: "Dog", isCorrect: false },
          { text: "Bird", isCorrect: false },
          { text: "Fish", isCorrect: true },
          { text: "Cat", isCorrect: false },
        ],
        explanation: "Fish live in water and use gills to breathe underwater.",
        points: 1,
      },
      {
        questionText: "Where would you find a camel?",
        options: [
          { text: "North Pole", isCorrect: false },
          { text: "Desert", isCorrect: true },
          { text: "Ocean", isCorrect: false },
          { text: "Rainforest", isCorrect: false },
        ],
        explanation: "Camels live in deserts and can survive without water for many days.",
        points: 1,
      },
    ],
    isActive: true,
  },
  // Grade 4 Quizzes
  {
    title: "United States Geography",
    description: "Test your knowledge of US states and capitals!",
    subject: "History",
    gradeLevel: "4",
    difficulty: "Medium",
    timeLimit: 15,
    questions: [
      {
        questionText: "What is the capital of the United States?",
        options: [
          { text: "New York", isCorrect: false },
          { text: "Washington D.C.", isCorrect: true },
          { text: "Los Angeles", isCorrect: false },
          { text: "Chicago", isCorrect: false },
        ],
        explanation: "Washington D.C. is the capital of the United States, where the President lives and works.",
        points: 1,
      },
      {
        questionText: "Which ocean is on the west coast of the United States?",
        options: [
          { text: "Atlantic Ocean", isCorrect: false },
          { text: "Indian Ocean", isCorrect: false },
          { text: "Pacific Ocean", isCorrect: true },
          { text: "Arctic Ocean", isCorrect: false },
        ],
        explanation: "The Pacific Ocean borders California, Oregon, and Washington on the west coast.",
        points: 1,
      },
      {
        questionText: "How many states are in the United States?",
        options: [
          { text: "48", isCorrect: false },
          { text: "50", isCorrect: true },
          { text: "52", isCorrect: false },
          { text: "13", isCorrect: false },
        ],
        explanation: "There are 50 states in the United States of America.",
        points: 1,
      },
    ],
    isActive: true,
  },
  {
    title: "Reading Comprehension: Parts of a Story",
    description: "Learn about characters, setting, and plot!",
    subject: "English",
    gradeLevel: "4",
    difficulty: "Medium",
    timeLimit: 12,
    questions: [
      {
        questionText: "What is the 'setting' of a story?",
        options: [
          { text: "The main character", isCorrect: false },
          { text: "When and where the story takes place", isCorrect: true },
          { text: "The problem in the story", isCorrect: false },
          { text: "The author's name", isCorrect: false },
        ],
        explanation: "The setting tells us when and where the story happens, like 'a castle in the Middle Ages' or 'New York City today.'",
        points: 1,
      },
      {
        questionText: "What is a 'protagonist'?",
        options: [
          { text: "The bad guy in the story", isCorrect: false },
          { text: "The main character", isCorrect: true },
          { text: "The setting", isCorrect: false },
          { text: "The ending", isCorrect: false },
        ],
        explanation: "The protagonist is the main character that the story follows.",
        points: 1,
      },
    ],
    isActive: true,
  },
  // Grade 5 Quizzes
  {
    title: "The Solar System",
    description: "Explore planets, moons, and space!",
    subject: "General Knowledge",
    gradeLevel: "5",
    difficulty: "Medium",
    timeLimit: 15,
    questions: [
      {
        questionText: "Which planet is known as the 'Red Planet'?",
        options: [
          { text: "Venus", isCorrect: false },
          { text: "Mars", isCorrect: true },
          { text: "Jupiter", isCorrect: false },
          { text: "Saturn", isCorrect: false },
        ],
        explanation: "Mars is called the Red Planet because of iron oxide (rust) on its surface.",
        points: 1,
      },
      {
        questionText: "What is the closest star to Earth?",
        options: [
          { text: "North Star", isCorrect: false },
          { text: "The Sun", isCorrect: true },
          { text: "Sirius", isCorrect: false },
          { text: "Alpha Centauri", isCorrect: false },
        ],
        explanation: "The Sun is our closest star and provides light and heat to Earth.",
        points: 1,
      },
      {
        questionText: "How long does it take Earth to orbit the Sun?",
        options: [
          { text: "1 day", isCorrect: false },
          { text: "1 month", isCorrect: false },
          { text: "1 year", isCorrect: true },
          { text: "1 week", isCorrect: false },
        ],
        explanation: "Earth takes 365 days (1 year) to complete one orbit around the Sun.",
        points: 1,
      },
    ],
    isActive: true,
  },
  {
    title: "American Revolutionary War",
    description: "Learn about America's fight for independence!",
    subject: "History",
    gradeLevel: "5",
    difficulty: "Medium",
    timeLimit: 15,
    questions: [
      {
        questionText: "When did the American Revolution begin?",
        options: [
          { text: "1492", isCorrect: false },
          { text: "1775", isCorrect: true },
          { text: "1865", isCorrect: false },
          { text: "1945", isCorrect: false },
        ],
        explanation: "The American Revolutionary War began in 1775 with the Battles of Lexington and Concord.",
        points: 1,
      },
      {
        questionText: "Who was the first President of the United States?",
        options: [
          { text: "Thomas Jefferson", isCorrect: false },
          { text: "George Washington", isCorrect: true },
          { text: "John Adams", isCorrect: false },
          { text: "Benjamin Franklin", isCorrect: false },
        ],
        explanation: "George Washington was the first President and is known as the 'Father of Our Country.'",
        points: 1,
      },
      {
        questionText: "Which document declared America's independence from Britain?",
        options: [
          { text: "The Constitution", isCorrect: false },
          { text: "The Bill of Rights", isCorrect: false },
          { text: "The Declaration of Independence", isCorrect: true },
          { text: "The Mayflower Compact", isCorrect: false },
        ],
        explanation: "The Declaration of Independence was signed on July 4, 1776.",
        points: 1,
      },
    ],
    isActive: true,
  },
  // Grade 6 Quizzes
  {
    title: "Ecosystems and Food Chains",
    description: "Understand how living things depend on each other!",
    subject: "General Knowledge",
    gradeLevel: "6",
    difficulty: "Hard",
    timeLimit: 18,
    questions: [
      {
        questionText: "What do we call an organism that makes its own food?",
        options: [
          { text: "Consumer", isCorrect: false },
          { text: "Producer", isCorrect: true },
          { text: "Decomposer", isCorrect: false },
          { text: "Predator", isCorrect: false },
        ],
        explanation: "Producers like plants make their own food through photosynthesis.",
        points: 1,
      },
      {
        questionText: "What is a carnivore?",
        options: [
          { text: "An animal that eats only plants", isCorrect: false },
          { text: "An animal that eats only meat", isCorrect: true },
          { text: "An animal that eats both plants and meat", isCorrect: false },
          { text: "An organism that breaks down dead things", isCorrect: false },
        ],
        explanation: "Carnivores are meat-eaters, like lions, wolves, and sharks.",
        points: 1,
      },
      {
        questionText: "Which of these is a decomposer?",
        options: [
          { text: "Lion", isCorrect: false },
          { text: "Grass", isCorrect: false },
          { text: "Mushroom", isCorrect: true },
          { text: "Rabbit", isCorrect: false },
        ],
        explanation: "Decomposers like mushrooms and bacteria break down dead plants and animals.",
        points: 1,
      },
    ],
    isActive: true,
  },
  {
    title: "Ancient Rome: The Empire",
    description: "Discover the mighty Roman Empire!",
    subject: "History",
    gradeLevel: "6",
    difficulty: "Hard",
    timeLimit: 20,
    questions: [
      {
        questionText: "What was the capital of the Roman Empire?",
        options: [
          { text: "Athens", isCorrect: false },
          { text: "Rome", isCorrect: true },
          { text: "Alexandria", isCorrect: false },
          { text: "Jerusalem", isCorrect: false },
        ],
        explanation: "Rome was the capital and heart of the vast Roman Empire.",
        points: 1,
      },
      {
        questionText: "Who was the first Roman Emperor?",
        options: [
          { text: "Julius Caesar", isCorrect: false },
          { text: "Augustus", isCorrect: true },
          { text: "Nero", isCorrect: false },
          { text: "Constantine", isCorrect: false },
        ],
        explanation: "Augustus Caesar became the first Roman Emperor in 27 BCE.",
        points: 1,
      },
      {
        questionText: "What language did the ancient Romans speak?",
        options: [
          { text: "Greek", isCorrect: false },
          { text: "English", isCorrect: false },
          { text: "Latin", isCorrect: true },
          { text: "Italian", isCorrect: false },
        ],
        explanation: "Latin was the language of ancient Rome and influenced many modern languages.",
        points: 1,
      },
    ],
    isActive: true,
  },
];

// Export for use in seedProduction.js
module.exports = { quizzes };
