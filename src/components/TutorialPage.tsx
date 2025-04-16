import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import valentineImage from '../assets/valentine.png';

function TutorialPage() {
    const tutorials = [
        {
            title: 'Simple Valentine\'s Day Website',
            level: 'Beginner',
            link: 'valentine.html',
            imageUrl: valentineImage
        }
    ];

    return (
        <div className="blog" style={{ minHeight: '100vh' }}>
            <Container>
                <div className="spotlight-section">
                    <h2 className="my-4 text-center spotlight-head">Tutorials</h2>
                    <h3 className='text-center spotlight-info'>Learn new skills and expand your knowledge with our comprehensive tutorials!</h3>
                    
                    <p className='more-text text-md-start text-center'>Our tutorials are designed to help you learn at your own pace. Whether you're a beginner or looking to advance your skills, we have something for everyone.</p>
                </div>

                <Row>
                    {tutorials.map((tutorial, index) => (
                        <Col key={index} md={6} lg={4} className="mb-4">
                            <a href={tutorial.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Card className="blog-image-bx" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                                    <Card.Img className="card-image" variant="top" src={tutorial.imageUrl} alt={tutorial.title} />
                                    <Card.Body>
                                        <Card.Title style={{ color: 'white', fontSize: '2em', fontWeight: 'bold' }}>{tutorial.title}</Card.Title>
                                        <Card.Text style={{ color: 'white' }}>
                                            <div className="tutorial-level" style={{ color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '5px 15px', borderRadius: '20px', display: 'inline-block' }}>{tutorial.level}</div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default TutorialPage; 