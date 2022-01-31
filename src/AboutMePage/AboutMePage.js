import { Fragment } from 'react';

import Container from '../containers/Container';
import H1 from '../UI/Headers/H1';

import me from '../assets/me.jpg';
import './AboutMePage.css';
import ActionButton from '../UI/Buttons/ActionButton';

function AboutMePage() {
    const downloadCVHandler = () => {
        console.log("CV downloaded");
    };

    return (
        <Fragment>
            <main>
                <Container className="aboutMe">
                    <div className='aboutMe__info'>
                        <div className='col-6'>
                            <H1 className="aboutMe__header">About <br /> Me</H1>
                            <img src={me} alt="" className='w-100' />
                        </div>
                        <div className='col-6 aboutMe__shortReview'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec eget congue odio. Nam ut mauris non metus tristique aliquet.
                                Pellentesque congue, erat eget fringilla commodo, dui ligula
                            </p>
                            <p>
                                Mauris quis tristique purus. Morbi pretium sapien eu tortor efficitur
                                lobortis. Morbi suscipit sapien ac sagittis laoreet.
                            </p>
                            <ActionButton className="cvButton" onClick={downloadCVHandler}>Download CV</ActionButton>
                        </div>
                    </div>
                    <div className='col-12 aboutMe__getInTouch'>
                        <H1 bold>Get in Touch</H1>
                        <h2>Contact</h2>
                        <p><a href="mailto:sa.caraganciu@gmail.com">sa.caraganciu@gmail.com</a></p>
                        <p><a href="tel:+40785804972">tel: +40 785 804 972</a></p>
                    </div>
                </Container>
            </main>
        </Fragment>
    );
}

export default AboutMePage;