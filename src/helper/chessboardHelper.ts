export const getColorIndex = (numberOfCells, index: number) => {
  //if (isValidMoviment(index)) return '#f06292'
  let cellIsPair = (index % numberOfCells) % 2 === 0
  let rowIsPair = Math.floor(index / numberOfCells) % 2 === 0

  return rowIsPair ? (cellIsPair ? 0 : 1) : cellIsPair ? 1 : 0
}
