import { useState, useEffect } from "react";
import ProjectCard from "./../components/ProjectCard";
import projectsService from "../services/projects.service";

const API_URL = "http://localhost:5005";

function ProjectListPage(props) {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    // Get the token from the localStorage
    /*const storedToken = localStorage.getItem("authToken");
  
    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/projects`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )*/
    projectsService
      .getAllProjects()
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="MoodsList">
      <h1>†◊ee ∑nd Ωƒf Things</h1>

      {props.moods.map((mood) => {
        return (
          <div className="MoodCard">
            <img src={mood.imageUrl} alt="mood" />
            <h2>{mood.title}</h2>
            <p>{mood.source}</p>
            <p>{mood.topic}</p>
          </div>
        );
      })}

      {projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </div>
  );
}

export default ProjectListPage;
