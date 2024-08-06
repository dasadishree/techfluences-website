import {Row, Col, Container, Nav, Tab} from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import { useState } from "react"

function Projects(){
    const [active, setActive] = useState("General Tech")
    let blogs = [
        {
            title:"Blog 1",
            description:"Here is a little info",
            imgUrl:"",
        },
        {
            title:"Blog 2",
            description:"Here is a little info",
            imgUrl: "",
        },
        {
            title:"Blog 3",
            description:"Here is a little info",
            imgUrl:"",
        },
        {
            title:"Blog 4",
            description:"Here is a little info",
            imgUrl:"",
        },
        {
            title:"Blog 5",
            description:"Here is a little info",
            imgUrl:"",
        },
        {
            title:"Blog 6",
            description:"Here is a little info",
            imgUrl:"",
        }
    ]
    let handleActive = (item: string)=>{
        if(item === active){
            return("activeL")
        } else{
            return("test")
        }
    }

    return <>
    <section className="blog" id="blogs">
        <Container>
            <Row>
                <Col>
                <h2>Blogs</h2>
                <p>Here is a list of our featured blogs.</p>
                
                <Tab.Container id="blogs-tab" defaultActiveKey="first" >
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                    <Nav.Link className={handleActive("General Tech")} eventKey="first" onClick={()=>{
                        setActive("General Tech")
                    }}>General Tech</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className={handleActive("AI")} eventKey="second"onClick={()=>{
                        setActive("AI")
                    }}>Machine Learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className={handleActive("coding")} eventKey="third"onClick={()=>{
                        setActive("coding")
                    }}>Coding</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {blogs.map((blog, index)=>{
                                return(<ProjectCard key={index} {...blog}/>)})}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                            {blogs.map((blog, index)=>{
                                return(<ProjectCard key={index} {...blog}/>)})}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                            {blogs.map((blog, index)=>{
                                return(<ProjectCard key={index} {...blog}/>)})}
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
    </>
}

export default Projects;