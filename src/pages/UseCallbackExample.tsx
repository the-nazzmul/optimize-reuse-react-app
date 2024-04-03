/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback, useState } from "react";

const Button = memo(({ handleClick }: any) => {
  console.log("Button Rendered");
  return (
    <button className="btn border-2 border-black " onClick={handleClick}>
      Click Here
    </button>
  );
});

// const Button = ({ handleClick }: any) => {
//   console.log("Button Rendered");
//   return (
//     <button className="btn border-2 border-black " onClick={handleClick}>
//       Click Here
//     </button>
//   );
// };

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     setCount((prev) => prev + 1);
  //   };

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("Parent component rendered");
  return (
    <div>
      <h1 className="my-6">Count: {count}</h1>
      <Button handleClick={handleClick} />
    </div>
  );
};

export default UseCallbackExample;
