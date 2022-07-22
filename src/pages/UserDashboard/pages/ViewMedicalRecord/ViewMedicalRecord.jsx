import React, { useEffect } from "react";

const ViewMedicalRecord = ({ setHeader }) => {
  useEffect(() => {
    setHeader(<h1>View Medical Record</h1>);
  }, [setHeader]);
  return <div>View Medical Record</div>;
};

export default ViewMedicalRecord;