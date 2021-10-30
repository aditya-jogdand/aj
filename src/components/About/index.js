import { Link, useLocation } from "react-router-dom";
import './style.css'

const About = () => {
    return (
        <div className="about">
            <h1>Bio</h1>
            <p>
            Hello! I am a full stack developer from Pune, India. I love coding and always try to write elegant and efficient code whether it be Java, Javascript, HTML or CSS. I try to learn something new everyday.
            </p>
            <br/>
            <p>
            I am also a cricket fan. When I am not coding, you will find me watching or playing cricket. 
            </p>
           
          <center> <button
             type="button"
             onClick={(e) => {
             e.preventDefault();
            //  window.location.href='https://drive.google.com/file/d/1JVjDiFsn49OaaKqhCTEf9B4lgaEjCiks/view?usp=sharing';
            window.location.href='https://google.com';
                 }}> Download CV</button></center>
       
        </div>
    )
}

export default About
