import React from "react";
import BotCard from "./BotCard";

function YourBotArmy(props) {
  // Map over the bots in the army and create a BotCard for each one
  const bots = props.bots.map((bot) => {
    return <BotCard key={bot.id} bot={bot} botFunction={props.removeBot} />;
  });

  return (
    <div className="ui form bg primary">
      {/* Navigation bar */}
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <h1>Army bots</h1>
      </nav>

      {/* Display the bot cards in a grid */}
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots}

          {/* If there are no bots in the army, display a message */}
          {bots.length === 0 ? <h1>You have no bots in your army</h1> : null}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
