import * as React from "react"
import "../styles/chessboard.css"
import { SQUARE_SIZE } from "../constants"
import { getColorIndex } from "../utilities/colorManager"
import { Tile } from "./Tile"

const Tiles = ({ numberOfCells }) => {
  const squaredNumber = numberOfCells * numberOfCells
  const indexList = Array.from(Array(squaredNumber).keys())

  return (
    <>
      {indexList.map((index) => {
        const backgroundColor = getColorIndex(numberOfCells, index)
        return <Tile key={index} index={index} backgroundColor={backgroundColor} />
      })}
    </>
  )
}

export const Board = ({ numberOfCells }) => {
  const style = {
    width: SQUARE_SIZE * numberOfCells,
    height: SQUARE_SIZE * numberOfCells
  }

  return (
    <div className="chessboard" style={style}>
      <Tiles numberOfCells={numberOfCells} />
    </div>
  )
}