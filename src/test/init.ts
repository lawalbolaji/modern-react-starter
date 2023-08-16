import { localStorageMock } from "./__mocks__/localStorageMock";

Object.defineProperty(window, "localStorage", { value: localStorageMock });
