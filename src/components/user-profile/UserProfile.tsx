import IUser from "interfaces/User";
import setUserName from "utils/setUserName";
import "./UserProfile.scss";

const UserProfile: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <li className="user">
      <img
        className="user--avatar"
        src={user.picture.medium}
        alt={user.name.first}
      />
      <p className="user--name">{setUserName(user.name.first, user.name.last)}</p>
    </li>
  );
};

export default UserProfile;
