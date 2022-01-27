import './NavbarItem.css';

function NavbarExternalLink(props) {
    return (
        <a href={props.href} className="navbar__item" target="_blank" rel='noreferrer'>{props.children}</a>
    );
}

export default NavbarExternalLink;