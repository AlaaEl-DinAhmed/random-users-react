import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "App";

describe("App Component", () => {
  it("should show loading indicator", () => {
    render(<App />);

    const btn = screen.getByText("Loading...");

    expect(btn).toBeInTheDocument();
  });

  it("should render list of users", async () => {
    render(<App />);

    const listItems = await screen.findAllByRole("listitem");

    expect(listItems).toHaveLength(10);
  });

  it("should get new users list", async () => {
    render(<App />);

    const nextBtn = await screen.findByText("Next");
    userEvent.click(nextBtn);

    const listItems = await screen.findAllByRole("listitem");

    expect(listItems).toHaveLength(10);
  });

  it("should render a disabled button", async () => {
    render(<App />);

    const prevBtn = await screen.findByText("Prev");

    expect(prevBtn).toBeDisabled();
  });
});
