import './Phonetic.css';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
    const [audioPlayer, setAudioPlayer] = useState(null);
    const [audioError, setAudioError] = useState(false);

    useEffect(() => {
        if (props.phonetic.audio) {
            const audio = new Audio(props.phonetic.audio);
            setAudioPlayer(audio);
            return () => {
                audio.pause();
                setAudioPlayer(null);
            };
        } else {
            setAudioError(true);
        }
    }, [props.phonetic.audio]);

    const playAudio = () => {
        if (audioPlayer) {
            audioPlayer.play();
        }
    };

    return (
        <div className="Phonetic">
            {audioError ? null : (
                <>
                    <button onClick={playAudio}>
                        <FontAwesomeIcon icon={faVolumeUp} /> Listen
                    </button>
                    {props.phonetic.text}
                </>
            )}
        </div>
    );
}