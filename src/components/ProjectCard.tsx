import {Col} from "react-bootstrap"

interface Props{
    title: string;
    description:string;
    imgUrl: string;
    link: string;
}

function ProjectCard({title, description, imgUrl, link}: Props){
    const handleClick = (e: React.MouseEvent) => {
        window.location.href = link;
    };

    return <>
    <Col sm={6} md={4} className="justify-content-center projcard">
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className="blog-image-bx">
                <img src={imgUrl}/>
                <div className="overlay">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    </Col>
    </>
}
export default ProjectCard;