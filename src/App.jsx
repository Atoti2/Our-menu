import { useState } from "react"
import Menus from "./components/Menus"
import StickyHeader from "./components/StickyHeader"
function App() {
  const [selected, setSelected] = useState("") 
  
  return (
    <>
      <StickyHeader selected={selected.toLowerCase()} setSelected={setSelected}/>
      <Menus selected={selected}/>
    </>
  )
}

export default App
