import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("should test list", () => {
  render(<App />);
  const linkElement = screen.getAllByRole("listitem");
  expect(linkElement.length).toBe(3);
});
