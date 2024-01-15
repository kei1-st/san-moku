import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const buttonContent = isEditing ? (
    <button onClick={handleEditClick}>Save</button>
  ) : (
    <button onClick={handleEditClick}>Edit</button>
  );

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = isEditing ? (
    <input type="text" required value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name"> {playerName} </span>
  );

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol"> {symbol} </span>
      </span>
      {buttonContent}
    </li>
  );
}
