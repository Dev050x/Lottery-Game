import { useState } from 'react'
import './App.css'
import TicketNum from './TicketNum';
import Ticket from './Ticket';
import Lottery from './Lottery';

function App() {

  return (
    <div>
      <h1>Welcome To The Lottery Game</h1>
      <Lottery nums={3} winningSum={12} />
    </div>
  );
}

export default App
