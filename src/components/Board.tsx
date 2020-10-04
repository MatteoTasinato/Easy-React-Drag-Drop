import * as React from "react"
import "../styles/chessboard.css"
import { DEFAULT_CELL_NUMBER, SQUARE_SIZE } from "../constants"
import { getColorIndex } from "../utilities/colorManager"
import { Tile } from "./Tile"
import { createContext } from "react"
import { DraggableElement } from "./DraggableElement"

interface BoardContextValue {
  showKey?: boolean
  numberOfCells: number
  piecesMap: DraggableElement[]
  onPiecesMapChanges: (newPiecesMap: DraggableElement[]) => void
}

export const BoardContext = createContext<BoardContextValue>({
  showKey: true,
  numberOfCells: DEFAULT_CELL_NUMBER,
  piecesMap: [],
  onPiecesMapChanges: () => { }
})

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

interface BoardProps {
  numberOfCells: number, showKey?: boolean, piecesMap: DraggableElement[], onPiecesMapChanges: () => void
}
export const Board = ({ numberOfCells, showKey = false, piecesMap, onPiecesMapChanges }: BoardProps) => {
  const style = {
    width: SQUARE_SIZE * numberOfCells,
    height: SQUARE_SIZE * numberOfCells
  }

  return (
    <BoardContext.Provider
      value={{ showKey, numberOfCells, piecesMap, onPiecesMapChanges }}
    >
      <div className="chessboard" style={style}>
        <Tiles numberOfCells={numberOfCells} />
      </div>
    </BoardContext.Provider>
  )
}
