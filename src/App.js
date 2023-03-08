import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PrivatMoodsPage from "./pages/PrivatMoodsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

import SignupPage from "./pages/SignupPage"; 
import LoginPage from "./pages/LoginPage"; 
import IsPrivate from "./components/IsPrivate";  // <== IMPORT
import IsAnon from "./components/IsAnon";

import AddMoodsPage from "./pages/AddMoodsPage";
import MoodsList from "./pages/MoodsList";
import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = "http://localhost:5005"

function App() {
  const [moods, setMoods] = useState([])
  const [filteredMoods, setFilteredMoods] = useState([])

  const getMoods = () => {
    axios.get(`${API_URL}/api/moods`)
      .then(response => {
        setMoods(response.data)

        const moodsFilteredByVisual = response.data.filter(mood => {
          return mood.visual === "public"
        })
        setFilteredMoods(moodsFilteredByVisual)
      })
      .catch(err => console.log(err))
  }

  const filterMoods = (topic) => {
    console.log(moods)
    const moodsFilteredByVisual = moods.filter(mood => {
      return mood.visual === "public"
    })


    if ( topic === "all"){
      setFilteredMoods(moodsFilteredByVisual)
    } else {
      const moodsFilteredByTopic = moodsFilteredByVisual.filter(mood => {
        return mood.topic === topic
      })
      setFilteredMoods(moodsFilteredByTopic)

    }  
      
    }
    

  useEffect(() => {
    getMoods()
  }, [])


  


  
  return (
    <div className="App">
     
      <Navbar  moods={moods} filterMoods={filterMoods}/>
       
      <Routes>   
       <Route path="/" element={<HomePage />}/>
        <Route path="/listmood" element={<MoodsList moods={filteredMoods} /> }/>
        <Route path="/add-mood" element={<AddMoodsPage getMoods={getMoods} />} />
        <Route path="/moods" element={ <PrivatMoodsPage  moods={moods} /> } />
        <Route path="/moods/:moodId" element={ <ProjectDetailsPage />  } />
        <Route path="/moods/edit/:moodId" element={<IsPrivate><EditProjectPage /> </IsPrivate>} />
        
        {/*    ADD    */}
       
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon> } />
        <Route path="/login" element={ <IsAnon> <LoginPage /> </IsAnon> }/>
      </Routes>
    </div>
  );
}

export default App;
