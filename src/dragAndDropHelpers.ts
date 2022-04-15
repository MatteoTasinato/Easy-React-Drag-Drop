import * as React from "react"

type OnDropCallback = (key: string) => void

const disableNativeDragOverEvent: React.DragEventHandler<HTMLElement> = (
  event
): void => {
  event.preventDefault()
}

export const createBoxAbility = (
  onDropCallback: OnDropCallback
): Partial<React.HTMLAttributes<HTMLElement>> => {

  const onDrop: React.DragEventHandler<HTMLElement> = ({ dataTransfer }): void => {
    const sign = dataTransfer?.getData("sign")
    if (sign) {
      onDropCallback(sign)
    }
  }

  return { onDragOver: disableNativeDragOverEvent, onDrop }
}

export const createDraggableAbility = (sign: string): Partial<React.HTMLAttributes<HTMLElement>> => ({
  draggable: true,
  onDragStart: ({ dataTransfer }) => {
    dataTransfer?.setData("sign", sign)
  },
})
