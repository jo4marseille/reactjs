import React from 'react';
import Anecdote from "./Anecdote";
import QuizWidget from "./QuizWidget";
import Podium from "./Podium";

const WidgetQuizz = () => {
    return (
        <div className="widgetQuizz">
            <h3 className="titlepodium" >PODIUM</h3>
            <Podium/>
        </div>
    );
};

export default WidgetQuizz;