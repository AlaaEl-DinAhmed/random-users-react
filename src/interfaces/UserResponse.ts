import User from "./User";

interface IUserResponse {
  results: User[];
  info: {
    page: number;
  };
}

export default IUserResponse;
