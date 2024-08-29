import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from './TeamCard';

function TeamPage() {
    const teamData = [
        { name: 'Adishree Das', position: 'PRESIDENT/FOUNDER', img: '' },
        { name: 'Maya Itskovich', position: 'CO-VICE PRESIDENT', img: '' },
        { name: 'Amber Poon', position: 'CO-VICE PRESIDENT', img: '' },
        { name: 'Genesis Caballero', position: 'SECRETARY', img: '' },
        { name: 'Maide Ahsen Yucel', position: 'WRITING DIRECTOR', img: '' },
        { name: 'Hani Mahdi', position: 'EXECUTIVE WEB DEVELOPER', img: '' },
        { name: 'Teja Umamaheswar', position: 'PUBLIC RELATIONS', img: '' },
        { name: 'Hannah Jacob', position: 'PUBLIC RELATIONS', img: '' },
    ];

    const blogWriterData = [
        {name: "Ritika Singh", img: ""},
        {name: "Nina D'Ambrosio", img: ""},
        {name: "Aiza Tahir", img: ""},
        {name: "Tanvi Madisetti", img: ""},
        {name: "Emily Chen", img: ""},
        {name: "Tiffany Goh", img: ""},
        {name: "Jack Lau", img: ""},
        {name: "Liyana Yonas", img: ""},
        {name: "Niharika Koduru", img: ""},
        {name: "Sila Dag", img: ""},
        {name: "Victoria Santiago", img: ""},
        {name: "Angelina Tan", img: ""},
        {name: "Hannah Pak", img: ""},
        {name: "Diya Chordiya", img: ""}
    ];
    
    const spotlightData = [
        { name: "Nadja Salome-Diaz" },
        { name: "Emely L." },
        { name: "Nina D'Ambrosio" },
        { name: "Aadhya Deveshi" },
        { name: "Manishita Das" },
        { name: "Adishree Das" },
        { name: "Matthew Liu" },
        { name: "Vivia" },
        { name: "Alice Do" },
        { name: "Livia Zhao" },
        { name: "Maisha Supritee Chowdhury" },
        { name: "Harvey Tseng" },
        { name: "Naman Nagelia" },
        { name: "Hamzah Deejay" },
        { name: "Evan Shoemaker" },
        { name: "Wanzie Li" }
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
                            img=''
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
                            img=''
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
