import { Fragment } from 'react';

import Container from '../containers/Container';
import H1 from '../UI/Headers/H1';
import ProjectCard from './ProjectCard';

import project1 from '../assets/project1.png';
import './ProjectsPage.css';

function ProjectsPage() {
    return (
        <Fragment>
            <main>
                <Container className="projectsPage">
                    <H1>My <br /> Portofolio</H1>
                    <div className='projectsPage__projectList'>
                        <ProjectCard
                            title='tittatmachine.com'
                            type='website'
                            image={project1}
                            href="https://www.google.com"
                        />
                        <ProjectCard
                            title='tittatmachine.com'
                            type='website'
                            image={project1}
                            href="https://www.google.com"
                        />
                        <ProjectCard
                            title='tittatmachine.com'
                            type='website'
                            image={project1}
                            href="https://www.google.com"
                        />
                        <ProjectCard
                            title='tittatmachine.com'
                            type='website'
                            image={project1}
                            href="https://www.google.com"
                        />
                    </div>
                </Container>
            </main>
        </Fragment>
    );
}

export default ProjectsPage;