import { Avatar } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
//useeffect did mount
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {users.map((elt) => (
          <table className="list">
            <tr>
              <td>
                <Avatar key={elt.id} className="avatar">
                  {elt.name.charAt(0)}
                </Avatar>
              </td>
              <td>{elt.name}</td>
            </tr>
          </table>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
