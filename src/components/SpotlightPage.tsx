import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SpotlightPage() {
    // Define the project data with image URLs and links
    const projects = [
        { name: "Signal Lost", author: ["Estella Gu"], imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/2b25a173607174dc946c4a579ae6dbfd314bdfc7_image.png", link: "https://themagicfrog.itch.io/signal-lost"},
        { name: "Mama's Jiaoziria", author: ["Lubaba Nawla", "Issac Liu"], imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/8c00dbe0e8266105dfb9ed1cc72e9098125e03df_image.png", link: "https://camuise.itch.io/mamas-jiaoziria"},
        { name: "Trench of Shadows", author: ["Emma Borghi"], imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/2056cf61322060e63fa66c482aba38af44ccd906_image.png", link: "https://fralas.github.io/Trench-of-shadows-website/homepage.html"},
        { name: "Cocytus", author: ["Sarah Ngai"], imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/835c4be5b93908838faf5db37f958dfab5af5f36_image.png", link: "https://idksarah.itch.io/cocytus"},
        { name: "Salle D'evasion", author: ["Reem Khalifa"], imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/9684c15f4bab3df44fb2eeb50bcf8b5070d0d5b5_image.png", link: "https://reemkhalifa.itch.io/salledevasion" },
        { name: "Frosty Delights", author: ["Adishree Das"], imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/08e9d7ae1738e591986a6ae8a124f61b850f8511_screenshot_2025-04-16_at_9.45.18___am__2_.png", link: "https://github.com/dasadishree/frostydelights" },
        { name: "Skyglider", author: ["Adishree Das"], imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/69048322697fcd65e9b44ea7a88bfdf9a5a11513_screenshot_2025-04-16_at_9.39.06___am__2_.png", link: "https://github.com/dasadishree/counterspell-skyglider" },
        { name: "Planetopia", author: ["Lubaba Nawla, Adishree Das, Avni Harsh"], imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/14253cf721b38951e37f5694ade4698e98109825_img_7128.jpg", link: "https://github.com/lubabanawla/Planetopia" },
        { name: "Voctab", author: ["Adishree Das"], imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/bdda1bd13afbb0568470a9d5c14bbbfb7b895c2c_love.png", link: "https://github.com/dasadishree/voctab" },
        { name: "AI Browser Companion", author: ["Aadil Noufal"], imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/a8a09a8e7172eaa7195bb796702e8705ad99520e_screenshot_2025-03-15_201405_-_aadil_noufal.png", link: "https://github.com/aadilnoufal/AI_browser_extention/tree/main" },
        { name: "Personal Site", author: ["Adishree Das"], imageUrl: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/831a02804575662fd6c0c5e1048b2a692cd570df_me__1_.png", link: "https://dasadishree.me" },
        { name: "Water The Plant!", author: ["Fahmida Maliha Khan"], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000173-f19b6f19b8/450/plant%20-%20Maliha%20Khan.webp?ph=026eecf95c", link: "https://collectiongame-maliha-k.replit.app/" },
        { name: "Mission Earth 2.0", author: ["Fahmida Maliha Khan"], imageUrl: "https://026eecf95c.cbaul-cdnwnd.com/b58983c34de9d768e1d335200398a7a7/200000171-8581c8581f/700/MISSION.webp?ph=026eecf95c", link: "https://v-3-the-impersonator-of-elklark-wanzie-l-chimerablues.replit.app/" },
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

    return (
        <>
            <Container>
                <div className="spotlight-section">
                    <h2 className="my-4 text-center spotlight-head">Spotlight</h2>
                    <h3 className='text-center spotlight-info'>A program for coders to have a place to share their projects, support and connect with others, and be inspired to code more!</h3>
                    
                    <p className='more-text text-md-start text-center'>To add your project to our Spotlight, please complete the form below! These projects can be past projects, (ex: from past hackathons you've attended), current projects, or works in progress. You can even work on your projects in a team.</p>
                    <p><center>Note: Many of the older projects are not accessible anymore due to Replit problems!</center></p>
                    <center>
                    <button className="learnmore projectSubmit" onClick={() => { window.location.href = "https://forms.gle/o8ScS7H7LY1DpVED6" }}>Submit</button>
                    </center>
                </div>

            {/* New information box */}
            <div className="codecrafters-section">
                    <h3 className="my-4 text-center codecrafters-head">Our Partner - CodeCrafters!</h3>
                    <p className="text-center codecrafters-info">
                        Want to create your own project? CodeCrafters has many <a className="codecrafters-link" href="https://github.com/codecrafters-io/build-your-own-x/"><strong><em>step-by-step guides</em></strong></a> for you!
                        <br></br>Purchase a <a className="codecrafters-link" href="https://app.codecrafters.io/join?via=techfluences"><strong><em>CodeCrafters membership </em></strong></a>to gain access to programming courses and build complex projects.
                    </p>
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
            </Container>
        </>
    );
}

export default SpotlightPage;
