import { useState, useEffect } from "react";
import projectsService from "../services/projects.service";
import { useNavigate, useParams } from 'react-router-dom';


const API_URL = process.env.REACT_APP_API_URL
;

function PrivatMoodsPage(props) {
  const [privatMoods, setPrivatMoods] = useState([]);
  const { privatMoodsId } = useParams();
  const navigate =  useNavigate();
 // setTitle(onePrivatMood.title);
 // setDescription(onePrivatMood.description);
console.log(props.moods)

//   useEffect(() => {
//     projectsService.getPrivatMoods(privatMoodsId)
//   .then((response) => {
//     const onePrivatMood = response.data;
   
//   })
//   .catch((error) => console.log(error));

// }, [privatMoodsId]);

const handleFormSubmit = (e) => {
e.preventDefault();
//const requestBody = { title, description };

// axios
//   .put(
//     `${API_URL}/api/privatMoods/${privatMoodstId}`,
//     requestBody,
//     { headers: { Authorization: `Bearer ${storedToken}` } }
//   )

//projectsService.updatePrivatMoods(privatMoodsId, requestBody)    
//  .then((response) => {
 //  navigate(`/privatMoods/${privatMoodsId}`)
// });
};


const deletePrivatMoods = (privatMoodsId) => {
// axios
//   .delete(
//     `${API_URL}/api/privatMoods/${privatMoodsId}`,
//     { headers: { Authorization: `Bearer ${storedToken}` } }
//   )
projectsService.deletePrivatMoods(privatMoodsId)        
  .then(() => props.getMoods())
  .catch((err) => console.log(err));
};  


   /*getAllPrivatMoods();
  }, []);*/

  


  return (
    <div className="PrivatMoodsPage">
      <h1>†◊ee ∑nd Ωƒf Things</h1>

      {props.moods
      .filter((mood)=> {return mood.visual === "privat"})
      .map((mood) => {
        return (
          <div className="MoodCard">
            <img src={mood.imageUrl} alt="mood" />
            <h2>{mood.title}</h2>
            <p>{mood.source}</p>
            <p>{mood.topic}</p>
            <button onClick={() => deletePrivatMoods(mood._id)}>💔</button>
          </div>
        );
      })}

    </div>
)
}


export default PrivatMoodsPage;
