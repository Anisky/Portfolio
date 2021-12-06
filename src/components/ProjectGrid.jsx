import React from 'react'
import './ProjectGrid.css'
import BioGardX from "../utils/bio-guarden.png"
import PrimRecruit from "../utils/primRecruit.PNG"
import qms1 from '../utils/qms-1.jpg';
import gard1 from '../utils/garduino.jpg';

import { openModal } from '../store/actions/projectActions'
import { useDispatch } from 'react-redux'


export const ProjectGrid = () => {
    
  const dispatch = useDispatch();

  

    return (
      <div className="prjs-grid">
           
        <div className="prj-wrap p p1 " onClick={() => dispatch(openModal(0))}>
          <img className=" p1" src={PrimRecruit} alt="pic" />
         
        </div>
        <div className="prj-wrap p p2" onClick={() => dispatch(openModal(1))}>
          <img src={BioGardX} alt="pic"  />
        </div>
        <div className="prj-wrap p p3 " onClick={() => dispatch(openModal(2))}>
          <img
            src={qms1}
            alt="pic"
          />
        </div>
        <div className="prj-wrap p p4" onClick={() => dispatch(openModal(3))}>
          <img
            src={gard1}
            alt="pic"
          />
        </div>
      </div>
    );
}
