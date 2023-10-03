import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked"+ text);
        let newText =  text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    // setText("Set text");
  return (
    <div>
        <h1>{props.heading} </h1>
      <form>
            <div className="form-group">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      </form>
    </div>
  )
}