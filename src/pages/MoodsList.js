import DropDown from "../components/DropDown";

function MoodsList(props) {
  return (
    <div className="MoodsList">
    <DropDown moods={props.moods} filterMoods={props.filterMoods} />

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
    </div>
  );
}

export default MoodsList;
