import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import {default as ReactSelect} from "react-select";

import {components} from "react-select";



export default function Multiselect() {
    const Option = (props) => {
        return (
            <div>
                <components.Option {...props}>
                    <input
                        type="checkbox"
                        checked={props.isSelected}
                        onChange={() => null}
                    />{" "}
                    <label>{props.label}</label>
                </components.Option>
            </div>
        );
    };

/*    const state = {
        optionSelected: null
    };*/

    const sportCategories = [
        {
            id: 1,
            label: "sports aquatiques",
            image: ""
        },
        {
            id: 2,
            label: "tir à l’arc",
            image: ""
        },
        {
            id: 3,
            label: "athlétisme",
            image: ""
        },
        {
            "id": 4,
            "label": "badminton",
            image: ""   
        },
        {
            id: 5,
            label: "basketball",
            image: ""
        },
        {
            id: 6,
            label: "boxe",
            image: ""
        },
        {
            id: 7,
            label: "breaking",
            image: ""
        },
        {
            id: 8,
            label: "canoë",
            image: ""
        },
        {
            id: 9,
            label: "cyclisme",
            image: ""
        },
        {
            id: 10,
            label: "escrime",
            image: ""
        },
        {
            id: 11,
            label: "football",
            image: ""
        },
        {
            id: 12,
            label: "golf",
            image: ""
        },
        {
            id: 13,
            label: "gymnastique",
            image: ""
        },
        {
            id: 14,
            label: "handball",
            image: ""
        },
        {
            id: 15,
            label: "hockey sur gazon",
            image: ""
        },
        {
            id: 16,
            label: "judo",
            image: ""
        },
        {
            id: 17,
            label: "pentathlon",
            image: ""
        },
        {
            id: 18,
            label: "aviron",
            image: ""
        },
        {
            id: 19,
            label: "rugby",
            image: ""
        },
        {
            id: 20,
            label: "voile",
            image: ""
        },
        {
            id: 21,
            label: "tir",
            image: ""
        },
        {
            id: 22,
            label: "skateboard",
            image: ""
        },
        {
            id: 23,
            label: "escalade",
            image: ""
        },
        {
            id: 24,
            label: "surf",
            image: ""
        },
        {
            id: 25,
            label: "tennis de table",
            image: ""
        },
        {
            id: 26,
            label: "taekwondo",
            image: ""
        },
        {
            id: 27,
            label: "tennis",
            image: ""
        },
        {
            id: 28,
            label: "volleyball",
            image: ""
        },
        {
            id: 29,
            label: "haltérophilie",
            image: ""
        },
        {
            id: 30,
            label: "lutte",
            image: ""
        }
    ]

    const [state, setState] = React.useState([]);


    let handleChange = (selected) => {
        console.log(selected)
        let handle = state
        handle.push(selected[0].id);
        setState(handle)
        console.log(state)
    };

    return (
        <span
            class="d-inline-block"
            data-toggle="popover"
            data-trigger="focus"
            data-content="Please selecet account(s)"
        >
        <ReactSelect
            options={sportCategories}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{
                Option
            }}
            onChange={handleChange}
            allowSelectAll={true}
            value={state}
        />
      </span>
    );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<Multiselect/>, rootElement);