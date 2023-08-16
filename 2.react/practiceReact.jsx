import React, { useState } from 'react';

const games = ['Cricket 1', 'Football 2', 'Hockey 3'];
const days = ['Weekday 1', 'Weekend 2'];

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div>
      <h2>Games</h2>
      {games.map((game) => (
        <div key={game}>
          <input
            type="radio"
            id={game}
            name="game"
            value={game}
            onChange={() => setSelectedGame(game)}
          />
          <label htmlFor={game}>{game}</label>
        </div>
      ))}

      <h2>Days</h2>
      {days.map((day) => (
        <div key={day}>
          <input
            type="radio"
            id={day}
            name="day"
            value={day}
            onChange={() => setSelectedDay(day)}
          />
          <label htmlFor={day}>{day}</label>
        </div>
      ))}

      <h3>Selected Game: {selectedGame}</h3>
      <h3>Selected Day: {selectedDay}</h3>
    </div>
  );
}

export default App;
