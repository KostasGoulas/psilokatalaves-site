import React from "react";
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div className = "App">
      <Header />

      <section id='home'>
        <h1>Welcome to Psilokatalaves.gr</h1>
        <p>I think there is nothing else for you here!</p>
      </section>

      <section id='about'>
        <h2>About</h2>
        <p>this is about nothing at least for now, <br />
           but maybe in the future ... <br />
            <strong>who knows?</strong> 
        </p>
      </section>

      <section id='contact'>
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out!</p>
      </section>
    </div>
  );
}

export default App;