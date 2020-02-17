import React, { Component } from "react";
import { withFirebase } from "../../common/components/Firebase";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: []
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on("value", snapshot => {
      this.setState({
        users: Object.entries(snapshot.val()).map(e =>
          Object.assign(e[1], { key: e[0] })
        ),
        loading: false
      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <h1>Settings</h1>
        {loading && <div>Loading ...</div>}
        <UserList receivedUsers={users} />
      </div>
    );
  }
}
const UserList = ({ receivedUsers }) => {
  return (
    receivedUsers && (
      <ul>
        {receivedUsers.map(user => (
          <li key={user.key}>
            <span>
              <strong>ID:</strong> {user.uid}
            </span>
            <span>
              <strong>E-Mail:</strong> {user.email}
            </span>
            <span>
              <strong>Username:</strong> {user.username}
            </span>
          </li>
        ))}
      </ul>
    )
  );
};
export default withFirebase(Settings);
