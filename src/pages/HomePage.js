/*import image from "../assets/exit.gif"*/
import image from "../assets/okcanclewindows.gif"
/*import image from "../assets/nosignal1.webp"*/
import musicFile from "../audio/lifelike.mp3";

const audio = new Audio(musicFile);

audio.play(); // starts playing the music
audio.pause(); // pauses the music
audio.currentTime = 0; // resets the music to the beginning




function HomePage() {
    return (
  <div className="Intro-animatedBox">
      <img src={image} alt="okcancle"/>
      <p> 
</p>
      
  
  
  </div>
  )
  }
    ;
  
  
  export default HomePage;