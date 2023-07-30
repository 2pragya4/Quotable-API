import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [data, setData] = useState(0);

  function getQuote(){
    try{
    fetch('https://api.quotable.io/random').then(
      response => response.json().then(
        (quote)=>{
          setData(quote);
        }
      )
    )
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
          {/* need to create button to get quotes and other featurs of the api */}
          <h1 className="title"> Random Quote Generator API </h1>
          <h3 className="quote"> {data.content} </h3>
          <h3 className="author"> {data.author} </h3>
          <button onClick={getQuote} className="btn"> Get Quote </button>
      </header>
    </div>
  );
}

export default App;
