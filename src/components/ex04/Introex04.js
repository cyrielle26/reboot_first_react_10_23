const users = [
  //object 1
  {
    id: 0,
    name: "Leon",
    age: 36,
  },
  //object 2
  {
    id: 1,
    name: "Cyrielle",
    age: 32,
  },
  //object 3
  {
    id: 3,
    name: "baby",
    age: 0,
  },
];

export const IntroEx04 = () => {
  return (
    <div>
      {/* ] without map */}
      {/* <h2>about me{users[0].id}</h2>
      <h3>name: {users[0].name}</h3>
      <h3>age:{users[0].age}</h3>
      <hr /> */}

      {/* ] using map */}
      {users.map((person) => (
        <div key={person.id}>
          <h2>about me</h2>
          <h3>name: {person.name}</h3>
          <h3>age: {person.age}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
};
