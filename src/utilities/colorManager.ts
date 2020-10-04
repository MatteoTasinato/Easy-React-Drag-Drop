export const getColorIndex = (numberOfCells: number, index: number): string => {
  //if (isValidMoviment(index)) return '#f06292'
  let cellIsPair = (index % numberOfCells) % 2 === 0
  let rowIsPair = Math.floor(index / numberOfCells) % 2 === 0

  return rowIsPair ? (cellIsPair ? 'black' : 'white') : cellIsPair ? 'white' : 'black'
}
