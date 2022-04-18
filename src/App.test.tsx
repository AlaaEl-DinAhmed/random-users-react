import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "App";

describe("App Component", () => {
  test("should show loading indicator", () => {
    render(<App />);

    const btn = screen.getByText("Loading...");

    expect(btn).toBeInTheDocument();
  });

  test("should render list of users", async () => {
    render(<App />);

    const users = await screen.findAllByRole("listitem");

    expect(users).toHaveLength(10);
  });

  test("should get new users list", async () => {
    render(<App />);

    const nextBtn = await screen.findByText("Next");
    userEvent.click(nextBtn);

    const users = await screen.findAllByRole("listitem");

    expect(users).toHaveLength(10);
  });

  test("should render a disabled button", async () => {
    render(<App />);

    const prevBtn = await screen.findByRole("button", { name: "Prev" });

    expect(prevBtn).toBeDisabled();
  });

  test("should render an enabled button", async () => {
    render(<App />);

    const nextBtn = await screen.findByRole("button", { name: "Next" });

    userEvent.click(nextBtn);

    const prevBtn = await screen.findByRole("button", { name: "Prev" });

    await waitFor(() => expect(prevBtn).not.toBeDisabled());
  });
});
