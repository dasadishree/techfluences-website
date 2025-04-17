import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import TechIcon from '../assets/TechIcon.webp'
import Socials from './Socials';

function NavBar() {
    const onUpdateActiveLink = (item:string)=>{
        setActiveLink(item)
    }
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const handleActive = (item:string) => {
        return item === activeLink ? "active navbar-link" : "navbar-link";
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="index.html"><img src={TechIcon}/>TECHFLUENCES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="blogpage.html" className={handleActive("blogs")} onClick={()=>{onUpdateActiveLink("blogs")}} style={{ marginRight: '20px' }}>Blog</Nav.Link>
            <Nav.Link href="spotlight.html" className={handleActive("spot")} onClick={()=>{onUpdateActiveLink("spot")}} style={{ marginRight: '20px' }}>Spotlight</Nav.Link>
            <Nav.Link href="/tutorial.html" className={handleActive("tutorial")} onClick={()=>{onUpdateActiveLink("tutorial")}} style={{ marginRight: '20px' }}>Tutorials</Nav.Link>
            <Nav.Link href="team.html" className={handleActive("sliders")} onClick={()=>{onUpdateActiveLink("sliders")}} style={{ marginRight: '20px' }}>Team</Nav.Link>
            <Nav.Link href="resources.html" className={handleActive("resources")} onClick={()=>{onUpdateActiveLink("resources")}}>Resources</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <Socials id=""/>        
          </span>
          <button className="navbar-link btn-contact" onClick={()=>{window.location.href = "#bottom"}}>Contact Us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;