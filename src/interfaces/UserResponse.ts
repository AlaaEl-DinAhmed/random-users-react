import IUser from "./User";

interface IUserResponse {
  results: IUser[];
  info: {
    page: number;
  };
}

export default IUserResponse;
