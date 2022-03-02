import Button from 'components/button/Button';
import UserProfile from 'components/user-profile/UserProfile';
import User from 'interfaces/User';
import UserResponse from 'interfaces/UserResponse';
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (pageNumber: number = 0) => {
    const API_URL = `https://randomuser.me/api/?page=${pageNumber}&results=10`;
    const response = await fetch(API_URL);
    console.log(response);
    const { results, info }: UserResponse = await response.json();
    setPage(info.page);
    setUsers(results);
  };

  return (
    <div className="App">
      {users.map((user: User, i) => (
        <UserProfile key={i} user={user} />
      ))}

      <Button
        text="Previous"
        page={page}
        isDisabled={page === 1 ? true : false}
        onClick={() => getUsers(page - 1)}
      />
      <Button text="Next" page={page} onClick={() => getUsers(page + 1)} />
    </div>
  );
}

export default App;
