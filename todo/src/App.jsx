import { useState } from 'react'

import './App.css'

function App()  {
  const tasks = [
    { id: 1, title: "Learn React", writer:"Kapil" },
    { id: 2, title: "Practice useState" , writer:"Kaps"},
    { id: 3, title: "Build something cool!", writer:"Champ"}
  ];

  return (
    <div style={styles.container}>
      <h2>📋 My Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} style={styles.item}>{task.title}, {task.writer}</li>
        ))}
      </ul>
    </div>
  );
}
const styles = {
  container: { padding: "1rem", fontFamily: "sans-serif" },
  item: { padding: "0.5rem 0" }
};


export default App
