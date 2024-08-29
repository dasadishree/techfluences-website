interface Props {
    name: string;
    position: string;
    img: string;
}

function TeamCard({ name, position, img }: Props) {
    return (
        <div className="card-user">
            <div className="card-border-top"></div>
            <div className="img">
                <img src={img} />
            </div>
            <span>{name}</span>
            <p className="job">{position}</p>
        </div>
    );
}

export default TeamCard;
