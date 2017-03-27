var React = require('react');
var UserRow = require('./UserRow');

var UserRows = React.createClass({
    render: function() {
        return (
            <tbody>
                {this.props.users.map(function(user, i) {
                    return (<UserRow user={user} index={i} key={i.toString()}/>);
                })}
            </tbody>
        );
    }
});

module.exports = UserRows;
