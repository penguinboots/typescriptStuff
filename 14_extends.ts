// interfaces can extend from other interfaces
// types cannot

interface Entity {
  id: string;
}

interface User extends Entity {
  firstName: string;
  lastName: string;
}

interface Post extends Entity {
  title: string;
  body: string;
}

interface Comment extends Entity {
  comment: string;
}

// type tests = [
//   Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
//   Expect<Equal<Post, { id: string; title: string; body: string }>>,
//   Expect<Equal<Comment, { id: string; comment: string }>>
// ];
