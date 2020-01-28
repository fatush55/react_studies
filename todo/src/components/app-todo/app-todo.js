import React, {Component} from "react";

import './app-todo.css'

import TodoList from "../todo-list";
import Search from "../search";
import Header from "../head";
import Add from "../add";

export default class App extends Component {

    maxId = 1;

    createItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            show: true,
            id: this.maxId++
        }
    };

    state = {
        todoData: [
            this.createItem('Dima'),
            this.createItem('Oleg'),
            this.createItem('Kosta'),
        ],
        active: {
            al: true,
            ac: false,
            do: false
        },
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            return {
                todoData: [
                    ...todoData.slice(0, idx),
                    ...todoData.slice(idx + 1)
                ]
            }
        });
    };

    addItem = (text) => {
        this.setState(({todoData}) => {
            const newItem = this.createItem(text);

            return {
                todoData: [
                    ...todoData,
                    newItem
                ]
            }
        });
    };

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1),
        ];
    };

    toggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    toggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    switchFilterBtnStyle = (id) => {
        const oldActive = this.state.active;
        const newActive = {...!oldActive, [id]: true};

        this.setState({
            active: newActive
        });
    };

    showItemFilterBtn = (id) => {
        const oldDate = this.state.todoData;
        let newItem;
        if (id === 'do') newItem = oldDate.filter((el) => el.done);
        if (id === 'ac') newItem = oldDate.filter((el) => el.important);
        if (id === 'al') newItem = oldDate;

        const newArr = [];
        oldDate.map((item) => {
            item.show = false;
            newItem.forEach((el) => {
                if (item.id === el.id) item.show = true;
            });
            return newArr.push(item);
        });

        this.setState(() => {
            return {
                todoData: newArr
            }
        });
    };

    filterBtn = (id) => {
        this.switchFilterBtnStyle(id);
        this.showItemFilterBtn(id);
    };

    toggleFilterImp = (value) => {
        const oldDate = this.state.todoData;
        let newItem = [];
        oldDate.map((el) => {
            el.show = false;
            if (el.label.toLowerCase().indexOf(value) !== -1) el.show = true;
            return newItem.push(el);
        });

        this.setState({
            todoData:newItem
        });
    };

    render() {
        const {todoData} = this.state;
        const showDone = todoData.filter((el) => el.done).length;
        const showTodo = todoData.length - showDone;

        return (
            <div className='main-todo'>
                <Header todo={showTodo} done={showDone}/>
                <Search toggleFilterBtn={this.filterBtn} active={this.state.active}
                        toggleFilterImp={this.toggleFilterImp}/>
                <Add addItem={this.addItem}/>
                <TodoList
                    data={this.state.todoData}
                    onDelete={this.deleteItem}
                    onDone={this.toggleDone}
                    onImportant={this.toggleImportant}
                />
            </div>
        );
    }
}