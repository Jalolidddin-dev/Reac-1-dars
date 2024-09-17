import "./App.css";
import { FaGithub } from "react-icons/fa";

import ImagePerson from "./images/Ellipse 1.png";

function App() {
  return (
    <div className="App">
      <div className="group">
        <h1>Hello world</h1>
        <FaGithub className="git_icon" />
        <h2>Salom dunyo</h2>

        <img src={ImagePerson} className="image" alt="images-person" />
      </div>
    </div>
  );
}

export default App;
