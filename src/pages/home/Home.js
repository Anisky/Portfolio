import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { SpecialBtn } from '../../components/SpecialBtn';
import './Home.css';
import profPic from "../../utils/profile-pic.jpg";
const Home = () => {
    return (
        <div className="home-container">
            
            <div className="color-block">
            </div>
            <div className="home-details-container">
                <img className="prof-pic" src={profPic} alt="profile pic" />
                <div className="p-pic-container">
                    <div className="figure-cont">

                    </div>

                </div>
                <div className="info-container">
                    <h1 className="job-title">
                        I'm Anis Slimatni.
                        <br/>
                        <span>
                        software developer
                        </span>
                    </h1>
                    <p className="bio-text">
                    Innovative web developer with greate experience building and maintaining websites, focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                    </p>
                    <Link to='/about' ><SpecialBtn content={"more about me"} iconClass={'fas fa-arrow-right'} /></Link>
                   
                </div>
            
            
            </div>    


           
        </div>
    )
}
export default Home ;
