import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMoodsPage(props) {
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [topic, setTopic] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [visual, setVisual] = useState("privat");


  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

    const handleVisualChange = (e) => {
      setVisual(e.target.value);
    };

    const handleSourceChange = (e) => {
      setSource(e.target.value);
    };
    const handleTopicChange = (e) => {
      console.log(e.target.value);
      setTopic(e.target.value);
    };
    const handleFileUpload = (e) => {
      const uploadData = new FormData();

      uploadData.append("imageUrl", e.target.files[0]);

      axios
        .post("http://localhost:5005/api/upload", uploadData)
        .then((response) => {
          console.log(response.data.imageUrl);
          setImageUrl(response.data.imageUrl);
        })
        .catch((err) => console.log("Error while uploading the file: ", err));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      const requestBody = { title, source, topic, imageUrl,visual };

      axios
        .post("http://localhost:5005/api/moods", requestBody)
        .then((response) => {
          props.getMoods();
          navigate("/");
        })
        .catch((err) => console.log(err));
    };

    return (
      <div className="AddMoodsPage">
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={(e) => handleFileUpload(e)} />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            name="source"
            placeholder="Source"
            value={source}
            onChange={handleSourceChange}
          />
          <select name="topic" value={topic} onChange={handleTopicChange}>
            <option value="" disabled selected hidden>
              Choose a category
            </option>
            <option value="development">Development</option>
            <option value="dogs">Dogs</option>
            <option value="berlin">Berlin</option>
            <option value="pop culture">Pop culture</option>
            <option value="random">Random</option>
          </select>
          <select name="visual" value={visual} onChange={handleVisualChange}>
            <option value="privat">Privat</option>
            <option value="public">Public</option>
          </select>
          <button type="submit">Add moods</button>
        </form>
      </div>
    );
  };

export default AddMoodsPage;
