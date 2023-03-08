import axios from 'axios';

class ProjectsService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/projects
  createProject = (requestBody) => {
    return this.api.post('/api/privatmoods', requestBody);
  }

  // GET /api/projects
  getAllProjects = () => {
    return this.api.get('/api/privatmoods');
  }

  // GET /api/projects/:id
  getProject = (id) => {
    return this.api.get(`/api/privatmoods/${id}`);
  }

  // PUT /api/projects/:id
  updateProject = (id, requestBody) => {
    return this.api.put(`/api/privatmoods/${id}`, requestBody);
  }

  // DELETE /api/projects/:id
  deleteProject = (id) => {
    return this.api.delete(`/api/privatmoods/${id}`);
  } 


}

// Create one instance (object) of the service
const projectsService = new ProjectsService();

export default projectsService;