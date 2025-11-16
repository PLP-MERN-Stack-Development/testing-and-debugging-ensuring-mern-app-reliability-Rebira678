import { render, screen, fireEvent } from "@testing-library/react";
import BugForm from "../../components/BugForm";

test("renders form and submits", () => {
  render(<BugForm />);
  fireEvent.change(screen.getByPlaceholderText(/title/i), {
    target: { value: "Bug 1" },
  });
  fireEvent.change(screen.getByPlaceholderText(/description/i), {
    target: { value: "Desc" },
  });
  expect(screen.getByPlaceholderText(/title/i).value).toBe("Bug 1");
});
