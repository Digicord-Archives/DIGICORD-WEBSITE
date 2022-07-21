import React, { useEffect } from "react";

const Settings = ({ setHeader }) => {
  useEffect(() => {
    setHeader(<h1>Settings</h1>);
  }, [setHeader]);
  return <div>Settings</div>;
};

export default Settings;