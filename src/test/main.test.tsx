import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// const server = setupServer(
//   rest.get("/api/v1/healthcheck", (req, res, ctx) => {
//     return res(ctx.json({ message: "success" }));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

test("loads and displays greeting", async () => {
  render(<App />);

  expect(
    screen.getByText("Start now, today is already too late!")
  ).toBeInTheDocument();

  // fireEvent.click(screen.getByText("Load Greeting"));
  // await waitFor(() => screen.getByRole("heading"));

  // expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  // expect(screen.getByRole("button")).toBeDisabled();
});

test("handles server error", async () => {
  // server.use(
  //   rest.get("/greeting", (req, res, ctx) => {
  //     return res(ctx.status(500));
  //   })
  // );
  // render(<App />);
  // fireEvent.click(screen.getByText("Load Greeting"));
  // await waitFor(() => screen.getByRole("alert"));
  // expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  // expect(screen.getByRole("button")).not.toBeDisabled();
});
