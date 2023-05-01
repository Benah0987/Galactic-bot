import React from "react";

// Define CSS classes based on bot type
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, botFunction }) {
  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={() => botFunction(bot)}>

        {/* Bot image */}
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>

        {/* Bot name and type */}
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>

          {/* Bot catchphrase */}
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>

        {/* Bot stats */}
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>

          {/* Remove button */}
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() =>
                  console.log("add code to connect event listener")
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
