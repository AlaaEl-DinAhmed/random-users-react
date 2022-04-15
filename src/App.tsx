import Button from "components/button/Button";
import BulletListLoader from "components/skeleton/Skeleton";
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
    return () => {
      setUsers([]);
      setPage(0);
    };
  }, []);

  const getUsers = async (pageNumber: number = 0): Promise<void> => {
    const API_URL = `https://randomuser.me/api/?page=${pageNumber}&results=10`;
    const response = await fetch(API_URL);
    const { results, info }: IUserResponse = await response.json();
    setPage(info.page);
    setUsers(results);
  };

  const skeleton = (
    <div className="skeleton">
      <BulletListLoader />
    </div>
  );

  const usersList = users.map((user: IUser, i) => (
    <UserProfile key={i} user={user} />
  ));

  const buttons = (
    <div className="btn-container">
      <Button
        text="Prev"
        isDisabled={page === 1 ? true : false}
        onClick={() => getUsers(page - 1)}
      />
      <Button text="Next" onClick={() => getUsers(page + 1)} />
    </div>
  );

  return (
    <div className="App">
      <ul className="list">{!users.length ? skeleton : usersList}</ul>
      {users.length ? buttons : null}
    </div>
  );
}

export default App;
