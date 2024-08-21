import { Row, Col, Container, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

function Projects() {
    const [active, setActive] = useState("General Tech");

    const projects = [
        {
            title: "CyberSecurity",
            description: "Here is a little info",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000139-0477b0477e/700/9.webp?ph=026eecf95c",
            category: "Coding",
            link: "https://techfluences.webnode.page/l/cybersecurity-basics/"
        },
        {
            title: "History of Coding",
            description: "Here is a little info",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000129-6eae36eae6/700/7.webp?ph=026eecf95c",
            category: "Coding",
            link: "https://example.com/project2"
        },
        {
            title: "Web Development",
            description: "Here is a little info",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000112-948799487e/700/5.webp?ph=026eecf95c",
            category: "Coding",
            link: "https://example.com/project3"
        },
        {
            title: "Basics of Coding",
            description: "Here is a little info",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000059-d3431d3433/700/blog%20cover%20templates%20%281%29.webp?ph=026eecf95c",
            category: "Coding",
            link: "https://example.com/project4"
        },
        {
            title: "History of Debugging",
            description: "Here is a little info",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000051-2f3262f32a/700/blog%20cover%20templates-1.webp?ph=026eecf95c",
            category: "General Tech",
            link: "https://example.com/project5"
        },
        {
            title: "CyberSecurity",
            description: "Here is a little info",
            imgUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000047-ba312ba316/700/blog%20cover%20templates.webp?ph=026eecf95c",
            category: "General Tech",
            link: "https://example.com/project6"
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
