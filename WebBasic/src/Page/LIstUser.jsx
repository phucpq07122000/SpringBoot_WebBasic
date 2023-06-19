import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Outlet, Link, useParams } from "react-router-dom";
import { BiRightArrow} from 'react-icons/bi';
import { TiUserDelete} from 'react-icons/ti';
function ListUser() {

  const {userID}=useParams();
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUser();
  }, [])

  const loadUser = async () => {
    const result = await axios.get("http://localhost:8080/Users/GetDataUser")
    console.log(result.data);
    setUsers(result.data)
  }

  const deleteUser=async (user_ID)=>{
    await axios.delete(`http://localhost:8080/Users/DelUser/${userID}`)
    loadUser()
  }

  return (
    <div>
      <Link  to="/">add user</Link>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((users, index) => (
            <tr>
              <td key={index}>{index + 1}</td>
              <td>{users.userName}</td>
              {/* <td>{users.password}</td> */}
              <td>{users.email}</td>
              <td>{users.phone}</td>
              <td style={{width:'20px'}}><Link to={`/profile/${users.userID}`}><BiRightArrow/> </Link></td>
              <td style={{width:'20px'}}><Link onClick={()=>deleteUser(users.userID)}><TiUserDelete/> </Link></td>
              {/* <td>{users.user_ID}</td> */}
            </tr>
          ))
        }
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default ListUser;