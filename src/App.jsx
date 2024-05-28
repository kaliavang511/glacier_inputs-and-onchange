import { useState } from 'react'
import './App.css'

function App() {
  let [numLikes, setNumLikes] = useState(0)
  // ! Need state for name, to be displayed on DOM
  let [name, setName] = useState("Key")
  // ! Need state for the input field's value
  let [nameInput, setNameInput] =  useState("")

  // handleclick will use setNumLikes and change value to numLikes + 1
  const handleClick = () => {
    console.log("handleClick was executed")
    setNumLikes(numLikes + 1)
  }

  // ! Handler function for submit button that will update name state to whatever the input field has in it.
  const handleSubmit = () => {
    console.log("handleSubmit has been activated... changing name: ", nameInput)

    // * Use setteer for setName to pass in nameInput, which will update the DOM to say "Hello... NAME"
    setName(nameInput)

    // * Clear form
    setNameInput("")
  }

  // Rendering section where JSX is written
    // JSX is html-like syntax that can be mixed with JS
  return (
    <div>
      <h1>React Form</h1>
      <h2>Hello {name}</h2>

      <button onClick={() => handleClick()}>
        {numLikes} Like ❤️
      </button>

      <hr/>
      <br/>

      {/* onChange attribute on the input form will capture the typing as we update the input */}
      <input 
        value={nameInput} 
        onChange={(event)=> setNameInput(event.target.value)} 
      />

      <button onClick={() => handleSubmit()}>Submit</button>

    </div>
  )
}

export default App
