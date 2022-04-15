import * as React from "react"

type OnDropCallback = (key: string) => void

const disableNativeDragOverEvent: React.DragEventHandler<HTMLElement> = (
  event
): void => {
  event.preventDefault()
}

export const getBoxAbility = (
  onDropCallback: OnDropCallback
): Partial<React.HTMLAttributes<HTMLElement>> => {

  const onDrop: React.DragEventHandler<HTMLElement> = ({
    dataTransfer,
  }): void => {
    const dataKey = dataTransfer?.getData("dataKey")
    if (dataKey) {
      onDropCallback(dataKey)
    }
  }

  return { onDragOver: disableNativeDragOverEvent, onDrop }
}

export const getDraggableAbility = (
  dataKey: string
): Partial<React.HTMLAttributes<HTMLElement>> => ({
  draggable: true,
  onDragStart: ({ dataTransfer }) => {
    if (dataKey && dataTransfer) {
      dataTransfer.setData("dataKey", dataKey)
    }
  },
})
