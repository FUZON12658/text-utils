import React, {useState} from 'react'
import './styles/TextForm.css';




export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleCopyClick = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied Successfully!","success");
  }

  return (
    <>
    <div className = "container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className={`form-control ${props.mode}`}  value = {text} placeholder='Enter text here' onChange={handleOnChange} style ={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black','::placeholder':{
        color: props.mode === 'dark' ? 'white':'black'}}}id="myBox" rows="3"></textarea>
      </div>
      <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} disabled={text.length ===  0} onClick={handleUpClick}>Convert to Uppercase</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} disabled={text.length ===  0} onClick={handleLoClick}>Convert to Lowercase</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} disabled={text.length ===  0} onClick={handleCopyClick}>Copy Text</button>
      <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-2 my-2`} disabled={text.length ===  0} onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-5">
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
