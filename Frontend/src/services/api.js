import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',  // Adjust the backend base URL
});

export default api;


export const fetchArtifacts = async () => {
    const response = await fetch('/api/artifacts');
    return response.json();
  };
  
  export const fetchQuiz = async (id) => {
    const response = await fetch(`/api/quiz/${id}`);
    return response.json();
  };
  