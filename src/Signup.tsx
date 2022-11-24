import React from "react";
import { nanoid } from "nanoid";
import useStore from "./store";

function Signup() {
  const addUserStore = useStore((state) => state.addNewUser);
  const users = useStore((state) => state.users);
  console.log(users);

  const createUser = (e) => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    const newUser = {
      id: nanoid(),
      email: email.value,
      password: password.value,
    };
    addUserStore(newUser);
    e.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button>Submit</button>
      </form>
      <ul>
        {users.map(({ id, email }) => (
          <li key={id}>User {email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Signup;
