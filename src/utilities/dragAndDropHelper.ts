

export const onDragOver = (event: DragEvent<HTMLDivElement>) => {
  event.preventDefault()
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
