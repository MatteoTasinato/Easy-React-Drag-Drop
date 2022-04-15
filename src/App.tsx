import * as React from "react"
import { createBoxAbility, createDraggableAbility } from "./dragAndDropHelpers"
import "./styles/styles.css"

const App = () => {
  const boxAbility = createBoxAbility((sign) => console.log(sign))
  const draggableAbility = createDraggableAbility("Babe Ruth")

  return (
    <>
      <h3>React hooks examples</h3>
      <div {...boxAbility} className="red-box" />
      <div {...draggableAbility} className="ball blue-ball" />


      <h3>React components examples</h3>
      <DraggableComponent sign="Joe DiMaggio">
        <div className="ball green-ball" />
      </DraggableComponent>

      <BoxComponent onDrop={(sign: string) => console.log(sign)}>
        <div className="box" />
      </BoxComponent>
    </>
  )
}

export default App

// Example of your component
const DraggableComponent = ({ sign, children }) => {
  const draggableAbility = createDraggableAbility(sign)
  return <div {...draggableAbility}>{children}</div>
}

// Example of your component
const BoxComponent = ({ onDrop, children }) => {
  const boxAbility = createBoxAbility(onDrop)
  return <div {...boxAbility}>{children}</div>
}