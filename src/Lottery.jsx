import { useState } from 'react';
import './Lottery.css';
import { genTicket, sum } from './helper';

export default function Lottery() {
  const [ticket, setTicket] = useState(genTicket(3));

  const isWinning = sum(ticket) === 15;

  const buyTicket = () => {
    setTicket(genTicket(3));
  };

  return (
    <div className="lottery-container">
      <h1>🎉 Lottery Game</h1>
      <div className={`ticket ${isWinning ? 'win' : ''}`}>
        <span className="number">{ticket[0]}</span>
        <span className="number">{ticket[1]}</span>
        <span className="number">{ticket[2]}</span>
      </div>
      <button onClick={buyTicket}>Buy Ticket 🎟️</button>
      {isWinning && (
        <div className="result">🎊 Congratulations! You won the lottery! 🎊</div>
      )}
    </div>
  );
}
