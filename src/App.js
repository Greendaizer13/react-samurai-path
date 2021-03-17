import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <Header/>
      <div>first div</div>
      <Technologies/>
    </div>
  );
}

const Technologies = () =>{
    return (
        <div className="App">
            <ul>
                <li>css</li>
                <li>js</li>
                <li>html</li>
            </ul>
        </div>
    )
}
function Header() {
    return (
        <div className = "Header">
            This is header
        </div>
    );
}

export default App;
