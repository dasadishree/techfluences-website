import {Col} from "react-bootstrap"

interface Props{
    title: string;
    description:string;
    imgUrl: string;
    link: string;
}

function ProjectCard({title, description, imgUrl, link}: Props){
    return <>
    <Col sm={6} md={4} className="justify-content-center projcard">
        <a href={link} target="_blank" rel="noopener noreferrer" ><div className="blog-image-bx">
            <img src={imgUrl}/>
            <div className="overlay">
                <p>{title}</p>
            </div>
        </div></a>
    </Col>
    </>
}
export default ProjectCard;