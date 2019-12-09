import { createContext } from "react"
import { DEFAULT_CELL_NUMBER } from "./constants"
import { PieceValue } from "./components/Piece"

interface ChessboardContextValue {
  showKey?: boolean
  numberOfCells: number
  piecesMap: PieceValue[]
  onPiecesMapChanges: (newPiecesMap: PieceValue[]) => void
}

const ChessboardContext = createContext<ChessboardContextValue>({
  showKey: true,
  numberOfCells: DEFAULT_CELL_NUMBER,
  piecesMap: [],
  onPiecesMapChanges: () => {}
})

export default ChessboardContext
