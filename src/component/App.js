import React, { useState } from "react";
import ToDoItem from "./ToDoItem"

function App() {
    const [inputText, setText] = useState("")
    const [items, setItems] = useState([])

    function handleChange(event) {
        setText(event.target.value)            
    }

    function handleClick() {
        setItems((prevItems) => {
            return [...prevItems, inputText]
        });
        setText("");
    }

    function handleKeyPress(event) {
        if(event.key === "Enter") {
            handleClick()
        }
    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => index !== id)
        })
    }

    return <div className="container center">
        <div className="headerPanel center">
            <h1 id="header">To-Do-List</h1>
        </div>        
        <div className="inputPanel center">
            <input type="text" onChange={handleChange} onKeyDown={handleKeyPress} value={inputText}/>
            <button onClick={handleClick}>+</button>
        </div>
        <div className="displayPanel center">
            <ul>
                {items.map((item, index) => <ToDoItem key={index} id={index} task={item} onCheck={deleteItem}/>)}
            </ul>
        </div>
    </div>    
}

export default App