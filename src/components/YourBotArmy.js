import React from "react";
import BotCard from "./BotCard";

function YourBotArmy(props) {
  const bots = props.bots.map((bot) => {
    return <BotCard key={bot.id} bot={bot} botFunction={props.removeBot} />;
  });

  return (
    <div className="ui foarm">
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <h1>Army bots</h1>
      </nav>
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots}
          {bots.length === 0 ? <h1></h1> : null}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
