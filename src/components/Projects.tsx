import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AIGlowUp from '../assets/ai.jpg';
import WomenTech from '../assets/womenintech.jpg';
import GraceHopper from '../assets/gracehopper.jpg';
import DataPrivacy from '../assets/dataprivacy.jpg';
import Reshma from '../assets/Reshma.png';
import EthicalHacking from '../assets/ethicalhacking.png';

function Projects() {
    const projects = [
        {
            title: "Cybersecurity Catastrophe",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000047-ba312ba316/700/blog%20cover%20templates.webp?ph=026eecf95c",
            link: "/blog-pages/cybersecurity-catastrophe.html"
        },
        {
            title: "History of Coding",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000129-6eae36eae6/700/7.webp?ph=026eecf95c",
            link: "/blog-pages/history-of-coding.html"
        },
        {
            title: "Web Dev Basics",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000112-948799487e/700/5.webp?ph=026eecf95c",
            link: "/blog-pages/web-dev-basics.html"
        },
        {
            title: "History of Debugging",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000051-2f3262f32a/700/blog%20cover%20templates-1.webp?ph=026eecf95c",
            link: "/blog-pages/history-of-debugging.html"
        },
        {
            title: "Cybersecurity Basics",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000139-0477b0477e/700/9.webp?ph=026eecf95c",
            link: "/blog-pages/cybersecurity-basics.html"
        },
        {
            title: "The Ultimate Glow-Up of Artificial Intelligence",
            imgUrl: AIGlowUp,
            link: "/blog-pages/ai-glow-up.html"
        },
        {
            title: "History of Women in Tech",
            imgUrl: WomenTech,
            link: "/blog-pages/women-in-tech.html"
        },
        {
            title: "Grace Hopper",
            imgUrl: GraceHopper,
            link: "/blog-pages/grace-hopper.html"
        },
        {
            title: "The Importance of Data Privacy",
            imgUrl: DataPrivacy,
            link: "/blog-pages/data-privacy.html"
        },
        {
            title: "Spotlight on Reshma Saujani",
            imgUrl: Reshma,
            link: "/blog-pages/reshma-saujani.html"
        },
        {
            title: "The Double-Edged Sword of Ethical Hacking",
            imgUrl: EthicalHacking,
            link: "/blog-pages/ethical-hacking.html"
        }
    ];

    return (
        <section className="blog" id="blogs">
            <Container>
                <Row>
                    <Col>
                        <h2>Blogs</h2>
                        <p>Here is a list of our featured blogs.</p>
                    </Col>
                </Row>
                <Row>
                    {projects.map((project, index) => (
                        <Col key={index} md={6} lg={4} className="mb-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Card className="blog-image-bx" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                                    <Card.Img className="card-image" variant="top" src={project.imgUrl} alt={project.title} />
                                    <Card.Body>
                                        <Card.Title style={{ color: 'white', fontSize: '2em', fontWeight: 'bold' }}>{project.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Projects;
