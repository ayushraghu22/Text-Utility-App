import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("");

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

    const CopyToClipboard = () => {
        // var copyText = document.getElementById("myInput");
        // copyText.select();
        // navigator.clipboard.writeText(copyText.value);

        navigator.clipboard.writeText(text);
    }

    const CapitalizeCase = () => {

        let temp = text.split(' ');
        for (let i = 0; i < temp.length; i++) {
            temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].substr(1);
        }
        setText(temp.join(' '));
    }

    const handleTrim = () => {

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
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{
                        backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                        color: props.mode === 'light' ? 'black' : 'white'
                    }} value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={CapitalizeCase}>Capitalize Case</button>
                <button className="btn btn-primary mx-1" onClick={handleTrim}>Remove extra space</button>
                <button className="btn btn-primary" onClick={handleFirstCap}>Sentence</button>
                <button className="btn btn-primary mx-1" onClick={CopyToClipboard}>Copy to clipboard</button>
                <button className="btn btn-danger" onClick={handleReset}>Reset</button>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>Your text summary :</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} word count</p>

                <h3>Preview:</h3>
                <p>{text}</p>
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