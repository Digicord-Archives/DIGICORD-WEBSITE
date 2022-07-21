import React, { useEffect } from "react";

const History = ({ setHeader }) => {
  useEffect(() => {
    setHeader(<h1> History</h1>);
  }, [setHeader]);
  return <div>History</div>;
};

export default History;