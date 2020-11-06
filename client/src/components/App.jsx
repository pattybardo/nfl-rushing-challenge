import React from 'react';
import StatRow from './StatRow';
import rushing from '../rushing';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <table>
        <tr>
          <th>Player</th>
          <th>Team</th>
          <th>POS</th>
          <th>Att</th>
          <th>Att/G</th>
          <th>Yds</th>
          <th>Avg</th>
          <th>Yds/G</th>
          <th>TD</th>
          <th>Lng</th>
          <th>1st</th>
          <th>1st%</th>
          <th>20+</th>
          <th>40+</th>
          <th>FUM</th>
        </tr>
        {rushing.map((entry) => (
          <StatRow 
            player={entry["Player"]}
            team={entry["Team"]}
            position={entry["POS"]}
            att={entry["Att"]}
            attPerG={entry["Att/G"]}
            yards={entry["Yds"]}
            avg={entry["Avg"]}
            yardPerG= {entry["Yds/G"]}
            td={entry["TD"]}
            lng={entry["Lng"]}
            first={entry["1st"]}
            firstPCT={entry["1st%"]}
            twentyPlus={entry["20+"]}
            fourtyPlus={entry["40+"]}
            fumbles={entry["FUM"]}
          />
        ))}
      </table>
    </div>
  );
}

export default App;
