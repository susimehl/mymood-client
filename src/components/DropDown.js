import { useEffect, useState } from "react"
import {useLocation} from "react-router-dom"

function DropDown({moods, filterMoods}) {
  const [open, setOpen] = useState(false)
  const [topics, setTopics] = useState([])
  const location= useLocation();
 

  useEffect(() => {
    const uniqueTopics = moods
    .map(mood => {
      return mood.topic
    })
    .filter((topic, i, arr) => {
      return i === arr.indexOf(topic)
    })
    setTopics(uniqueTopics)
  }, [moods])

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleMenuItemClick = (e) => {
    const topic = e.target.innerText

    filterMoods(topic)
  }

  return (
    <div className="DropDown">
      <button onClick={handleOpen}>⏎</button>
      {open && location.pathname === "/listmood" &&  
        <ul className="menu">
          {topics.map(topic => {
            return (
              <li className="menu-item"><button onClick={(e) => handleMenuItemClick(e)}>{topic}</button></li>
            )
          })}
             <li className="menu-item"><button onClick={(e) => filterMoods("all")}>all</button></li>

        </ul>}
    </div>
  )
}

export default DropDown;
