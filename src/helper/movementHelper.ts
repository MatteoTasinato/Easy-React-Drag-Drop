export const isValidMoviment = (index, monsterSelected, numberOfCells) => {
  let side = Math.sqrt(numberOfCells)

  if (!monsterSelected || monsterSelected.position === index) {
    return false
  }

  let rowOfMonster =
    monsterSelected.position === 0
      ? 0
      : Math.floor(monsterSelected.position / side)
  let rowOfCell = Math.floor(index / Math.sqrt(numberOfCells))
  if (rowOfCell === rowOfMonster) {
    return (
      monsterSelected.position - (monsterSelected.speed + 1) < index &&
      index < monsterSelected.position + (monsterSelected.speed + 1)
    )
  }

  let columnOfMonster =
    monsterSelected.position === 0 ? 0 : monsterSelected.position % side
  let columnOfCell = index % side
  if (columnOfMonster === columnOfCell) {
    return (
      monsterSelected.position - (monsterSelected.speed * side + 1) < index &&
      index < monsterSelected.position + (monsterSelected.speed * side + 1)
    )
  }

  return false
}

const tryMove = (newPositioning: number, cb) => {
  //if (isValidMoviment(newPositioning)) {
  //   setMonsterPosition(monsterSelected.name, newPositioning)
  // }
}
