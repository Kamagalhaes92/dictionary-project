import React, { useState, useEffect } from 'react';
import './App.css';
import Dictionary from './Dictionary';
import WordOfTheDay from './WordOfTheDay';

export default function App() {
    const [showWordOfTheDay, setShowWordOfTheDay] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const handleSearch = () => {
        setShowWordOfTheDay(false);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    }, [darkMode]);

    return (
        <div className="App">
            <header className="App-header">
                WORDWAVE
                <label className="switch">
                    <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                    <span className="slider"></span>
                </label>
            </header>
            <div className="main-content">
                <div className="vertical-menu">
                    <div className="vertical-line-container">
                        <div className="vertical-line"></div>
                        <div className="menu-item">
                            <a href="#main">MAIN</a>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="headline-container">
                        <h2 className='headline'>Revolutionize <br/> Your Vocabulary <br/>with WordWave</h2>
                    </div>
                    <main>
                        <Dictionary onSearch={handleSearch} />
                        {showWordOfTheDay && <WordOfTheDay />}
                    </main>
                    <footer className='text-center'>
                        Coded by Karine Magalhaes.
                    </footer>
                </div>
            </div>
        </div>
    );
}
