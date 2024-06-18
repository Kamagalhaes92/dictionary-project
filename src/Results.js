import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import './Results.css';
import Typewriter from "typewriter-effect";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <section className="WordSection">
                    <div className="Word">
                        <h2 className="Typewriter">
                            <Typewriter
                                options={{
                                    strings: [props.results.word],
                                    autoStart: true,
                                    delay: 85,
                                    deleteSpeed: 1000000,
                                    loop: false,
                                    cursor: ""
                                }}
                            />
                        </h2>
                    </div>
                    <div className="Phonetics">
                        {props.results.phonetics.map(function (phonetic, index) {
                            return <Phonetic key={index} phonetic={phonetic} />;
                        })}
                    </div>
                </section>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <section key={index}>
                            <Meaning meaning={meaning} />
                        </section>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}