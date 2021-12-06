import React from 'react'
import { Navbar } from '../../components/Navbar';
import { PageTitle } from '../../components/PageTitle';
import { SpecialBtn } from '../../components/SpecialBtn';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact-container">
            
            <PageTitle ttl1={'get in'} ttl2 ={'touch'} ttl3={'contact'} />

            <div className="body-container">
                <div className="p-info-container">
                    <h3>Don't be shy !</h3>

                    <p className="para-info-container">Feel free to get in touch with me.I am always open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.    
                    </p>
                <div className="s-container">
                    <span class="icon is-large">
                        <i className="fas fa-2x fa-map-marked-alt" style={{color: "var(--orange)"}}></i>
                    </span>
                    <div className="s-content">
                        <h4>ADDRESS POINT</h4>
                        <p>
                            Diera, Dubai , United States of Emirates 
                        </p>

                    </div>
                    </div>

                    <div className="s-container">
                        <span class="icon is-large">
                            <i className="fas fa-2x fa-envelope" style={{color: "var(--orange)"}}></i>
                        </span>
                    <div className="s-content">
                        <h4>MAIL ME</h4>
                        <p>
                            <a href="mailto:anisslimatni@hotmail.com" style={{color: 'white'}}>anisslimatni@hotmail.com</a>
                        </p>

                    </div>
                    </div> <div className="s-container">
                    <span class="icon is-large">
                        <i className="fas fa-2x fa-map-marked-alt" style={{color: "var(--orange)"}}></i>
                    </span>
                    <div className="s-content">
                        <h4>CALL ME</h4>
                        <p>
                        <a href="tel:+971525736347" style={{color: 'white'}}>+971525736347</a>
                        </p>

                    </div>
                    </div> 
                     
                <div className="social-media">
                    <a href='https://www.linkedin.com/in/anis-slimatni/'>
                    <span className="icon is-large">
                        <i className="fab fa-lg fa-linkedin-in"  ></i>
                        </span>
                    </a>
                    <a href='https://wa.me/971525736347'>
                    <span className="icon is-large">
                            <i className="fab fa-whatsapp"  ></i>
                        </span>
                    </a>     
                    <a href='www.facebook.com'>
                    <span className="icon is-large">
                            <i className="fab fa-github " ></i>
                        </span>
                    </a>    
                       
                </div>

                </div>


                <div className="form-container">
                    <form action="#">
                        <div className="field">
                            <div className="info">
                                <div className="control">
                                        <input className="input is-rounded " type="text" placeholder="YOUR NAME" required/>
                                        {/* <p class="help is-danger">This email is invalid</p> */}
                                </div>
                                <div className="control">
                                        <input className="input is-rounded " type="eamil" placeholder="YOUR EMAIL" required />
                                        {/* <p class="help is-danger">This email is invalid</p> */}
                            </div>
                            </div>
                           
                            <div className="control">
                                <input className="input is-rounded " type="text" placeholder="YOUR SUBJECT" required />
                            </div>
                            <div className="control">    
                                <textarea className="textarea " placeholder="YOUR MESSAGE" required></textarea>

                            </div>
                        </div>
                        <SpecialBtn content={'send message'} iconClass={"fas fa-paper-plane"} />
                        


                    </form>
                </div>
            </div>
            
        </div>
    )
}
export default Contact ;
