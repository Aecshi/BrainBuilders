// src/seeds/quizSeed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Quiz from "../models/Quiz.js"; // use .js if you're using ES modules

dotenv.config();

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
  // (keep your other quizzes here)
];

async function seedQuizData() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");
    await Quiz.deleteMany();
    await Quiz.insertMany(quizzes);
    console.log("🎉 Quiz data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding quiz data:", error);
    process.exit(1);
  }
}

seedQuizData();
