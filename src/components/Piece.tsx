import * as React from "react"
import "../styles/piece.css"
import { onDragStart } from "../helper/dragAndDropHelper"
import { DragEventHandler, useCallback } from "react"

export interface PieceValue {
  position: number
  symbol: string
  key: string
}

interface PieceProps {
  piece: PieceValue
}

const Piece = ({ piece, ...props }: PieceProps) => {
  const onDragStartCallback: DragEventHandler<HTMLDivElement> = useCallback(
    event => {
      onDragStart(event, piece)
    },
    [piece]
  )

  return (
    <div
      {...props}
      className="piece"
      draggable
      onDragStart={onDragStartCallback}
    >
      <div> {piece.symbol}</div>
    </div>
  )
}

export default Piece
