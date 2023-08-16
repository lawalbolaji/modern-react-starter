import { act, fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test/utils/test_utils";
import { TodoPage } from "./TodoPage";

describe("todo app", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("fetches all todos on startup", async () => {
    const { store } = renderWithProviders(<TodoPage />);
    const todoIds = store.getState().todo.ids;

    expect(todoIds).toHaveLength(0);
  });

  test("allows users to create new todo", async () => {
    const { store } = renderWithProviders(<TodoPage />);
    const input = screen.getByPlaceholderText("add new todo here and press enter...") as HTMLInputElement;
    expect(input.value).toBe("");

    await act(() => {
      fireEvent.change(input, { target: { value: "add integration tests to this package" } });
      fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    });

    expect(input.value).toBe("");
    expect(store.getState().todo.ids).toHaveLength(1);
  });

  test("does not allow users to create empty todos", async () => {
    const { store } = renderWithProviders(<TodoPage />);
    const input = screen.getByPlaceholderText("add new todo here and press enter...") as HTMLInputElement;
    expect(input.value).toBe("");

    await act(() => {
      fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    });

    expect(input.value).toBe("");
    expect(store.getState().todo.ids).toHaveLength(0);
  });
});
