interface User {
  id: string;
  firstName: string;
  lastName: string;
}

// create new type that's same as User with one field removed
type MyType = Omit<User, "id">;

// create new type that's same as User with two fields selected
type MyOtherType = Pick<User, "firstName" | "lastName">;

// type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
