import React from "react";

const SpanText = ({ text, textsize, color = "text-secondary" }) => {
  return <span className={`${textsize} ${color}`}>{text}</span>;
};

export default SpanText;
