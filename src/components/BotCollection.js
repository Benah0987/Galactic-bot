import React from "react";
import BotCard from "./BotCard";

function BotCollection(props) {
  // Map over the `bots` prop to create an array of `BotCard` components
  const botCards = props.bots.map((bot) => (
    <BotCard key={bot.id} bot={bot} botFunction={props.botFunction} />
  ));

  // Render the `botCards` array inside a Bootstrap grid
  return (
    <div className="ui eight column grid">
      <div className="row">{botCards}</div>
    </div>
  );
}

export default BotCollection;
