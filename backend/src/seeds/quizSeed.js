// src/seeds/quizSeed.js

const quizzes = [
  {
    title: "Basic English Grammar",
    description: "Test your knowledge of basic English grammar rules!",
    subject: "English",
    gradeLevel: "3",
    difficulty: "Easy",
    timeLimit: 10,
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
];

// Export for use in seedProduction.js
module.exports = { quizzes };
