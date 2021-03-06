import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

let removeBg = () => {
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-secondary');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-danger');
}


function App() {
  const [mode, setMode] = useState('light');
  const [nav, setNav] = useState('none');

  const toggleMode = (clr) => {
    removeBg();
    
    if (clr !== 'none') { 
      document.body.classList.add('bg-' + clr); 
      setNav('dark');
    }

    else {
      setNav('none');
      if (mode === 'light') {
        setMode("dark");
        document.body.style.backgroundColor = 'rgb(48 72 109)';
        showAlert("success", "Dark Mode enabled.");
        // document.title = "TextUtils - Dark mode";
      }
      else {
        setMode("light");
        document.body.style.backgroundColor = 'white';
        showAlert("success", "Light Mode enabled.");
        // document.title = "TextUtils - Light mode";
      };
    }
  }

  const [alert, setAlert] = useState(null);

  let showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    // JSX fragments <> .... </>
    <>
      <Router>
        <Navbar title="TextUtils" about="About" nav={nav} mode={mode} toggleMode={toggleMode} category="Home" />
        {/* <Navbar /> */}
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter your Text" mode={mode} showAlert={showAlert} category="Home" />}>
          </Route>
          {/* <TextForm heading="Enter your Text" mode={mode} showAlert={showAlert} /> */}

          <Route exact path="/About" element={<About mode={mode} category="About" />}>
          </Route>

        </Routes>
      </Router>
    </>

  );
}

export default App;



/*

1. JSX is simply a syntax extension of JavaScript. It allows us to directly write HTML
   in React (within JavaScript code)
    class changes to className.(as class is reserved keyword in JS)
    for to htmlFor (as for is reserved keyword in JS)
    tabindex to tabIndex (as tabindex is reserved keyword in JS)

2. if we want to use js variable in JSX then we need to use {var_name}.
3. Babel compiles the JSX down to React.createElement() calls.
4. JSON and XML is used for data transfer between web servers.

5. In react there are two types of components ->
    function based
    class based

6. javascript versions are named as-->
   ES1, ES2, ES3, ES4, ES5, ES6, ES7.

7. we can return only one element in JSX.


8. In JSX, style(CSS) is set using js objects.

9. In react-router use exact keyword as react do partial matching.
10. CLS - cumulative layout shift.
11. document.getSelection().removeAllRanges(); (Textform -> de-highlight the text once copied).
12. 'onclick' needs a functin not a function call.
      eg. {toggleMode} , not {toggleMode()};
 */