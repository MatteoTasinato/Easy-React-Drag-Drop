import React from "react";
import PropTypes, { number } from "prop-types";
import "./chessboard.css";

interface Piece {
  name: string;
  position: number;
}

interface ChessboardInfo {
  numberOfCells: number;
  showCellCounting: boolean;
  darkColor: string;
  lightColor: string;
  monsters: Piece[];
  setMonsterPosition: () => number;
  setMonsterSelected: (piece?: Piece) => void;
  monsterSelected: () => void;
}

const Chessboard = ({
  numberOfCells = 4,
  showCellCounting,
  darkColor = "black",
  lightColor = "pink",
  monsters,
  setMonsterPosition,
  setMonsterSelected,
  monsterSelected
}: any) => {
  const onDrop = (
    event: React.DragEvent<HTMLDivElement>,
    newPositioning: number
  ) => {
    let name = event.dataTransfer && event.dataTransfer.getData("id");
    // if (isValidMoviment(newPositioning)) {
    //   setMonsterPosition(name, newPositioning)
    // }
  };
  const tryMove = (newPositioning: number) => {
    //if (isValidMoviment(newPositioning)) {
    //   setMonsterPosition(monsterSelected.name, newPositioning)
    // }
  };
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    piece?: Piece
  ) => {
    if (piece) {
      event.dataTransfer && event.dataTransfer.setData("id", piece.name);
    }
  };

  /*
    const isValidMoviment = index => {

        let side = Math.sqrt(numberOfCells)

        if (monsterSelected) {

            if (monsterSelected.position === index) return false

            let rowOfMonster = (monsterSelected.position === 0) ? 0 : Math.floor(monsterSelected.position / side)
            let rowOfCell = Math.floor(index / Math.sqrt(numberOfCells))
            if (rowOfCell === rowOfMonster) {
                return (monsterSelected.position - (monsterSelected.speed + 1) < index) && (index < monsterSelected.position + (monsterSelected.speed + 1))
            }

            let columnOfMonster = (monsterSelected.position === 0) ? 0 : monsterSelected.position % side
            let columnOfCell = index % side
            if (columnOfMonster === columnOfCell) {
                return (monsterSelected.position - (monsterSelected.speed * side + 1) < index) && (index < monsterSelected.position + (monsterSelected.speed * side + 1))
            }

        }
        return false
    }
    */

  const getBackgroundColor = (index: number) => {
    //if (isValidMoviment(index)) return '#f06292'

    let cellIsPair = (index % numberOfCells) % 2 === 0;
    let rowIsPair = Math.floor(index / numberOfCells) % 2 === 0;

    return rowIsPair
      ? cellIsPair
        ? darkColor
        : lightColor
      : cellIsPair
      ? lightColor
      : darkColor;
  };

  let indexes =
    numberOfCells &&
    Array.from(new Array(numberOfCells * numberOfCells), (_, index) => index);

  const mapCells = (key: number) => {
    const m = monsters.find((m: any) => m && m.position === key);
    const backgroundColor = getBackgroundColor(key);
    return (
      <div
        style={{
          height: 50,
          width: 50,
          backgroundColor
        }}
        onClick={() => tryMove(key)}
        onDragOver={e => onDragOver(e)}
        onDrop={e => {
          onDrop(e, key);
        }}
        key={key}
      >
        {m ? (
          <div
            key={m.name}
            draggable
            onMouseLeave={() => setMonsterSelected()}
            onClick={() => setMonsterSelected(m)}
            style={{ cursor: "pointer", height: 50, width: 50 }}
            onDragStart={e => {
              onDragStart(e, m);
            }}
          >
            <b>{m.name}</b>
          </div>
        ) : showCellCounting ? (
          key
        ) : null}
      </div>
    );
  };

  const cells = indexes.map(mapCells);
  console.log(cells);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "red",
        width: 50 * numberOfCells,
        height: 50 * numberOfCells,
        overflow: "auto"
      }}
    >
      {cells}
    </div>
  );
};

export default Chessboard;
