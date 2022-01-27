import './H1.css';

function H1(props) {
    let classes = props.className;

    classes += props.bold ? " fw-bold" : "";

    return (
        <h1 className={classes}>{props.children}</h1>
    );
}

export default H1;