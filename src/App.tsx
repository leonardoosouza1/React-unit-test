import React, { useState } from 'react';


const App: React.FC = () => {
  const [list, setList] = useState<string[]>(['Phone', 'Computer', 'TV'])
  const [newItem, setNewItem] = useState<string>('')

  const addToList = () => {
    setList(prevState => [...prevState, newItem])
  }

  const removeFromList = (item: string) => {
    setList(prevState => prevState.filter(listItem => listItem !== item))
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter new item"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button
        onClick={addToList}
      >
        Click
      </button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeFromList(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;