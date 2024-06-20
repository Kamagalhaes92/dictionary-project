import React, { useState } from 'react';
import './App.css';
import Dictionary from './Dictionary';
import WordOfTheDay from './WordOfTheDay';


export default function App() {
    const [showWordOfTheDay, setShowWordOfTheDay] = useState(true);

    const handleSearch = () => {
        setShowWordOfTheDay(false);
    };

    return (
        <div className="App">
            <header className="App-header">
                WORDWAVE
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
