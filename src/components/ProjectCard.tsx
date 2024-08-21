import {Col} from "react-bootstrap"

interface Props{
    title: string;
    description:string;
    imgUrl: string;
    link: string;
}

function ProjectCard({title, description, imgUrl, link}: Props){
    return <>
    <Col sm={6} md={4} className="d-flex justify-content-center">
        <a href={link}><div className="blog-image-bx">
            <img src={imgUrl}/>
            <div className="overlay">
                <p>{title}</p>
            </div>
        </div></a>
    </Col>
    </>
}
export default ProjectCard;