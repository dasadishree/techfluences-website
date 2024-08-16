import { Col, Container, Row } from "react-bootstrap"
import TechIcon from "../assets/TechIcon.webp"
import Socials from "./Socials";

function Footer(){

    return(
        <>
        <footer>
            <Container className="d-flex justify-content-center foot-bg">
                <Row className="align-item-center footer">
                    <Col sm={6}>
                        <div className="footer-left">
                            <div className="email-form">
                            <label>Sign Up For Our Newsletter</label>
                        <br></br>
                        <div className="submit-form">
                        <input placeholder="Email"></input>
                        <button type="submit" id="email-form-btn">OK</button>
                        </div>
                            </div>
                        <img src={TechIcon}/>
                        </div>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="footer-text">
                            <Socials id="footer-social"/>
                            <p>CopyRight 2024. All Rights Reserved. Techfluences</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    )
}

export default Footer;