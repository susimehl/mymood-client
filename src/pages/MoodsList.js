function MoodsList(props) {
    return (
      <div className="MoodsList">
        <h1>†◊ee ∑nd  Ωƒf Things</h1>
        
        {props.moods.map((mood) => {
          return (
            <div className="MemeCard">
              <img src={mood.imageUrl} alt="meme" />
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
  