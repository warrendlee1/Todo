import React, {Component} from "react";

class AddTodo extends Component {
    state = {
        content: ""
    }
    change = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    submit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:""
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>Add Event:</label>
                    <input type = "text" onChange={this.change} value = {this.state.conten}/>
                </form>
            </div>
        )
    }
}
export default AddTodo