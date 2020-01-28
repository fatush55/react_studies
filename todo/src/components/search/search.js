import React, {Component} from "react";

import './search.css'

import Filter from "../filter-btn/filter-btn";

export default class Search extends Component{

    onLabelChange = (e) => {
        const {toggleFilterImp} = this.props;
        toggleFilterImp( e.target.value.toLowerCase());
    };

   render() {
       const {toggleFilterBtn, active} = this.props;
       const placeholder = 'search';

       return (
           <form className='search-todo'>
               <input
                   placeholder={placeholder}
                   onChange={this.onLabelChange}
               />
               < Filter toggleFilterBtn={toggleFilterBtn} active={active}/>
           </form>
       );
   }
}