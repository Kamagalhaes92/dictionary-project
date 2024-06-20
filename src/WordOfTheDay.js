import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from './Results';
import './WordOfTheDay.css';

export default function WordOfTheDay() {
    const [word, setWord] = useState(null);
    const [details, setDetails] = useState(null);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        fetchWordOfTheDay();
    }, []);

    const fetchWordOfTheDay = async () => {
        try {
            const response = await axios.get('https://random-word-api.herokuapp.com/word');
            const randomWord = response.data[0];
            const detailsResponse = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${randomWord}`);
            setWord(randomWord);
            setDetails(detailsResponse.data[0]);
        } catch (error) {
            console.error("Error fetching the word of the day or its details", error);
        }
    };

    return (
        <div className="WordOfTheDay">
            <h3>Word of the Day</h3>
            {word && <p className="brief-word">{word}</p>}
            {word && <button onClick={() => setExpanded(!expanded)}>Show {expanded ? 'Less' : 'More'}</button>}
            {expanded && details && word === details.word && <Results results={details} />}
        </div>
    );
}
