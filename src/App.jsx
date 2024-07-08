import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [agents, setAgents] = useState([]);

  axios.get("https://valorant-api.com/v1/agents").then((response) => {
    setAgents(response.data.data);
    // console.log(response.data.data);
  });

  return (
    <>

      {
        agents.map((agent) => {
          return (
            <div key={agent.uuid} className={`bg-gradient-to-r from-[#${agent.backgroundGradientColors[0]}] to-blue-500 border-8 border-sky-600 w-80 m-10`} >
              <h1>{agent.displayName}</h1>
              <img src={agent.displayIcon} alt={agent.displayName} />
            </div>
          );
        })
      }
      
    </>
  );
}

export default App;
