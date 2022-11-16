import React from 'react';
import Anecdote from "./Anecdote";

const WidgetStory = () => {
    return (
        <div className="widgetStory">
            <h3 className="anecdotetitle">LES ANECDOTES</h3>
            <Anecdote/>

        </div>
    );
};

export default WidgetStory;