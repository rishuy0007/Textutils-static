import React from "react";
// import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" style={{color: props.mode === "red" ? "white" :( props.mode === "blue" ? "white" : (props.mode === "dark" ? "white" : "black"))}} href="#">
            Textutils
          </a>
          {/* <Link className="navbar-brand" style={{color: props.mode === "red" ? "white" :( props.mode === "blue" ? "white" : (props.mode === "dark" ? "white" : "black"))}} to="/">
            Textutils
          </Link> */}
          <div
            className="collapse navbar-collapse justify-between"
            id="navbarSupportedContent" style={{color: props.mode === "red" ? "white" :( props.mode === "blue" ? "white" : (props.mode === "dark" ? "white" : "black"))}}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <a className="nav-link active" aria-current="page" style={{color: props.mode === "red" ? "white" :( props.mode === "blue" ? "white" : (props.mode === "dark" ? "white" : "black"))}} href="#">
                  Home
                </a>
              </li>


              {/* <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" style={{color: props.mode === "red" ? "white" :( props.mode === "blue" ? "white" : (props.mode === "dark" ? "white" : "black"))}} to="/">
                  Home
                </Link>
              </li> */}


              <li className="nav-item" >
                <a className="nav-link" style={{color: props.mode === "red" ? "white" :( props.mode === "blue" ? "white" : (props.mode === "dark" ? "white" : "black"))}} href="/about">
                  About
                </a>
              </li>


              {/* <li className="nav-item" >
                <Link className="nav-link" style={{color: props.mode === "red" ? "white" :( props.mode === "blue" ? "white" : (props.mode === "dark" ? "white" : "black"))}} to="/about">
                  About
                </Link>
              </li> */}
            </ul>

            <ul className="navbar-nav me-auto mb-lg-0 ">
              <li>
                <div
                  className={`form-check form-switch text-${
                    props.mode === "light" ? "red" : "light"
                  }`}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onClick={props.toggleModeRed}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"

                  >
                    RedMode
                  </label>
                </div>
              </li>
              <li>
                <div
                  className={`form-check form-switch text-${
                    props.mode === "light" ? "blue" : "light"
                  }`}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onClick={props.toggleModeBlue}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    BlueMode
                  </label>
                </div>
              </li>
             
              
             
              <li>
                <div
                  className={`form-check form-switch text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onClick={props.toggleMode}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    DarkMode
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
