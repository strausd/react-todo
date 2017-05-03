var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
    onToggle: function (e) {
        if(e.target.type !== 'checkbox') {
            this.refs.completedCheckbox.checked = !this.refs.completedCheckbox.checked;
        }
        var {id, dispatch} = this.props;
        dispatch(actions.toggleTodo(id));
    },
    onDelete: function () {
        var {id, dispatch} = this.props;
        console.log(`Todo with id of ${id} has been hit.`);
        dispatch(actions.deleteTodo(id));
    },
    render: function () {
        var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = createdAt;

            if(completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div className={todoClassName}>
                <div className="todo-row" onClick={this.onToggle}>
                    <div className="ui checkbox">
                        <input className="todo-checkbox" type="checkbox" nameName="example" defaultChecked={completed} ref="completedCheckbox"/>
                        <label>
                            <p>{text}</p>
                            <p className="todo-subtext">{renderDate()}</p>
                        </label>
                    </div>
                </div>
                <div className="delete" onClick={this.onDelete}>
                    <a href="#">
                        <i className="trash icon"></i>
                    </a>
                </div>
            </div>
        );
    }
});

export default connect()(Todo);
