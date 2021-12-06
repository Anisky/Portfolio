import React from 'react'
import { Navbar } from '../../components/Navbar'
import { PageTitle } from '../../components/PageTitle'
import { PrjModal } from '../../components/PrjModal'
import { ProjectGrid } from '../../components/ProjectGrid'
import './Portfolio.css'

const Portfolio = () => {

    
    
    

    return (
        <div className="portfolio-container">
         
            <PageTitle ttl1={'my'} ttl2={'portfolio'} ttl3={'works'} />
            <PrjModal/>
            <ProjectGrid />
            
        </div>
    )
}

export default Portfolio
