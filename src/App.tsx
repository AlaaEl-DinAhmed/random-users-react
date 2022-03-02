import Button from "components/button/Button";
import UserProfile from "components/user-profile/UserProfile";
import IUser from "interfaces/User";
import IUserResponse from "interfaces/UserResponse";
import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (pageNumber: number = 0) => {
    const API_URL = `https://randomuser.me/api/?page=${pageNumber}&results=10`;
    const response = await fetch(API_URL);
    const { results, info }: IUserResponse = await response.json();
    setPage(info.page);
    setUsers(results);
  };

  return (
    <div className="App">
      <div className="list">
        {users.map((user: IUser, i) => (
          <UserProfile key={i} user={user} />
        ))}
      </div>

      <div className="btn-container">
        <Button
          text="Prev"
          isDisabled={page === 1 ? true : false}
          onClick={() => getUsers(page - 1)}
        />
        <Button text="Next" onClick={() => getUsers(page + 1)} />
      </div>
    </div>
  );
}

export default App;
