import React from 'react';

const Message = ({ title, content }) => (
  <div className="innerContainer">
    <h2 className="commonTitle">{title}</h2>
    {content && <p>{content}</p>}
  </div>
);

export default Message;
