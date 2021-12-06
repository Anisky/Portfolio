import React from "react";
import "./PrjModal.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/actions/projectActions";


export const PrjModal = () => {
  const root = useSelector((state) => state.project);
  const modalId = root.currentModalId;
  const project = root.projects[modalId];
  const dispatch = useDispatch();

  return (
    <div className={`modal ${root.modalIsActive ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <button
          className="delete is-left"
          aria-label="close"
          onClick={() => dispatch(closeModal())}
        />
        <header className="modal-card-head">
          <p className="modal-card-title has-text-centered">{project.project}</p>
        </header>
        <section className="modal-card-body">
          <div className="infoModal">
            <div className="title-modal">
              <ul className="info-list-modal">
                <li>
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa fa-file-text"></i>
                    </span>
                    <span>
                      Title: <b> {project.title}</b>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa fa-file-text"></i>
                    </span>
                    <span>
                      Languages: <b> {project.languages}</b>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa fa-file-text"></i>
                    </span>
                    <span>
                      Client: <b>{project.client} </b>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="icon-text modal-link">
                    <span className="icon">
                      <i className="fa fa-file-text"></i>
                    </span>
                    <span >
                      Preview: <b> <a className="modal-link" href={'https://'+project.preview}>{project.preview}</a></b>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="modal-desc">
              <h3 className="">Description:</h3>
              <p>
                {project.description}
              </p>
            </div>
            <div className="modal-pics">
        
               {
                 project.pics.map((e,i) =>
                    <img key={i} className=" p1" src={e} alt="pic" />
                  )
               }  
                      
               
                        
               
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
