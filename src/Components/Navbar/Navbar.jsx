import { useEffect, useState, useRef } from "react";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const toggleNav = useRef();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const handleClick = () => {
    if (!showNav) {
      toggleNav.current.style.right = "0";
      setShowNav(!showNav);
    } else {
      toggleNav.current.style.right = "-210px";
      setShowNav(!showNav);
    }
  };

  return (
    <nav className={`container ${sticky ? styles.darknav : ""}`}>
      <img className={styles.logo} src={logo} alt="logo" />
      <ul ref={toggleNav}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        onClick={handleClick}
        className={styles.menuIcon}
        src={menu_icon}
        alt=""
      />
    </nav>
  );
}
