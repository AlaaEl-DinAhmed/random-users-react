import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button Component", () => {
  const click = jest.fn();
  test("should be rendered with Next text", () => {
    render(<Button text="Next" isDisabled={true} onClick={click} />);

    const btnElement = screen.getByText("Next");

    expect(btnElement).toBeInTheDocument();
  });

  test("should be rendered with Prev text", () => {
    render(<Button text="Prev" isDisabled={true} onClick={click} />);

    const btnElement = screen.getByText("Prev");

    expect(btnElement).toBeInTheDocument();
  });

  test("should be disabled", () => {
    render(<Button text="Prev" isDisabled={true} onClick={click} />);

    const btnElement = screen.getByText("Prev");
    
    expect(btnElement).toBeDisabled();
  });

  test("should not be disabled", () => {
    render(<Button text="Prev" isDisabled={false} onClick={click} />);

    const btnElement = screen.getByText("Prev");

    expect(btnElement).not.toBeDisabled();
  });

  test("should have button--disabled class if it is disabled", () => {
    render(<Button text="Prev" isDisabled={true} onClick={click} />);

    const btnElement = screen.getByText("Prev");
    
    expect(btnElement).toHaveClass("button--disabled");
  });

  test("should fire click event", () => {
    render(<Button text="Next" isDisabled={false} onClick={click} />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(click).toHaveBeenCalled();
  });
});
