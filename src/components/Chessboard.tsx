import * as React from "react"
import "../styles/chessboard.css"
import { SQUARE_SIZE } from "../constants"
import { Square } from "./Square"
import { getColorIndex } from "../helper/chessboardHelper"
import ChessboardContext from "../ChessboardContext"

export const ChessboardContainer = ({
  showKey,
  numberOfCells,
  piecesMap,
  onPiecesMapChanges
}) => {
  return (
    <ChessboardContext.Provider
      value={{ showKey, numberOfCells, piecesMap, onPiecesMapChanges }}
    >
      <Chessboard />
    </ChessboardContext.Provider>
  )
}

const Cells = ({ numberOfCells }) => {
  const double = numberOfCells * numberOfCells
  console.log(double)
  const arra = Array.from(Array(double).keys())
  console.log(arra)
  return (
    <>
      {arra.map((_, i) => {
        console.log(i)
        const backgroundColor = getColorIndex(numberOfCells, i)
          ? "black"
          : "white"
        return <Square key={i} position={i} backgroundColor={backgroundColor} />
      })}
    </>
  )
}

const Chessboard = () => {
  const { numberOfCells } = React.useContext(ChessboardContext)

  const style = {
    width: SQUARE_SIZE * numberOfCells,
    height: SQUARE_SIZE * numberOfCells
  }

  return (
    <div className="chessboard" style={style}>
      <Cells numberOfCells={numberOfCells} />
    </div>
  )
}

export default Chessboard
