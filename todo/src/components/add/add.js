import React, {Component} from "react";

import './add.css'

export default class Add extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onLabelSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    };

    render() {
        return (
            <form className='add-item' onSubmit={this.onLabelSubmit}>
                <div className='form-group'>
                    <input type="text" placeholder='name'
                           onChange={this.onLabelChange}
                           className='form-control'
                           value={this.state.label}/>
                    <div>
                        <button type="submit" className='btn btn-success'>Add</button>
                    </div>
                </div>
            </form>
        );
    }
}
