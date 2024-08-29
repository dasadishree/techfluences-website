import { Container, Row, Col } from "react-bootstrap"; 
import {ArrowRightCircle} from "react-bootstrap-icons"; 
import { useState, useEffect} from "react";
import CompIcon from "../assets/CompIcon.png"

function Banner(){

    const wordArray = ["Innovate", "Inspire", "Influence"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text, delta, isDelete]); // Removed loopNum, since its state changes are correctly managed within tick()

    const tick = () => {
        let i = loopNum % wordArray.length;
        let fullText = wordArray[i];
        let updatedText = isDelete ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        setDelta(300 - Math.random() * 100); 

        // Transition to deleting
        if (!isDelete && updatedText === fullText) {
            setTimeout(() => {
                setIsDelete(true);
            }, period); // Wait for period before starting to delete
        } 

        // Switch back to typing after deletion
        else if (isDelete && updatedText === '') {
            setIsDelete(false);
            setLoopNum(loopNum + 1);
        }
    };
    const instaLink = 'https://www.instagram.com/techfluences?igsh=MTBvcDR3MG05aGxrbw=='


    return <>
    <section className="banner" id="home">
        <div className="banner__container">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <div className="banner__content">
                    <h3><span className="tagline">Welcome to Techfluences</span></h3>
                    <h1 className="header">{`Learn To`}<span className="wrap">{text}</span></h1>
                    <p className="subhead">We are a youth organization dedicated to fostering a passion for technology and computer science in individuals of all ages. <br/><br/>Please check out our website/blog, and follow & support us at @techfluences on Instagram to hear about future events! </p>
                    <button className="learnmore" onClick={()=>{window.location.href = instaLink}}>Follow Us</button>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={5} className="d-flex justify-content-center">
                    <img src={CompIcon} className="fluid banner__image"></img>
                </Col>
            </Row>
        </Container>
        </div>
    </section>
    </>
}

export default Banner;