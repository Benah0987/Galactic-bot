import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import swal from 'sweetalert';
import Swal from 'sweetalert2';


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
    if (!yourBots.includes(bot)) {
      setYourBots((prevBots) => [...prevBots, bot]);
      swal({
        title: "Bot added",
        text: `${bot.name} has been added to your army.`,
        icon: "success",
        button: "OK",
        timer: 3000
      });
    }
  };
  
  const removeBot = (bot) => {
    swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this bot!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      timer: 3000 
    }).then((result) => {
      if (result.isConfirmed) {
        setYourBots((prevBots) =>
          prevBots.filter((yourBot) => yourBot.id !== bot.id)
        );
        swal.fire({
          title: 'Deleted!',
          text: 'Your bot has been deleted.',
          icon: 'success',
          timer: 3000 
        });
      }
    });
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
