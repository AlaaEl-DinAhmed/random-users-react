import { render, screen } from "@testing-library/react";
import IUser from "interfaces/User";
import UserProfile from "./UserProfile";

describe("UserProfile Component", () => {
  const user: IUser = {
    name: {
      first: "Alaa",
      last: "Ahmad",
    },
    picture: {
      large: "https://via.placeholder.com/140x100",
      medium: "https://via.placeholder.com/140x100",
      thumbnail: "https://via.placeholder.com/140x100",
    },
  };

  it("should render user image", () => {
    render(<UserProfile user={user} />);

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", user.picture.medium);
  });

  it("should render user name", () => {
    render(<UserProfile user={user} />);

    const pElm = screen.getByText("Alaa Ahmad");

    expect(pElm).toBeInTheDocument();
  });
});
