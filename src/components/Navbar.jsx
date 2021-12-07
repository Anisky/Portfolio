import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { navSelect } from '../store/actions/navabarAction';
import './Navbar.css'
export const Navbar = () => {

    const dispatch = useDispatch();
    const selected = useSelector(state => state.navabar.selected)
    return (
      <div className="navbar-m">
        <ul>
          <li className={""}>
            <Link
              to="/potfolio"
              className={selected === 0 ? "nav-active" : ""}
              onClick={() => dispatch(navSelect(0))}
            >
              <i className="fas fa-home"></i>
              <h1>
                Home <i className="fas fa-home"></i>
              </h1>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={selected === 1 ? "nav-active" : ""}
              onClick={() => dispatch(navSelect(1))}
            >
              <i className="fas fa-user"></i>
              <h1>
                about <i className="fas fa-user"></i>
              </h1>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={selected === 2 ? "nav-active" : ""}
              onClick={() => dispatch(navSelect(2))}
            >
              <i className="fas fa-briefcase"></i>
              <h1>
                portfolio <i className="fas fa-briefcase"></i>
              </h1>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={selected === 3 ? "nav-active" : ""}
              onClick={() => dispatch(navSelect(3))}
            >
              <i className="fas fa-envelope-open"></i>
              <h1>
                contact <i className="fas fa-envelope-open"></i>
              </h1>
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className={selected === 4 ? "nav-active" : ""}
              onClick={() => dispatch(navSelect(4))}
            >
              <i className="fab fa-microblog"></i>
              <h1>
                blog <i className="fab fa-microblog"></i>{" "}
              </h1>
            </Link>
          </li>
        </ul>
      </div>
    );
}
