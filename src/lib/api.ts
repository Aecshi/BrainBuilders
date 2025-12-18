import axios from 'axios';

// Create an axios instance with default configs
const api = axios.create({
  // Update the default port to match the server port (8082) from the screenshot
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8082/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add logging interceptor for debugging API calls
api.interceptors.request.use(
  (config) => {
    // Log request
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`, config.params || {});
    
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`, { 
      status: response.status,
      headers: response.headers,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('API Response Error:', {
      message: error.message,
      response: error.response ? {
        status: error.response.status,
        data: error.response.data
      } : 'No response from server'
    });
    return Promise.reject(error);
  }
);

// Authentication endpoints
export const authAPI = {
  register: (userData: any) => api.post('/users/register', userData),
  login: (credentials: { email: string; password: string }) => api.post('/users/login', credentials),
  getProfile: () => api.get('/users/profile'),
  updateProfile: (userData: any) => api.put('/users/profile', userData),
  updateProgress: (progressData: any) => api.put('/users/progress', progressData),
};

// Quiz endpoints
export const quizAPI = {
  getQuizzes: (params = {}) => api.get('/quizzes', { params }),
  getQuiz: (id: string) => api.get(`/quizzes/${id}`),
  getBySubject: (subject: string) => api.get(`/quizzes/subject/${subject}`),
  getByGrade: (grade: string) => api.get(`/quizzes/grade/${grade}`),
  // Admin endpoints
  createQuiz: (quizData: any) => api.post('/quizzes', quizData),
  updateQuiz: (id: string, quizData: any) => api.put(`/quizzes/${id}`, quizData),
  deleteQuiz: (id: string) => api.delete(`/quizzes/${id}`),
};

// Word Challenge endpoints
export const wordChallengeAPI = {
  getWordChallenges: (params = {}) => api.get('/word-challenges', { params }),
  getWordChallenge: (id: string) => api.get(`/word-challenges/${id}`),
  getByType: (type: string) => api.get(`/word-challenges/type/${type}`),
  getByGrade: (grade: string) => api.get(`/word-challenges/grade/${grade}`),
  // Admin endpoints
  createWordChallenge: (challengeData: any) => api.post('/word-challenges', challengeData),
  updateWordChallenge: (id: string, challengeData: any) => api.put(`/word-challenges/${id}`, challengeData),
  deleteWordChallenge: (id: string) => api.delete(`/word-challenges/${id}`),
};

// Historical Adventure endpoints
export const historicalAdventureAPI = {
  getHistoricalAdventures: (params = {}) => api.get('/historical-adventures', { params }),
  getHistoricalAdventure: (id: string) => api.get(`/historical-adventures/${id}`),
  getByEra: (era: string) => api.get(`/historical-adventures/era/${era}`),
  getByGrade: (grade: string) => api.get(`/historical-adventures/grade/${grade}`),
  // Admin endpoints
  createHistoricalAdventure: (adventureData: any) => api.post('/historical-adventures', adventureData),
  updateHistoricalAdventure: (id: string, adventureData: any) => api.put(`/historical-adventures/${id}`, adventureData),
  deleteHistoricalAdventure: (id: string) => api.delete(`/historical-adventures/${id}`),
};

// Subscription endpoints
export const subscriptionAPI = {
  // Get all available subscription plans
  getPlans: () => api.get('/subscriptions/plans'),
  // Subscribe to a plan
  subscribe: (plan: 'word_builders' | 'quizlet' | 'time_travellers') => 
    api.post('/subscriptions/subscribe', { plan }),
  // Get user's subscriptions
  getMySubscriptions: () => api.get('/subscriptions/my-subscriptions'),
  // Get subscription status for a specific plan
  getSubscriptionStatus: (plan: string) => api.get(`/subscriptions/status/${plan}`),
  // Cancel a subscription
  cancelSubscription: (subscriptionId: string) => 
    api.put(`/subscriptions/cancel/${subscriptionId}`),
  // Admin: Get all subscriptions
  getAllSubscriptions: (params = {}) => api.get('/subscriptions/all', { params }),
};

// Export api as both named and default export for flexibility
export { api };
export default api;