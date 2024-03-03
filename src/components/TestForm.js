import React, { useState } from 'react'

export default function TestForm(props) {
    const handleUpperCase=()=>{
        if(text.length<1){
            props.showAlert("Please enter a valid text !","danger");
            return;
        }
        let newTxt=text.toUpperCase();
        setText(newTxt);
        props.showAlert("Convert to uppercase !","success");
    }

    const handleLowerCase=()=>{
        if(text.length<1){
            props.showAlert("Please enter a valid text !","danger");
            return;
        }
        let newTxt=text.toLowerCase();
        setText(newTxt);
        props.showAlert("Convert to lower !","success");

    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const clearData=()=>{
        if(text.length<1){
            props.showAlert("Text not available to clear !","primary");
            return;
        }
        setText('');
        props.showAlert("Data cleared !","success");

    }
    const copyText=()=>{
        var text=document.getElementById('myBox');
        if(text.value.length<1){
            props.showAlert("Please enter a valid text to copy !","danger");
            return;
        }
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard !","success");

    }
    const[text,setText]=useState('');
    
    const extraSpaces = () => {
        if(text.length<1){
            props.showAlert("Please enter a valid text !","danger");
            return;
        }
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed !","success");

    }
    let countWords=()=>{
       let data=text.split(' ');
       let count=0;
       for(let i=0;i<data.length;i++)
        if(data[i]!=="")
            count++;
       return count;
    };

  return (
    <>
        <div className='container1' style={{color:props.mode==='dark'?'white':'#324a63'}}>
        <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} 
                    style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
                         id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperCase} >Convert To UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerCase} >Convert To LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={copyText} >Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={extraSpaces} >Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={clearData} >Clear</button>
        </div>
        <div className='container2'  style={{color:props.mode==='dark'?'white':'#324a63'}}>
            <h3>Your text summary:</h3>
            <p>Total words {countWords()} </p>
            <p>Total characters: {text.length}</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:'Enter something in textbox to preview !'}</p>
        </div>
    </>
  )
}
