import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const BotsPage = () => {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/f2dab3b71d583e4dbdef/bots"
        );
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchBots();
  }, []);

  const addBot = (bot) => {
    if (!yourBots.includes(bot)) {
      setYourBots((prevBots) => [...prevBots, bot]);
    }
  };

  const removeBot = (bot) => {
    setYourBots((prevBots) =>
      prevBots.filter((yourBot) => yourBot.id !== bot.id)
    );
  };

  return (
    <div>
      <YourBotArmy bots={yourBots} removeBot={removeBot} />
      <BotCollection bots={bots} botFunction={addBot} />
    </div>
  );
};

export default BotsPage;
