import React, { useState } from 'react'
import Chessboard from './chessboard'
import './App.css';

const App = () => {
  const [showEnumeration, setShowEnumerator] = useState(false)
  const [numberOfCells, setNumberOfCells] = useState(81)

  const changeValue = (numberOfCells: number): void => {
    if (numberOfCells) {
      setNumberOfCells(numberOfCells)
    }
  }

  const toggleShowEnumerator = (): void => {
    setShowEnumerator(prev => !prev)
  }

  return (<div >
    <div className='toolbar'>
      DEMO
    </div>
    <div className='demo'>
      <div className='leftArea'>
        <h2>DEMO PANEL</h2>
        <input
          type='checkbox'
          checked={showEnumeration}
          onChange={toggleShowEnumerator}
        /> Show cell's Enumeration
        <input type='number' onChange={event => changeValue(event.currentTarget.valueAsNumber)} /> Number of Cells
      </div>
      <div className='rightArea'>
        <Chessboard
          numberOfCells={numberOfCells}
          showCellCounting={showEnumeration}
          monsters={[]}
          setMonsterPosition={() => 3}
          setMonsterSelected={() => { }}
          monsterSelected={() => { }}
        />
      </div>
    </div>
  </div>)
}

export default App