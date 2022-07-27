import { useState, useEffect, useMemo } from "react";

const PracticeMemo = () => {
    const [comments, setComments] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await response.json();
            setComments(data);
        }
        getData();
    }, [])


  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };
  //useMemo takes in two arguments, a function and a dependency array
  //the dependency array is what will cause the function to run again
  //if we do not use useMemo then the function will run everytime the state changes
  //useMemo will only run the function when the comments data has changed
  const getLongestName = useMemo(() => findLongestName(comments), [comments])

    return(
        <div>
            {/* <div>{findLongestName(comments)}</div> */}
            <div>{getLongestName}</div>
            <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
        </div>
    );
}
export default PracticeMemo;