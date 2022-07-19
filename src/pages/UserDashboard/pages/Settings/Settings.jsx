import React, { useEffect } from "react";

const Settinfgs = ({ setHeader }) => {
  useEffect(() => {
    setHeader(<h1>Settinfgs</h1>);
  }, [setHeader]);
  return <div>Settinfgs</div>;
};

export default Settinfgs;