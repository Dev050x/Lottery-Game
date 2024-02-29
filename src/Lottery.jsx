import { useState } from "react";
import { generateArr } from "./helper";
import Ticket from "./Ticket";
import  "./Lottery.css"

export default function Lottery({nums,winningSum}){
    let [ticket,setTicket] = useState(generateArr(nums));
    let updateTicket = () => {
        setTicket(generateArr(nums));
    }
    let isWon = winningSum == ticket.reduce((sum,num) => (sum+num));
     return (
        <div className="Lottery">
            <Ticket ticket={ticket} />
            <button onClick={updateTicket}>Generate Ticket</button>
            {isWon ? <h1>You won the Lottery🎉🎊</h1> : null}
        </div>
    );
}