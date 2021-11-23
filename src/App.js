import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    // JSX fragments <> .... </>
    <>

      <Navbar title="TextUtils" About="About" />
      {/* <Navbar /> */}

      <div className="container my-4">
        <TextForm heading="Enter your Text" />
      </div>

      <div className="container my-3">
        <About/>
      </div>



    </>

  );
}

export default App;



/*

1. JSX is is simply a syntax extension of JavaScript. It allows us to directly write HTML
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

 */