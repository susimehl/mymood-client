import axios from 'axios';

class TasksService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL 
    });

   
    this.api.interceptors.request.use((config) => {
    
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }


  createTask = (requestBody) => {
    return this.api.post('/api/tasks', requestBody);
  }

  
  getTask = (id) => {
    return this.api.get(`/api/tasks/${id}`);
  }

  
  updateTask = (id, requestBody) => {
    return this.api.put(`/api/tasks/${id}`, requestBody);
  }


  deleteTask = (id) => {
    return this.api.delete(`/api/tasks/${id}`);
  } 


}

const tasksService = new TasksService();

export default tasksService;