//1] array
const nums = [1, 2, 3, 4, 5];
//console.log(nums); // output appears

export const MapFnEx = () => {
  // console.log(nums);
  // output appears cause the const value is recognize even out of scope

  //map
  //nums.map((n) => console.log(n + "<3"));
  //to change the value of each array's element

  //other ex
  //nums.map((n) => console.log(n * 2 + "heart"));

  return (
    /* 
    from here you need to use JSX language
    so == this 
    return {<div><div/>} === change to ()  
    nums.map((n) => console.log(n * 2 + "heart")) ==not work 
    chang to === {nums.map((num) => ((n*2) + "heart"))}
    */
    // <div>
    //   {nums.map((num) => (
    //     <i>{num}</i>
    //   ))}
    // </div>
    // *! sometimes error even if it appears in browser
    //you need to add key

    <div>
      {nums.map((num) => (
        <i key={num}>{num}</i>
      ))}
    </div>
  );
};

//map pr attribuer une valeur a chaque element d'une array
