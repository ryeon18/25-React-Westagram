import React from 'react';

const TimeTable = ({ hour, minute }) => {
  return <div className="timeTable">{`${hour}시 ${minute}분`}</div>;
};

export default TimeTable;
