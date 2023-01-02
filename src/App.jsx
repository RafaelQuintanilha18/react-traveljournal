import React from "react"
import './App.css'
import data from './data'
import Card from './Card'


function App() {
  const cards = data.map(card => {
    return (
        <Card
            key={card.id}
            item={card}
        />
    )
})
  return (
    <div>
      <header>
        <i class="fa-sharp fa-solid fa-earth-americas"></i>
        <h3>My Travel Journal</h3>
      </header>
      {cards}
    </div>
  )
}
export default App
