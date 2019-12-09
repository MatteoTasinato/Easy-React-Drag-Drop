import React, { useState } from "react"
import { ChessboardContainer } from "../components/Chessboard"
import "../styles/App.css"

const App = () => {
  const [numberOfCells, setNumberOfCells] = useState(4)
  const [showEnumeration, setShowEnumerator] = useState(false)
  const [piecesMap, setPiecesMap] = useState([
    { position: 3, symbol: "C", key: "kight" }
  ])

  const toggleShowEnumerator = (): void => {
    setShowEnumerator(prev => !prev)
  }

  const onChangeNumberOfCells = e => {
    setNumberOfCells(Number.parseFloat(e.currentTarget.value))
  }

  const onPiecesMapChanges = newMap => {
    setPiecesMap(newMap)
  }

  const createRandomPiece = () => {
    setPiecesMap([
      ...piecesMap,
      { key: `Duck ${piecesMap.length}`, position: 0, symbol: ":<" }
    ])
  }

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
            show cell enumerator
          </div>
          <br />
          <div>
            <select onChange={onChangeNumberOfCells}>
              <option value="4">4</option>
              <option value="8">8 (standard)</option>
              <option value="16">16</option>
              <option value="20">20</option>
              <option value="60">60</option>
            </select>
          </div>
          <br />
          <div>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Symbol</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {piecesMap.map(piece => (
                  <tr>
                    <td>{piece.key}</td>
                    <td>{piece.symbol}</td>
                    <td>{piece.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              style={{ padding: 4, fontSize: 12, marginTop: 6 }}
              onClick={createRandomPiece}
            >
              Add a piece
            </button>
          </div>
        </div>
        <div className="rightArea">
          <ChessboardContainer
            numberOfCells={numberOfCells}
            showKey={showEnumeration}
            piecesMap={piecesMap}
            onPiecesMapChanges={onPiecesMapChanges}
          />
        </div>
      </div>
    </div>
  )
}

export default App
