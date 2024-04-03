import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [toggle, setToggle] = useState(false);

  const expensiveCalculation = () => {
    const result = 789434 * 254528;
    console.log("Non-memoized render");
    return result;
  };

  const memoizedResult = useMemo(() => {
    console.log("Memoized render");
    return expensiveCalculation();
  }, []);

  console.log("The component rendered");

  return (
    <>
      <h1 className="font-bold mb-12">This is a example of useMemo()</h1>

      <div className="my-4">
        <p>Memoized result: {memoizedResult}</p>
        <p>Non-memoized result: {expensiveCalculation()}</p>
      </div>

      <button
        className="btn bg-red-500 text-white rounded-xl p-2"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Re-render
      </button>
    </>
  );
};

export default UseMemoExample;
