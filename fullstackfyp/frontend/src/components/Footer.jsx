import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaGithub ,
  FaLinkedin ,
  FaInstagram,
  FaFacebook ,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
        <a href="/">
          <img src="/logo.png" alt="logo" />
        </a>
        </div>
        <div>
          <h4>Support Address</h4>
          <ul>
            <li>188, New Muslim Town {"\n"}  Abu Bakar Block  Garden Town, Lahore, Punjab 54500 </li>
            <li>f20030055@orbit.edu.pk</li>
            <li>Reg #2020-GCUF-083323</li>
            <li>+92 3057378711 </li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li > <a href="/">
              Home
              </a>
            </li>

            <li > <a href="/jobs">
              Jobs
              </a>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>

{/* Developer Credits */}

<div >
          <h4>Developer Credits</h4>
          <ul>
            <li>Shaikh Abdul Rehman </li>
            <li>Nouman Khalid </li>
            <li>Sharoon Naeem </li>
          </ul>
        </div>


{/* Developer Credits */}

        <div>
          <h4>Contact Us </h4>
          <ul>
            <li>
              <Link to={"https://github.com/ShykhAbdull"} target="_blank" rel="noopener noreferrer">
                <span>
                  <FaGithub />
                </span>
                <span>GitHub </span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/shykh/"} target="_blank" rel="noopener noreferrer">
                <span>
                  <FaLinkedin  />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
            <Link to={"https://www.instagram.com/sh___y___kh/"} target="_blank" rel="noopener noreferrer">
                <span>
                  <FaInstagram />
                </span>
                <span>instagram</span>
              </Link>
            </li>
            <li>
            <Link to={"https://www.facebook.com/AbdullRocKs/"} target="_blank" rel="noopener noreferrer">
                <span>
                  <FaFacebook  />
                </span>
                <span>Facebook</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; 
        CopyRight 2024. All Rights Reserved By Orbit Job Portal.
      </div>
    </>
  );
};

export default Footer;
