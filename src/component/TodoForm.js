

import React, { Component } from 'react';
import uuid from 'react-uuid'

export default class TodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.refs.taskMessage.value) {
            let obj = {
                id: uuid(),
                task: this.refs.taskMessage.value
            }
            this.refs.taskMessage.value = "";
            this.props.getToDoItem(obj);
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="create-todo-form">
                <input type="text" ref="taskMessage" autoFocus />
                <button>Add</button>
            </form>
        );
    }
}