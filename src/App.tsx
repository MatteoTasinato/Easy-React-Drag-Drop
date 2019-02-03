import React from 'react'
import Chessboard from './chessboard'
import './App.css';

interface AppInfo {
  showEnumeration: boolean
  numberOfCells: number
}

export default class App extends React.Component<any, AppInfo> {

  constructor(props: any) {
    super(props)
    this.state = {
      showEnumeration: false,
      numberOfCells: 81
    }
  }

  changeValue = () => {
    this.setState({ showEnumeration: !this.state.showEnumeration })
  }

  changenumberOfCells = (numberOfCells: number) => {
    this.setState({ numberOfCells })
  }

  render() {
    return (<div >
      <div className='toolbar'>
        DEMO
    </div>
      <div className='demo'>
        <div className='leftArea'>
          <h2>DEMO PANEL</h2>
          <input
            type='checkbox'
            checked={this.state.showEnumeration}
            onChange={this.changeValue} /> Show cell's Enumeration
              <input
            type='number'
            value={this.state.numberOfCells}
            onChange={event => this.changenumberOfCells(Number(event.target.value))} /> Number of Cells
      </div>
        <div className='rightArea'>
          <Chessboard
            numberOfCells={this.state.numberOfCells}
            showCellCounting={this.state.showEnumeration}
            monsters={[]}
            setMonsterPosition={() => 3}
            setMonsterSelected={() => { }}
            monsterSelected={() => { }}
          />
        </div>
      </div>
    </div>)
  }
}