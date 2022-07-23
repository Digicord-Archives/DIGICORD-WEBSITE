import React, { useEffect } from "react";

const Notification = ({ setHeader }) => {
  useEffect(() => {
    setHeader(<h1>Notification</h1>);
  }, [setHeader]);
  return <div>Notification</div>;
};

export default Notification;