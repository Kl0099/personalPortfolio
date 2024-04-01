import React from "react";

const SpanText = ({ dark, text, textsize, color = "text-secondary" }) => {
  return <span className={` ${dark} ${textsize} ${color}`}>{text}</span>;
};

export default SpanText;
