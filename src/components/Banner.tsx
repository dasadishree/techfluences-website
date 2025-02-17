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

        return () => clearInterval(ticker);
    }, [text, isDelete]); // Removed loopNum, since its state changes are correctly managed within tick()

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

  const Timeline = () => {
  const events = [
    { date: '7/12/24', title: 'Start!', description: 'Techfluences officially started and we began planning what we want to do!' },
    { date: '7/15/24', title: 'Blog & Website Start', description: 'We began our weekly blogs and created our (old) website' },
    { date: '8/2/24', title: 'Project Spotlight Program', description: 'Created our Project Spotlight Program to showcase the work of young coders' },
    { date: '8/23/24', title: 'Tech Trivia Night', description: 'Collaborated with ScriptCrew to host Tech Trivia Night Event' },
    { date: '8/25/24', title: '501(c)(3) Nonprofit', description: 'Became a 501(c)(3) nonprofit organization under Hackclub HCB' },
    { date: '9/25/24', title: 'New updated website launched!', description: 'Launched our new website - coded by our team!' },
    { date: '12/15/24', title: 'Partnership With CodeCrafters', description: 'Help teach kids how to make their own projects through CodeCrafters\' guides & courses' },

];

  return (
    <div style={{ overflowX: "auto", width: "100%", padding: "10px 0", whiteSpace: "nowrap" }}>
      <div className="timeline">
        {events.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


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
            <Row>
            <div className="timeline-section" style={{marginTop:'0', padding:'0'}}>
                    <h3 className="my-4 text-center codecrafters-head" style={{marginBottom:'5px'}}>Timeline!</h3>
                    <p className="text-center" style={{marginTop: '5px', marginBottom: '10px'}}>See all we have accomplished in the past few months!</p>
                    <Timeline/>
                </div>
            </Row>
        </Container>
        </div>
    </section>
    </>
}

export default Banner;