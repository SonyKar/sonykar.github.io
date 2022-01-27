import './LinkButton.css';

function LinkButton(props) {
    return (
        <a href={props.href} className="linkButton">{props.children}</a>
    );
}

export default LinkButton;