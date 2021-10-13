import { render } from "@testing-library/react";
import Heading from "./Heading";

test("renders heading", () => {
  const { getByText } = render(<Heading name="World" />);

  const helloDiv = getByText(/hello world/i);
  expect(helloDiv).toBeInTheDocument();
});
