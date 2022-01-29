import './ProjectCard.css';

function ProjectCard(props) {
    const projectClickHandler = () => {
        window.open(props.href, '_blank').focus();
    };

    return (
        <article className='projectCard col-6' onClick={projectClickHandler}>
            <img src={props.image} alt="" />
            <div className='projectCard__mask'>
                <div className='text-center'>
                    <h1 className='projectCard__title'>{props.title}</h1>
                    <span className='projectCard__type'>{props.type}</span>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;