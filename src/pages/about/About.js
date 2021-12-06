import React from 'react'
import './About.css'
import { PageTitle } from '../../components/PageTitle'
import { Navbar } from '../../components/Navbar'
import { SpecialBtn } from '../../components/SpecialBtn'
import { Box } from '../../components/Box'
import { CircularProgressBar } from '../../components/CircularProgressBar'
import { ExperienceCard } from '../../components/ExperienceCard'
import profPic from "../../utils/profile-pic.jpg";

const About = () => {
    const col1 = ['first Name','age','freelance','phone','skype'];
    const col2 = ['Anis','25 years','available','+971525736347','aniskysky'];
    const col3 = ['last Name', 'nationality', 'address', 'email', 'languages'];
    const col4 = ['Slimatni', 'Algerian', 'Dubai, UAE', 'anisslimatni@hotmail.com', 'English, Arabic, Frensh'];

    const skills = [
        {skill : 'html',percentage: 85},
        {skill : 'css',percentage: 85},
        {skill : 'javascript',percentage: 85},
        {skill : 'react',percentage: 80},
        {skill : 'next',percentage: 50},
        {skill : 'redux',percentage: 80},
        {skill : 'firebase',percentage: 75},
        {skill : 'mongoDB',percentage: 70},
        {skill : 'java',percentage: 90},
        {skill : 'C',percentage: 90},
        {skill : 'C++',percentage: 85},
        {skill : 'Python',percentage: 70},
        {skill : 'Vhdl',percentage: 85},
        {skill : 'SQl',percentage: 75},


        
    ]
    return (
        <div className="about-container">
                       
            <PageTitle ttl1={'about'} ttl2={"me"} ttl3={"resume"} />
            <section className="perso-info">
                
                <div className="info">
                    
                    <div className="about-list">
                        
                        <div className="row1">
                            <h3>personal infos</h3>
                        </div>
                        <img className="prof-pic" src={profPic} alt="profile pic" />
                        <div className="row2">
                        <ul>
                            {col1.map((el,id) =>
                                <li key={id}>
                                    <h2>{el}:&nbsp;</h2>
                                    <h2 className="info-list" >{col2[id]}</h2>
                                </li>
                            )}
                        </ul>
                        <ul>
                            {col3.map((el,id) =>
                                <li key={id}>
                                    <h2>{el}:&nbsp;</h2>
                                    <h2 className="info-list">{col4[id]}</h2>
                                </li>
                            )}
                        </ul>
                        </div>
                        <div className="row3">
                            <SpecialBtn content={'download CV'} iconClass={'fas fa-arrow-circle-down'} />
                        </div>
                        
                        
                    </div>
                    <div className="stats">
                        <div className="columns">
                            <div className="column">
                                <Box   value={'2'} title={'Award Won'} />
                            </div>
                            <div className="column">
                            <Box   value={'3+'} title={'years of experience'} />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                            <Box   value={'4+'} title={'Completed Projects'} />
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>

            <div  style={{ width :'40%', border:'1px solid grey' , margin:'30px auto', opacity: '0.6'}}></div>

            <section className="skills">
                <h3 className="sec-title">
                   my skills
                </h3>
                <div className="skills-list">
                     <div className="sk-el">
                         {
                             skills.map((el ,id )=>
                                 <div className="cir-100" key={id}>
                                     <CircularProgressBar percentage={el.percentage} />
                                     <p>{el.skill}</p>
                                 </div>
                             )
                         }
    
                     </div>           
                    
                    
                </div>
            </section>

            <div  style={{ width :'40%', border:'1px solid grey' , margin:'30px auto', opacity: '0.6'}}></div>

            <section className="exp-edu-container">
                <h3 className="sec-title">
                   experience & education
                </h3>
                <div class="columns is-desktop">
                    <div class="column">
                        
                        <ExperienceCard 
                                title={"Computer Engineer"} 
                                company={"Waha Industry"} 
                                period={"05/2021 - 08/2021"} 
                                description={"Perform periodic hardware analysis of computer hardware and software using available technology and testing tools. Respond to all computer-related issues and provide technical support to all staff members. Using the development plans and designs from other team members to build software and hardware. Build, test and modify product prototypes."}
                                
                            />
                        <ExperienceCard 
                                title={"CLUB Technical Project Manager"} 
                                company={"Inelectronic Student Club"} 
                                period={"2018 - 2020"} 
                                description={"Ensuring project time delivery, resource availability and allocation. Assist in the definition of project scope and objectives, and measure performance. Develop a detailed project plan to monitor and track progress. Manage changes to the project scope, project schedule and project costs. Report and escalate to management as needed. Mentoring students in workshops"}
                                
                            />    
                        <ExperienceCard 
                                title={"Electronic and Robotics Trainer"} 
                                company={"Heyday Training & Consulting"} 
                                period={"01-2019 - 04/2019"} 
                                description={"Schedule appropriate training sessions. Plan and implement an effective training curriculum. Oversee and direct workshops, individual training sessions, and lectures. Prepare hard copy training materials such as module summaries, videos, and presentations."}
                                
                            />
                            </div>
                    <div class="column"><ExperienceCard 
                                title={"Master's in Computer Engineering"} 
                                company={"Institute of Electrical and Electronic Engineering"} 
                                period={"2018 - 2020"} 
                                description={""}
                                
                            />
                            <ExperienceCard 
                                title={"Bachelor's in Electrical and Electronic Engineering"} 
                                company={"sonatrach"} 
                                period={"2015 - 2018"} 
                                description={""}
                                
                            />
                            <ExperienceCard 
                                title={"High School Diploma (Mathematics)"} 
                                company={"Bouhrin Cherif High shcool"} 
                                period={"2012 - 2015"} 
                                description={""}
                                
                            /></div>
                  
                </div>
            </section>            
        </div>
    )
}

export default About
 