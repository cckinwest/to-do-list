import React from "react";

function ToDoItem(props) {

    const divStyle = {
        display: "flex",
        justifyContent: "space-between"
    }

    const spanStyle = {
        fontSize: "1.5rem",
        fontFamily: "Mynerve, cursive",
        backgroundColor: "transparent",
        border: "0",
        width: "150px"
    }
    
    const buttonStyle = {
        width: "3rem",
        height: "1.2rem",
        borderRadius: "8px",
        borderColor: "lightblue",
        fontSize: "10px",
        marginTop: "6px",
        marginRight: "10px"
    }

    return <li>
        <div style={divStyle}>
            <span style={spanStyle}>{props.task}</span>
            <button style={buttonStyle} onClick={() => props.onCheck(props.id)}>delete</button>
        </div>        
    </li>
}

export default ToDoItem