var React = require('react');

var UserRow = React.createClass({
    render: function() {
        let user = this.props.user;
        let i = this.props.index;
        return (
            <tr>
                <td>{i + 1}</td>
                <td>
                    <img src={user.img} className="img-responsive"/>
                    &nbsp;{user.username}
                </td>
                <td>{user.recent}</td>
                <td>{user.alltime}</td>
            </tr>
        );
    }
});

module.exports = UserRow;
