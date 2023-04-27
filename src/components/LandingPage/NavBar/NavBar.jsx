import { useState } from "react";
// import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import {Link} from "react-router-dom";

export const NavBar = () => {
  const activeLink = ({ isActive }) => isActive ? `${style["m-link"]} ${style["activeLink"]}` : `${style["m-link"]}`
  const activeLinkBtnP = ({ isActive }) => isActive ? `${style["m-link"]} ${style["m-button-p"]} ${style["activeLink"]}` : `${style["m-link"]} ${style["m-button-p"]}`
  const activeLinkBtnS = ({ isActive }) => isActive ? `${style["m-link"]} ${style["m-button-s"]} ${style["activeLink"]}` : `${style["m-link"]} ${style["m-button-s"]}`
  const [display, setDisplay] = useState(`${style["m"]}`);
  const [background, setBackground] = useState("transparent");
  
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    (prevScrollpos < currentScrollPos) ? setDisplay(`${style["m"]} ${style["scrollUp"]}`) : setDisplay(`${style["m"]} ${style["scrollDown"]}`)
    prevScrollpos = currentScrollPos;
    (currentScrollPos > 30) ? setBackground("#42547C") : setBackground("transparent")
  }
  return (
    <div className="App">
      <ul className={display} style = {{background}}>
        <div className={`${style["logo"]}`}></div>
        <li className={`${style["m-item"]}`}><Link to={"/"}  className={activeLink} >Write a Review</Link></li>
        <li className={`${style["m-item"]}`}><Link to={"/"}  className={activeLink} >For Startups</Link></li>
        <li className={`${style["m-item"]}`}><Link to={"/Blogs"}  className={activeLink} >Blogs</Link></li>
        <li className={`${style["m-item"]}`}><Link to={"/"}  className={activeLink} >FAQ's</Link></li>
        <li className={`${style["m-item"]}`}><Link to={"/"}  className={activeLinkBtnP} >Join</Link></li>
        <li className={`${style["m-item"]}`}><Link to={"/"}  className={activeLinkBtnS} >Login</Link></li>
      </ul>
    </div>
  );
}
