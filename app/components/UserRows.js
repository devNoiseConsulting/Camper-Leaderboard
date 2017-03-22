var React = require('react');

var UserRows = React.createClass({
    render: function() {
        return (
            <tbody>
                {this.props.users.map(function(user, i) {
                    return (
                        <tr key={i.toString()}>
                            <td>{i + 1}</td>
                            <td>
                              <img src={user.img} />
                              {user.username}
                            </td>
                            <td>{user.recent}</td>
                            <td>{user.alltime}</td>
                        </tr>
                    );
                })}
            </tbody>
        );
    }
});

module.exports = UserRows;
