import React from "react";
import Synonyms from "./Synonyms";
import './Meaning.css';


export default function Meaning(props) {
  return (
      <div className="Meaning">
          <h3>{props.meaning.partOfSpeech}</h3>
          <ol style={{ listStyle: 'none', padding: 0 }}>
              {props.meaning.definitions.map(function (definition, index) {
                  return (
                      <li key={index}>
                          <div className="meaning-card">
                              <p>
                                  <strong>{index + 1}. Definition:</strong> {definition.definition}
                                  <br />
                                  {definition.example && (
                                      <div className="examples">
                                          <strong>Example:</strong> <em>{definition.example}</em>
                                          <br />
                                          <Synonyms synonyms={definition.synonyms} />
                                      </div>
                                  )}
                              </p>
                          </div>
                      </li>
                  );
              })}
          </ol>
      </div>
  );
}


