# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

#checkpoint demo

Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and, enlist a bot into their army.

#Learning Goals
Implement a mini web app to practice components, props, state, events, and data fetching in react
 

#Instructions
For this project,  i'll be building a React application that displays a list of available bots, among other features. 
Part of what this code challenge is testing is my ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

#Project Setup
Once you have the plan in place for the application you want to build take the following steps:

#Create a new project folder.
Create a new GitHub repository. (NB: ENSURE IT IS PRIVATE).
In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
Run this command to get the backend started:
json-server --watch db.json

Test your server by visiting this route in the browser:
http://localhost:8001/bots

##Core Deliverables
As a user, I should be able to:

See profiles of all bots rendered in BotCollection.
Add an individual bot to my army by clicking on it. The selected bot should render in the YourBotArmy component. The bot can be enlisted only once. The bot does not disappear from the BotCollection.
Release a bot from my army by clicking on it. The bot disappears from the YourBotArmy component.
Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the YourBotArmy on the frontend.
Endpoints for Core Deliverables
GET /bots
Example Response:

[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  },
  {
    "id": 102,
    "name": "RyM-66",
    "health": 86,
    "damage": 36,
    "armor": 77,
    "bot_class": "Medic",
    "catchphrase": "0110011100000100011110100110011000011001",
    "avatar_url": "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    "created_at": "2018-10-02T19:55:10.827Z",
    "updated_at": "2018-10-02T19:55:10.827Z"
  }
]
DELETE /bots/:id
Example Response:

{}


##As a user, I should be able to:

Choose if I want to enlist a bot into my army or just see their data. Clicking on the card should instead display a show view (BotSpecs) for that bot, which should replace BotsCollection. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot. Your app could look like the following:
Full demo

Sort bots by their health, damage or armor. For this, create a new component, SortBar.
When I enlist a bot it will be removed from the BotCollection and added to YourBotArmy.
Filter bots by their class. We can select a few filters at the same time.
Sort bots by their health, damage or armor. For this, create a new component, SortBar.
Only enlist one bot from each bot_class. The classes are ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].
