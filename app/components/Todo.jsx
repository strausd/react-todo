var React = require('react');

var Todo = React.createClass({
    onToggle: function () {
        var {id} = this.props;
        this.props.onToggle(id);
    },
    render: function () {
        var {id, text, completed} = this.props;
        return (
            <div className="ui checkbox" onClick={this.onToggle}>
                <input type="checkbox" nameName="example" defaultChecked={completed}/>
                <label>{text}</label>
            </div>
        );
    }
});

module.exports = Todo;
