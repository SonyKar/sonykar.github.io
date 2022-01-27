import { Link } from 'react-router-dom';

import './NavbarItem.css';

function NavbarItem(props) {
    let classes = "navbar__item";

    classes += props.logo ? " navbar__logo" : "";

    return (
        <Link to={props.href} className={classes}>{props.children}</Link>
    );
}

export default NavbarItem;