import {Col} from "react-bootstrap"

interface Props{
    title: string;
    description:string;
    imgUrl: any;
}

function ProjectCard({title, description, imgUrl}: Props){
    return <>
    <Col sm={6} md={4} className="d-flex justify-content-center">
        <div className="blog-image-bx">
            <img src={imgUrl}/>
            <div className="overlay">
                <p>{title}</p>
            </div>
        </div>
    </Col>
    </>
}
export default ProjectCard;