import React from "react";

export default function Synonyms(props) {
    if (props.synonyms !== null) {
        return (
            <ul className="Synonyms">
            {props.synonyms.map(function (synonyms, index) {
                return <li key={index}>{synonyms}</li>;
            })}
            </ul>
        );
} else {
    return null;
}
}