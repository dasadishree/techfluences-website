import { Row, Col, Container} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Unkown from "../assets/unkown.jpeg"

function Slider(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return <>

    <section className="slider" id="sliders">
      <Container>
        <Row>
          <Col>
          <div className="slider-bx">
            <h2>Meet the Team</h2>
            <p>Here is our crew that make everythin possible.</p>
            <Carousel responsive={responsive} infinite={true} className="slider-slider">
              <div className="item">
                <img src={Unkown}/>
                <h3>John Doe</h3>
                <h5>CEO</h5>
              </div>
              <div className="item">
                <img src={Unkown}/>
                <h3>John Doe</h3>
                <h5>Treasurer</h5>
              </div>
              <div className="item">
                <img src={Unkown}/>
                <h3>John Doe</h3>
                <h5>Social Media Rep</h5>
              </div>
              <div className="item">
                <img src={Unkown}/>
                <h3>John Doe</h3> 
                <h5>Public Relations</h5>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
}

export default Slider;