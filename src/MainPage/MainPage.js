import { Fragment } from 'react';

import Container from '../containers/Container';
import H1 from '../UI/Headers/H1';
import LinkButton from '../UI/Buttons/LinkButton';

import me from '../assets/me.jpg'
import './MainPage.css';

function MainPage() {
    return (
        <Fragment>
            <main>
                <Container className="mainPage">
                    <div className='col-6 mainPage__image'>
                        <img src={me} alt='me' className='w-100' />
                    </div>
                    <div className='col-6 mainPage__info'>
                        <H1 className="mainPage__header" bold>Alexandrin <br /> Caraganciu</H1>
                        <div className='mainPage__buttons'>
                            <p><LinkButton href="/projects">View My Work &#62;&#62;</LinkButton></p>
                            <p><LinkButton href="#">About Me &#62;&#62;</LinkButton></p>
                        </div>
                    </div>
                </Container>
            </main>
        </Fragment>
    );
}

export default MainPage;