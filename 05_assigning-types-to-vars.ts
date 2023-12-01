import { expect, it } from "vitest";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

// Assigning type to variable
const defaultUser: User = {
  id: 1,
  firstName: "John",
  lastName: "Smith",
  isAdmin: false,
};

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
