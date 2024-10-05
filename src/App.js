import React from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import LapList from './components/LapList';
import Alarm from './components/Alarm';
import WorldClock from './components/WorldClock';
import ToDoList from './components/ToDoList';
import './App.css'

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <section className="main-content">
          <Timer />
          <LapList />

          <WorldClock />
        </section>
        <section className="left-sidebar">
          <ToDoList />
        </section>
      </main>
    </div>
  );
}

export default App;