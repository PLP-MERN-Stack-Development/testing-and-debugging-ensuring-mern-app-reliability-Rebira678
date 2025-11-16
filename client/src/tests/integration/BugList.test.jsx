import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import BugList from "../../components/BugList";
jest.mock("axios");

test("fetches and displays bugs", async () => {
  axios.get.mockResolvedValue({
    data: [{ _id: "1", title: "Bug", status: "open" }],
  });
  render(<BugList />);
  await waitFor(() => screen.getByText(/Bug/i));
});
