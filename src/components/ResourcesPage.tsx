import { hasSubscribers } from 'diagnostics_channel';
import { describe } from 'node:test';
import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

function ResourcesPage() {
    // Define hackathons data
    const hackathons = [
        { 
            name: "Lovelace", 
            location: "Charlotte, North Carolina", 
            date: "April 26th, 2025",
            hasTravelGrants: false,
            link: "https://lovelace-hackclub.glitch.me/",
            logo: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/2b2d4860cb38f67d8d02d2d74e4bac9168254f99_lovellace.png", 
            description: "For girls and gender minorities in tech",
            isLogoCircular: false 
        },
        { 
            name: "HackUPC", 
            location: "Barcelona, Spain", 
            date: "May 2nd - 4th, 2025",
            hasTravelGrants: true,
            link: "https://hackupc.com/",
            logo: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/40de07f728aeacdc89ee227a5f73271c424611f5_upc.png", 
            isLogoCircular: false 
        },
        {
            name: "DesignVerse at UCR",
            location: "Riverside, California",
            date: "May 10th - 11th, 2025",
            hasTravelGrants: false,
            link: "https://www.designverseucr.org/",
            logo: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/5df78da36a147e111ef34bef3d790eaaadc42ea5_image.png",
            description: "A Design-A-Thon to create a prototype for a design product (like an app or website)",
            isLogoCircular: false
        },
        {
            name: "JAMHacks 9",
            location: "Waterloo, Canada",
            date: "May 17th - 18th, 2025", 
            hasTravelGrants: false,
            link: "https://www.jamhacks.ca/",
            logo: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/6784d3d7f99d45a25f2d426e91e2481e62055b10_image.png",
            isLogoCircular: true
        },
        {
            name: "Hack Puebla",
            location: "Puebla, Mexico",
            date: "June 14th - 15th, 2025",
            hasTravelGrants: false,
            link: "https://hackpue.com/",
            logo: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/be65915a917af56d57641c5432a9066d919d6d58_image.png",
            isLogoCircular: false

        }
    ];

    return (
        <>
            <Container>
                <div className="spotlight-section">
                    <h2 className="my-4 text-center spotlight-head">Resources</h2>
                    <h3 className='text-center spotlight-info'>Many different external resources for you to learn more about coding and tech!</h3>
                </div>

                <div className="hackathons-section">
                    <h2 className="my-4 text-center spotlight-head">HACKATHONS FOR HIGHSCHOOLERS</h2>
                    <Row>
                        {hackathons.map((hackathon, index) => (
                            <Col key={index} md={6} lg={4} className="mb-4">
                                <a href={hackathon.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <Card style={{ 
                                        background: 'linear-gradient(135deg, #e6f3ff 0%, #b3d9ff 100%)',
                                        border: 'none',
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                    }}>
                                        <Card.Body style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div style={{ flex: 1 }}>
                                                <Card.Title style={{ 
                                                    color: '#003366',
                                                    textDecoration: 'underline wavy',
                                                    marginBottom: '15px'
                                                }}>{hackathon.name}</Card.Title>
                                                <Card.Text>
                                                    <div className="hackathon-info" style={{ color: '#003366' }}>
                                                        <p><strong>Location:</strong> {hackathon.location}</p>
                                                        <p><strong>Date:</strong> {hackathon.date}</p>
                                                        {hackathon.description && (
                                                            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>{hackathon.description}</p>
                                                        )}
                                                        {hackathon.hasTravelGrants && (
                                                            <Badge bg="info" className="travel-grant-badge" style={{ 
                                                                background: 'linear-gradient(135deg, #4da6ff 0%, #0066cc 100%)',
                                                                border: 'none'
                                                            }}>Travel Grants Available</Badge>
                                                        )}
                                                    </div>
                                                </Card.Text>
                                            </div>
                                            {hackathon.logo && (
                                                <div style={{ 
                                                    width: '120px', 
                                                    height: '120px', 
                                                    borderRadius: hackathon.isLogoCircular ? '50%' : '0',
                                                    overflow: 'hidden',
                                                    marginLeft: '15px',
                                                    flexShrink: 0
                                                }}>
                                                    <img 
                                                        src={hackathon.logo} 
                                                        alt={`${hackathon.name} logo`}
                                                        style={{ 
                                                            width: '100%', 
                                                            height: '100%', 
                                                            objectFit: 'contain' 
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default ResourcesPage; 