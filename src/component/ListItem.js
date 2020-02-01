
import React, { Component } from 'react'

export default class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            id: this.props.item.id,
            task: this.props.item.task
        }

        this.clickEdit = this.clickEdit.bind(this);
        this.clickUpdate = this.clickUpdate.bind(this);
        this.clickCancel = this.clickCancel.bind(this);
        this.onChange = this.onChange.bind(this);
        this.clickDelete = this.clickDelete.bind(this);
    }

    clickEdit = (e) => {
        this.setState({
            isEditing: true
        })
    }

    clickCancel = (e) => {
        this.resetEditing();
    }

    clickUpdate = (e) => {
        let obj = {
            id: this.props.item.id,
            task: this.refs.updatedText.value
        }
        this.props.getUpdatedItem(obj);
        this.resetEditing();
    }

    onChange = (e) => {
        this.setState({
            task: this.refs.updatedText.value
        })
    }

    clickDelete = (e) => {
        this.props.getDelateItem(this.state.id);
        this.resetEditing();
    }

    resetEditing = () => {
        this.setState({
            isEditing: this.state.isEditing ? false : true
        })
    }

    renderUI = () => {
        if (this.state.isEditing) {
            return (
                <React.Fragment>
                    <td ><input type="text" ref="updatedText" value={this.state.task} onChange={this.onChange} autoFocus /></td>
                    <td><button onClick={this.clickUpdate}>Update</button></td>
                    <td><button onClick={this.clickCancel}>Cancel</button></td>
                </React.Fragment>
            )
        }
        else
            return (
                <React.Fragment>
                    <td >{this.props.item.task}</td>
                    <td><button onClick={this.clickEdit}>Edit</button></td>
                    <td><button onClick={this.clickDelete}>Delete</button></td>
                </React.Fragment>
            )
    }


    render() {
        return (
            <tr className="todo-not-completed" >
                {this.renderUI()}
            </tr>
        )
    };
}