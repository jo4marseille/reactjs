import React from 'react';

const widgetBlue = (props) => {
    const {element} = props
    return (
        <div>
            <h1 className={"eventtitle"}>{element.nom.libelleFr}</h1>
            <div className={"mt-3 eventwidget1"}>
                <div className={"widget-part1"}></div>
                <div className={"widget-part2"}></div>
            </div>
        </div>
    );
};

export default widgetBlue;