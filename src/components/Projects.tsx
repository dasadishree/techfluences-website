import { Row, Col, Container, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import AIGlowUp from "../assets/ai.jpg"
import WomenTech from "../assets/womenintech.jpg"
import GraceHopper from "../assets/gracehopper.jpg"
import DataPrivacy from "../assets/dataprivacy.jpg"
import Reshma from "../assets/Reshma.png"
import EthicalHacking from "../assets/ethicalhacking.png"
function Projects() {
    const [active, setActive] = useState("General Tech");

    const projects = [
        {
            title: "Cybersecurity Catastrophe",
            description: "Discusses a major cybersecurity incident and its impact on technology and global connectivity.",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000047-ba312ba316/700/blog%20cover%20templates.webp?ph=026eecf95c",
            category: "General Tech",
            link: "/blog-pages/cybersecurity-catastrophe.html"
        },
        {
            title: "History of Coding",
            description: "Reviews the evolution of coding and how modern tools and resources have made it more accessible.",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000129-6eae36eae6/700/7.webp?ph=026eecf95c",
            category: "Coding",
            link: "/blog-pages/history-of-coding.html"
        },
        {
            title: "Web Dev Basics",
            description: "Provides a quick guide on web development, comparing it to the components of a painting.",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000112-948799487e/700/5.webp?ph=026eecf95c",
            category: "Coding",
            link: "/blog-pages/web-dev-basics.html"
        },
        {
            title: "History of Debugging",
            description: "Explores the origins and development of debugging, starting from a notable incident in 1947.",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000051-2f3262f32a/700/blog%20cover%20templates-1.webp?ph=026eecf95c",
            category: "Coding",
            link: "/blog-pages/history-of-debugging.html"
        },
        {
            title: "Cybersecurity Basics",
            description: "Covers the fundamentals of cybersecurity and its importance in protecting technology.",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000139-0477b0477e/700/9.webp?ph=026eecf95c",
            category: "General Tech",
            link: "/blog-pages/cybersecurity-basics.html"
        },
        {
            title: "The Ultimate Glow-Up of Artificial Intelligence",
            description: "Describes different types of artificial intellignece and how it has evolved and been used",
            imgUrl: AIGlowUp,
            category: "AI",
            link: "/blog-pages/ai-glow-up.html"
        },
        {
            title: "History of Women in Tech",
            description: "Introduces important historical women and their contributions to tech", 
            imgUrl: WomenTech,
            category: "General Tech",
            link: "/blog-pages/women-in-tech.html"
        },
        {
            title: "Grace Hopper",
            description: "Biography of Grace Hopper", 
            imgUrl: GraceHopper,
            category: "General Tech",
            link: "/blog-pages/grace-hopper.html"
        },
        {
            title: "The Importance of Data Privacy",
            description: "Covers what data privacy is and why it is important", 
            imgUrl: DataPrivacy,
            category: "General Tech",
            link: "/blog-pages/data-privacy.html"
        },
        {
            title: "Spotlight on Reshma Saujani",
            description: "Spotlights Reshma Saujani, CEO of Girls Who Code", 
            imgUrl: Reshma,
            category: "General Tech",
            link: "/blog-pages/reshma-saujani.html"
        },
        {
            title: "The Double-Edged Sword of Ethical Hacking",
            description: "Briefly describes ethical hacking and its role", 
            imgUrl: EthicalHacking,
            category: "General Tech",
            link: "/blog-pages/ethical-hacking.html"
        }
    ];
    

    const filteredProjects = projects.filter(project => project.category === active);

    let handleActive = (item: string) => {
        return item === active ? "activeL" : "test";
    };

    return (
        <section className="blog" id="blogs">
            <Container>
                <Row>
                    <Col>
                        <h2>Blogs</h2>
                        <p>Here is a list of our featured blogs.</p>

                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link className={handleActive("General Tech")} eventKey="first" onClick={() => setActive("General Tech")}>
                                        General Tech
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={handleActive("AI")} eventKey="second" onClick={() => setActive("AI")}>
                                        Machine Learning
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={handleActive("Coding")} eventKey="third" onClick={() => setActive("Coding")}>
                                        Coding
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {filteredProjects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {filteredProjects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {filteredProjects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Projects;
