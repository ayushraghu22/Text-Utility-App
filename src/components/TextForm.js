import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("");
    document.title = `TextUtils - ${props.category}`;   

    const handleUpClick = () => {
        // let temp = text.toUpperCase();
        setText(text.toUpperCase());
    }

    const handleDownClick = () => {
        // let temp = text.toLowerCase();
        setText(text.toLowerCase());
    }

    const handleReset = () => {
        setText("");
    }

    const handleOnChange = (event) => {
        // console.log("onchange");
        setText(event.target.value);
    }

    const CapitalizeCase = () => {
        let temp = text.split(' ');
        for (let i = 0; i < temp.length; i++) {
            temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].substr(1);
        }
        setText(temp.join(' '));
    }

    const CopyToClipboard = () => {
        // var copyText = document.getElementById("myInput");
        // copyText.select();
        // navigator.clipboard.writeText(copyText.value);
        // document.getSelection().removeAllRanges();

        navigator.clipboard.writeText(text);
        props.showAlert("success", "Text copied to clipboard.");
    }

    const handleTrim = () => {

        // let temp = text.split(' ').filter((element) => { return element.length !== 0 });
        // setText(temp.join(' '));

        let temp = text.split(' ');
        let str = "";
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] !== '')
                str += temp[i] + " ";
        }
        setText(str);
    }

    const handleFirstCap = () => {

        let temp = text.split(' ');
        let flag = 0;
        temp[0] = temp[0].charAt(0).toUpperCase() + temp[0].substr(1);

        for (let i = 0; i < temp.length; i++) {
            if (flag === 1) {
                temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].substring(1);
                flag = 0;
            }

            if (temp[i].charAt(temp[i].length - 1) === '.')
                flag = 1;
        }
        setText(temp.join(' '));
    }


    return (
        <>
            <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{
                        backgroundColor: props.mode === 'light' ? 'white' : '#436495',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }} value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>

                <button disabled={text.trim().length === 0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.trim().length === 0} className="btn btn-primary mx-1" my-1 onClick={handleDownClick}>Convert to Lowercase</button>
                <button disabled={text.trim().length === 0} className="btn btn-primary my-1" onClick={CapitalizeCase}>Capitalize Case</button>
                <button disabled={text.trim().length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTrim}>Remove extra space</button>
                <button disabled={text.trim().length === 0} className="btn btn-primary my-1" onClick={handleFirstCap}>Sentence</button>
                <button disabled={text.trim().length === 0} className="btn btn-primary mx-1 my-1" onClick={CopyToClipboard}>Copy to clipboard</button>
                <button disabled={text.trim().length === 0} className="btn btn-danger my-1" onClick={handleReset}>Clear Text</button>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Your text summary :</h3>
                {/* <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.trim().length} characters</p> */}

                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.trim().length} characters</p>

                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} word count</p>

                <h3>Preview:</h3>
                <p>{text.trim().length !== 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: "Enter heading"
}

// javascript-> Regular expressions to see.  line no 98.   .....done.....
// index.css mein after invert(1);

// react does not watch all the variables thats why we use state
// so that changes can be made immediately widhout delay wherever
// state is used.