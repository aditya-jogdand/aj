import { Link } from "react-router-dom";
import ReactTypingEffect from 'react-typing-effect';

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
      <h1>Hello!</h1>
        <h2>
      <ReactTypingEffect className="typingeffect" text={['I am Aditya Jogdand']} speed={100} eraseDelay={700}/>
      </h2>
          {/* <p>Hi,</p>
          <p>I am Aditya</p>
          <p>Software Developer</p> */}
        <br/>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
       <center> <img
          src="photo.jpg"
          style={{width: '60%', height: '60%', borderRadius: 400/ 2}}
          alt="person picture"
        /></center>
      </div>
    </div>
  );
};

export default Home;
