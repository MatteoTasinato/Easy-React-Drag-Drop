import React, { useState } from "react";
import Chessboard from "../chessboard";
import "./App.css";

const App = () => {
  const [showEnumeration, setShowEnumerator] = useState(false);
  const [numberOfCells, setNumberOfCells] = useState(8);

  const toggleShowEnumerator = (): void => {
    setShowEnumerator(prev => !prev);
  };

  return (
    <div>
      <div className="toolbar">DEMO</div>
      <div className="demo">
        <div className="leftArea">
          <h2>DEMO PANEL</h2>
          <div>
            <input
              type="checkbox"
              checked={showEnumeration}
              onChange={toggleShowEnumerator}
            />
            Show cell's Enumeration
          </div>
          <br />
          <div>
            <input
              type="number"
              value={numberOfCells}
              onChange={event => setNumberOfCells(event.currentTarget.valueAsNumber)}
            />
            Side size
          </div>
        </div>
        <div className="rightArea">
          <Chessboard
            numberOfCells={numberOfCells}
            showCellCounting={showEnumeration}
            monsters={[]}
            setMonsterPosition={() => 3}
            setMonsterSelected={() => {}}
            monsterSelected={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
