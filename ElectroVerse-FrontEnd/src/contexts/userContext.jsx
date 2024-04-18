import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const UserContext = createContext({ });

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [users, setUsers] = useState(); // New state variable for users

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setUsers(response.data); // Store the users in the state
      console.log(response.data);
    } catch (error) {
      console.error('An error occurred while fetching the users:', error);
    }
  };

  const [userId, setUserId] = useState(null);

const getUserById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/users/${id}`);

    if (response.status === 200) {
      setUserId(response.data._id);
    } else {
      console.log('Failed to fetch user');
    }
  } catch (error) {
    console.error('An error occurred while fetching the user:', error);
  }
};

useEffect(() => {
  console.log(userId); // Log the updated value of userId
}, [userId]); // Add userId as a dependency

return (
  <UserContext.Provider value={{ user, setUser, userId, getUserById }}>
  {children}
</UserContext.Provider>
);
}
export default UserContext;