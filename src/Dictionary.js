import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary({ onSearch }) {
    const [keyword, setKeyword] = useState(null);
    const [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        onSearch();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <h2 className="description">What word do you want to look up?</h2>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <div className="hint">
                suggest words: sunset, wine, yoga, plant...
            </div>
            <Results results={results} />
        </div>
    );
}
