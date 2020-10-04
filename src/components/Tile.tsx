import * as React from "react"
import "../styles/square.css"
import { useContext } from "react"
import { DraggableElement } from "./DraggableElement"
import { BoardContext } from "./Board"

interface TileProps {
  backgroundColor: string
  children?: any
  index: number
}

const onDragOver = (event: DragEvent) => {
  event.preventDefault()
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
    BoardContext
  )

  const draggableElement = getDraggableElement(piecesMap, index)

  const onDropCallback = React.useCallback(
    event => {
      let key = event.dataTransfer && event.dataTransfer.getData("key")
      const updatedMap = piecesMap.map(element => (element.key === key ? { ...element, position: index } : element))
      console.log(updatedMap)
      onPiecesMapChanges(updatedMap)
    }, [onPiecesMapChanges, piecesMap, index])

  const onDragOverCallback = React.useCallback((event) => {
    onDragOver(event)
  }, [])

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
