var React = require('react');

var AddTodo = React.createClass({
    onSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        if(todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        }
        this.refs.todoText.focus();
    },
    render: function () {
        return (
            <div className="">
                <div className="add-todo">
                    <form onSubmit={this.onSubmit}>
                        <div className="ui input fluid add-todo-input">
                            <input type="text" placeholder="What do you need to do?" ref="todoText"/>
                        </div>
                        <div>
                            <button className="ui primary button fluid">Add Todo</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = AddTodo;
