import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    createStore
} from 'redux'
import CSS from './style.less';

const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                  ...state.todos, {
                    text: action.text,
                    completed: false
                }]
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            })
        default:
            return state
    }
}

function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log('get state' + store.getState());
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribe()
//# sourceMappingURL: /scripts/bundle.js.map
ReactDOM.render( < App / > , document.getElementById('root'));

//ReactDOM.render(<Butt />,  document.getElementById('exter'));
//ReactDOM.render(React.createElement(MarkdownEditor, null), document.getElementById('dupa'));
//ReactDOM.render(<App1 />,  document.getElementById('route'));
