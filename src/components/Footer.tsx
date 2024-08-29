import { Col, Container, Row } from "react-bootstrap"
import TechIcon from "../assets/TechIcon.webp"
import Socials from "./Socials";
import Email from "./Email"

function Footer(){

    return(
        <>
        <footer>
            <Container className="d-flex justify-content-center foot-bg">
                <Row className="align-item-center footer">
                    <Col sm={6} className="mt-5">
                        <div className="footer-left">
                            <Email />
                        <img className="d-none d-xs-block d-sm-none d-md-none d-lg-block"  src={TechIcon}/>
                        </div>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="footer-text mt-5">
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