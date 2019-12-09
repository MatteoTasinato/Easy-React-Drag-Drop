import { PieceValue } from "../components/Piece"
import { DragEvent } from "react"

export const onDragOver = (event: DragEvent<HTMLDivElement>) => {
  event.preventDefault()
}

export const onDragStart = (
  event: DragEvent<HTMLDivElement>,
  piece?: PieceValue
): void => {
  if (piece) {
    event.dataTransfer && event.dataTransfer.setData("id", piece.key)
  }
}

export const onDrop = (
  event: DragEvent<HTMLDivElement>,
  newPositioning: number
) => {
  let name = event.dataTransfer && event.dataTransfer.getData("id")
  // if (isValidMoviment(newPositioning)) {
  return name
  // }
}
