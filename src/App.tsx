import * as React from "react"
import { getBoxAbility, getDraggableAbility } from "./dnd"
import "./styles/styles.css"

const App = () => {
  const boxAbility = getBoxAbility((dataKey) => console.log(dataKey))
  const draggableAbility = getDraggableAbility("dataKey-1")

  return (
    <>
      <h1>React hooks examples</h1>
      <div {...boxAbility} className="red-box"></div>
      <div {...draggableAbility} className="ball blue-ball"></div>

      <DraggableComponent dataKey="dataKey-2">
        <div className="ball green-ball" />
      </DraggableComponent>
    </>
  )
}

export default App

// Example of your component
const DraggableComponent = ({ dataKey, children }) => {
  const draggableAbility = getDraggableAbility(dataKey)
  return <div {...draggableAbility}>{children}</div>
}
