import { React } from 'react';

import './NavbarItem.css';

function NavbarItem(props) {
    let classes = "navbar__item";

    classes += props.logo ? " navbar__logo" : "";

    return (
        <a href={props.href} className={classes}>{props.children}</a>
    );
}

export default NavbarItem;