
// Auth Config
import { useEffect, useState } from 'react'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { getCurrentUser, deleteUser } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import {
  createGitUser as createGitUserMutation,
  deleteGitUser as deleteGitUserMutation
} from './graphql/mutations';
import {
  listGitUsers,
  getGitUser
} from './graphql/queries'; 
import './App.css'


// GraphQL API config 

const client = generateClient();


function App({ signOut }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userExist()
    //handleDeleteUser()
    //deleteGitUser()
  }, [])


  async function userExist() {
    const { userId } = await getCurrentUser();
    const curUser = await client.graphql({ 
      query: getGitUser,
      variables: { id: userId}
    });
    if (curUser.data.getGitUser) {
      fetchUsers()
    } else {
      createUser().then(fetchUsers).catch(error => console.error(error));
    }
  }

  async function fetchUsers() {
    try {
      const userData = await client.graphql({ query: listGitUsers });
      const usersFromAPI = userData.data.listGitUsers.items;
      setUsers(usersFromAPI);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  }

  async function createUser() {
    const { userId, signInDetails } = await getCurrentUser()
    const data = {
      id: userId,
      name: signInDetails.loginId
    }
    try {
      await client.graphql({
        query: createGitUserMutation,
        variables: { input: data}
      });
    } catch (err) {
      console.error('Error creating user:', err);
    }
  }

/*
  async function handleDeleteUser() {
    try {
      await deleteUser();
    } catch (error) {  
      console.log(error); 
    }  
  }
*/
/*
  async function deleteGitUser() {
      for (var i=0; i<users.length; i++){
        console.log("LENGTH" + users.length)
        const userID = users[i].id;
        const data = {
          id: userID
        }
        await client.graphql({
          query: deleteGitUserMutation,
          variables: { input: data }
        });
      }
  }
*/


  const renderUser = (user) => {
    return (
      <div key={user.id} style={{ backgroundColor: '#939497' }}>
        <h3>{user.id}</h3>
        <h3>{user.name}</h3>
        <h4>{user.created_at}</h4>
        {/* Add more user details here */}
      </div>
    );
  };

  return (
    <>
      <h1>Users</h1>
      <div className='users'>
        {users.map(user => renderUser(user))}
      </div>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
