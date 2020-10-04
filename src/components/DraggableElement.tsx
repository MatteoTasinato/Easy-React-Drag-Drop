import * as React from "react"
import "../styles/piece.css"
import { DragEvent } from "react"
import { DragEventHandler, useCallback } from "react"

export interface DraggableElement {
  position: number
  image: string
  key: string
}

interface DraggableElementProps {
  data: DraggableElement
}

export const DraggableElement = ({ data, ...props }: DraggableElementProps) => {
  const onDragStartCallback: DragEventHandler<HTMLDivElement> = useCallback(
    event => {
      onDragStart(event, data)
    },
    [data]
  )

  return (
    <div
      {...props}
      className="piece"
      draggable
      onDragStart={onDragStartCallback}
    >
      <div>{data.image}</div>
    </div>
  )
}

export const onDragStart = (
  event: DragEvent<HTMLDivElement>,
  data?: DraggableElement
): void => {
  console.log(event)
  console.log(data)
  if (data && event.dataTransfer) {
    event.dataTransfer.setData("key", data.key)
  }
}