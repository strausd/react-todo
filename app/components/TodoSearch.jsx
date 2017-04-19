var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function () {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;
        this.props.onSearch(showCompleted, searchText);
    },
    render: function () {
        return (
            <div className="ui stackable grid centered">
                <div className="three wide column">
                    <div className="ui fluid input">
                        <input type="Search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
                    </div>
                    <div className="ui toggle checkbox">
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        <label>Show completed todos</label>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;
