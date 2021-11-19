import React from 'react'
import './About.css'
import { PageTitle } from '../../components/PageTitle'
import { Navbar } from '../../components/Navbar'

const About = () => {
    const col1 = ['first Name','age','freelance','phone','skype']
    const col2 = ['last name','nationality','address','email','languages']
    return (
        <div className="about-container">
            <Navbar />            
            <PageTitle ttl1={'about'} ttl2={"me"} ttl3={"resume"} />
            <section className="perso-info">
                <div className="info">
                    <div className="col1">
                        <ul>
                            {col1.map((el,id) =>
                                <li key={id}>
                                    <h2>{el}: </h2>
                                    <h2>{col2[id]}</h2>
                                </li>
                            )}
                        </ul>

                    </div>
                    <div className="col2">

                    </div>
                </div>
            </section>



        </div>
    )
}

export default About
 