import { Row, Col, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Unkown from '../assets/unkown.jpeg';
import Adishree from '../assets/IMG_0687.jpg';
import Maya from '../assets/IMG_0688.jpg';
import Teja from '../assets/IMG_0672.jpg';
import Hannah from '../assets/IMG_0671.jpg';
import Hani from '../assets/IMG_0693.jpg';
import Amber from '../assets/Amber.jpg';
import Emily from '../assets/IMG_0677.jpg'
import Genesis from '../assets/genesis.jpg'

function Slider() {
    const responsive = {
        superLargeDesktop: {
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

    const teamData = [
        { name: 'Adishree Das', position: 'PRESIDENT/FOUNDER', img: Adishree },
        { name: 'Maya Itskovich', position: 'CO-VICE PRESIDENT', img: Maya },
        { name: 'Amber Poon', position: 'CO-VICE PRESIDENT', img: Amber },
        { name: 'Genesis Caballero', position: 'SECRETARY', img: Genesis },
        { name: 'Maide Ahsen Yucel', position: 'WRITING DIRECTOR', img: Unkown },
        { name: 'Hani Mahdi', position: 'EXECUTIVE WEB DEVELOPER', img: Hani },
        { name: 'Teja Umamaheswar', position: 'PUBLIC RELATIONS', img: Teja },
        { name: 'Hannah Jacob', position: 'PUBLIC RELATIONS', img: Hannah },
        { name: 'Emily Chen', position: 'PUBLIC RELATIONS', img: Emily}
    ];

    return (
        <section className="slider" id="sliders">
            <Container>
                <Row>
                    <Col>
                        <div className="slider-bx">
                            <h2>Meet the Team</h2>
                            <p>Meet our most essential team members.</p>
                            <Carousel responsive={responsive} infinite={true} className="slider-slider">
                                {teamData.map((member, index) => (
                                    <div className="item" key={index}>
                                        <img src={member.img} alt={member.name} />
                                        <h3>{member.name}</h3>
                                        <h5>{member.position}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Slider;
