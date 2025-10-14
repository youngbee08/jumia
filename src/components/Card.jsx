import React from "react";

const Card = ({ project, index }) => {
  const { title, descrpition, type } = project;
  return (
    <div key={index}>
      <h1>{title}</h1>
      <p>{descrpition}</p>
      <button>{type}</button>
    </div>
  );
};

export default Card;
