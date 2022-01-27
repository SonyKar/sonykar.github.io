import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css';
import NavbarItem from './NavbarItem';
import NavbarExternalLink from './NavbarExternalLink';

function Navbar() {
    const [navbarOpened, setNavbarOpened] = useState(false);

    let opened = 'navbar__burger';
    if (navbarOpened) {
        opened += ' opened';
    }

    let navbarToggleHandler = () => {
        setNavbarOpened(prevState => !prevState);
    }

    return (
        <Fragment>
            <nav className={'navbar__desktop ' + opened}>
                <div>
                    <FontAwesomeIcon icon={faTimes} onClick={navbarToggleHandler} className='burgerButton' />
                    <NavbarItem href="/" logo>Alexandrin Caraganciu</NavbarItem>
                    <NavbarItem href="/projects">Projects</NavbarItem>
                    <NavbarItem href="/about">About me</NavbarItem>
                </div>
                <div>
                    <NavbarExternalLink href="https://github.com/SonyKar">Github</NavbarExternalLink>
                    <NavbarExternalLink href="https://www.facebook.com/sa.caraganciu/">Facebook</NavbarExternalLink>
                    {/* <NavbarExternalLink href="#">LinkedIn</NavbarExternalLink> */}
                </div>
            </nav>
            <a href="mailto:sa.caraganciu@gmail.com" className="myEmail">sa.caraganciu@gmail.com</a>

            <FontAwesomeIcon icon={faBars} onClick={navbarToggleHandler} className='burgerButton' />
            <div className='backdrop' onClick={navbarToggleHandler}></div>
        </Fragment >
    );
}

export default Navbar;