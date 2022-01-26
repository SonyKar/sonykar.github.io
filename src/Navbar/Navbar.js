import { React, Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css';
import NavbarItem from './NavbarItem';

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
            <nav className='navbar__desktop'>
                <div>
                    <NavbarItem href="#" logo>Alexandrin Caraganciu</NavbarItem>
                    <NavbarItem href="#">Projects</NavbarItem>
                    <NavbarItem href="#">About me</NavbarItem>
                </div>
                <div>
                    <NavbarItem href="#">Github</NavbarItem>
                    <NavbarItem href="#">Facebook</NavbarItem>
                    <NavbarItem href="#">LinkedIn</NavbarItem>
                </div>
            </nav>
            <a href="mailto:sa.caraganciu@gmail.com" className="myEmail">sa.caraganciu@gmail.com</a>

            <FontAwesomeIcon icon={faBars} onClick={navbarToggleHandler} className='burgerButton' />

            <nav className={opened}>
                <div>
                    <FontAwesomeIcon icon={faTimes} onClick={navbarToggleHandler} className='burgerButton' />
                    <NavbarItem href="#" logo>Alexandrin Caraganciu</NavbarItem>
                    <NavbarItem href="#">Projects</NavbarItem>
                    <NavbarItem href="#">About me</NavbarItem>
                </div>
                <div>
                    <NavbarItem href="#">Github</NavbarItem>
                    <NavbarItem href="#">Facebook</NavbarItem>
                    <NavbarItem href="#">LinkedIn</NavbarItem>
                </div>
            </nav>
            <div className='backdrop' onClick={navbarToggleHandler}></div>
        </Fragment >
    );
}

export default Navbar;