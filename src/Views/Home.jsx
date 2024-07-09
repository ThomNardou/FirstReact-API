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
      <main className="bg-black py-10 font-custom text-white">
        {agents.map((agent) => {
          if (agent.developerName != "Hunter_NPE") {
            return (
              <div
                key={agent.uuid}
                className={`flex justify-around items-center w-auto m-10 bg-slate-500 rounded-3xl`}
              >
                <div>
                  <h1 className="text-5xl">{agent.displayName}</h1>
                  <div className="test flex items-center mt-4">
                    <img src={agent.role.displayIcon} className="w-8 h-8" />
                    <p className="ml-5">{agent.role.displayName}</p>
                  </div>
                  <Link to={`/agent/${agent.uuid}`} className="bg-slate-400 text-white my-10 py-2 px-6 rounded-lg hover:bg-slate-600 transition delay-100">Learn more</Link>
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
