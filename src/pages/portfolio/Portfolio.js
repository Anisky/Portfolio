import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../../components/Navbar'
import { PageTitle } from '../../components/PageTitle'
import { PrjModal } from '../../components/PrjModal'
import { ProjectGrid } from '../../components/ProjectGrid'
import { openModal } from '../../store/actions/projectActions'
import './Portfolio.css'

const Portfolio = () => {

    
    
    

    return (
        <div className="portfolio-container">
            <Navbar />
            <PageTitle ttl1={'my'} ttl2={'portfolio'} ttl3={'works'} />
            <PrjModal/>
            <ProjectGrid />
            
        </div>
    )
}

export default Portfolio
