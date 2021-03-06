var React = require('react');
var UserRows = require('./UserRows');

var App = React.createClass({
    getInitialState: function() {
        return {baseURL: 'https://fcctop100.herokuapp.com/api/fccusers/top/', column: 'recent', topUsers: []};
    },

    componentDidMount: function() {
        let name = "topUsers";
        let url = this.state.baseURL + this.state.column;
        this.fetchUsers("topUsers", url);
    },

    fetchUsers: function(name, url) {
        fetch(url).then(function(response) {
            return response.text();
        }).then(function(data) {
            let newState = {};
            newState[name] = JSON.parse(data);
            this.setState(newState);
        }.bind(this));
    },

    handleSort: function(column, e) {
        if (column !== this.state.column) {
            let newColumn = (column == "alltime")
                ? "recent"
                : "alltime";
            let newState = {
                column: column
            };
            this.setState(newState);
            let url = this.state.baseURL + column;
            this.fetchUsers("topUsers", url);
        }
    },

    render: function() {
        let users = this.state.topUsers;

        return (
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>
                            <a onClick={this.handleSort.bind(this, "recent")} className={this.state.column === "recent"
                                ? 'active'
                                : ''}>
                                <span>Points in past 30 days</span>
                            </a>
                        </th>
                        <th>
                            <a onClick={this.handleSort.bind(this, "alltime")} className={this.state.column === "alltime"
                                ? 'active'
                                : ''}>
                                <span>All time points</span>
                            </a>
                        </th>
                    </tr>
                </thead>
                <UserRows users={users}/>
            </table>
        );
    }
});

module.exports = App;
