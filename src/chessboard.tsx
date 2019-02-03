import React from 'react'
import PropTypes from 'prop-types'
import './chessboard.css'

interface Piece {
    name: string
    position: number
}

interface ChessboardInfo {
    numberOfCells: number
    showCellCounting: boolean
    darkColor: string
    lightColor: string
    monsters: Piece[]
    setMonsterPosition: () => number
    setMonsterSelected: (piece?: Piece) => void
    monsterSelected: () => void
}

const Chessboard = (props: ChessboardInfo) => {

    const { numberOfCells, showCellCounting, darkColor, lightColor, monsters, setMonsterPosition, setMonsterSelected, monsterSelected } = props

    const onDrop = (event: React.DragEvent<HTMLDivElement>, newPositioning: number) => {
        let name = event.dataTransfer && event.dataTransfer.getData("id")
        // if (isValidMoviment(newPositioning)) {
        //   setMonsterPosition(name, newPositioning)
        // }
    }
    const tryMove = (newPositioning: number) => {
        //if (isValidMoviment(newPositioning)) {
        //   setMonsterPosition(monsterSelected.name, newPositioning)
        // }
    }
    const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, piece?: Piece) => {
        if (piece) {
            event.dataTransfer && event.dataTransfer.setData('id', piece.name)
        }
    }

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

        //OK
        let cellIsPair = (index % Math.sqrt(numberOfCells)) % 2 === 0
        let rowIsPair = (Math.floor(index / Math.sqrt(numberOfCells)) % 2) === 0

        return rowIsPair ? (cellIsPair ? darkColor : lightColor) : (cellIsPair ? lightColor : darkColor)
    }
    
    console.log(numberOfCells)

    let indexes = Array.from(new Array(numberOfCells), (_, index) => index)

    function mapCells (key: number){

        var m = monsters.find(m => m.position === key)

        return (
            <div style={{ height: 50, width: 50, backgroundColor: getBackgroundColor(key) }}
                onClick={() => tryMove(key)}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => { onDrop(e, key) }}
                key={key} >
                {
                    (m)
                        ? (
                            <div key={m.name}
                                draggable
                                onMouseLeave={() => setMonsterSelected()}
                                onClick={() => setMonsterSelected(m)}
                                style={{ cursor: 'pointer', height: 50, width: 50 }}
                                onDragStart={e => { onDragStart(e, m) }}
                            >
                                <b>{m.name}</b>
                            </div>
                        )
                        : showCellCounting ? key : null
                }
            </div>
        )
    }

    const data = indexes.map(mapCells)

    return (
        (Math.sqrt(numberOfCells) % 1 === 0)
            ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', width: 50 * (Math.sqrt(numberOfCells)) }}>
                    {data}
                </div>
            )
            : <span style={{ backgroundColor: '#f44336', padding: 8, borderRadius: 12, color: 'white' }}> <b>numberOfCells</b> must be a perfect square!</span>
    )
}

Chessboard.defaultProps = {
    numberOfCells: 64,
    lightColor: '#b2dfdb',
    darkColor: '#82ada9',
    monsters: []
}

Chessboard.propTypes = {
    numberOfCells: PropTypes.number,
    lightColor: PropTypes.string,
    darkColor: PropTypes.string,
    monsters: PropTypes.array
}

export default Chessboard