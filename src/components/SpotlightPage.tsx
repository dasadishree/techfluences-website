import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SpotlightPage() {
    // Define the project data with image URLs and links
    const projects = [
        { name: "The Impersonator of Elklark", author: ["Wanzie Li"], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000157-5f2275f229/700/ElkLark%20-%20Wanzie.webp?ph=026eecf95c", link: "https://v-3-the-impersonator-of-elklark-wanzie-l-chimerablues.replit.app/" },
        { name: "Ruby Dashboard", author: ["Maisha Supritee Chowdhury", "Harvey Tseng", "Naman Nagelia", "Hamzah Deejay", "Evan Shoemaker"], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000155-107c5107c8/700/RUBY%20DASHBOARD.webp?ph=026eecf95c", link: "https://ruby-frontend-five.vercel.app/" },
        { name: "A Light In The Forest", author: ["Livia Zhao"], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000151-a74cea74d1/700/IMG_8264%20-%20Livia%20Zhao.webp?ph=026eecf95c", link: "https://a-light-in-the-forest.replit.app/" },
        { name: "Grue", author: ["Alice Do"], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000149-b18bcb18be/Screenshot%202024-08-20%20at%2011.13.36%20PM%20-%20Alice%20Do.webp?ph=026eecf95c", link: "https://grue-yurinationrise.replit.app" },
        { name: "Ambien", author: ["Vivia"], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000153-aec5faec60/700/AMBIEN-7.webp?ph=026eecf95c", link: "https://play-ambien.replit.app/" },
        { name: "Pantry Tracker", author: ["Matthew Liu"], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000115-012e6012e7/700/PANTRY%20TRACKER.webp?ph=026eecf95c", link: "https://github.com/matthewliu8/pantry-tracker" },
        { name: "FlickFlow", author: ["Manishita Das", "Adishree Das"], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000105-8eac28eac5/700/Untitled%20design%20%281%29-4.webp?ph=026eecf95c", link: "https://github.com/manishitadas/scroller" },
        { name: "Hope Tac Toe", author: ["Aadhya Deveshi"], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000101-52bbb52bbe/700/Untitled%20design%20%284%29.webp?ph=026eecf95c", link: "https://hope-tac-toe.replit.app/" },
        { name: "Personal Website", author: ["Nina D'Ambrosio"], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000095-51edb51ede/700/Untitled%20design%20%283%29.webp?ph=026eecf95c", link: "https://ninadambros.io/" },
        { name: "Restoration of Light", author: ["Nadja Salome-Diaz", "Emely L."], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000093-51be651be9/700/Untitled%20design%20%282%29.webp?ph=026eecf95c", link: "https://restoration-of-light-nadja-emely.replit.app/" }
    ];

    return (<>
           <Container>
            <div className="spotlight-section">
            <h2 className="my-4 text-center spotlight-head">Spotlight</h2>
            <h3 className='text-center spotlight-info'>A program for coders to have a place to share their projects, support and connect with others, and be inspired to code more! </h3>
            <p className='more-text text-md-start text-center'>If you want to add your project to our Spotlight, please complete the form below! These projects can be past projects, (ex: from past hackathons you've attended), current projects, or works in progress. You can even work on your projects in a team.</p>
            <button className="learnmore projectSubmit" onClick={()=>{window.location.href = "https://forms.gle/o8ScS7H7LY1DpVED6"}}>Submit</button>

            </div>
            <Row>
                {projects.map((project, index) => (
                    <Col key={index} md={6} lg={4} className="mb-4">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <Card>
                                {/* Display the project image */}
                                <Card.Img className="card-image" variant="top" src={project.imageUrl} alt={project.name} />
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>
                                        {/* Display authors */}
                                        {project.author.join(', ')}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container></>
    );
}

export default SpotlightPage;
