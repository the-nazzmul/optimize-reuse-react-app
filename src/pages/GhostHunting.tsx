import { useEffect, useState } from "react";
import Ghost from "../components/Ghost";

const GhostHunting = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-center">
        👻 Let's find the Bhoot 👻
      </h1>
      <div className="flex flex-col items-center mt-12">
        <div>{!loading && <Ghost />}</div>
      </div>
    </div>
  );
};

export default GhostHunting;
