import React from 'react'

export default class TodoItem extends React.Component {
    render() {
        const completedTodoStyle = {
            color: "#d3d3d3",
            textDecoration: "line-through",
            transition: "250ms ease-in-out"
        }
        return (
            <div className="todo-item">
                <input 
                    type="checkbox"
                    checked={this.props.item.completed}
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />
                <p style={this.props.item.completed ? completedTodoStyle : null}>{this.props.item.text}</p>
            </div>
        )
    }
}