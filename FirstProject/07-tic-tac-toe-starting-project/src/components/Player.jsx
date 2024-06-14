import { useState } from "react";

export default function Player({ initialName, symbol }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditing() {
        setIsEditing(isEditing => !isEditing)
    }

    function handleChange(e) {
        console.log(e);
        setPlayerName(e.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }


    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}