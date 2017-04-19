var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk dog'
                },
                {
                    id: 2,
                    text: 'Get a job'
                },
                {
                    id: 3,
                    text: 'Buy more ammo'
                },
                {
                    id: 4,
                    text: 'Get busssssssaaaaaaay'
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        alert(`New todo: ${text}`);
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;
