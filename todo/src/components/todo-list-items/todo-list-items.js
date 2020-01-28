import React, {Component} from "react";

import './todo-list-items.css'

export default class TodoListItemsass extends Component {
    render() {
        let className = 'importantDefault';
        let showClass = 'label-todo';
        const {label, done, important, show, onDelete, onDone, onImportant} = this.props;

        if (done) className += ' done';
        if (important) className += ' important';
        showClass = show ?  showClass + ' showOn' : showClass + ' showOff';

        return (
            <div className={showClass}>
                <span className={className}
                      onClick={onDone}>
                    {label}
                </span>
                <div className='label-btm'>
                    <button type="button" className="btn btn-outline-danger"
                            onClick={onDelete}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success"
                            onClick={onImportant}>
                        <i className="fas fa-pencil-alt"></i>
                    </button>
                </div>
            </div>
        );
    }
}
