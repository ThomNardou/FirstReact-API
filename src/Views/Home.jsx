import { useState } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [agents, setAgents] = useState([]);

  axios.get("https://valorant-api.com/v1/agents").then((response) => {
    setAgents(response.data.data);
    // console.log(response.data.data);
  });

  return (
    <>
      <main className="bg-black py-10 font-custom text-white flex flex-col justify-center">
        {agents.map((agent) => {
          if (agent.developerName != "Hunter_NPE") {
            return (
              <div key={agent.uuid} className="relative overflow-hidden flex self-center justify-around items-center w-9/12 m-10 rounded-3xl" style={{backgroundColor: `#${agent.backgroundGradientColors[1]}`}}>

                <div className="w-[100vh] h-[100vh] rounded-full absolute top-1 left-0 -translate-x-1/2 -translate-y-1/2 blur-2xl" style={{backgroundColor: `#${agent.backgroundGradientColors[3]}`}}></div>
                <div className="w-[100vh] h-[100vh] rounded-full absolute bottom-1 right-0 translate-x-1/2 translate-y-1/2 blur-2xl" style={{backgroundColor: `#${agent.backgroundGradientColors[2]}`}}></div>


                <div className="z-10">
                  <h1 className="text-5xl">{agent.displayName}</h1>
                  <div className="test flex items-center mt-4 mb-8">
                    <img src={agent.role.displayIcon} className="w-8 h-8" />
                    <p className="ml-5">{agent.role.displayName}</p>
                  </div>
                  <Link to={`/agent/${agent.uuid}`} className="py-4 px-6 text-white rounded-lg transition delay-100" style={{backgroundColor: `#${agent.backgroundGradientColors[0]}`}}>Learn more</Link>
                </div>

                <div className="relative">
                  <img
                    src={agent.background}
                    alt={agent.displayName}
                    className="w-full h-full object-cover"
                  />
                  <img
                    src={agent.fullPortrait}
                    alt={agent.displayName}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-5xl"
                  />
                </div>


              </div>
            );
          }
        })}
      </main>
    </>
  );
}
