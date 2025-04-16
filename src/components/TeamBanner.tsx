import { Container, Row, Col } from "react-bootstrap"; 
import { useState, useEffect} from "react";
import CompIcon from "../assets/CompIcon.png"

function TeamBanner(){

    return <>
    <section className="banner" id="home">
        <div className="banner__container">
        <Container>
            <Row className="align-items-center">
                <Col xs={12}>
                    <div className="banner__content">
                    <h3><span className="tagline">Get To Know Our Team</span></h3>
                    <p className="subhead text-center">
  Meet the passionate team behind Techfluences! We are a dynamic group dedicated to sparking interest in technology and computer science across all ages. Each of us brings unique skills and a shared commitment to inspiring the next generation of tech enthusiasts.
</p>
                    <div className="button-container">
                        <button className="learnmore projectSubmit" onClick={() => { window.location.href = "https://forms.gle/GAA4wxmkSiHKrELY6" }}>Join Our Team</button>
                    </div>
                     </div>
                </Col>
            </Row>
        </Container>
        </div>
    </section>
    </>
}

export default TeamBanner;