import React, {Component} from "react";

import './filter-btn.css'

export default class Filter extends Component{

    render(){

        const {toggleFilterBtn, active} = this.props;

        const className= 'btn btn-md';
        const allStyle = active.al ? className + ' btn-info' : className + ' btn-secondary';
        const activeStyle = active.ac ? className + ' btn-info' : className + ' btn-secondary';
        const doneStyle = active.do ? className + ' btn-info' : className + ' btn-secondary';

        return (
            <div className='btn-group'>
                <button type='button' className={allStyle} onClick={() => toggleFilterBtn('al')}>All</button>
                <button type='button' className={activeStyle} onClick={() => toggleFilterBtn('ac')}>Active</button>
                <button type='button' className={doneStyle} onClick={() => toggleFilterBtn('do')}>Done</button>
            </div>
        );
    }
}