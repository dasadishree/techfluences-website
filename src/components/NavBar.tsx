import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import TechIcon from '../assets/TechIcon.webp'
import Socials from './Socials';

function NavBar() {
    const onUpdateActiveLink = (item:string)=>{
        setActiveLink(item)
        console.log(activeLink)
    }
    const handleActive = (item: string)=>{
        if (item == activeLink){
            return "active navbar-link"
        } else {
            return "navbar-link"
        }
    }
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)
    useEffect(()=>{
        const onScroll = ()=>{
            if (window.scrollY > 50){
                setScrolled(true)
            } else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return window.removeEventListener("scroll", onScroll)
        }, [])

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home"><img src={TechIcon}/>TECHFLUENCES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="index.html" className={handleActive("home")} onClick={()=>{onUpdateActiveLink("home")}} >About</Nav.Link>
            <Nav.Link href="blogpage.html" className={handleActive("blogs")} onClick={()=>{onUpdateActiveLink("blogs")}} >Blog</Nav.Link>
            <Nav.Link href="#" className={handleActive("")} onClick={()=>{onUpdateActiveLink("")}} >Spotlight</Nav.Link>
            <Nav.Link href="index.html" className={handleActive("sliders")} onClick={()=>{onUpdateActiveLink("sliders")}} >Team</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <Socials id=""/>
              
          </span>
          <button className="navbar-link btn-contact" onClick={()=>{window.location.href = "#contact"}}>Contact Us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;