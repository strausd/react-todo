var React = require('react');

var Todo = React.createClass({
    onToggle: function () {
        var {id} = this.props;
        this.props.onToggle(id);
    },
    render: function () {
        var {id, text, completed} = this.props;
        return (
            <div onClick={this.onToggle}>
                <div className="ui checkbox">
                    <input type="checkbox" nameName="example" defaultChecked={completed}/>
                    <label>{text}</label>
                </div>
            </div>
        );
    }
});

module.exports = Todo;
