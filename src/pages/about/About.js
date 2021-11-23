import React from 'react'
import './About.css'
import { PageTitle } from '../../components/PageTitle'
import { Navbar } from '../../components/Navbar'
import { SpecialBtn } from '../../components/SpecialBtn'
import { Box } from '../../components/Box'
import { CircularProgressBar } from '../../components/CircularProgressBar'

const About = () => {
    const col1 = ['first Name','age','freelance','phone','skype'];
    const col2 = ['Anis','25 years','available','+2136573896','aniskysky'];
    const col3 = ['last Name', 'nationality', 'address', 'email', 'languages'];
    const col4 = ['Slimatni', 'Algerian', 'dubai, UAE', 'anisslimatni@hotmail.com', 'English, Arabic, Frensh'];

    
    return (
        <div className="about-container">
            <Navbar />            
            <PageTitle ttl1={'about'} ttl2={"me"} ttl3={"resume"} />
            <section className="perso-info">
                <div className="info">
                    <div className="about-list">
                        <div className="row1">
                            <h3>personal infos</h3>
                        </div>
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
                                <Box   value={'12+'} title={'years of experience'} />
                            </div>
                            <div className="column">
                            <Box   value={'12+'} title={'years of experience'} />
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                            <Box   value={'12+'} title={'years of experience'} />
                            </div>
                            <div className="column">
                            <Box   value={'12+'} title={'years of experience'} />
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
                         <div className="cir-100">
                            <CircularProgressBar percentage={25} />   
                            <p>HTML</p>
                         </div>
                         <div className="cir-100">
                            <CircularProgressBar percentage={25} />   
                            <p>HTML</p>
                         </div>
                         <div className="cir-100">
                            <CircularProgressBar percentage={25} />   
                            <p>HTML</p>
                         </div>
                         <div className="cir-100">
                            <CircularProgressBar percentage={25} />   
                            <p>HTML</p>
                         </div>
                         <div className="cir-100">
                            <CircularProgressBar percentage={25} />   
                            <p>HTML</p>
                         </div>
                         <div className="cir-100">
                            <CircularProgressBar percentage={25} />   
                            <p>HTML</p>
                         </div>
                         <div className="cir-100">
                            <CircularProgressBar percentage={25} />   
                            <p>HTML</p>
                         </div>
                         <div className="cir-100">
                            <CircularProgressBar percentage={25} />   
                            <p>HTML</p>
                         </div>
                         <div className="cir-100">
                            <CircularProgressBar percentage={25} />   
                            <p>HTML</p>
                         </div>
                         <div className="cir-100">
                            <CircularProgressBar percentage={25} />   
                            <p>HTML</p>
                         </div>
                         <div className="cir-100">
                            <CircularProgressBar percentage={25} />   
                            <p>HTML</p>
                         </div>

                            
                     </div>           
                    
                    
                </div>
            </section>                        


        </div>
    )
}

export default About
 