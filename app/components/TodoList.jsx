var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';

export var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
            if(todos.length === 0) {
                return (
                    <p className="no-todos-message">Nothing To Do</p>
                );
            }
            return todos.map((todo) => {
                return (
                    // {...todo} is the spread operator that sends all attributes of the todo along as props
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };
        return (
            <div>
                <div className="todo-list">
                    {renderTodos()}
                </div>
            </div>
        );
    }
});
export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);
