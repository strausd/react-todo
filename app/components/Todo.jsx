var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    onToggle: function (e) {
        if(e.target.type !== 'checkbox') {
            this.refs.completedCheckbox.checked = !this.refs.completedCheckbox.checked;
        }
        var {id} = this.props;
        this.props.onToggle(id);
    },
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
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
            <div onClick={this.onToggle}>
                <div className="ui checkbox">
                    <input type="checkbox" nameName="example" defaultChecked={completed} ref="completedCheckbox"/>
                    <label>
                        <p>{text}</p>
                        <p>{renderDate()}</p>
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = Todo;
