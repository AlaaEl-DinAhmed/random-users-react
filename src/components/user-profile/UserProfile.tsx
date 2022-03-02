import User from 'interfaces/User';
import setUserName from 'utils/setUserName';

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  return (
    <section>
      <img src={user.picture.medium} alt={user.name.first} />
      <p>{setUserName(user.name.first, user.name.last)}</p>
    </section>
  );
};

export default UserProfile;
