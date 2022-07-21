import React, { useEffect } from "react";

const Calender = ({ setHeader }) => {
  useEffect(() => {
    setHeader(<h1>Book An Calender</h1>);
  }, [setHeader]);
  return <div>Calender</div>;
};

export default Calender;