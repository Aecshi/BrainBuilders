// src/seeds/quizSeed.js
// COMPREHENSIVE QUIZ DATA - 5 QUESTIONS EACH FOR ALL GRADE LEVELS (K-6) AND ALL 3 SUBJECTS

const quizzes = [
  // ==================== KINDERGARTEN (K) ====================
  // English - Grade K
  {
    title: "Letter Sounds and Alphabet",
    description: "Learn the alphabet and letter sounds!",
    subject: "English",
    gradeLevel: "K",
    difficulty: "Easy",
    timeLimit: 8,
    questions: [
      {
        questionText: "What letter does 'Apple' start with?",
        options: [
          { text: "B", isCorrect: false },
          { text: "A", isCorrect: true },
          { text: "C", isCorrect: false },
          { text: "D", isCorrect: false },
        ],
        explanation: "Apple starts with the letter A!",
        points: 1,
      },
      {
        questionText: "What letter does 'Ball' start with?",
        options: [
          { text: "A", isCorrect: false },
          { text: "B", isCorrect: true },
          { text: "C", isCorrect: false },
          { text: "D", isCorrect: false },
        ],
        explanation: "Ball starts with the letter B!",
        points: 1,
      },
      {
        questionText: "Which letter comes after A?",
        options: [
          { text: "C", isCorrect: false },
          { text: "B", isCorrect: true },
          { text: "D", isCorrect: false },
          { text: "Z", isCorrect: false },
        ],
        explanation: "The alphabet goes A, B, C...",
        points: 1,
      },
      {
        questionText: "What sound does the letter 'S' make?",
        options: [
          { text: "Mmm", isCorrect: false },
          { text: "Sss", isCorrect: true },
          { text: "Rrr", isCorrect: false },
          { text: "Bbb", isCorrect: false },
        ],
        explanation: "The letter S makes a 'Sss' sound like a snake!",
        points: 1,
      },
      {
        questionText: "How many letters are in the word 'CAT'?",
        options: [
          { text: "2", isCorrect: false },
          { text: "3", isCorrect: true },
          { text: "4", isCorrect: false },
          { text: "5", isCorrect: false },
        ],
        explanation: "CAT has 3 letters: C, A, and T!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // History - Grade K
  {
    title: "Families and Community Helpers",
    description: "Learn about families and people who help us!",
    subject: "History",
    gradeLevel: "K",
    difficulty: "Easy",
    timeLimit: 8,
    questions: [
      {
        questionText: "Who helps people when they are sick?",
        options: [
          { text: "Teacher", isCorrect: false },
          { text: "Doctor", isCorrect: true },
          { text: "Chef", isCorrect: false },
          { text: "Artist", isCorrect: false },
        ],
        explanation: "Doctors help people when they are sick or hurt!",
        points: 1,
      },
      {
        questionText: "Who helps keep us safe from fires?",
        options: [
          { text: "Firefighter", isCorrect: true },
          { text: "Librarian", isCorrect: false },
          { text: "Farmer", isCorrect: false },
          { text: "Baker", isCorrect: false },
        ],
        explanation: "Firefighters put out fires and keep us safe!",
        points: 1,
      },
      {
        questionText: "Who teaches children at school?",
        options: [
          { text: "Police officer", isCorrect: false },
          { text: "Teacher", isCorrect: true },
          { text: "Pilot", isCorrect: false },
          { text: "Dentist", isCorrect: false },
        ],
        explanation: "Teachers help children learn at school!",
        points: 1,
      },
      {
        questionText: "What is a group of people related to you called?",
        options: [
          { text: "Team", isCorrect: false },
          { text: "Family", isCorrect: true },
          { text: "Class", isCorrect: false },
          { text: "Club", isCorrect: false },
        ],
        explanation: "Your family includes people related to you like parents, siblings, and grandparents!",
        points: 1,
      },
      {
        questionText: "Who delivers mail to our homes?",
        options: [
          { text: "Mail carrier", isCorrect: true },
          { text: "Cashier", isCorrect: false },
          { text: "Musician", isCorrect: false },
          { text: "Driver", isCorrect: false },
        ],
        explanation: "Mail carriers bring letters and packages to our homes!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // General Knowledge - Grade K
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
        explanation: "The sky appears blue on a sunny day!",
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
      {
        questionText: "What color is grass?",
        options: [
          { text: "Red", isCorrect: false },
          { text: "Green", isCorrect: true },
          { text: "Purple", isCorrect: false },
          { text: "Orange", isCorrect: false },
        ],
        explanation: "Grass is typically green!",
        points: 1,
      },
      {
        questionText: "Which shape has four equal sides?",
        options: [
          { text: "Circle", isCorrect: false },
          { text: "Triangle", isCorrect: false },
          { text: "Square", isCorrect: true },
          { text: "Oval", isCorrect: false },
        ],
        explanation: "A square has four sides of the same length.",
        points: 1,
      },
    ],
    isActive: true,
  },

  // ==================== GRADE 1 ====================
  // English - Grade 1
  {
    title: "Simple Words and Rhymes",
    description: "Learn about rhyming words and simple reading!",
    subject: "English",
    gradeLevel: "1",
    difficulty: "Easy",
    timeLimit: 10,
    questions: [
      {
        questionText: "Which word rhymes with 'cat'?",
        options: [
          { text: "dog", isCorrect: false },
          { text: "hat", isCorrect: true },
          { text: "run", isCorrect: false },
          { text: "blue", isCorrect: false },
        ],
        explanation: "Cat and hat rhyme because they end with the same sound!",
        points: 1,
      },
      {
        questionText: "What is the opposite of 'big'?",
        options: [
          { text: "huge", isCorrect: false },
          { text: "small", isCorrect: true },
          { text: "tall", isCorrect: false },
          { text: "fast", isCorrect: false },
        ],
        explanation: "Big and small are opposites!",
        points: 1,
      },
      {
        questionText: "Which word is a naming word (noun)?",
        options: [
          { text: "run", isCorrect: false },
          { text: "happy", isCorrect: false },
          { text: "dog", isCorrect: true },
          { text: "quickly", isCorrect: false },
        ],
        explanation: "A noun is a person, place, or thing. Dog is a thing!",
        points: 1,
      },
      {
        questionText: "How many syllables are in the word 'rainbow'?",
        options: [
          { text: "1", isCorrect: false },
          { text: "2", isCorrect: true },
          { text: "3", isCorrect: false },
          { text: "4", isCorrect: false },
        ],
        explanation: "Rainbow has 2 syllables: rain-bow!",
        points: 1,
      },
      {
        questionText: "What punctuation mark goes at the end of this sentence: 'I like ice cream'",
        options: [
          { text: "?", isCorrect: false },
          { text: ".", isCorrect: true },
          { text: "!", isCorrect: false },
          { text: ",", isCorrect: false },
        ],
        explanation: "A period (.) goes at the end of a telling sentence!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // History - Grade 1
  {
    title: "Yesterday, Today, and Tomorrow",
    description: "Learn about time and important holidays!",
    subject: "History",
    gradeLevel: "1",
    difficulty: "Easy",
    timeLimit: 10,
    questions: [
      {
        questionText: "Which holiday celebrates America's birthday?",
        options: [
          { text: "Halloween", isCorrect: false },
          { text: "Fourth of July", isCorrect: true },
          { text: "Valentine's Day", isCorrect: false },
          { text: "Easter", isCorrect: false },
        ],
        explanation: "The Fourth of July celebrates when America became independent!",
        points: 1,
      },
      {
        questionText: "What month comes after January?",
        options: [
          { text: "March", isCorrect: false },
          { text: "February", isCorrect: true },
          { text: "December", isCorrect: false },
          { text: "April", isCorrect: false },
        ],
        explanation: "The months go January, February, March...",
        points: 1,
      },
      {
        questionText: "What day comes before Sunday?",
        options: [
          { text: "Monday", isCorrect: false },
          { text: "Saturday", isCorrect: true },
          { text: "Friday", isCorrect: false },
          { text: "Tuesday", isCorrect: false },
        ],
        explanation: "The week goes: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday!",
        points: 1,
      },
      {
        questionText: "Who was the first President of the United States?",
        options: [
          { text: "Abraham Lincoln", isCorrect: false },
          { text: "George Washington", isCorrect: true },
          { text: "Benjamin Franklin", isCorrect: false },
          { text: "Thomas Jefferson", isCorrect: false },
        ],
        explanation: "George Washington was the first President!",
        points: 1,
      },
      {
        questionText: "What do we celebrate on Thanksgiving?",
        options: [
          { text: "Being thankful", isCorrect: true },
          { text: "Halloween costumes", isCorrect: false },
          { text: "New Year", isCorrect: false },
          { text: "Valentine's Day", isCorrect: false },
        ],
        explanation: "On Thanksgiving, we give thanks for what we have!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // General Knowledge - Grade 1
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
      {
        questionText: "How many fingers are on two hands?",
        options: [
          { text: "8", isCorrect: false },
          { text: "10", isCorrect: true },
          { text: "12", isCorrect: false },
          { text: "5", isCorrect: false },
        ],
        explanation: "You have 5 fingers on each hand, so 5 + 5 = 10.",
        points: 1,
      },
      {
        questionText: "What is 7 - 3?",
        options: [
          { text: "3", isCorrect: false },
          { text: "4", isCorrect: true },
          { text: "5", isCorrect: false },
          { text: "10", isCorrect: false },
        ],
        explanation: "If you have 7 items and take away 3, you have 4 left.",
        points: 1,
      },
      {
        questionText: "Which number is bigger: 9 or 2?",
        options: [
          { text: "2", isCorrect: false },
          { text: "9", isCorrect: true },
          { text: "They are the same", isCorrect: false },
          { text: "Neither", isCorrect: false },
        ],
        explanation: "9 is a larger number than 2.",
        points: 1,
      },
    ],
    isActive: true,
  },

  // ==================== GRADE 2 ====================
  // English - Grade 2
  {
    title: "Sentences and Story Time",
    description: "Learn about sentences and parts of a story!",
    subject: "English",
    gradeLevel: "2",
    difficulty: "Easy",
    timeLimit: 10,
    questions: [
      {
        questionText: "What is a sentence?",
        options: [
          { text: "A single word", isCorrect: false },
          { text: "A complete thought with a subject and verb", isCorrect: true },
          { text: "Just a verb", isCorrect: false },
          { text: "A question mark", isCorrect: false },
        ],
        explanation: "A sentence is a complete thought that tells us something!",
        points: 1,
      },
      {
        questionText: "Which word is an action word (verb)?",
        options: [
          { text: "happy", isCorrect: false },
          { text: "jump", isCorrect: true },
          { text: "blue", isCorrect: false },
          { text: "cat", isCorrect: false },
        ],
        explanation: "Jump is an action word - it tells us what someone does!",
        points: 1,
      },
      {
        questionText: "What do we call the person or thing a story is about?",
        options: [
          { text: "The character", isCorrect: true },
          { text: "The page", isCorrect: false },
          { text: "The color", isCorrect: false },
          { text: "The number", isCorrect: false },
        ],
        explanation: "Characters are the people or animals in a story!",
        points: 1,
      },
      {
        questionText: "Which sentence is a question?",
        options: [
          { text: "I like pizza.", isCorrect: false },
          { text: "Do you like pizza?", isCorrect: true },
          { text: "Pizza is yummy!", isCorrect: false },
          { text: "I eat pizza every day.", isCorrect: false },
        ],
        explanation: "A question asks something and ends with a question mark (?)",
        points: 1,
      },
      {
        questionText: "What describes a noun?",
        options: [
          { text: "A verb", isCorrect: false },
          { text: "An adjective", isCorrect: true },
          { text: "A number", isCorrect: false },
          { text: "A period", isCorrect: false },
        ],
        explanation: "An adjective describes a noun, like 'big dog' or 'red apple'!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // History - Grade 2
  {
    title: "American Symbols and Heroes",
    description: "Learn about important American symbols!",
    subject: "History",
    gradeLevel: "2",
    difficulty: "Easy",
    timeLimit: 10,
    questions: [
      {
        questionText: "What is the name of America's flag?",
        options: [
          { text: "Union Jack", isCorrect: false },
          { text: "Stars and Stripes", isCorrect: true },
          { text: "Red Banner", isCorrect: false },
          { text: "Blue Flag", isCorrect: false },
        ],
        explanation: "The American flag is called the Stars and Stripes!",
        points: 1,
      },
      {
        questionText: "How many stripes are on the American flag?",
        options: [
          { text: "10", isCorrect: false },
          { text: "13", isCorrect: true },
          { text: "50", isCorrect: false },
          { text: "20", isCorrect: false },
        ],
        explanation: "There are 13 stripes representing the original 13 colonies!",
        points: 1,
      },
      {
        questionText: "What famous monument can you visit in New York?",
        options: [
          { text: "Golden Gate Bridge", isCorrect: false },
          { text: "Statue of Liberty", isCorrect: true },
          { text: "Space Needle", isCorrect: false },
          { text: "Mount Rushmore", isCorrect: false },
        ],
        explanation: "The Statue of Liberty welcomes people to New York!",
        points: 1,
      },
      {
        questionText: "Who helped write the Declaration of Independence?",
        options: [
          { text: "Abraham Lincoln", isCorrect: false },
          { text: "Thomas Jefferson", isCorrect: true },
          { text: "Martin Luther King Jr.", isCorrect: false },
          { text: "Benjamin Franklin", isCorrect: false },
        ],
        explanation: "Thomas Jefferson wrote the Declaration of Independence!",
        points: 1,
      },
      {
        questionText: "What does the Liberty Bell represent?",
        options: [
          { text: "Christmas", isCorrect: false },
          { text: "Freedom", isCorrect: true },
          { text: "School", isCorrect: false },
          { text: "Music", isCorrect: false },
        ],
        explanation: "The Liberty Bell is a symbol of American freedom!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // General Knowledge - Grade 2
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
      {
        questionText: "Which habitat is home to monkeys, parrots, and jaguars?",
        options: [
          { text: "Grassland", isCorrect: false },
          { text: "Forest", isCorrect: false },
          { text: "Rainforest", isCorrect: true },
          { text: "Tundra", isCorrect: false },
        ],
        explanation: "Rainforests have many unique animals!",
        points: 1,
      },
      {
        questionText: "What do we call the home of a bird?",
        options: [
          { text: "Cave", isCorrect: false },
          { text: "Nest", isCorrect: true },
          { text: "Burrow", isCorrect: false },
          { text: "Hive", isCorrect: false },
        ],
        explanation: "Birds build nests to lay eggs and raise their young.",
        points: 1,
      },
    ],
    isActive: true,
  },

  // ==================== GRADE 3 ====================
  // English - Grade 3
  {
    title: "Basic English Grammar",
    description: "Test your knowledge of basic English grammar rules!",
    subject: "English",
    gradeLevel: "3",
    difficulty: "Easy",
    timeLimit: 15,
    questions: [
      {
        questionText: 'Which word is a noun in the following sentence: "The cat ran quickly across the yard."?',
        options: [
          { text: "ran", isCorrect: false },
          { text: "cat", isCorrect: true },
          { text: "quickly", isCorrect: false },
          { text: "across", isCorrect: false },
        ],
        explanation: 'A noun is a person, place, thing, or idea. "Cat" is a noun.',
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
        explanation: 'The verb should agree with the subject. "He" is singular, so we use "is".',
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
        explanation: "An exclamation point (!) shows strong emotion.",
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
  // History - Grade 3
  {
    title: "Native Americans and Early Settlers",
    description: "Learn about the first people in America!",
    subject: "History",
    gradeLevel: "3",
    difficulty: "Easy",
    timeLimit: 12,
    questions: [
      {
        questionText: "Who lived in America before the Europeans arrived?",
        options: [
          { text: "Cowboys", isCorrect: false },
          { text: "Native Americans", isCorrect: true },
          { text: "Vikings", isCorrect: false },
          { text: "Romans", isCorrect: false },
        ],
        explanation: "Native Americans were the first people to live in North America!",
        points: 1,
      },
      {
        questionText: "What was the name of the ship the Pilgrims sailed on?",
        options: [
          { text: "Santa Maria", isCorrect: false },
          { text: "Mayflower", isCorrect: true },
          { text: "Nina", isCorrect: false },
          { text: "Titanic", isCorrect: false },
        ],
        explanation: "The Pilgrims sailed to America on the Mayflower in 1620!",
        points: 1,
      },
      {
        questionText: "What did Native Americans teach the Pilgrims?",
        options: [
          { text: "How to drive cars", isCorrect: false },
          { text: "How to grow corn", isCorrect: true },
          { text: "How to fly planes", isCorrect: false },
          { text: "How to use computers", isCorrect: false },
        ],
        explanation: "Native Americans taught the Pilgrims how to grow food like corn!",
        points: 1,
      },
      {
        questionText: "What holiday celebrates the Pilgrims and Native Americans sharing a meal?",
        options: [
          { text: "Halloween", isCorrect: false },
          { text: "Thanksgiving", isCorrect: true },
          { text: "Easter", isCorrect: false },
          { text: "Valentine's Day", isCorrect: false },
        ],
        explanation: "Thanksgiving celebrates the first harvest feast shared by Pilgrims and Native Americans!",
        points: 1,
      },
      {
        questionText: "What were Native American homes made of?",
        options: [
          { text: "Only wood", isCorrect: false },
          { text: "Different materials depending on the tribe", isCorrect: true },
          { text: "Only stone", isCorrect: false },
          { text: "Only metal", isCorrect: false },
        ],
        explanation: "Different tribes built different types of homes: tepees, longhouses, pueblos, and more!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // General Knowledge - Grade 3
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
        explanation: "Jupiter is the largest planet in our solar system!",
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
        explanation: "All spiders have 8 legs!",
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
        explanation: "Plants use sunlight, water, and carbon dioxide to make food!",
        points: 1,
      },
      {
        questionText: "What is the process of a caterpillar turning into a butterfly called?",
        options: [
          { text: "Germination", isCorrect: false },
          { text: "Metamorphosis", isCorrect: true },
          { text: "Pollination", isCorrect: false },
          { text: "Reproduction", isCorrect: false },
        ],
        explanation: "Metamorphosis is when an animal changes form!",
        points: 1,
      },
      {
        questionText: "Which of these is a mammal?",
        options: [
          { text: "Chicken", isCorrect: false },
          { text: "Fish", isCorrect: false },
          { text: "Whale", isCorrect: true },
          { text: "Snake", isCorrect: false },
        ],
        explanation: "Whales are mammals because they breathe air and feed milk to their babies!",
        points: 1,
      },
    ],
    isActive: true,
  },

  // ==================== GRADE 4 ====================
  // English - Grade 4
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
        explanation: "The setting tells us when and where the story happens!",
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
        explanation: "The protagonist is the main character the story follows.",
        points: 1,
      },
      {
        questionText: "What is the 'plot' of a story?",
        options: [
          { text: "The main characters", isCorrect: false },
          { text: "The sequence of events in the story", isCorrect: true },
          { text: "The lesson learned", isCorrect: false },
          { text: "The place where it happens", isCorrect: false },
        ],
        explanation: "The plot is the series of events that make up the story!",
        points: 1,
      },
      {
        questionText: "What is the 'climax' of a story?",
        options: [
          { text: "The beginning", isCorrect: false },
          { text: "The most exciting part", isCorrect: true },
          { text: "The end", isCorrect: false },
          { text: "The characters", isCorrect: false },
        ],
        explanation: "The climax is the most intense moment in the story!",
        points: 1,
      },
      {
        questionText: "What is a 'theme' in a story?",
        options: [
          { text: "The main character's name", isCorrect: false },
          { text: "The lesson or message of the story", isCorrect: true },
          { text: "The time period", isCorrect: false },
          { text: "The type of book", isCorrect: false },
        ],
        explanation: "The theme is the message the author wants to share!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // History - Grade 4
  {
    title: "United States Geography and History",
    description: "Test your knowledge of US states and history!",
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
        explanation: "Washington D.C. is the capital where the President lives!",
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
        explanation: "The Pacific Ocean is on the west coast!",
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
        explanation: "There are 50 states in the United States!",
        points: 1,
      },
      {
        questionText: "Which state is known as the 'Sunshine State'?",
        options: [
          { text: "California", isCorrect: false },
          { text: "Texas", isCorrect: false },
          { text: "Florida", isCorrect: true },
          { text: "Hawaii", isCorrect: false },
        ],
        explanation: "Florida is called the Sunshine State!",
        points: 1,
      },
      {
        questionText: "What is the longest river in the United States?",
        options: [
          { text: "Colorado River", isCorrect: false },
          { text: "Mississippi River", isCorrect: true },
          { text: "Hudson River", isCorrect: false },
          { text: "Columbia River", isCorrect: false },
        ],
        explanation: "The Mississippi River is the longest river in the US!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // General Knowledge - Grade 4
  {
    title: "Earth Science Basics",
    description: "Learn about weather, rocks, and Earth!",
    subject: "General Knowledge",
    gradeLevel: "4",
    difficulty: "Medium",
    timeLimit: 12,
    questions: [
      {
        questionText: "What causes day and night on Earth?",
        options: [
          { text: "The Moon orbiting Earth", isCorrect: false },
          { text: "Earth rotating on its axis", isCorrect: true },
          { text: "The Sun moving around Earth", isCorrect: false },
          { text: "Clouds covering the sky", isCorrect: false },
        ],
        explanation: "Earth rotates, causing different parts to face the Sun (day) or away from it (night)!",
        points: 1,
      },
      {
        questionText: "What are clouds made of?",
        options: [
          { text: "Cotton", isCorrect: false },
          { text: "Water droplets or ice crystals", isCorrect: true },
          { text: "Smoke", isCorrect: false },
          { text: "Air only", isCorrect: false },
        ],
        explanation: "Clouds are made of tiny water droplets or ice crystals!",
        points: 1,
      },
      {
        questionText: "What is the center of the Earth called?",
        options: [
          { text: "Mantle", isCorrect: false },
          { text: "Core", isCorrect: true },
          { text: "Crust", isCorrect: false },
          { text: "Surface", isCorrect: false },
        ],
        explanation: "The core is the very hot center of the Earth!",
        points: 1,
      },
      {
        questionText: "What type of rock is formed from cooled lava?",
        options: [
          { text: "Sedimentary", isCorrect: false },
          { text: "Igneous", isCorrect: true },
          { text: "Metamorphic", isCorrect: false },
          { text: "Limestone", isCorrect: false },
        ],
        explanation: "Igneous rocks form when lava or magma cools and hardens!",
        points: 1,
      },
      {
        questionText: "What is precipitation?",
        options: [
          { text: "Wind blowing", isCorrect: false },
          { text: "Water falling from clouds", isCorrect: true },
          { text: "Sunlight", isCorrect: false },
          { text: "Earthquakes", isCorrect: false },
        ],
        explanation: "Precipitation is water that falls from clouds as rain, snow, sleet, or hail!",
        points: 1,
      },
    ],
    isActive: true,
  },

  // ==================== GRADE 5 ====================
  // English - Grade 5
  {
    title: "Advanced Grammar and Writing",
    description: "Master complex sentences and writing skills!",
    subject: "English",
    gradeLevel: "5",
    difficulty: "Medium",
    timeLimit: 15,
    questions: [
      {
        questionText: "What is a compound sentence?",
        options: [
          { text: "A sentence with one subject and one verb", isCorrect: false },
          { text: "Two or more independent clauses joined together", isCorrect: true },
          { text: "A question", isCorrect: false },
          { text: "A sentence fragment", isCorrect: false },
        ],
        explanation: "A compound sentence has two complete thoughts joined by a conjunction!",
        points: 1,
      },
      {
        questionText: "Which word is an adverb in this sentence: 'She sings beautifully'?",
        options: [
          { text: "She", isCorrect: false },
          { text: "sings", isCorrect: false },
          { text: "beautifully", isCorrect: true },
          { text: "None of these", isCorrect: false },
        ],
        explanation: "Adverbs describe verbs and often end in -ly. 'Beautifully' describes how she sings!",
        points: 1,
      },
      {
        questionText: "What is a metaphor?",
        options: [
          { text: "A comparison using 'like' or 'as'", isCorrect: false },
          { text: "A comparison without using 'like' or 'as'", isCorrect: true },
          { text: "A type of sentence", isCorrect: false },
          { text: "A punctuation mark", isCorrect: false },
        ],
        explanation: "A metaphor compares two things directly, like 'Time is money'!",
        points: 1,
      },
      {
        questionText: "What point of view uses 'I' and 'me'?",
        options: [
          { text: "Third person", isCorrect: false },
          { text: "First person", isCorrect: true },
          { text: "Second person", isCorrect: false },
          { text: "Fourth person", isCorrect: false },
        ],
        explanation: "First person point of view uses 'I', 'me', 'we', and 'us'!",
        points: 1,
      },
      {
        questionText: "What is the main idea of a paragraph?",
        options: [
          { text: "The last sentence", isCorrect: false },
          { text: "The most important point the paragraph makes", isCorrect: true },
          { text: "The longest sentence", isCorrect: false },
          { text: "The first word", isCorrect: false },
        ],
        explanation: "The main idea is the central point the author wants to communicate!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // History - Grade 5
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
        explanation: "The American Revolutionary War began in 1775!",
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
        explanation: "George Washington was the first President!",
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
        explanation: "The Declaration of Independence was signed on July 4, 1776!",
        points: 1,
      },
      {
        questionText: "What was the main reason colonists fought for independence?",
        options: [
          { text: "They wanted more land", isCorrect: false },
          { text: "Taxation without representation", isCorrect: true },
          { text: "They wanted to be friends with France", isCorrect: false },
          { text: "They disliked tea", isCorrect: false },
        ],
        explanation: "Colonists were taxed without having a say in Parliament!",
        points: 1,
      },
      {
        questionText: "Who wrote the Declaration of Independence?",
        options: [
          { text: "George Washington", isCorrect: false },
          { text: "Benjamin Franklin", isCorrect: false },
          { text: "Thomas Jefferson", isCorrect: true },
          { text: "John Hancock", isCorrect: false },
        ],
        explanation: "Thomas Jefferson was the primary author!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // General Knowledge - Grade 5
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
        explanation: "Mars is called the Red Planet because of iron oxide on its surface!",
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
        explanation: "The Sun is our closest star!",
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
        explanation: "Earth takes 365 days (1 year) to orbit the Sun!",
        points: 1,
      },
      {
        questionText: "Which planet has prominent rings?",
        options: [
          { text: "Jupiter", isCorrect: false },
          { text: "Uranus", isCorrect: false },
          { text: "Saturn", isCorrect: true },
          { text: "Neptune", isCorrect: false },
        ],
        explanation: "Saturn is famous for its beautiful ring system!",
        points: 1,
      },
      {
        questionText: "What is a galaxy?",
        options: [
          { text: "A single star", isCorrect: false },
          { text: "A large system of stars, gas, and dust", isCorrect: true },
          { text: "A type of planet", isCorrect: false },
          { text: "A small moon", isCorrect: false },
        ],
        explanation: "Our solar system is part of the Milky Way galaxy!",
        points: 1,
      },
    ],
    isActive: true,
  },

  // ==================== GRADE 6 ====================
  // English - Grade 6
  {
    title: "Literary Devices and Analysis",
    description: "Master literary techniques and critical reading!",
    subject: "English",
    gradeLevel: "6",
    difficulty: "Hard",
    timeLimit: 18,
    questions: [
      {
        questionText: "What is personification?",
        options: [
          { text: "Comparing two things using 'like' or 'as'", isCorrect: false },
          { text: "Giving human qualities to non-human things", isCorrect: true },
          { text: "An extreme exaggeration", isCorrect: false },
          { text: "A type of rhyme", isCorrect: false },
        ],
        explanation: "Personification gives human traits to objects or ideas, like 'The wind whispered'!",
        points: 1,
      },
      {
        questionText: "What is alliteration?",
        options: [
          { text: "Rhyming words at the end of lines", isCorrect: false },
          { text: "Repetition of the same beginning sound", isCorrect: true },
          { text: "A comparison without 'like' or 'as'", isCorrect: false },
          { text: "The main message of a story", isCorrect: false },
        ],
        explanation: "Alliteration repeats consonant sounds, like 'Peter Piper picked a peck'!",
        points: 1,
      },
      {
        questionText: "What is foreshadowing?",
        options: [
          { text: "Looking back at past events", isCorrect: false },
          { text: "Hints about what will happen later", isCorrect: true },
          { text: "The ending of a story", isCorrect: false },
          { text: "A type of character", isCorrect: false },
        ],
        explanation: "Foreshadowing gives clues about future events in a story!",
        points: 1,
      },
      {
        questionText: "What is irony?",
        options: [
          { text: "When something happens that is the opposite of what's expected", isCorrect: true },
          { text: "A funny joke", isCorrect: false },
          { text: "A type of poem", isCorrect: false },
          { text: "The setting of a story", isCorrect: false },
        ],
        explanation: "Irony is when the opposite of what you expect happens!",
        points: 1,
      },
      {
        questionText: "What is a complex sentence?",
        options: [
          { text: "A very long sentence", isCorrect: false },
          { text: "A sentence with an independent and dependent clause", isCorrect: true },
          { text: "Two simple sentences", isCorrect: false },
          { text: "A question", isCorrect: false },
        ],
        explanation: "A complex sentence has one independent clause and at least one dependent clause!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // History - Grade 6
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
        explanation: "Rome was the capital of the vast Roman Empire!",
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
        explanation: "Augustus Caesar became the first Roman Emperor in 27 BCE!",
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
        explanation: "Latin was the language of ancient Rome!",
        points: 1,
      },
      {
        questionText: "What famous arena was used for gladiator contests?",
        options: [
          { text: "Parthenon", isCorrect: false },
          { text: "Colosseum", isCorrect: true },
          { text: "Circus Maximus", isCorrect: false },
          { text: "Pantheon", isCorrect: false },
        ],
        explanation: "The Colosseum is an iconic symbol of Imperial Rome!",
        points: 1,
      },
      {
        questionText: "Which Roman invention helped transport water to cities?",
        options: [
          { text: "Pyramids", isCorrect: false },
          { text: "Aqueducts", isCorrect: true },
          { text: "Chariots", isCorrect: false },
          { text: "Lighthouses", isCorrect: false },
        ],
        explanation: "Roman aqueducts carried fresh water to urban areas!",
        points: 1,
      },
    ],
    isActive: true,
  },
  // General Knowledge - Grade 6
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
        explanation: "Producers like plants make their own food through photosynthesis!",
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
        explanation: "Carnivores are meat-eaters, like lions and wolves!",
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
        explanation: "Decomposers like mushrooms break down dead plants and animals!",
        points: 1,
      },
      {
        questionText: "What is a 'food web'?",
        options: [
          { text: "A single path of energy flow", isCorrect: false },
          { text: "A network of many food chains", isCorrect: true },
          { text: "A spider's home", isCorrect: false },
          { text: "A type of plant", isCorrect: false },
        ],
        explanation: "A food web shows how all food chains in an ecosystem are connected!",
        points: 1,
      },
      {
        questionText: "Which of these is an example of a herbivore?",
        options: [
          { text: "Wolf", isCorrect: false },
          { text: "Deer", isCorrect: true },
          { text: "Bear", isCorrect: false },
          { text: "Eagle", isCorrect: false },
        ],
        explanation: "Herbivores are plant-eaters, like deer and rabbits!",
        points: 1,
      },
    ],
    isActive: true,
  },
];

// Export for use in seedProduction.js
module.exports = { quizzes };
