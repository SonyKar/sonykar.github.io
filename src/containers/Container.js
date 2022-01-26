import { React } from 'react';

import './Container.css';

function Container(props) {
    let classes = 'container ' + props.className;

    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Container;