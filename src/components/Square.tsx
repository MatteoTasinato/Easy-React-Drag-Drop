import * as React from "react"
import { Piece, PieceValue } from "./Piece"
import "../styles/square.css"
import { onDragOver, onDrop } from "../helper/dragAndDropHelper"
import ChessboardContext from "../ChessboardContext"
import { useContext, useCallback } from "react"

interface SquareProps {
  backgroundColor: string
  children?: any
  showKey?: boolean
  position: number
}

const getPieceMap = (piecesMap: PieceValue[], position: number) => {
  const piece = piecesMap.find(p => p.position === position)
  if (!piece) {
    return null
  }
  return <Piece piece={piece} />
}

export const Square = ({ position, backgroundColor }: SquareProps) => {
  const { showKey, piecesMap, onPiecesMapChanges } = useContext(
    ChessboardContext
  )
  const piece = useCallback(() => getPieceMap(piecesMap, position), [getPieceMap, piecesMap, position])

  return (
    <div
      style={{
        backgroundColor
      }}
      className="square"
      onDragOver={onDragOver}
      onDrop={e => {
        const name = onDrop(e, position)
        onPiecesMapChanges(
          piecesMap.map(m => (m.key === name ? { ...m, position } : m))
        )
      }}
    >
      {!piece && showKey && <div>{position}</div>}
      {piece && piece}
    </div>
  )
}
