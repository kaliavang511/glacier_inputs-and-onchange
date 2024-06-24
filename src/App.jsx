import { useState } from 'react'
import './App.css'
import Axios from 'axios'
import {Image} from 'cloudinary-react'

function App() {


  let [numLikes, setNumLikes] = useState(0)
  // ! Need state for name, to be displayed on DOM
  let [name, setName] = useState("Kalia")
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


  const [imageSelected,setImageSelected]=useState('') 
  const uploadImage=()=>{
    const formData = new FormData()
      formData.append('file',imageSelected)
      formData.append('upload_preset', 'tgekjxb2')

      Axios.post('https://api.cloudinary.com/v1_1/dk2xkbyhb/image/upload',
        formData
      ).then((response) => {

      });


  }  
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

      <div>
        <input
        type='file'
        onChange={(event)=>{
          setImageSelected(event.target.files[0])
        }}/>
    <button onClick={uploadImage}> upload Image</button>
    <Image 
    style={{width:200}}
    cloudName='dk2xkbyhb' 
    publicId='https://res.cloudinary.com/dk2xkbyhb/image/upload/v1719205126/ahyra2rpgoy14kxbb5ut.jpg'
    />
    
      </div>

    </div>
  ) 
}

export default App
 