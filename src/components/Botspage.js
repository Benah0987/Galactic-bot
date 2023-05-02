import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const BotsPage = () => {
  //state that initializes an array to hold all bots
  const [bots, setBots] = useState([]);
  //state that holds all bots selected by user
  const [yourBots, setYourBots] = useState([]);
 
  //useEffect to fetch data
  useEffect(() => {
    //using async function
    const fetchBots = async () => {
      try {
        const response = await fetch(
          "https://api.npoint.io/f2dab3b71d583e4dbdef/bots"
        );
        const data = await response.json();
        //store the bots data here
        setBots(data);
        //if any error due to rendering cconsole log error
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchBots();
  }, []);
  //to add a bot to the data
  //addBot takes in a bot object
  const addBot = (bot) => {
    //check if the bot is included 
    if (!yourBots.includes(bot)) {
      //if not append it 
      setYourBots((prevBots) => [...prevBots, bot]);
    }
  };
//to remove bot data
  const removeBot = (bot) => {
    setYourBots((prevBots) =>
      prevBots.filter((yourBot) => yourBot.id !== bot.id)
    );
  };

  return (
    <div>
      {/*it has two child compnents*/}
      <YourBotArmy bots={yourBots} removeBot={removeBot} />
      <BotCollection bots={bots} botFunction={addBot} />
    </div>
  );
};

export default BotsPage;
