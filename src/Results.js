import React from "react";
import Meaning from "./Meaning";

import './Results.css';
import Typewriter from "typewriter-effect";


export default function Results(props){
    if (props.results) {
        return (
          <div className="Results">
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
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        );
      } else {
        return null;
      }
    }

