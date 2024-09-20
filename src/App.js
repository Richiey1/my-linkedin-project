import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Eat', completed: true },
    { text: 'Sleep', completed: false },
    { text: 'Reading', completed: false },
  ]);
  const [filter, setFilter] = useState('all');
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const toggleTaskCompleted = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditText(tasks[index].text);
  };

  const saveEdit = () => {
    if (editText.trim()) {
      const newTasks = [...tasks];
      newTasks[editingIndex].text = editText;
      setTasks(newTasks);
      setEditingIndex(null);
      setEditText('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="TodoApp">
      <h1>Today's Schedule</h1>
      <p>What duty needs to be done?</p>
      <input 
        type="text" 
        placeholder="Add a new task..." 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button onClick={addTask}>Add</button>

      <div className="filter-buttons">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <h1>Tasks remaining</h1>

      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <div className="task-label">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompleted(index)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
            </div>
            <div className="buttons">
              {editingIndex === index ? (
                <>
                  <input 
                    type="text" 
                    value={editText} 
                    onChange={(e) => setEditText(e.target.value)} 
                  />
                  <button onClick={saveEdit}>Save</button>
                </>
              ) : (
                <>
                  <button className="edit-btn" onClick={() => startEdit(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}    

export default App;

/***created by Ojo Kehinde */