import { Link } from 'react-router-dom';
import './LinkButton.css';

function LinkButton(props) {
    return (
        <Link to={props.href} className="linkButton">{props.children}</Link>
    );
}

export default LinkButton;