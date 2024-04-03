import { useEffect, useState } from "react";

const Ghost = () => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRendered(true);
    }, 1000);
  }, []);

  if (!rendered) {
    return null;
  }

  return (
    <ul>
      <li>Boro Bhoot</li>
      <li>Choto Bhoot</li>
      <li>Mejho Bhoot</li>
      <li>Shejho Bhool</li>
    </ul>
  );
};

export default Ghost;
