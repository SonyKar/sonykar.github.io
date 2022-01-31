import './ActionButton.css';

function ActionButton(props) {
    let classes = 'actionButton ';

    if (props.className !== undefined) {
        classes += props.className;
    }

    return (
        <button className={classes} onClick={props.onClick}>{props.children}</button>
    );
}

export default ActionButton;