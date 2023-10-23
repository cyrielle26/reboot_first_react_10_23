export const Intro = ({ name, age, job }) => {
  //console.log(props);

  // const name = props.name;
  //  const age = props.age;

  //destructuring assignement (비구조화 할당)
  //const { name, age } = props;

  return (
    <div>
      <h2>selfintro</h2>
      <h3>name: {name}</h3>
      <h3>age: {age}</h3>
      <h3>job: {job}</h3>
      <hr />
    </div>
  );
};

// *jsx 문법 내부에서 변수를 사용할 때
// 중괄호를 사용할 것

/* const arr = [
  {
    a: 1,
    b: 2,
  },
];

const [{ a, b }] = arr; */
