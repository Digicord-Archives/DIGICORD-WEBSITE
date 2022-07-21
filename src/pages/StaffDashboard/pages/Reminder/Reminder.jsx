import React, { useEffect } from "react";

const Reminder = ({ setHeader }) => {
  useEffect(() => {
    setHeader(<h1>Book An Reminder</h1>);
  }, [setHeader]);
  return <div>Reminder</div>;
};

export default Reminder;