import React, { useState } from "react";
import "./App.css";
import Form from "./Form.js";

function App() {
  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      <Form team={team} setTeam={setTeam} />
      {team.map((element) => {
        return (
          <div className="formDiv">
            <div className='formBox'>
              <p className="formName">Name: {element.name}</p>
              <p className="formEmail">Email: {element.email}</p>
            </div>
          </div>
          
        );
      })}

    </div>
  );
}

export default App;
