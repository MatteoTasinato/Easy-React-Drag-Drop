import * as React from "react"
import "../styles/square.css"
import { onDragOver, onDrop } from "../utilities/dragAndDropHelper"
import ChessboardContext from "../ChessboardContext"
import { useContext } from "react"
import { DraggableElement } from "./DraggableElement"

interface TileProps {
  backgroundColor: string
  children?: any
  index: number
}

const getDraggableElement = (draggableElementList: DraggableElement[], index: number) => {
  const draggableElement = draggableElementList.find(({ position }) => position === index)
  if (!draggableElement) {
    return null
  }
  return <DraggableElement data={draggableElement} />
}

export const Tile = ({ index, backgroundColor }: TileProps) => {
  const { showKey, piecesMap, onPiecesMapChanges } = useContext(
    ChessboardContext
  )

  const draggableElement = () => getDraggableElement(piecesMap, index)

  const onDropCallback = React.useCallback(
    event => {
      const name = onDrop(event, index)
      onPiecesMapChanges(
        piecesMap.map(m => (m.key === name ? { ...m, index } : m))
      )
    }, [onDrop, piecesMap, index])

  const onDragOverCallback = React.useCallback((event) => {
    onDragOver(event)
  }, [onDragOver])

  return (
    <div
      style={{
        backgroundColor
      }}
      className="square"
      onDragOver={onDragOverCallback}
      onDrop={onDropCallback}
    >
      {!draggableElement && showKey && <div>{index}</div>}
      {draggableElement}
    </div>
  )
}
