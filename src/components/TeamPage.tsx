import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from './TeamCard';

// Import images
import Adishree from '../assets/IMG_0687.jpg';
import Maya from '../assets/IMG_0688.jpg';
import Teja from '../assets/IMG_0672.jpg';
import Hannah from '../assets/IMG_0671.jpg';
import Ritika from '../assets/IMG_0692.jpg';
import Nina from '../assets/IMG_0681.jpg';
import Aiza from '../assets/IMG_0684.jpg';
import Tanvi from '../assets/IMG_0683.jpg';
import Tiffany from '../assets/IMG_0682.jpg';
import Jack from '../assets/IMG_0680.jpg';
import Liyana from '../assets/IMG_0679.jpg';
import Sila from '../assets/IMG_0676.jpg';
import Angelina from '../assets/IMG_0678.jpg';
import HannahP from '../assets/IMG_0686.jpg';
import Diya from '../assets/IMG_0675.jpg';
import Hani from '../assets/IMG_0693.jpg';
import unkown from '../assets/unkown.jpeg';

function TeamPage() {
    const teamData = [
        { name: 'Adishree Das', position: 'PRESIDENT/FOUNDER', img: Adishree },
        { name: 'Maya Itskovich', position: 'CO-VICE PRESIDENT', img: Maya },
        { name: 'Amber Poon', position: 'CO-VICE PRESIDENT', img: unkown }, // No image available
        { name: 'Genesis Caballero', position: 'SECRETARY', img: unkown }, // No image available
        { name: 'Maide Ahsen Yucel', position: 'WRITING DIRECTOR', img: unkown }, // No image available
        { name: 'Hani Mahdi', position: 'EXECUTIVE WEB DEVELOPER', img: Hani }, // No image available
        { name: 'Teja Umamaheswar', position: 'PUBLIC RELATIONS', img: Teja },
        { name: 'Hannah Jacob', position: 'PUBLIC RELATIONS', img: Hannah },
    ];

    const blogWriterData = [
        { name: 'Ritika Singh', img: Ritika },
        { name: 'Nina D\'Ambrosio', img: Nina },
        { name: 'Aiza Tahir', img: Aiza },
        { name: 'Tanvi Madisetti', img: Tanvi },
        { name: 'Tiffany Goh', img: Tiffany },
        { name: 'Jack Lau', img: Jack },
        { name: 'Liyana Yonas', img: Liyana },
        { name: 'Sila Dag', img: Sila },
        { name: 'Angelina Tan', img: Angelina },
        { name: 'Hannah Pak', img: HannahP },
        { name: 'Diya Chordiya', img: Diya },
    ];

    const spotlightData = [
        { name: "Nadja Salome-Diaz", img: '' },
        { name: "Emely L.", img: '' },
        { name: "Nina D'Ambrosio", img: Nina },
        { name: "Aadhya Deveshi", img: '' },
        { name: "Manishita Das", img: Adishree },
        { name: "Matthew Liu", img: '' },
        { name: "Vivia", img: '' },
        { name: "Alice Do", img: '' },
        { name: "Livia Zhao", img: '' },
        { name: "Maisha Supritee Chowdhury", img: '' },
        { name: "Harvey Tseng", img: '' },
        { name: "Naman Nagelia", img: '' },
        { name: "Hamzah Deejay", img: '' },
        { name: "Evan Shoemaker", img: '' },
        { name: "Wanzie Li", img: '' }
    ];

    return (
        <Container className='max-width'>
            <Row className="team-grid justify-content-center align-items-center gradient-bg">
                <h1>Executive Team</h1>
                {teamData.map((item, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <TeamCard 
                            name={item.name} 
                            position={item.position} 
                            img={item.img}
                        />
                    </Col>
                ))}
            </Row>
            <Row className="team-grid justify-content-center align-items-center">
                <h1>Blog Writers</h1>
                {blogWriterData.map((item, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <TeamCard 
                            name={item.name}
                            position='BLOG WRITER'
                            img={item.img}
                        />
                    </Col>
                ))}
            </Row>
            <Row className='gradient-bg align-items-center p-5'>
                <h1 className='text-center'>Spotlighters</h1>
                <Col xs={12}>
                    <div className="spotlight mt-5">
                        <ul>
                            {spotlightData.map((item, index) => (
                                <li key={index}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TeamPage;
