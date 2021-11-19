import React from 'react'
import { Navbar } from '../../components/Navbar';
import { SpecialBtn } from '../../components/SpecialBtn';
import './Home.css';
const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="color-block">
            </div>
            <div className="home-details-container">
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
                    I'm an Algerian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                    </p>
                    <SpecialBtn content={"more about me"} iconClass={'fas fa-arrow-right'} />
                </div>
            
            
            </div>    


           
        </div>
    )
}
export default Home ;
